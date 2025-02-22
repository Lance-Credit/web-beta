module.exports = {
  apps: [
    {
      name: "app-frontend",
      node_args: "--env-file=.env",
      script: "./.output/server/index.mjs",
    },
  ],
};
