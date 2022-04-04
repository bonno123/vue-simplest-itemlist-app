module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    "prettier"
    // 'plugin:vue/essential',
    // 'airbnb-base',
  ],
  parserOptions: {
    // ecmaVersion: 'latest',
  },
  plugins: [
    // 'vue',
  ],
  rules: {
  },
};
