module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#223A5E', // Deep Blue
        gold: '#FFD700',    // Gold
        olive: '#6B8E23',   // Olive Green
        charcoal: '#222222',// Charcoal for text
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
