export default {
  base: 'inline-flex px-2 text-xs font-medium leading-5 rounded-full',
  variant: {
    standard:
      'h-5 py-0 px-1 absolute flex flex-row flex-wrap justify-center items-center font-semibold text-xs leading-none rounded-full select-none z-10',
    dot:
      'h-3 w-3 p-0 absolute flex flex-row flex-wrap justify-center items-center font-semibold text-xs leading-none rounded-full select-none z-10',
  },
  intent: {
    primary: '',
    secondary: '',
    light: '',
    dark: 'bg-gray-800',
    info: '',
    success: '',
    warning: '',
    danger: '',
  },
}
