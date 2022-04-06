module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off'
            }
        }
    ],
    rules: {
        indent: ['off', 'tab'],
        'linebreak-style': ['off', 'unix'],
        quotes: ['off', 'double'],
        'comma-dangle': ['error', 'never']
    }
};
