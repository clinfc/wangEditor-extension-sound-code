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

    $container.on('keydown', e => {
        if (e.ctrlKey && e.keyCode == 83) {
            menu.controller.save()
        }
    })

    return $container
}
