'use babel'

import ref from 'path'
var relative = ref.relative
var basename = ref.basename
var dirname = ref.dirname

function stripIndex(path) {
  return basename(path).match(/^index\./) ? dirname(path) : path
}

function getRelativePath(sourcePath, destinationPath) {
  return relative(dirname(sourcePath), destinationPath)
    .replace(/^([^.])/, './$1')
    .replace(/\.jsx?$/, '')
}

export default {
  import: function (sourcePath, destinationPath) {
    var destinationPath = stripIndex(destinationPath)
    var relativePath = getRelativePath(sourcePath, destinationPath)
    return `import '${relativePath}'\n`
  },

  importFrom: function (sourcePath, destinationPath) {
    var destinationPath = stripIndex(destinationPath)
    var relativePath = getRelativePath(sourcePath, destinationPath)
    var identifierName = basename(destinationPath).replace(/\..+/, '')
    return `import ${identifierName} from '${relativePath}'\n`
  }
}
