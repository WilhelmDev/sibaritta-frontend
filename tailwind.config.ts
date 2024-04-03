/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'btn_scale_animation': ' btn_scale_animation ease-in-out 1.5s   infinite',
      },
      keyframes: {
        btn_scale_animation: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      colors: {
        primary: '#252127',
        secondary: '#4D3452',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        inter: ['var(--font-inter)'],
      },
      screens: {
        phone: '414px',
        phonelg: '568px',
        tablet: '768px',
        tabletlg: '960px',
        tabletxl: '1024px',
        laptop: '1200px',
        laptoplg: '1400px',
        desktop: '1700px',
      },
    },
  },
  plugins: [],
};
