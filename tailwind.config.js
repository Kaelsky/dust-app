module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      fontSize: {
        lg: ["24px", "32px"],
        base: ["16px", "20px"],
        sm: ["14px", "16px"],
      },
      colors: {
        darkblue: "#08001F",
        grey: "#131313",
        "grey-light": "#1B1B1B",
        primary: "#9B00FE",
        orange: "#B15C09",
        green: "#1CB59C",
        white: "#FFF",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        scrollReverse: "scroll 40s linear infinite reverse",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 3rem))" },
        },
      },
    },
  },
  plugins: [],
};
