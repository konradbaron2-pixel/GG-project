import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GodGrains Brand Colors
        'god-gold': '#C9A961',
        'harvest-brown': '#6B4423',
        'ancient-earth': '#3D2817',
        'grain-cream': '#F5E6D3',
        'field-green': '#8B9A5B',
        'soil-brown': '#8B6F47',
        'sky-blue': '#E8F4F8',
        'sunset-orange': '#E07B39',
        'charcoal': '#2B2B2B',
        'logo-gold': '#FFD700',
      },
      fontFamily: {
        heading: ['var(--font-josefin)', 'sans-serif'],
        body: ['var(--font-lato)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        'h4': '1.5rem',     // 24px
        'h3': '2rem',       // 32px
        'h2': '3rem',       // 48px
        'h1': '4rem',       // 64px
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
      },
      maxWidth: {
        '8xl': '1440px',
      },
      
animation: {
  'pulse-slow': 'pulseSlow 6s ease-in-out infinite',  // ← Custom keyframe
  'slide-up': 'slideUp 0.3s ease-out',
},
keyframes: {
  pulseSlow: {  // ← New custom keyframe
    '0%, 100%': { 
      opacity: '1',
      transform: 'scale(1)',
    },
    '50%': { 
      opacity: '0.95',
      transform: 'scale(1.01)',
    },
  },
  slideUp: {
    '0%': { transform: 'translateY(100%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
}

    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;