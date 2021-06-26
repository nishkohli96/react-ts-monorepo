module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off',
        // allow jsx syntax in js or ts files
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        '@typescript-eslint/ban-ts-comment': 'off',
    },
    ignorePatterns: ['reportWebVitals.ts'],
};
