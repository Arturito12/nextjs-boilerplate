import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("plugin:prettier/recommended"),
  ...compat.extends("plugin:tailwindcss/recommended"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
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
]

export default eslintConfig
