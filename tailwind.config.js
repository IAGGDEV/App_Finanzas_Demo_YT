/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#137fec",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
                "card-light": "#ffffff",
                "card-dark": "#1C252E",
                "text-main-light": "#111418",
                "text-main-dark": "#ffffff",
                "text-sec-light": "#637588",
                "text-sec-dark": "#9dabb9",
                "border-light": "#e5e7eb",
                "border-dark": "#2d3748",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
