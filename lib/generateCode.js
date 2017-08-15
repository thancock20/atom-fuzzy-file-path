'use babel'

import _ from 'underscore-plus'
import ref from 'path'
var relative = ref.relative
var dirname = ref.dirname

function stripIndex (path) {
  return basename(path).match(/^index\./) ? dirname(path) : path
}

function getRelativePath (sourcePath, destinationPath) {
  return relative(dirname(sourcePath), destinationPath)
    .replace(/^([^.])/, './$1')
}

function getSelection () {
  return atom.workspace.getActiveTextEditor().getLastSelection().getText()
}

function basename (path) {
  return ref.basename(path).replace(/\..+/, '')
}

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
