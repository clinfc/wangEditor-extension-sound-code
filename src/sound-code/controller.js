/**
 * @author fangzhicong
 * @deprecated 源码编辑器相关操作的控制器
 */

import tpl from './tpl.js'

export default function (menu) {
    const { container, editor } = menu

    const controller = {}

    let monacoInstance = null

    /**
     * 开启源码编辑模式
     */
    controller.open = function () {
        let iframe = container.find('iframe').elems[0]
        let timeout = editor.config.soundCodeTimeout || 5000
        let now = Date.now()

        iframe.contentDocument.write(tpl(editor.config.soundCodeOption))

        let timer = setInterval(() => {
            if (iframe.contentWindow.monacoInstance) {
                clearInterval(timer)

                monacoInstance = iframe.contentWindow.monacoInstance

                controller.open = function () {
                    // 取消菜单激活（drop list click 事件冒泡导致放在此处）
                    if (menu.isActive) {
                        menu.unActive()
                        return
                    }
                    // Monaco editor 赋值
                    monacoInstance.setValue(editor.$textElem.html())
                    // 显示 Monaco editor
                    const zIndex = menu.editor.zIndex.get('tooltip')
                    container.removeClass('hide').css('z-index', zIndex)
                    // 菜单激活
                    menu.active()
                }
                controller.open()
                return
            } else if (Date.now() - now > timeout) {
                clearInterval(timer)
                throw new Error('Monaco Editor 初始化失败')
            }
        }, 500)
    }

    /**
     * 保存 Monaco editor 数据
     */
    controller.save = function () {
        editor.$textElem.html(monacoInstance.getValue())
    }

    /**
     * 退出源码编辑模式
     */
    controller.exit = function () {
        monacoInstance.setValue('')
        container.addClass('hide').css('z-index', -1)
    }

    return controller
}
