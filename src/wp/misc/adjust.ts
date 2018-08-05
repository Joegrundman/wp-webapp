const zoomLevel = 1;
/**
 * returns the passed in value adjusted by the current game zoom level
 */
const adjust = (value: number): number => value * zoomLevel;

export default adjust;