# Tailwind Config Viewer

![Screenshot of UI](https://gitlab.com/cecilianpartners/axis-playground/raw/master/ui-example.jpg)

Axis Playground is a local UI tool for visualizing your Tailwind CSS configuration file. Keep it open during development to quickly reference custom Tailwind values/classes. Easily navigate between sections of the configuration and copy class names to your clipboard by clicking on them.

## Installation

### NPX
Run `npx tailwind-config-viewer` from within the directory that contains your Tailwind configuration file.

### Globally
`npm i tailwind-config-viewer -g`

### Locally
`npm i tailwind-config-viewer -D`

When installing locally, you can add an entry into the package.json scripts field to run and open the viewer:

```json
"scripts": {
  "tailwind-config-viewer": "tailwind-config-viewer -o"
}
```

## Usage

Run the `tailwind-config-viewer` command from within the directory that contains your Tailwind configuration file.

## Commands

### serve (default)

The `serve` command is the default command. Running `tailwind-config-viewer` is the same as `tailwind-config-viewer serve`.

**Options**

|Option|Default|Description|
|----|----|----|
|-p, --port|`3000`|The port to run the viewer on. If occupied it will use next available port.|
|-o, --open|`false`|Open the viewer in default browser|
|-c, --config|`tailwind.config.js`|Path to your Tailwind config file|

### export

Exports the viewer to a directory that can be uploaded to a static host. It accepts the output directory path as its sole argument.

`tailwind-config-viewer export ./output-dir`

If an output directory isn't specificied it will be output to `tcv-build`.

**Options**

|Option|Default|Description|
|----|----|----|
|-c, --config|`tailwind.config.js`|Path to your Tailwind config file|

## Configuration

You can declare a `configViewer` property in your Tailwind configuration's theme object in order to customize certain aspects of the config viewer.

```js
module.exports = {
  theme: {
    // ...your Tailwind theme config
    configViewer: {
      // ... configViewer Options
    }
  }
}
```
Currently it only supports one config option: `themeReplacements`.

### themeReplacements

In some instances you may want to replace values used in your Tailwind config when it is displayed in the config viewer. One scenario where this is necessary is when you are using CSS variables for your theme values:

```js
module.exports = {
  theme: {
    colors: {
      black: 'var(--color-black)'
    }
  }
}
```

In order for the config viewer to properly display this color, you need to provide a replacement for it:

```js
module.exports = {
  theme: {
    colors: {
      black: 'var(--color-black)'
    },
    configViewer: {
      themeReplacements: {
        colors: {
          black: '#000000'
        }
      }
    }
  }
}
```

You can replace any value in your theme for display in the config viewer by setting the corresponding property/value in the `themeReplacements` object.

## Roadmap

- [x] Add static export
- [x] Add Transition section
- [x] Dark Mode toggle
- [ ] Add support for loading custom fonts / font family section
