export const getRelativePosition = (canvas: HTMLCanvasElement, x: number, y: number) => {
	let curtop: number;
	let curleft: number = curtop = 0;
	let scrollLeft: number;
	let scrollTop: number;

	if (canvas.offsetParent) {
		curleft += canvas.offsetLeft;
		curtop += canvas.offsetTop;
		// do {
		// 	curleft += obj.offsetLeft;
		// 	curtop += obj.offsetTop;
		// } while (obj = obj.offsetParent);
	}

	if (document.body.scrollLeft > 0) {
		scrollLeft = document.body.scrollLeft;
	} else {
		scrollLeft = document.documentElement.scrollLeft;
	}
	if (document.body.scrollTop > 0) {
		scrollTop = document.body.scrollTop;
	} else {
		scrollTop = document.documentElement.scrollTop;
	}
	return [(x - curleft + scrollLeft), (y - curtop + scrollTop)];
}
