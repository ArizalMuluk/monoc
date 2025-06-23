/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1A1A1A',
        'dark-gray': '#2C2C2C',
        'medium-gray': '#555555',
        'off-white': '#F0F0F0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      letterSpacing: {
        'wider': '0.1em',
        'widest': '0.2em',
      },
      lineHeight: {
        'relaxed': '1.7',
        'loose': '1.8',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};