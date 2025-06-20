/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: "hsl(264, 99%, 52%)",
          100: "hsl(264, 100.00%, 96.10%)",
          200: "hsl(264, 99%, 92%)",
          300: "hsl(264, 99%, 82%)",
          400: "hsl(264, 99%, 72%)",
          500: "hsl(264, 99%, 52%)",
          600: "hsl(264, 99%, 42%)",
          700: "hsl(264, 99%, 32%)",
          800: "hsl(264, 99%, 22%)",
          900: "hsl(264, 99%, 12%)",
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: "hsl(341, 53.60%, 57%)",
          100:  "hsl(341, 53.60%, 97%)",
          200:  "hsl(341, 53.60%, 87%)",
          300: "hsl(341, 53.60%, 77%)",
          400: "hsl(341, 53.60%, 67%)",
          500: "hsl(341, 53.60%, 57%)",
          600: "hsl(341, 53.60%, 47%)",
          700: "hsl(341, 53.60%, 37%)",
          800: "hsl(341, 53.60%, 27%)",
          900: "hsl(341, 53.60%, 17%)",
          foreground: 'hsl(var(--secondary-foreground))',
        },
        neutral: {
          DEFAULT: "hsl(270, 1.60%, 48.20%)",
          100: "hsl(270, 1.60%, 98.20%)",
          200: "hsl(270, 1.60%, 88.20%)",
          300: "hsl(270, 1.60%, 78.20%)",
          400: "hsl(270, 1.60%, 68.20%)",
          500: "hsl(270, 1.60%, 58.20%)",
          600: "hsl(270, 1.60%, 48.20%)",
          700: "hsl(270, 1.60%, 38.20%)",
          800: "hsl(270, 1.60%, 28.20%)",
          900: "hsl(270, 1.60%, 18.20%)",
        },
        muted: {
          DEFAULT: "hsl(264, 99%, 96%)",
          foreground:  "hsl(265, 11.00%, 39.20%)",
        },
        accent: {
          DEFAULT: "hsl(229, 98.60%, 72.00%)",
         foreground: "hsl(229, 98.60%, 92.00%)",
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        linearBorderGradients: theme => ({
          colors: theme('colors'),
        }),
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-border-gradients')],
};
