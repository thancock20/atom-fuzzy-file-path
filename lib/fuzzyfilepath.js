'use babel';

import { CompositeDisposable } from 'atom';
import insertCode from './insertCode';
import generateCode from './generateCode';

/* global atom */

export default {
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add('.fuzzy-finder atom-text-editor', {
        'fuzzyfilepath:file-path': function(e) {
          insertCode(generateCode.filePath);
        },
        'fuzzyfilepath:html:anchor': function(e) {
          insertCode(generateCode.html.anchor);
        },
        'fuzzyfilepath:html:img': function(e) {
          insertCode(generateCode.html.img);
        },
        'fuzzyfilepath:html:link': function(e) {
          insertCode(generateCode.html.link);
        },
        'fuzzyfilepath:html:script': function(e) {
          insertCode(generateCode.html.script);
        },
        'fuzzyfilepath:js:import': function(e) {
          insertCode(generateCode.js.import);
        },
        'fuzzyfilepath:js:import-from': function(e) {
          insertCode(generateCode.js.importFrom);
        },
        'fuzzyfilepath:js:require': function(e) {
          insertCode(generateCode.js.require);
        },
        'fuzzyfilepath:markdown:link': function(e) {
          insertCode(generateCode.markdown.link);
        },
        'fuzzyfilepath:markdown:image': function(e) {
          insertCode(generateCode.markdown.image);
        }
      })
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
