import { RawOptions } from "@/types";

export const defaultConfig: RawOptions = {
  name: "Figma",
  targetUrl: "https://www.figma.com",
  singleInstance: true,
  overwrite: true,
};

export const portableConfig: RawOptions = {
  portable: true,
};

export const windowsConfig: RawOptions = {
  platform: "windows",
};

export const linuxConfig: RawOptions = {
  platform: "linux",
};

export const macosConfig: RawOptions = {
  platform: "macos",
};

export default {
  default: defaultConfig,
  portable: portableConfig,
  windows: windowsConfig,
  linux: linuxConfig,
  macos: macosConfig,
};
