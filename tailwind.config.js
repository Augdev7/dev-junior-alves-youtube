/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  darkMode: 'class',
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^gap-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^bg-/,
      variants: ['blue', 'green', 'red']
    },
    {
      pattern: /^text-/,
      variants: ['blue', 'green', 'red']
    }
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpEnter: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: 100,
            transform: 'translateY(0px)'
          }
        },
        slideLeave: {
          '0%': {
            opacity: 100,
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(-20px)'
          }
        }
      },
      animation: {
        'slide-enter': ' slideUpEnter .3s ease-in-out',
        'slide-leave': ' slideLeave .3s ease-in-out'
      },
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        foldit: ['Foldit', 'cursive']
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b'
        },
        'primary-orange': '#FF5722',
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        primary: '#9333EA',
        secondary: '#ff7e33',
        info: '#0C63E7',
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        bodyColor: '#0A192F',
        textGreen: '#64ffda',
        textLight: '#ccd6f6',
        textDark: '#8892b0',
        hoverColor: 'rgba(100, 255, 218, 0.1)',
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA'
        },
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        primary: '#201f27',
        secundary: '#2E3038',
        link: '#f72585'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        // Modal
        'scale-in': 'scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        // Input Select
        'input-select-slide-up':
          'input-select-slide-up 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'input-select-slide-down':
          'input-select-slide-down 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade':
          'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        // Navigation menu
        'enter-from-right': 'enter-from-right 0.25s ease',
        'enter-from-left': 'enter-from-left 0.25s ease',
        'exit-to-right': 'exit-to-right 0.25s ease',
        'exit-to-left': 'exit-to-left 0.25s ease',
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
        // Accordion
        'accordion-down': 'accordion-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'accordion-up': 'accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        // Custom wiggle animation
        wiggle: 'wiggle 0.75s infinite'
      },
      keyframes: {
        // Modal
        'scale-in': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        },
        // Input Select
        'input-select-slide-up': {
          '0%': { transform: 'translateY(-342px)' },
          '100%': { transform: 'translateY(-350px)' }
        },
        'input-select-slide-down': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(8px)' }
        },
        // Tooltip
        'slide-right-fade': {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'slide-left-fade': {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        // Navigation menu
        'enter-from-right': {
          '0%': { transform: 'translateX(200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        'enter-from-left': {
          '0%': { transform: 'translateX(-200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        'exit-to-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(200px)', opacity: 0 }
        },
        'exit-to-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-200px)', opacity: 0 }
        },
        'scale-in-content': {
          '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
          '100%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 }
        },
        'scale-out-content': {
          '0%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
          '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 }
        },
        // Accordion
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        // Custom wiggle animation
        wiggle: {
          '0%, 100%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%'
          },
          '15%': { transform: 'translateX(-4px) rotate(-4deg)' },
          '30%': { transform: 'translateX(6px) rotate(4deg)' },
          '45%': { transform: 'translateX(-6px) rotate(-2.4deg)' },
          '60%': { transform: 'translateX(2px) rotate(1.6deg)' },
          '75%': { transform: 'translateX(-1px) rotate(-0.8deg)' }
        }
      },
      text: {
        DEFAULT: '#1F2937',
        light: '#6C7281'
      },
      light: {
        DEFAULT: '#FAFBFC',
        lighter: '#F3F4F6'
      },
      boxShadow: {
        'custom-light': ' 0 0 10px #313131',
        'custom-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c'
      },
      container: {
        screens: {
          sm: '640px',
          md: '767px',
          lg: '1140px',
          xl: '1400px',
          '2xl': '1800px'
        }
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }
        // => @media (max-width: 1279px) { ... }
        // => @media (max-width: 1023px) { ... }
        // => @media (max-width: 767px) { ... }
        sm: { max: '639px' }
        // => @media (max-width: 639px) { ... }
      },
      'slide-up-fade': {
        '0%': { opacity: 0, transform: 'translateY(6px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
      },
      'slide-down-fade': {
        '0%': { opacity: 0, transform: 'translateY(-6px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        },
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-radix')()
  ]
};
