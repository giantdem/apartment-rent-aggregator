/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        "@typescript-eslint/semi": ['error', 'always'],
        "@typescript-eslint/brace-style": ["error", "allman", { "allowSingleLine": true }],
        "@typescript-eslint/indent": ["error", 4],
        "no-trailing-spaces": ["error"],
        "no-empty": ["error", { allowEmptyCatch: true }]
    }
};
