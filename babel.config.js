module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "components": "./src/components",
          "config": "./src/config",
          "network": "./src/network",
          "types": "./src/types",
          "utils": "./src/utils"
        }
      }
    ]
  ]
}
