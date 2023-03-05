# Figma Electron Application Builder

## Build application

### Default version

```console
~$ yarn run build:windows
~$ yarn run build:linux
~$ yarn run build:macos
```

### Portable version

```console
~$ yarn run build:windows --portable
~$ yarn run build:linux --portable
~$ yarn run build:macos --portable
```

## Configuration

### Default configuration

```ts
export const defaultConfig: RawOptions = {
  name: "Figma",
  targetUrl: "https://www.figma.com",
  singleInstance: true,
  overwrite: true,
};
```

### Platform-specific configuration

```ts
export const windowsConfig: RawOptions = {
    platform: "windows",
};

export const linuxConfig: RawOptions = {
    platform: "linux",
};

export const macosConfig: RawOptions = {
    platform: "macos",
};
```