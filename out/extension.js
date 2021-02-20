"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "vue-config-helper" is now active!');
    let disposable = vscode.commands.registerCommand('extension.romeHelper', () => {
        vscode.window.showInformationMessage('Hello World from vue-config-helper!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    console.log(' vue.config.js 帮助工具正在被释放! ');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map