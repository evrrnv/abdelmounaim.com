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
                "purple-heart": "#6238BF"
            },
            backgroundImage: {
                'whitetro': "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
            }
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
