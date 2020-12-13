// 热替换开发模式

import registerExpandMenu from '../src/index.js'
import wangEditor from 'wangeditor'

const editor = new wangEditor('#div1')

registerExpandMenu(editor)

editor.create()

// window.editor = ediotr

// editor.disable()

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution' // 语法高亮
// import 'monaco-editor/esm/vs/editor/contrib/find/findController.js' // 查找控件
// import 'monaco-editor/esm/vs/language/html/monaco.contribution.js' // html 控件

// const monacoInstance = monaco.editor.create(document.getElementById('div2'), {
//     value: `console.log("hello,world")`,
//     language: 'html',
//     theme: 'vs-dark',
//     wordWrapMinified: false,
// })
