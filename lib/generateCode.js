'use babel'

import {
  getRelativePath,
  stripIndex,
  getSelection,
  basename,
  pascalCase,
  titleCase } from './utils'

export default {
  filePath: function (sourcePath, destinationPath) {
    return getRelativePath(sourcePath, destinationPath)
  },

  js: {
    import: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, stripIndex(destinationPath))
        .replace(/\.jsx?$/, '')
      return `import '${relativePath};'\n`
    },

    importFrom: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, stripIndex(destinationPath))
        .replace(/\.jsx?$/, '')
      var text = getSelection() || pascalCase(basename(destinationPath))
      return `import ${text} from '${relativePath};'\n`
    }
  },

  markdown: {
    link: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, destinationPath)
      var text = getSelection() || titleCase(basename(destinationPath))
      return `[${text}](${relativePath})`
    },

    image: function (sourcePath, destinationPath) {
      var relativePath = getRelativePath(sourcePath, destinationPath)
      var text = getSelection() || titleCase(basename(destinationPath))
      return `![${text}](${relativePath})`
    }
  }
}
