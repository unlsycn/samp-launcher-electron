module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        "quotes": [2, "double"],//双引号
        "semi": [2, "always"], //语句强制分号结尾
        "indent": [2, 4], //缩进风格
        "brace-style": [2, "allman"],//allman(大括号换行)风格
        "camelcase": [2, { properties: "never" }],
        "array-bracket-spacing": [2, "never"],
        "default-case": 2,
        "curly": [2, "all"],
        "dot-location": [2, "property"],
        "eol-last": 2,
        "eqeqeq": [2, "allow-null"],
        "max-depth": [2, 8],
        "max-lines": [2, 500],
        "max-params": [2, { "max": 8 }],
        "no-alert": 1,
        "no-var": 2,
        "semi-spacing": 2,
        "semi-style": [2, "last"]
    },
    extends: "standard",
    globals: {
        __static: true,
        plugins: [
            "html",
            "vue",
            "ejs",
            "plugin:vue/base"
        ],
        // allow paren-less arrow functions
        "arrow-parens": 0,
        // allow async-await
        "generator-star-spacing": 0,
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
    }
};
