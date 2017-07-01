// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
const exec = require('child_process').execSync;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "ruby-format-vscode" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var formatRuby = vscode.commands.registerCommand('extension.formatRuby', function () {
        let editor = vscode.window.activeTextEditor
        if (!editor)  return;
        try {
            exec("rufo "+vscode.window.activeTextEditor.document.fileName)
        } catch(err) {
            if(err.message.includes("command not found")){
                vscode.window.showErrorMessage("rufo not available in path. Ensure rufo gem is installed")
            }
        }
    });


    context.subscriptions.push(formatRuby);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
