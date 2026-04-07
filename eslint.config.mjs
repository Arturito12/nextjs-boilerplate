import { defineConfig } from "eslint/config"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import prettierRecommended from "eslint-plugin-prettier/recommended"

export default defineConfig([
  ...nextCoreWebVitals,
  prettierRecommended,
  {
    rules: {
      "prettier/prettier": [
        "warn",
        {
          singleQuote: false,
          semi: false,
          trailingComma: "es5",
          printWidth: 80,
          tabWidth: 2,
          endOfLine: "auto",
        },
      ],
    },
  },
])
