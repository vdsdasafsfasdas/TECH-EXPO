/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors (60% usage)
        primary: {
          black: '#000000',
          navy: '#000080',
          purple: '#800080',
        },
        
        // Secondary Colors (30% usage)
        secondary: {
          'deep-slate': '#0F172A',
          'midnight-blue': '#1E1B4B',
          'royal-purple': '#581C87',
          'charcoal': '#1F2937',
        },
        
        // Accent Colors (10% usage)
        accent: {
          'electric-cyan': '#00FFFF',
          'neon-blue': '#0EA5E9',
          'vibrant-purple': '#A855F7',
          'tech-green': '#10B981',
          'gold': '#F59E0B',
          'silver': '#94A3B8',
        },
        
        // Gradient Colors
        gradient: {
          'cyan-start': '#06B6D4',
          'cyan-mid': '#3B82F6',
          'purple-mid': '#8B5CF6',
          'purple-end': '#A855F7',
        },
        
        // Neutral Colors
        neutral: {
          'dark-gray': '#111827',
          'medium-gray': '#374151',
          'light-gray': '#6B7280',
          'pale-gray': '#9CA3AF',
          'white-smoke': '#F9FAFB',
        },
        
        // Semantic Colors
        semantic: {
          success: '#059669',
          warning: '#D97706',
          error: '#DC2626',
          info: '#0284C7',
        }
      },
      
      // Custom gradients based on the logo
      backgroundImage: {
        'logo-gradient': 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 25%, #8B5CF6 75%, #A855F7 100%)',
        'primary-gradient': 'linear-gradient(135deg, #000000 0%, #000080 50%, #800080 100%)',
        'accent-gradient': 'linear-gradient(90deg, #00FFFF 0%, #0EA5E9 50%, #A855F7 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0F172A 0%, #1E1B4B 50%, #581C87 100%)',
        'tech-gradient': 'linear-gradient(45deg, #06B6D4 0%, #8B5CF6 100%)',
      },
      
      // Box shadows with brand colors
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'purple-glow': '0 0 20px rgba(168, 85, 247, 0.3)',
        'tech-glow': '0 0 30px rgba(6, 182, 212, 0.2), 0 0 60px rgba(168, 85, 247, 0.1)',
      }
    },
  },
  plugins: [],
};