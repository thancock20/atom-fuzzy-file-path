'use babel'

import {CompositeDisposable} from 'atom'
import insertCode from './insertCode'
import generateCode from './generateCode'

/* global atom */

export default {
  subscriptions: null,

  activate (state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('.fuzzy-finder atom-text-editor', {
      'fuzzyfilepath:import': function (e) {
        insertCode(generateCode.import)
      },
      'fuzzyfilepath:import-from': function (e) {
        insertCode(generateCode.importFrom)
      }
    }))
  },

  deactivate () {
    this.subscriptions.dispose()
  }
}
