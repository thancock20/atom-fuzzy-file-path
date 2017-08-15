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

  import: function (sourcePath, destinationPath) {
    var destinationPath = stripIndex(destinationPath)
    var relativePath = getRelativePath(sourcePath, destinationPath).replace(/\.jsx?$/, '')
    return `import '${relativePath};'\n`
  },

  importFrom: function (sourcePath, destinationPath) {
    var destinationPath = stripIndex(destinationPath)
    var relativePath = getRelativePath(sourcePath, destinationPath).replace(/\.jsx?$/, '')
    var identifierName = getSelection() ||
      _.capitalize(_.camelize(basename(destinationPath)))
    return `import ${identifierName} from '${relativePath};'\n`
  },

  markdownLink: function (sourcePath, destinationPath) {
    var relativePath = getRelativePath(sourcePath, destinationPath)
    var linkText = getSelection() ||
      _.uncamelcase(_.camelize(basename(destinationPath)))
    return `[${linkText}](${relativePath})`
  }
}
