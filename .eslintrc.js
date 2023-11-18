module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        indent: 'off',
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'import/no-dynamic-require': 0,
        'comma-dangle': ['error', 'only-multiline'],
        'no-underscore-dangle': [0, { allowAfterThis: true }],
        'no-undef': [0, { _: false }],
        'prefer-promise-reject-errors': [0],
        'no-param-reassign': [0],
        'no-return-await': [0],
        'no-use-before-define': [0],
        'no-mixed-operators': [0],
        'no-useless-catch': [0],
        'class-methods-use-this': [0],
        'max-classes-per-file': [0],
        'no-empty': [0],
        'no-console': [1],
        'func-names': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-useless-return': 'off',
        'no-unused-expressions': ['error', { allowTernary: true }],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    },
    plugins: ['prettier']
};
