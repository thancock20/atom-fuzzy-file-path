'use babel'

import {
  getRelativePath,
  stripIndex,
  getSelection,
  basename,
  pascalCase,
  titleCase,
  spaceCase } from './utils'

var JS_EXT = /\.jsx?$/

export default {
  filePath: function (sourcePath, destinationPath) {
    return getRelativePath(sourcePath, destinationPath)
  },

  html: {
    anchor: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, stripIndex(destinationPath))
      var text = getSelection() || spaceCase(basename(destinationPath))
      return `<a href="${relativePath}">${text}</a>`
    },

    img: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, destinationPath)
      var text = getSelection() || spaceCase(basename(destinationPath))
      return `<img src="${relativePath}" alt="${text}">`
    },

    link: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, destinationPath)
      return `<link href="${relativePath}" rel="stylesheet">`
    },

    script: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, destinationPath)
      return `<script src="${relativePath}"></script>`
    }
  },

  js: {
    import: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, stripIndex(destinationPath))
        .replace(JS_EXT, '')
      return `import '${relativePath};'\n`
    },

    importFrom: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, stripIndex(destinationPath))
        .replace(JS_EXT, '')
      var text = getSelection() || pascalCase(basename(destinationPath))
      return `import ${text} from '${relativePath};'\n`
    },

    require: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, stripIndex(destinationPath))
        .replace(JS_EXT, '')
      return `require('${relativePath}')`
    }
  },

  markdown: {
    link: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, destinationPath)
      var text = getSelection() || spaceCase(basename(destinationPath))
      return `[${text}](${relativePath})`
    },

    image: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, destinationPath)
      var text = getSelection() || spaceCase(basename(destinationPath))
      return `![${text}](${relativePath})`
    }
  }
}
