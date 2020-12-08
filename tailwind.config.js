module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0f0f17',
        current: "currentColor",
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gray: {
          50: "#f9fafb",
          100: "#f4f5f7",
          200: "#e5e7eb",
          300: "#d2d6dc",
          400: "#9fa6b2",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#252f3f",
          900: "#161e2e",
        },
      },
      spacing: {
        '28': '7rem',
        '36': '9rem'
      },
      fontSize: {
        'base': '1rem',
      },
      fontFamily: {
        sans: [
          '"Barlow"  sans-serif,',
        ],
        mono: [
          'IBM Plex Mono',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      fontWeight: {
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      }
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'hover'],
    borderColor: ['dark', 'dark-hover', 'responsive', 'hover'],
    textColor: ['dark', 'dark-hover', 'active', 'hover'],
    boxShadow: ['active'],
    opacity: ['group-focus'],
    textDecoration: ['group-focus'],
  },
  plugins: [
    require('./src/plugins/base'),
    require('tailwindcss-dark-mode')(),
    require('./src/plugins/fonts'),
  ]
}
