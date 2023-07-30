/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color' : 'var(--primary-color)',
        'secondary-color' : 'var(--secondary-color)',
        'secondary-dark-color' : 'var(--secondary-dark-color)',
        'white-color' : 'var(--white-color)',
        'light-bg-color' : 'var(--light-bg-color)',
        'light-text-color' : 'var(--light-text-color)',
        'border-color' : 'var(--border-color)',
        'dark-color' : 'var(--dark-color)'
      },
      fontSize : {
        sm : '13px',
        xs : '11px'
      },
    },
    fontWeight : {
      'fw3' : '300',
      'fw4' : '400',
      'fw5' : '500',
      'fw6' : '600',
      'fw7' : '700',
      'fw8' : '800'
    }
  },
  plugins: [],
};
