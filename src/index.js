/**
 * @author fangzhicong
 * @deprecated wangEditor 自定义扩展菜单（编辑区源码编辑功能）
 */

import SoundCode from './sound-code/'

/**
 * 暴露注册函数
 * @param {wangEditor} e wangEditor 实例
 */
export default function soundCode(e) {
    const key = 'soundCode'

    if (e.registerMenu) {
        e.registerMenu(key, SoundCode)
    } else if (e.config.menus.indexOf(key) == -1) {
        e.menus.extend(key, SoundCode)
        e.config.menus.push(key)
        // Monaco Editor 加载超时
        e.config.soundCodeTimeout = 5000
        // Monaco Editor 配置项
        e.config.soundCodeOption = {}
    }
}
