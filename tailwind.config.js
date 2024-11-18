/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        backgroundColor1: "#282829",
        backgroundColor2: "#3b1c32",
        backgroundColor3: "#1a1a1d",
      },
      backgroundImage: {
        bgcontact: "url('./assets/img/bgn-contact.webp')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
