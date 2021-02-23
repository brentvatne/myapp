const isStaging = process.env.MY_APP_ENV === "staging";
const bundleIdentifier = isStaging
  ? "xyz.bront.easbuildapp.staging"
  : "xyz.bront.easbuildapp";
const pkg = bundleIdentifier;
const slug = `myapp-${isStaging ? "staging" : "production"}`;

export default ({ config }) => ({
  ...config,
  expo: {
    name: slug,
    slug,
    version: "1.0.0",
    ios: {
      bundleIdentifier,
    },
    android: {
      package: pkg,
    },
    assetBundlePatterns: ["**/*"],
  },
});
