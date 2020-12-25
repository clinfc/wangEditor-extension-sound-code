/**
 * @author fangzhicong
 * @deprecated wangEditor 自定义扩展菜单（编辑区源码编辑功能）
 */

import SoundCode from './sound-code/'

/**
 * 暴露注册函数
 * @param {wangEditor} editor wangEditor 实例
 */
export default function soundCode(editor) {
    const key = 'soundCode'

    if (editor.config.menus.indexOf(key) == -1) {
        editor.menus.extend(key, SoundCode)
        editor.config.menus.push(key)
        // Monaco Editor 加载超时
        editor.config.soundCodeTimeout = 5000
        // Monaco Editor 配置项
        editor.config.soundCodeOption = {}
    }
}
