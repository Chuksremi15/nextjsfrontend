module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pentagon: "url('/Polygon1.jpg')",
        "side-angle": "url('/sideangle.png')",
        "about-bg": "url('/AboutBg.png')",
        "contact-bg": "url('/contactbg.png')",
        "banner-bg": "url('/bannerNurse.png')",
      }),
      fontFamily: {
        poppins: ['"Poppins"'],
        dmsans: ['"DM Sans"'],
      },
      colors: {
        transparent: {
          main: "transparent",
        },
        green: {
          main: "#00A69C",
          sub: "#B4E4E1",
          sub1: "#D2EFED",
          sub2: "#F0FAF9",
          sub3: "#F8FCFC",
          sub4: "#00B8AD",
          dark: "#00A69C",
          black: "#001F1D",
          gradend: "#1B75BB",
        },
        blue: {
          main: "#1B75BB",
          sub: "#82BEED",
          sub1: "#E5EDF3",
          sub2: "#BCDCF5",
        },
        orange: {
          main: "#F2994A",
          sub: "#F3EEDE",
        },
        red: {
          main: "#EB5757",
          sub: "#EBE0E0",
        },
        gray: {
          main: "#828282",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/custom-forms"),
  ],
};
