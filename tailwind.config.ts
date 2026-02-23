import type { Config } from "tailwindcss";

const config: Config = {
  // Ativa a estratégia de classe para o modo escuro
  darkMode: "class",
  
  // Consolidação de todos os caminhos de arquivos
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/seo/**/*.{ts,tsx}",
    "./src/social/**/*.{ts,tsx}",
  ],
  
  theme: {
    extend: {
      // Definição da stack de fontes personalizada
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial"],
      },
    },
  },
  
  plugins: [],
} satisfies Config;

export default config;
