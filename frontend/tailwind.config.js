import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/broooo.jpg')", // Update path
      },
    },
  },
  plugins: [daisyui], // Use import for daisyUI
};
