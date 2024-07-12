import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-out",
        "accordion-up": "accordion-up 0.4s ease-out",
      },
      textColor: {
        primary: {
          unactive: "#AAA59E",
          highlight: "#C08727",
          DEFAULT: "#55504B",
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#C08727",
          darker: "#9A6C1F"
        },
        main: {
          DEFAULT: "#FDF6F0",
          box: "#FAE3D1",
          white: "#FFFFFF"
        },
        secondary: {
          DEFAULT: "#414143"
        }
      },
      fontFamily: {
        'balladeer': ['Balladeer', 'sans-serif'],
        'droidserifbold': ['DroidSerifBold', 'sans-serif'],
        'nauman': ['Nauman', 'sans-serif'],
        'geosanslight': ['GeosansLight', 'sans-serif'],
        'cinzelregular': ['CinzelRegular', 'sans-serif'],
        'quattrocentoregular': ['QuattrocentoRegular', 'sans-serif'],
        'loravariable': ['LoraVariable', 'sans-serif'],
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/container-queries')],
} satisfies Config

export default config