/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: 'rgb(var(--color-azure) / <alpha-value>)',
        lagoon: 'rgb(var(--color-lagoon) / <alpha-value>)',
        sunset: 'rgb(var(--color-sunset) / <alpha-value>)',
        sand: 'rgb(var(--color-sand) / <alpha-value>)',
        pearl: 'rgb(var(--color-pearl) / <alpha-value>)',
        night: 'rgb(var(--color-night) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        fancy: ['Philosopher', 'sans-serif'],
        script: ['Rouge Script', 'cursive']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(28, 91, 147, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(28, 91, 147, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(var(--color-night) / 0.7)',
            h1: {
              color: 'rgb(var(--color-night))',
            },
            h2: {
              color: 'rgb(var(--color-night))',
            },
            h3: {
              color: 'rgb(var(--color-night))',
            },
            strong: {
              color: 'rgb(var(--color-night))',
            },
            a: {
              color: 'rgb(var(--color-azure))',
              '&:hover': {
                color: 'rgb(var(--color-azure) / 0.8)',
              },
            },
            code: {
              color: 'rgb(var(--color-night))',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            hr: {
              borderColor: 'rgb(var(--color-night) / 0.1)',
            },
            ul: {
              li: {
                '&::marker': {
                  color: 'rgb(var(--color-sunset))',
                },
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};