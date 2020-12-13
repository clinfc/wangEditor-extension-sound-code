/**
 * @author fangzhicong
 * @deprecated 源码编辑的菜单扩展（主体功能实现）
 */

import wangEditor from 'wangeditor'
import container from './container.js'
import controller from './controller.js'
import dropList from './drop-list'

const { $, BtnMenu } = wangEditor

export default class SoundCode extends BtnMenu {
    constructor(editor) {
        const $elem = $(`<div class="w-e-menu"><i class="icon-embed2"></i></div>`)
        super($elem, editor)

        // 编辑区容器
        this.container = container(this)

        // 编辑区控制器
        this.controller = controller(this)

        //
        dropList(this)
    }

    clickHandler() {
        // 创建编辑器
        if (this.container.hasClass('hide')) {
            this.controller.open()
        }
    }

    tryChangeActive() {}
}
