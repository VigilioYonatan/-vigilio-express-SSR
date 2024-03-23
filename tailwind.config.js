const tailwind = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app/**/*.tsx", "index.html"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                background: {
                    dark: "#0F0F0F",
                    light: "#fff",
                },
                paper: {
                    dark: "#272727",
                    light: "#F2F2F2",
                },
                terciary: tailwind.gray["400"],
                success: tailwind.green["600"],
                danger: tailwind.red["600"],
                admin: {
                    paper: {
                        dark: "#1F2937",
                    },
                    background: {
                        dark: "#111827",
                    },
                    terciary: "#374151",
                },
            },
            textColor: {
                primary: "var(--primary)",
                secondary: {
                    light: "#fff",
                    dark: "#000",
                },
                terciary: tailwind.gray["400"],
                quarty: "#0F172B",
            },
        },
        fontFamily: {
            thin: ["Exo-Thin", "sans"],
            light: ["Exo-Light", "sans"],
            normal: ["Exo-Regular", "sans"],
            bold: ["Exo-Bold", "sans"],
            black: ["Exo-Black", "sans"],
        },
    },
    plugins: [],
    darkMode: ["class"],
};
