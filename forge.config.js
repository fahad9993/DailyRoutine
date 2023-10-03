module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./build-assests/logo",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        iconUrl:
          "https://github.com/fahad9993/DailyRoutine/blob/main/build-assests/logo.ico",
        setupIcon: "./build-assests/logo",
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
          icon: "./build-assests/logo",
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        options: {
          icon: "./build-assests/logo",
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
