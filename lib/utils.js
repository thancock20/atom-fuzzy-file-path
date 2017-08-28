'use babel'

import ref from 'path'

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
  return phrase[0].toUpperCase() + phrase.slice(1).replace(/[_-]+(\w)/g, (m, p1) => p1.toUpperCase())
}

export function spaceCase (phrase) {
  return phrase.replace(/([a-z])([A-Z])|[_-]+/g, (m, p1='', p2='') => p1 + " " + p2.toLowerCase())
}
