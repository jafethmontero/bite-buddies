const path = require("path");

module.exports = {
  entry: "./src/server.ts", // Set entry to TypeScript file
  target: "node", // Ensure it's for a Node.js environment
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply loader for .ts files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Allow imports without extensions
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  externals: {
    express: "commonjs express",
    kerberos: "commonjs kerberos",
    "@mongodb-js/zstd": "commonjs @mongodb-js/zstd",
    "@aws-sdk/credential-providers": "commonjs @aws-sdk/credential-providers",
    "gcp-metadata": "commonjs gcp-metadata",
    snappy: "commonjs snappy",
    socks: "commonjs socks",
    aws4: "commonjs aws4",
    "mongodb-client-encryption": "commonjs mongodb-client-encryption",
  },
};
