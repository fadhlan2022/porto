import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Secara otomatis mendeteksi versi React
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Mematikan aturan ini untuk React 17+
      "no-unused-vars": "warn", // Memunculkan peringatan jika variabel tidak digunakan
    },
  },
];
