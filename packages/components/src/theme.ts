import { theme } from 'twin.macro'

export type Intent =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'dark'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

/** UI Element size, typically ranging from xs to xl. */
export type ElementSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Alignment = 'center' | 'left' | 'right' | 'middle' | 'start' | 'end'

export const getIntentColor = function (intent: Intent) {
  const colors: { [key in Intent]?: string } = {
    primary: theme`colors.primary.600`,
    secondary: theme`colors.secondary.600`,
    light: theme`colors.light.300`,
    dark: theme`colors.dark.600`,
    info: theme`colors.info.600`,
    success: theme`colors.success.600`,
    warning: theme`colors.warning.500`,
    danger: theme`colors.danger.600`
  }
  return colors[intent] || colors['dark']
}
