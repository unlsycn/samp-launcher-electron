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
    extends: "standard",
    globals: {
        __static: true
    },
    plugins: ["html"],
    rules: {
        quotes: [0, "single"],
        semi: [2, "always"], //语句强制分号结尾
        indent: [2, 4], //缩进风格
        // allow paren-less arrow functions
        "arrow-parens": 0,
        // allow async-await
        "generator-star-spacing": 0,
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
    }
};
