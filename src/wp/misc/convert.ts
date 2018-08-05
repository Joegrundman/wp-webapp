

export const ascii = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const chars = " !\"#$%&amp;'()*+'-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
export const hex = '0123456789ABCDEF';
export const bin: string[] = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];
			
export const decToHex = (d: number): string => d.toString(16).toUpperCase();
// export const decToHex = (d: number): string => hex.charAt(d % 16);
// export const decToHex = (d: number): string => hex.charAt(d - d % 16 / 16) + hex.charAt(d % 16);

export const toBin = (ch: string): string => {
	const d: number= toDec(ch);
	const dl: number = d % 16;
	const dh: number = (d - d % 16) / 16;
	return bin[dh] + ' ' + bin[dl];
}

export const toHex = (ch: string): string => {
	return decToHex(toDec(ch));
}

export const toDec = (ch: string): number => {
	const p: number = chars.indexOf(ch);
	return (p <= -1) ? 0 : (p + 32);
}

export const toAscii = (index: number): string => index > 25 ?
		ascii[index % 26] + ascii[index % 26] :
		ascii[index];

export const toIntArray = (csv: string): number[] => {
	return csv.split(',').map(el => parseInt(el, 10));
}

