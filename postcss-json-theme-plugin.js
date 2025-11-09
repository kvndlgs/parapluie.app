// postcss-json-theme-plugin.js
import plugin from "tailwindcss/plugin";
import fs from "fs";
import path from "path";

module.exports = plugin.withOptions(
  ({ jsonPath = "./design-tokens.tokens.json" } = {}) => {
    return function ({ addBase }) {
      const themeData = JSON.parse(
        fs.readFileSync(path.resolve(jsonPath), "utf8"),
      );

      let themeCss = "@theme {\n";

      // Add colors
      if (themeData.colors) {
        for (const [name, value] of Object.entries(themeData.colors)) {
          themeCss += `  --color-${name}: ${value};\n`;
        }
      }

      // Add spacing
      if (themeData.spacing) {
        for (const [name, value] of Object.entries(themeData.spacing)) {
          themeCss += `  --spacing-${name}: ${value};\n`;
        }
      }

      themeCss += "}\n";

      addBase({
        ":root": {}, // Needed to ensure the @theme block is processed
        [themeCss]: {},
      });
    };
  },
);
