/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#ff6a00',
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff6a00',
          600: '#e65c00',
          700: '#bf4e00',
          800: '#993d00',
          900: '#7a2e00',
        },
        charcoal: {
          DEFAULT: '#1a1a2e',
          50: '#f2f2f7',
          100: '#e6e6ee',
          200: '#b3b3cc',
          300: '#8080aa',
          400: '#4d4d88',
          500: '#2d2d5e',
          600: '#1a1a2e',
          700: '#141424',
          800: '#0d0d1a',
          900: '#070710',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Barlow Condensed', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6a00' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      clipPath: {
        'skew-right': 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
        'skew-left': 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


