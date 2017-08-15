'use babel'

import ref from 'path'
import _ from 'underscore-plus'

export function getRelativePath (sourcePath, destinationPath) {
  return ref.relative(ref.dirname(sourcePath), destinationPath)
    .replace(/^([^.])/, './$1')
}

export function stripIndex (path) {
  return ref.basename(path).match(/^index\./) ? ref.dirname(path) : path
}

export function getSelection () {
  return atom.workspace.getActiveTextEditor().getLastSelection().getText()
}

export function basename (path) {
  return ref.basename(path).replace(/\..+/, '')
}

export function pascalCase (phrase) {
  return _.capitalize(_.camelize(phrase))
}

export function titleCase (phrase) {
  return _.uncamelcase(_.camelize(phrase))
}

export function spaceCase (phrase) {
  return _.dasherize(phrase).replace(/-/g, ' ')
}
