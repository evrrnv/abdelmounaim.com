const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                black: "#040404",
                emperor: "#4F4F4F",
                "electric-violet": "#834BFF",
                "purple-heart": "#6238BF",
                alto: "#CECECE",
                concrete: "#F2F2F2",
                "black-squeeze": "#F8FBFC",
            },
            backgroundImage: {
                whitetro: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            },
            screens: {
                mdx: { raw: "(min-width: 768px) and (max-width: 1400px) and (max-height: 900px)" },
            },
        },
    },
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        plugin(function ({ addVariant }) {
            addVariant("open", ".open &");
        }),
    ],
};
