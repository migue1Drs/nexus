import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'satoshi': ['Satoshi','var(--font-satoshi)', 'sans-serif'],
            },
            colors: {
                'blue': '#172A39',
                'cream': '#E9E4E0',
                'orange': '#FC563C',
                'gray': '#6E7575',
            },
        },
    },
    plugins: [],
};
export default config;
