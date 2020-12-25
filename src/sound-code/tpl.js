/**
 * @author fangzhicong
 * @deprecated iframe 页面的 HTML 模板
 */

export default function tpl(option = {}) {
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
