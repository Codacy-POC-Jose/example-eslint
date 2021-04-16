module.exports = {
  plugins: [
    "security-node"
  ],
  extends: [
    "plugin:security-node/recommended",
     "plugin:unicorn/recommended"
  ],
  rules: {
    "security-node/non-literal-reg-expr": "warn",
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/no-unsafe-regex': 'warn',
    'unicorn/prefer-includes': 'warn',
    'unicorn/prefer-string-slice': 'warn'
  }
}
