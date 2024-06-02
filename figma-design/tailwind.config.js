/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'saviour': "url('/saviour.png')",
        'logo' : "url('/logo.png')",
        'event' : "url('/event-bg.png')",
        'tokenomics' : "url('/tokenomics.png')",
        'phase-1' : "url('/phase-1.png')",
        'phase-2' : "url('/phase-2.png')",
        'phase-3' : "url('/phase-3.png')",
        'phase-4' : "url('/phase-4.png')",
        'faq' : "url('/faq.png')",
        'roadmap' : "url('/roadmap.png')",
      },
      fontFamily: {
        'zcool': ['ZCOOL KuaiLe', 'sans-serif'],
        'shojumaru': ['Shojumaru', 'system-ui'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
