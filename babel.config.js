module.exports = {
  presets: [
    [
      "@vue/app",
      "@babel/preset-env",
      {
        polyfills: ["es6.promise", "es6.symbol"]
      }
    ]
  ]
};
