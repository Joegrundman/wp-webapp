#!/usr/bin/env node
/* tslint:disable */
/**
 * Author: Jonathan Grundman 2018
 * version: 0.2.0
 * With thanks to Steve Taylor for the original idea,
 * code review and contributions
 * 
 * Free for use by anybody
 */

/**
 * BUMPITY
 * =======
 * 
 * SEMVER Version bumper
 * valid-flags
 * [-J, -N, -P, --major, --minor, --patch, --undo, -U]
 *
 * save this file into the root folder, or if elsewhere
 * make sure path urls reach to the correct destination folder
 *
 * call with e.g.
 * `node bumpity --patch`
 * `node bumpity --minor`
 * `node bumpity --major`
 * 
 * from a terminal in the root folder
 * or if supporting shebang
 * bumpity --patch
 * 
 * the --undo or -U flag will go reduce the version instead of bumping
 * 
 * If the file is not in the root folder, for example one folder up, the 
 * call would be
 * 
 * `node ../bumpity --minor`
 * `node ../bumpity --minor --undo`
 * 
 * if no minor major or patch flag given, it will default to minor
 */

/**
 * CHANGELOG
 * 0.2.0 --undo flag added
 * 0.1.0 bump version basic functionality
 */

/**
 * ISSUES
 * in some cases an error to write can result in the VERSION file being empty
 * should handle this case
 */

const fs = require('fs');
const path = require('path');

// there must be a file called VERSION in the root directory of the application
// this file contains only the current version in semver format and is used as the source of truth

const TARGET_FOLDER = '.';

const FILES_TO_BUMP = [
  'VERSION',
  'package.json',
  'package-lock.json'
];


/**
 * Get command line arguments
 */
const args = process.argv.slice(2);

/**
 * process command line arguments
 */
const modifiers = [0, 0, 0];
args.forEach(arg => {
  switch (arg) {
    case '--patch':
    case '-P': modifiers[2] = 1; break;
    case '--minor':
    case '-N': modifiers[1] = 1; break;
    case '--major':
    case '-J': modifiers[0] = 1; break;
    default: modifiers[1] = 1; break;
  }
})

const undo = args.includes('--undo') || args.includes('-U');

/**
 * Prepare absolute pathnames for the targetted files
 */

const targetDir = path.join(__dirname, TARGET_FOLDER);

const files = FILES_TO_BUMP
  .map(file => `${targetDir}/${file}`);


/**
 * take the current version in the VERSION file as the single
 * source of truth
 */
const versionFile = files[0];

/**
 * Read the current version from the VERSION file
 */
fs.readFile(versionFile, 'utf8', (err, data) => {
  if (err) {
    throw new Error('Error reading version', err)
  };

  const match = data.match(/\d+\.\d+\.\d+/);

  if (!match) {
    throw new Error('Valid SEMVER format version not found in VERSION file');
  }

  const version = match[0];

  /**
   * Prepare updated version
   */
  const nextVersion = version
    .split('.')
    .map(i => parseInt(i, 10))
    .map((num, i) => undo ? num - modifiers[i] : num + modifiers[i])
    .join('.');
  
  /**
   * Log the bumpity active message
   */
  console.log(`
    bumpity
    ======================================================
    ${undo ? 'Reverting' : 'Bumping'} ${targetDir}
    version from ${version} to ${nextVersion}
    ======================================================
  `);

  /**
   * Assert that all the requested files are present and accessible or abort
   */
  files.forEach((filePath) => {
    if (!fs.existsSync(filePath)) {
      throw new Error(`
      ==============================
      Aborting version bump:
      ${filePath} can not be accessed
      ==============================
      `)
    }
  });

  /**
   * Read each targetted file
   */
  files.forEach((filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) { throw (err); }

      /**
       * Split file into an array of lines and search for the line that contains the version
       * to be updated
       */
      const fileArray = data.split('\n');
      const lineNum = fileArray.findIndex(line => filePath.includes('VERSION') ?
         line.includes(version) :
         /version/i.test(line) && line.includes(version));

      if(lineNum < 0) { throw new Error('Cannot find matching version in ' + filePath) }; 

      /**
       * Update the version in the correct line and join the lines into a single string
       */
      fileArray[lineNum] = fileArray[lineNum].replace(version, nextVersion);
      const nextFile = fileArray.join('\n');

      /**
       * write the updated file with the bumped version back to disk 
       */
      fs.writeFile(filePath, nextFile, (err) => {
        if (err) { throw new Error('cannot write to ', filePath); }
      });
    });
  });
});
