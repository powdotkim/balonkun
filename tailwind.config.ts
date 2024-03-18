import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
import { addDynamicIconSelectors } from '@iconify/tailwind'

export default {
    content: ['index.html'],
    theme: {
        colors: {
            primary: colors.purple,
            secondary: colors.yellow,
            gray: colors.zinc,
            black: colors.black,
            white: colors.white,
            transparent: colors.transparent,
            current: colors.current,
        },
        extend: {
            container: {
                padding: '2rem',
                center: true,
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [addDynamicIconSelectors()],
} satisfies Config
