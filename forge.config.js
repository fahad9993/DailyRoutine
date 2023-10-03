const { resolve } = require("path");

module.exports = {
  packagerConfig: {
    asar: true,
    icon: resolve(__dirname, "build-assests", "logo.ico"),
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        iconUrl:
          "https://github.com/fahad9993/DailyRoutine/blob/main/build-assests/logo.ico",
        setupIcon: resolve(__dirname, "build-assests", "logo.ico"),
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: resolve(__dirname, "build-assests", "logo.ico"),
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        options: {
          icon: resolve(__dirname, "build-assests", "logo.ico"),
        },
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
