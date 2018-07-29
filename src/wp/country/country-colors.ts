import Color from '../misc/Color';

export interface ICountryColors {
	back: Color;
	fore: Color;
	inner: Color;
	line: Color;
	shadow: Color;
}

const getCountryColors = (countryName: string) => {
	const colors: any = {
		back: null,
		fore: null,
		inner: null,
		line: null,
		shadow: null,
	};

	switch (countryName.toUpperCase()) {
		case "ARABIA":
			colors.back = new Color(216, 203, 159);
			colors.fore = new Color(255, 255, 255);
			colors.inner = new Color(255, 255, 255);
			break;
		case "AUSTRALIA":
			colors.back = new Color(209, 188, 140);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(230, 222, 80);
			break;
		case "BELGIUM":
		case "LUXEMBOURG":
			colors.back = new Color(153, 205, 232);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(238, 233, 3);
			break;
		case "BRITAIN":
			colors.back = new Color(209, 188, 140);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(230, 220, 168);
			break;
		case "BULGARIA":
			colors.back = new Color(167, 169, 168);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(238, 88, 67);
			break;
		case "CANADA":
			colors.back = new Color(209, 188, 140);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(168, 211, 226);
			break;
		case "COMCHINA":
		case "COMMUNIST CHINA":
			colors.back = new Color(234, 81, 43);
			colors.fore = new Color(241, 246, 0);
			colors.inner = new Color(234, 81, 43);
			break;
		case "DENMARK":
			colors.back = new Color(199, 240, 254);
			colors.fore = new Color(255, 0, 0);
			break;
		case "FINLAND":
			colors.back = new Color(137, 171, 206);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(246, 250, 255);
			break;
		case "FINBORDER":
			colors.back = new Color(147, 191, 216);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(246, 250, 255);
			break;
		case "FRANCE":
			colors.back = new Color(118, 178, 218);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(181, 216, 239);
			break;
		case "FREE FRENCH":
			colors.back = new Color(118, 178, 218);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(209, 188, 140)
			break;
		case "VICHY":
			colors.back = new Color(83, 161, 217);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(120, 120, 120);
			break;
		case "GERMANY":
			colors.back = new Color(73, 73, 73);
			colors.fore = new Color(255, 255, 255);
			colors.inner = new Color(120, 120, 120);
			break;
		case "GREECE":
			colors.back = new Color(0, 124, 177);
			colors.fore = new Color(255, 255, 255);
			colors.inner = new Color(0, 124, 177);
			break;
		case "HUNGARY":
			colors.back = new Color(167, 169, 168);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(70, 160, 40);
			break;
		case "INDIAN NAT. ARMY":
			colors.back = new Color(165, 125, 24);
			colors.fore = new Color(255, 255, 255);
			colors.inner = new Color(156, 121, 33);
			break;
		case "INDIA":
			colors.back = new Color(209, 188, 140);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(155, 120, 22);
			break;
		case "IRA":
		case "IRELAND":
			colors.back = new Color(23, 153, 50);
			colors.fore = new Color(219, 231, 9);
			colors.inner = new Color(0, 0, 0);
			break;
		case "IRAQ":
			colors.back = new Color(247, 219, 115);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(0, 178, 57);
			break;
		case "ITALY":
			colors.back = new Color(188, 221, 185);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(233, 245, 219);
			break;
		case "ITALIAN SOCIALIST":
			colors.back = new Color(188, 221, 185);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(234, 81, 43);
			break;
		case "ITALIAN BELIGERANTE":
			colors.back = new Color(188, 221, 185);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(151, 172, 108);
			break;
		case "JAPAN":
		case "FORMOSA":
		case "KOREA":
			colors.back = new Color(73, 73, 73);
			colors.fore = new Color(250, 236, 70);
			colors.inner = new Color(120, 120, 120);
			break;
		case "NATCHINA":
		case "NATIONALIST CHINA":
			colors.back = new Color(250, 250, 250);
			colors.fore = new Color(228, 0, 32);
			colors.inner = new Color(250, 250, 250);
			break;
		case "NETHERLANDS":
		case "DUTCH E. INDIES":
			colors.back = new Color(153, 205, 232);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(228, 115, 0);
			break;
		case "NORWAY":
			colors.back = new Color(250, 250, 255);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(42, 168, 218);
			break;
		case "PERSIA":
			colors.back = new Color(216, 203, 159);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(0, 178, 57);
			break;
		case "PHILIPINES":
			colors.back = new Color(151, 172, 108);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(88, 200, 220);
			break;
		case "EASTPOLAND":
		case "POLAND":
			colors.back = new Color(0, 120, 108);
			colors.fore = new Color(255, 255, 255);
			colors.inner = new Color(0, 120, 108);
			break;
		case "BESSARABIA":
		case "RUMANIA":
			colors.back = new Color(167, 169, 168);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(3, 140, 205);
			break;
		case "RUSSIA":
			colors.back = new Color(234, 81, 43);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(235, 202, 75);
			break;
		case "SPAIN":
			colors.back = new Color(250, 236, 87);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(235, 86, 69);
			break;
		case "SOUTH AFRICA":
			colors.back = new Color(209, 188, 140);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(225, 158, 0);
			break;
		case "SWEDEN":
			colors.back = new Color(250, 250, 255);
			colors.fore = new Color(0, 93, 157);
			colors.inner = new Color(206, 231, 255);
			break;
		case "THAILAND":
			colors.back = new Color(146, 6, 104);
			colors.fore = new Color(235, 241, 145);
			colors.inner = new Color(146, 6, 104);
			break;
		case "TURKEY":
			colors.back = new Color(238, 210, 94);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(240, 235, 190);
			break;
		case "UKRAINE":
			colors.back = new Color(0, 124, 197);
			colors.fore = new Color(245, 238, 6);
			colors.inner = new Color(0, 124, 197);
			break;
		case "US":
		case "UNITED STATES":
		case "UNITEDSTATES":
		case "AMERICA":
			colors.back = new Color(151, 172, 108);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(202, 221, 166);
			break;
		case "VLASOV":
		case "VLASLOV":
			colors.back = new Color(244, 81, 43);
			colors.fore = new Color(255, 255, 255);
			colors.inner = new Color(148, 146, 148);
			break;
		case "WAFDIST":
			colors.back = new Color(241, 219, 114);
			colors.fore = new Color(0, 0, 0);
			colors.inner = new Color(0, 175, 60);
			break;
		case "WANG":
			colors.back = new Color(244, 81, 43);
			colors.fore = new Color(255, 255, 0);
			colors.inner = new Color(255, 89, 66);
			break;
		case "YUGOSLAVIA":
			colors.back = new Color(167, 169, 168);
			colors.fore = new Color(0, 0, 0);
			colors.line = new Color(250, 250, 250);
			colors.inner = new Color(3, 140, 205);
			break;
		default:
			colors.back = new Color(20, 20, 20);
			colors.fore = new Color(140, 140, 140);
			colors.inner = new Color(90, 90, 90);
			break;
	}

	if (colors.line == null) { colors.line = colors.fore }

	let shadowRed: number;
	let shadowGreen: number;
	let shadowBlue: number;

	if (colors.back.red > 40) {
		shadowRed = colors.back.red - 40;
	} else {
		shadowRed = 0;
	}
	if (colors.back.green > 40) {
		shadowGreen = colors.back.green - 40;
	} else {
		shadowGreen = 0;
	}
	if (colors.back.blue > 40) {
		shadowBlue = colors.back.blue - 40;
	} else {
		shadowBlue = 0;
	}
	colors.shadow = new Color(shadowRed, shadowGreen, shadowBlue);
	
	const countryColors: ICountryColors = {...colors };
	return countryColors;
}

export default getCountryColors;