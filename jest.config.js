module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/registerServiceWorker.ts",
    "!src/**/*.css.d.ts",
    "!src/index.tsx"
  ],
  setupFiles: [
    "<rootDir>/config/polyfills.js",
    "<rootDir>/src/setupTests.ts",
    "./__setups__/canvas.js"
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)",
    "<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)"
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.tsx?$": "<rootDir>/config/jest/typescriptTransform.js",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$"
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "\\.(css|less)$": "identity-obj-proxy",
    "^App/(.*)": "<rootDir>/src/app/$1",
    "^Assets/(.*)": "<rootDir>/src/assets/$1",
    "^Atoms/(.*)": "<rootDir>/src/atoms/$1",
    "^Components/(.*)": "<rootDir>/src/components/$1",
    "^Constants/(.*)": "<rootDir>/src/constants/$1",
    "^Layouts/(.*)": "<rootDir>/src/layouts/$1",
    "^Services/(.*)": "<rootDir>/src/services/$1",
    "^Stores/(.*)": "<rootDir>/src/stores/$1",
    "^Views/(.*)": "<rootDir>/src/views/$1",
    "^Wp/(.*)": "<rootDir>/src/wp/$1",
    "^Codebreaking/(.*)": "<rootDir>/src/wp/codebreaking/$1",
    "^Country/(.*)": "<rootDir>/src/wp/country/$1",
    "^Eventing/(.*)": "<rootDir>/src/wp/Eventing/$1",
    "^ForcepoolGroup/(.*)": "<rootDir>/src/wp/forcepoolgroup/$1",
    "^Game/(.*)": "<rootDir>/src/wp/Game/$1",
    "^Hex/(.*)": "<rootDir>/src/wp/Hex/$1",
    "^Init/(.*)": "<rootDir>/src/wp/init/$1",
    "^Loaders/(.*)": "<rootDir>/src/wp/loaders/$1",
    "^Map/(.*)": "<rootDir>/src/wp/Map/$1",
    "^Misc/(.*)": "<rootDir>/src/wp/misc/$1",
    "^Phase/(.*)": "<rootDir>/src/wp/Phase/$1",
    "^Shipyard/(.*)": "<rootDir>/src/wp/Shipyard/$1",
    "^Stack/(.*)": "<rootDir>/src/wp/stack/$1",
    "^Taskforce/(.*)": "<rootDir>/src/wp/Taskforce/$1",
    "^Unit/(.*)": "<rootDir>/src/wp/unit/$1",
    "^Unitholder/(.*)": "<rootDir>/src/wp/UnitHolder/$1",
    "^Util/(.*)": "<rootDir>/src/wp/util/$1"
  },
  moduleFileExtensions: [
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "web.js",
    "js",
    "web.jsx",
    "jsx",
    "json",
    "node",
    "mjs"
  ],
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.test.json"
    }
  }
}