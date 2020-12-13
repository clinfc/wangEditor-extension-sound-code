/**
 * @author fangzhicong
 * @deprecated 菜单的 drop list 事件绑定
 */

import wangEditor from 'wangeditor'

const { $, DropList } = wangEditor

export default function dropList(menu) {
    const { $elem, editor } = menu

    const dropListConfig = {
        title: '',
        width: 110,
        type: 'list',
        list: [
            {
                $elem: $(`<div class="exit-monaco">保存内容</div>`),
                value: 0,
            },
            {
                $elem: $(`<div class="exit-monaco">保存并退出</div>`),
                value: 1,
            },
            {
                $elem: $(`<div class="exit-monaco">退出</div>`),
                value: 2,
            },
        ],
        clickHandler(value) {
            switch (value) {
                case 0:
                    menu.controller.save()
                    break
                case 1:
                    menu.controller.save()
                    menu.controller.exit()
                    break
                default:
                    menu.controller.exit()
                    break
            }
        },
    }
    const dropList = new DropList(menu, dropListConfig)

    function show() {
        if (menu.isActive) {
            $elem.css('z-index', editor.zIndex.get('menu'))

            // 显示
            dropList.showTimeoutId = window.setTimeout(() => {
                dropList.show()
            }, 200)
        }
    }

    function hide() {
        if (menu.isActive) {
            $elem.css('z-index', 'auto')
            // 隐藏
            dropList.hideTimeoutId = window.setTimeout(() => {
                dropList.hide()
            })
        }
    }

    $elem.on('mouseenter', show).on('mouseleave', hide)
}
