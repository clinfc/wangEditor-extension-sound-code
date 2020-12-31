/**
 * @author fangzhicong
 * @deprecated 生成源码编辑器容器节点
 */

import wangEditor from 'wangeditor'

const { $ } = wangEditor

/**
 * 初始化节点
 * @param {SoundCodeMenu} menu 源码编辑的菜单实例
 */
export default function container(menu) {
    const $container = $(`<div class="sound-code"><iframe frameborder="0"></iframe></div>`)
    $container.addClass('hide')
    menu.editor.$textContainerElem.append($container)

    return $container
}

// iframe 的文档内容（将通过 document.write 写入 iframe 文档中）
export function tpl(option = {}) {
    option = Object.assign({ language: 'html', theme: 'vs-dark' }, option || {})
    return `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">.container {width: 100%;height: 100%;position: fixed;top: 0;left: 0;}</style>
    </head>
    <body>
        <div class="container"></div>
        <script src="https://cdn.staticfile.org/monaco-editor/0.21.2/min/vs/loader.min.js"></script>
        <script>
            require.config({ paths: { vs: 'https://cdn.staticfile.org/monaco-editor/0.21.2/min/vs' } });
            require(['vs/editor/editor.main'], function () {
                const div = document.querySelector('.container');
                window.monacoInstance = monaco.editor.create(div, ${JSON.stringify(option)});
                window.addEventListener('resize', function () {
                    monacoInstance.layout();
                });
            })
        </script>
    </body>
</html>
`
}
