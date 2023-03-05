import npargv from "npargv";
import nativefier from "nativefier";
import config from "@/config";

const params = {
  "--platform": {
    name: "platform",
    callback: (value: string) => value,
  },

  "--portable": {
    name: "portable",
    type: "boolean",
  },
};

export class App {
  run() {
    const { args } = npargv(params);
    let options = config.default;

    switch (args.platform) {
      case "windows":
        options = { ...options, ...config.windows };
        break;

      case "linux":
        options = { ...options, ...config.linux };
        break;

      case "macos":
        options = { ...options, ...config.macos };
        break;
    }

    if (args.portable) {
      options = {
        ...options,
        ...config.portable,
      };
    }

    nativefier(
      options,
      (error: Error | undefined, path: string | undefined) => {
        if (error) {
          console.error(error);
          return;
        }

        console.log("App has been createdd to", path);
      }
    );
  }
}

const app = new App();
app.run();
