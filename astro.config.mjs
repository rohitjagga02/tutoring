import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://rohitjagga02.github.io",
  base: "/tutoring",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});
