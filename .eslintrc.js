module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "cypress/globals": true
    },
    "extends": "plugin:react/recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "jest", "cypress"
    ],
    "rules": {
        "react/prop-types": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }

};