import Country from './Country';

const noSwastikas: boolean = false;

const getFlagFileName = (country: Country): string => {
	let name: string = country.name.toLowerCase().replace(' ', '')
	const fileExt = '.bmp'
	if (country.colonyOf) {
		name = country.colonyOf.name.toLowerCase()
	}
	if (country.partOf){
		name = country.partOf.name.toLowerCase();}
	if (country.id === 28 || country.id === 29) { name = 'italy' }
	if (country.id === 42) { name = 'nationalistchina' }
	if (country.id === 19) { name = 'netherlands' }
	if (country.id === 17) { name = 'comchina' }
	if (country.id === 24) { name = 'freefrench' }
	if (country.id === 32) { name = 'indiannat' }
	if(name === 'germany' && !noSwastikas) {
		name = `${name}-unsafe`
	}
	return `${name}${fileExt}`
};

export const loadFlag = (country: Country): void => {
	const image: string = require('../../assets/Flags/' + getFlagFileName(country))
	country.flagImage = new Image();
	country.flagImage.src = image;
};
