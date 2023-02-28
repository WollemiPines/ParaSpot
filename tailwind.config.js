/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colours: {
        "weather-prime": "#00668A",
        "weather-two": "#fff",
        "weather-three": "#fff",
      }
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "748px"
    }

  },
  plugins: [],
}
