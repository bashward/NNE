const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        slideUp: 'slideUp 0.8s ease-in-out',
        scroll: 'scroll 60s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // Keep your existing fadeIn and slideUp definitions
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities(
        {
          '.animation-paused': {
            'animation-play-state': 'paused',
          },
          '.animation-running': {
            'animation-play-state': 'running',
          },
        },
        {
          variants: ['group-hover'] // This enables group-hover variant
        }
      )
    })
  ],
};
