// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      // colors
      colors: {
        primaryColor: "#EF7861",
        secondaryColor: "#FF5B5B",
        lightCoralColor: "#F47C61",

        whiteColor: "#FFFFFF",
        offWhiteColor: "#f9f9f9",
        primaryBgColor: "#FF5A5F26",
        secondaryTextColor: "#59606E",
        darkGrayColor: "#969BA0",
        grayLightColor: "#B9BBBD",
        halfGrayColor: "#1E1E1E80",
        blueColor: "#2D9CDB",
        //  icon color
        blackColor: "#333333",
        darkblack: "#000000",
        // table status color
        greenColor: "#34C759",
        purpleColor: "#AF52DE",
        redColor: "#FF3B30",

        // progress bar colors
        mustardColor: "#A96717",
        jadeGreenColor: "#00B074",
        coralRedColor: "#FF715B",

        tealColor: "#51C2BC",
        softTeal: "#59606E26",

        charcoalColor: "#434343",
        dimGray: "#7B7B7B",
        ashGray: "#E9E9E9",
        grayShColor: "#464255",
        orderColor: "#A3A3A3",
        steelGray: "#3E4954",
        grayishBlue: "#21252C",
        // Order Frequency Analysis chart color
        alphaColor: "#F47C61B2",
        betaColor: "#FF5A5FB2",
        thitaColor: "#BE4262B2",
        deltaColor: "#D83C41B2",
        gammaColor: "#00B074B2",
        lambdaColor: "#464255B2",

        // Order Frequency Analysis chart color
        alphaColor2: "#F79D89",
        betaColor2: "#FE8588",
        thitaColor2: "#D1748A",
        deltaColor2: "#E37073",
        gammaColor2: "#00B074",
        lambdaColor2: "#7D7581",
        // chart placeholder color
        chartColor: "#bfbfbf",
      },

      //font family
      fontFamily: {
        custom: ['"Poppins", sans-serif'], //font family
      },

      // font sizes
      fontSize: {
        h1: "40px",
        h2: "35px",
        h3: "28px",
        h4: "14px",
        text1: "12px",
        text2: "10px",
      },

      // font weight
      fontWeight: {
        b5: "500",
        b6: "600",
        b7: "700",
      },

      borderColor: {
        custom: "#DBDBDB",
      },
    },
    plugins: [],
  },
};
