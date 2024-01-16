import { MOBILE_WIDTH, TABLET_WIDTH } from "../constants/constants";

/**
 * @param width
 * @returns boolean value
 */
export const isMobile = (width: number) => width <= MOBILE_WIDTH;

/**
 * @param width
 * @returns boolean value
 */
export const isTablet = (width: number) => width <= TABLET_WIDTH;
