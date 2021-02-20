import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {

  console.log('Congratulations, your extension "vue-config-helper" is now active!')

  let disposable = vscode.commands.registerCommand('extension.romeHelper', () => {

    vscode.window.showInformationMessage('Hello World from vue-config-helper!')
  })

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {
  console.log(' vue.config.js 帮助工具正在被释放! ')
}
