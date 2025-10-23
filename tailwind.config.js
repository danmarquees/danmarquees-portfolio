/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Informa ao Tailwind para ler todos os arquivos React na pasta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
