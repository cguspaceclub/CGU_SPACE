import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "SF Pro Display",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "Poppins",
        "sans-serif",
      ],
      display: [
        "Inter",
        "SF Pro Display",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        brand: {
          orange: "#FF6B35",
          red: "#DC2626",
          "dark-red": "#B91C1C",
          "light-orange": "#FF8F65",
          black: "#000000",
          white: "#FFFFFF",
          gray: {
            100: "#F5F5F5",
            200: "#E5E5E5",
            300: "#D4D4D4",
            800: "#1F1F1F",
            900: "#0F0F0F",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "slow-zoom": {
          "0%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1.2)",
          },
        },
        "astronaut-float": {
          "0%": {
            transform: "translateX(-100px) translateY(20px) rotate(0deg)",
          },
          "25%": {
            transform: "translateX(25vw) translateY(-30px) rotate(90deg)",
          },
          "50%": {
            transform: "translateX(50vw) translateY(40px) rotate(180deg)",
          },
          "75%": {
            transform: "translateX(75vw) translateY(-20px) rotate(270deg)",
          },
          "100%": {
            transform: "translateX(110vw) translateY(30px) rotate(360deg)",
          },
        },
        "satellite-orbit": {
          "0%": {
            transform: "translateX(100px) translateY(-20px) rotate(0deg)",
          },
          "25%": {
            transform: "translateX(-25vw) translateY(30px) rotate(-90deg)",
          },
          "50%": {
            transform: "translateX(-50vw) translateY(-40px) rotate(-180deg)",
          },
          "75%": {
            transform: "translateX(-75vw) translateY(20px) rotate(-270deg)",
          },
          "100%": {
            transform: "translateX(-110vw) translateY(-30px) rotate(-360deg)",
          },
        },
        "astronaut-drift": {
          "0%": {
            transform: "translate(-50%, -50%) translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translate(-50%, -50%) translateY(-20px) rotate(5deg)",
          },
          "66%": {
            transform: "translate(-50%, -50%) translateY(10px) rotate(-5deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) translateY(0px) rotate(0deg)",
          },
        },
        meteor: {
          "0%": {
            transform: "translateX(-100px) translateY(0px)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(110vw) translateY(-200px)",
            opacity: "0",
          },
        },
        "meteor-delayed": {
          "0%": {
            transform: "translateX(-100px) translateY(0px)",
            opacity: "0",
          },
          "15%": {
            opacity: "1",
          },
          "85%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(110vw) translateY(-150px)",
            opacity: "0",
          },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(100px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
        "orbit-reverse": {
          "0%": {
            transform: "rotate(0deg) translateX(80px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg) translateX(80px) rotate(360deg)",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(0%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-15%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "ufo-fly": {
          "0%": {
            transform: "translateX(-120px) translateY(0px) rotate(0deg)",
          },
          "20%": {
            transform: "translateX(20vw) translateY(-50px) rotate(10deg)",
          },
          "40%": {
            transform: "translateX(40vw) translateY(30px) rotate(-5deg)",
          },
          "60%": {
            transform: "translateX(60vw) translateY(-20px) rotate(15deg)",
          },
          "80%": {
            transform: "translateX(80vw) translateY(40px) rotate(-10deg)",
          },
          "100%": {
            transform: "translateX(120vw) translateY(0px) rotate(0deg)",
          },
        },
        "planet-drift": {
          "0%": {
            transform: "translateX(120px) translateY(50px) rotate(0deg)",
          },
          "25%": {
            transform: "translateX(-20vw) translateY(-30px) rotate(90deg)",
          },
          "50%": {
            transform: "translateX(-40vw) translateY(20px) rotate(180deg)",
          },
          "75%": {
            transform: "translateX(-60vw) translateY(-40px) rotate(270deg)",
          },
          "100%": {
            transform: "translateX(-120vw) translateY(50px) rotate(360deg)",
          },
        },
        "shooting-star": {
          "0%": {
            transform: "translateX(-100px) translateY(0px) rotate(45deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(120vw) translateY(-50vh) rotate(45deg)",
            opacity: "0",
          },
        },
        "float-up": {
          "0%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-30px) rotate(360deg)",
          },
        },
        "float-down": {
          "0%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(20px) rotate(-360deg)",
          },
        },
        "astronaut-journey": {
          "0%": {
            transform:
              "translateX(-150px) translateY(0px) rotate(0deg) scale(1)",
          },
          "15%": {
            transform:
              "translateX(15vw) translateY(-80px) rotate(45deg) scale(1.1)",
          },
          "30%": {
            transform:
              "translateX(35vw) translateY(60px) rotate(90deg) scale(0.9)",
          },
          "45%": {
            transform:
              "translateX(55vw) translateY(-40px) rotate(180deg) scale(1.2)",
          },
          "60%": {
            transform:
              "translateX(75vw) translateY(80px) rotate(270deg) scale(0.8)",
          },
          "75%": {
            transform:
              "translateX(90vw) translateY(-60px) rotate(315deg) scale(1.1)",
          },
          "90%": {
            transform:
              "translateX(110vw) translateY(20px) rotate(360deg) scale(1)",
          },
          "100%": {
            transform:
              "translateX(130vw) translateY(0px) rotate(405deg) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite alternate",
        "astronaut-float": "astronaut-float 25s linear infinite",
        "satellite-orbit": "satellite-orbit 30s linear infinite",
        "astronaut-drift": "astronaut-drift 15s ease-in-out infinite alternate",
        meteor: "meteor 8s linear infinite",
        "meteor-delayed": "meteor-delayed 10s linear infinite",
        orbit: "orbit 20s linear infinite",
        "orbit-reverse": "orbit-reverse 25s linear infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "ufo-fly": "ufo-fly 35s linear infinite",
        "planet-drift": "planet-drift 40s linear infinite",
        "shooting-star": "shooting-star 12s linear infinite",
        "float-up": "float-up 8s ease-in-out infinite alternate",
        "float-down": "float-down 6s ease-in-out infinite alternate",
        "astronaut-journey": "astronaut-journey 45s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
