module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module",
    },
    "env": {
        "node": true,
        "jest": true,
    },
    "plugins": ["@typescript-eslint/eslint-plugin"],
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    "root": true,
    "ignorePatterns": [".eslintrc.js"],
    "rules": {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",

        // Quotes
        "quotes": [2, "double"],
        "quote-props": ["error", "always"],

        // Comments
        "capitalized-comments": 0,
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": ["/"],
                "block": {
                    "exceptions": ["*", "-"],
                },
            },
        ],
        "multiline-comment-style": 0,

        // Spacing
        "comma-spacing": [
            2,
            {
                "after": true,
                "before": false,
            },
        ],
        "space-before-function-paren": [
            2,
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always",
            },
        ],
        "keyword-spacing": [
            2,
            {
                "after": true,
                "before": true,
            },
        ],

        // Line
        "brace-style": [
            2,
            "1tbs",
            {
                "allowSingleLine": true,
            },
        ],
        "semi": [
            2,
            "always",
            {
                "omitLastInOneLineBlock": true,
            },
        ],
        "newline-after-var": 0,
        "no-multiple-empty-lines": [
            2,
            {
                "max": 2,
                "maxEOF": 0,
                "maxBOF": 0,
            },
        ],
        "multiline-ternary": 0,
        "max-lines": [2, 100],
        "linebreak-style": 0,
        "function-call-argument-newline": [2, "consistent"],
        "object-curly-newline": [
            2,
            {
                "ImportDeclaration": {
                    "consistent": true,
                    "multiline": true,
                },
            },
        ],
        // Core
        "no-var": "error",
        "indent": [
            "off",
            4,
            {
                "SwitchCase": 1,
            },
        ],
        "camelcase": 0,
        // Tabs
        "no-tabs": 0,

        // code...
        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "no-return-assign": 0,
        "comma-dangle": 0,
        "eol-last": [2, "always"],
        "eqeqeq": [2, "smart"],
        "global-require": 0,
        "dot-notation": 0,
        "no-shadow": 0,
        "no-plusplus": 0,
        "no-underscore-dangle": 0,
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true,
            },
        ],
        "unicode-bom": [2, "never"],
        "padded-blocks": [2, "never"],
        "max-params": [2, 6],
        "max-len": [
            2,
            {
                "code": 150,
                "comments": 100,
                "tabWidth": 4,
                "ignoreUrls": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true,
                "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\(",
            },
        ],
        "operator-linebreak": [
            1,
            "after",
            {
                "overrides": {
                    "?": "before",
                    ":": "before",
                },
            },
        ],
        "no-extra-semi": 1,
        "semi-spacing": [1, { "before": false, "after": true }],
    },
};
