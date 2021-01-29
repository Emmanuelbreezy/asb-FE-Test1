module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'no-issue-blue':'#8C70FF',
        'no-issue-blue-lighter':'#F6F3FF',
        'issue-orange':'#F4B400',
        'issue-orange-lighter':'#FFF6DE',
        'high-risk-red':'#B63A3A',
        'mid-risk-purple':'#3C3AB6',
        'low-risk-green':'#3AB65C',
        'icon-shade-blue': '#00A2D6',
        'active-blue': '#006FD6',
        'active-bg-blue':'#DEEFFF',
        'shade-blue': '#5771EE', 
         primary: 'var(--sl-color-primary)',
         secondary: 'var(--sl-color-secondary)',
         deep: 'var(--sl-color-deep)',
         accent: {
             '5': 'var(--sl-color-5)',
             '10': 'var(--sl-color-10)',
             '20': 'var(--sl-color-20)',
             '30': 'var(--sl-color-30)',
             '40': 'var(--sl-color-40)',
             '50': 'var(--sl-color-50)',
             '60': 'var(--sl-color-60)',
             '70': 'var(--sl-color-70)',
             '80': 'var(--sl-color-80)',
             '90': 'var(--sl-color-90)',
          },
        borderColor:{
          barcolor: 'var(--sl-border-accent)'
        },
        background:{
          scaffold: 'var(--sl-background-scaffold)',
          primary: 'var(--sl-background-primary)',
          secondary: 'var(--sl-background-secondary)',
          accent: 'var(--sl-background-accent)',
          neutral: 'var(--sl-background-neutral)',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
