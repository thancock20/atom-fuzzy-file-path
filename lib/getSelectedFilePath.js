'use babel';

import { $ } from 'space-pen';
import find from 'lodash/find';

/* global atom */

export default {
  fuzzyFinder: function() {
    var selector = $('.fuzzy-finder').closest('.modal');
    var view = find(atom.workspace.getModalPanels(), { element: selector[0] });
    var filePath = view.item.selectListView.getSelectedItem().filePath;
    view.item.cancel();

    return filePath;
  },

  advancedOpenFile: function() {
    var selector = $('.advanced-open-file').closest('.modal');
    var view = find(atom.workspace.getModalPanels(), { element: selector[0] });
    var filePath = view.item.querySelector('.list-item.selected').dataset.fileName;
    var editor = atom.views.getView(atom.workspace.getActiveTextEditor());
    atom.commands.dispatch(editor, 'advanced-open-file:toggle');

    return filePath;
  },

  treeView: function() {
    var selector = $('.tree-view');
    var view = selector[0];
    var filePath = view.querySelector('.list-item.selected > span').dataset.path;
    var toggleTreeView = atom.config.get('magic-file-path.toggleTreeView');
    if (toggleTreeView) {
      var editor = atom.views.getView(atom.workspace.getActiveTextEditor());
      atom.commands.dispatch(editor, 'tree-view:toggle');
    }

    return filePath;
  }
}
