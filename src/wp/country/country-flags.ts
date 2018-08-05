import Country from './Country';

const noSwastikas: boolean = false;

export const getFlagUrl = (country: Country): string => {
	let name: string = country.name.toLowerCase();
	if(name === 'germany' && !noSwastikas) {
		return `/assets/Flags/${name.replace(' ', '')}-unsafe.bmp`;
	}
	// if (country.colonyOf)
	// 	name = country.colonyOf.name.toLowerCase();
	// if (country.partOf)
	// 	name = country.partOf.name.toLowerCase();
	if (country.id === 28 || country.id === 29) { name = 'italy'; }
	if (country.id === 42) { name = 'nationalistchina'; }
	if (country.id === 19) { name = 'netherlands'; }
	if (country.id === 17) { name = 'comchina'; }
	if (country.id === 24) { name = 'freefrench'; }
	if (country.id === 32) { name = 'indiannat'; }
	return `/assets/Flags${name.replace(" ", "")}.bmp`;
};

export const loadFlag = (country: Country) => {
	country.flagImage = new Image();
	country.flagImage.src = getFlagUrl(country)
};
