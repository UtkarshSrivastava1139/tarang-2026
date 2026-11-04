import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F0E3',
          light: '#FFFDF9',
          dim: '#F0E7D5'
        },
        parchment: {
          DEFAULT: '#E5D5B8',
          light: '#F4EDE0',
          dark: '#D6C3A1'
        },
        navy: {
          DEFAULT: '#17264A',
          deep: '#0F1A34',
          surface: '#1E325E',
          card: '#13203E'
        },
        gold: {
          DEFAULT: '#C49A4B',
          light: '#E2D3B3',
          dim: '#9C762F',
          amber: '#D8AB56'
        },
        vermilion: {
          DEFAULT: '#AD3025',
          dark: '#8E241B',
          light: '#C84337'
        },
        saffron: {
          DEFAULT: '#E98727',
          light: '#F5A24E',
          dim: '#C76A14'
        },
        emerald: {
          DEFAULT: '#286B50',
          light: '#358967',
          dim: '#1D523C'
        },
        rose: {
          DEFAULT: '#925064',
          light: '#AA687E',
          dim: '#733B4D'
        },
        'border-subtle': '#E2D3B3',
        'text-muted': '#56627A'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        hindi: ['var(--font-hindi)', 'Georgia', 'serif'],
        'hindi-sans': ['var(--font-hindi-sans)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        editorial: '0 20px 48px rgba(23, 38, 74, 0.12)',
        soft: '0 8px 24px rgba(23, 38, 74, 0.08)',
        card: '0 4px 16px rgba(23, 38, 74, 0.05)',
        gold: '0 0 24px rgba(196, 154, 75, 0.25)',
        'vermilion-glow': '0 8px 24px rgba(173, 48, 37, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
