import Color from 'tinycolor2'
import { theme } from 'twin.macro'
import { get } from './object'

export { Color }

/**
 * Get the color raw value from theme
 * @param color - the color path ("green.200")
 * @param fallback - the fallback color
 */
export const getColor = (color: string, fallback?: string) => {
  const hex = get(theme(), `colors.${color}`, color)
  const isValid = Color(hex).isValid()
  return isValid ? hex : fallback
}

/**
 * Determines if the tone of given color is "light" or "dark"
 * @param color - the color in hex, rgb, or hsl
 */
export const tone = (color: string) => {
  const hex = getColor(color)
  const isDark = Color(hex).isDark()
  return isDark ? 'dark' : 'light'
}

/**
 * Determines if a color tone is "dark"
 * @param color - the color in hex, rgb, or hsl
 */
export const isDark = (color: string) => tone(color) === 'dark'

/**
 * Determines if a color tone is "light"
 * @param color - the color in hex, rgb, or hsl
 */
export const isLight = (color: string) => tone(color) === 'light'

/**
 * Make a color transparent
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the opacity amount
 */
export const transparentize = (color: string, opacity: number) => {
  const raw = getColor(color)
  return Color(raw).setAlpha(opacity).toRgbString()
}

/**
 * Add white to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
export const whiten = (color: string, amount: number) => {
  const raw = getColor(color)
  return Color.mix(raw, '#fff', amount).toHexString()
}

/**
 * Add black to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount of black to add (0-1)
 */
export const blacken = (color: string, amount: number) => {
  const raw = getColor(color)
  return Color.mix(raw, '#000', amount).toHexString()
}

/**
 * Darken a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount to darken (0-100)
 */
export const darken = (color: string, amount: number) => {
  const raw = getColor(color)
  return Color(raw).darken(amount).toHexString()
}

/**
 * Lighten a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount to lighten (0-100)
 */
export const lighten = (color: string, amount: number) =>
  Color(getColor(color)).lighten(amount).toHexString()

/**
 * Checks the contract ratio of between 2 colors,
 * based on the Web Content Accessibility Guidelines (Version 2.0).
 *
 * @param fg - the foreground or text color
 * @param bg - the background color
 */
export const contrast = (fg: string, bg: string) => Color.readability(getColor(bg), getColor(fg))

/**
 * Checks if a color meets the Web Content Accessibility
 * Guidelines (Version 2.0) for constract ratio.
 *
 * @param fg - the foreground or text color
 * @param bg - the background color
 */
export const isAccessible = (textColor: string, bgColor: string, options?: Color.WCAG2Options) =>
  Color.isReadable(getColor(bgColor), getColor(textColor), options)

export const complementary = (color: string) => Color(getColor(color)).complement().toHexString()
