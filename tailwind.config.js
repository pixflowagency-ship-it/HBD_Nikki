/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#101426',
          deep: '#0a0d1a',
          light: '#191f38',
        },
        burgundy: {
          DEFAULT: '#641D37',
          deep: '#451224',
          light: '#85294a',
        },
        gold: {
          DEFAULT: '#D8B46A',
          light: '#ebd49d',
          dark: '#b39045',
          spark: '#f7e7be',
        },
        cream: {
          DEFAULT: '#F4E9D8',
          paper: '#FAF5EE',
          dark: '#E7D8C0',
        },
        scrapbook: {
          brown: '#9A7657',
          darkBrown: '#6e5138',
          card: '#FAF4EC',
        },
        softPink: {
          DEFAULT: '#E9B6C4',
          light: '#F8E1E8',
          dark: '#CA8698',
        },
        shinchan: {
          red: '#EE3338',
          yellow: '#FED600',
          blue: '#1687E0',
          skin: '#FCD8B8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        handwriting: ['"Caveat"', '"Kalam"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        candleGlow: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        sparkle: 'sparkle 2.5s ease-in-out infinite',
        candle: 'candleGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

