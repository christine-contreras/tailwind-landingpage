module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    colors: {
      pink: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      green: 'hsl(168, 34%, 41%)',
      'dark-green': 'hsl(167, 40%, 24%)',
      'light-green': 'hsl(165, 48%, 75%)',
      blue: 'hsl(198, 62%, 26%)',
      'dark-blue': 'hsl(212, 27%, 19%)',
      gray: 'hsl(232, 10%, 55%)',
      'dark-gray': 'hsl(213, 9%, 39%)',
      'light-gray': 'hsl(210, 4%, 67%)',
      white: 'hsl(0, 0%, 100%)',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
