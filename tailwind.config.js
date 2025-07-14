module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#223A5E', // navy blue
        },
        gold: {
          DEFAULT: '#D4AF37', // soft gold
        },
        olive: {
          DEFAULT: '#708238', // olive green
        },
      },
      fontFamily: {
        header: ['Lora', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
