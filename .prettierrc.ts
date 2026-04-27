import { type Config } from "prettier";

const config: Config = {
  plugins: ['prettier-plugin-astro'],
  arrowParens: 'avoid',
  singleQuote: false,
  semi: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;