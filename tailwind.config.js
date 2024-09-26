/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}", // for the App Router
  "./pages/**/*.{js,ts,jsx,tsx}", // for the Pages Router
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
};
export const plugins = [];
