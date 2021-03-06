'use babel';

export default function(getSelectedFilePath, generateCode) {
  var destinationPath = getSelectedFilePath();
  var editor = atom.workspace.getActiveTextEditor();
  var sourcePath = editor.getPath();
  var code = generateCode(sourcePath, destinationPath);
  return editor.insertText(code);
}
