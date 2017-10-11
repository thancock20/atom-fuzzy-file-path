'use babel';

import { CompositeDisposable } from 'atom';
import insertCode from './insertCode';
import getSelectedFilePath from './getSelectedFilePath';
import { filePath, html, js, markdown } from './generateCode';

/* global atom */


export default {
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.addSubscriptions('.fuzzy-finder atom-text-editor', getSelectedFilePath.fuzzyFinder);
    this.addSubscriptions('.advanced-open-file atom-text-editor', getSelectedFilePath.advancedOpenFile);
    this.addSubscriptions('.tree-view', getSelectedFilePath.treeView);
  },

  deactivate() {
    this.subscriptions.dispose();
  },

   addSubscriptions(selector, getSelectedFilePath) {
    this.subscriptions.add(
      atom.commands.add(selector, {
        'magic-file-path:file-path': function(e) {
          insertCode(getSelectedFilePath, filePath);
        },
        'magic-file-path:html:anchor': function(e) {
          insertCode(getSelectedFilePath, html.anchor);
        },
        'magic-file-path:html:img': function(e) {
          insertCode(getSelectedFilePath, html.img);
        },
        'magic-file-path:html:link': function(e) {
          insertCode(getSelectedFilePath, html.link);
        },
        'magic-file-path:html:script': function(e) {
          insertCode(getSelectedFilePath, html.script);
        },
        'magic-file-path:js:import': function(e) {
          insertCode(getSelectedFilePath, js.import);
        },
        'magic-file-path:js:import-from': function(e) {
          insertCode(getSelectedFilePath, js.importFrom);
        },
        'magic-file-path:js:require': function(e) {
          insertCode(getSelectedFilePath, js.require);
        },
        'magic-file-path:markdown:link': function(e) {
          insertCode(getSelectedFilePath, markdown.link);
        },
        'magic-file-path:markdown:image': function(e) {
          insertCode(getSelectedFilePath, markdown.image);
        }
      })
    );
  }
};
