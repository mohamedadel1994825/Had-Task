module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|react-redux|reactotron-react-native|react-native-vector-icons)/)",
  ],
  setupFilesAfterEnv: ["./setupTests.js"],
};
