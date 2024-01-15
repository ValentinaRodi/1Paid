/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/react/**/*.less", "./app/react/**/*.jsx"],
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                main: "#3e3e3e",

                "second-50": "#e3e8ff",
                "second-100": "#c6d1ff",
                "second-200": "#8da4ff",
                "second-300": "#5e79e0",
                "second-400": "#3b50a3",
                second: "#172765",
                "second-600": "#13225d",
                "second-700": "#0f1e55",
                "second-800": "#0b194d",
                "second-900": "#081546",

                "third-50": "#daecff",
                "third-100": "#c2e0ff",
                "third-200": "#91c7ff",
                "third-300": "#61afff",
                "third-400": "#3097ff",
                third: "#007fff",
                "third-600": "#006edc",
                "third-700": "#005cb8",
                "third-800": "#004b95",
                "third-900": "#003972",

                body: "#f6f7f9"
            },
            boxShadow: {
                field: "0px 0px 1px 4px rgba(0, 0, 0, 0.3)"
            }
        }
    },
    plugins: []
};
