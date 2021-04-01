# wangEditor-extension-sound-code

> wangEditor 扩展菜单 - 源码编辑

# 使用

目前本扩展未发布 npm，需要拿取 `dist/soundCode.min.js` 放在自己的项目中使用。

> 如果你在使用本扩展时无法退出源码模式，请转到 noStopPropagation 分支下获取 `dist/soundCode.min.js` 文件。
> 因本人未找到 droplist 是在哪个版本执行了 `e.stopPropagation()`，无法给与版本参考。

## 菜单注册

> wangeditor version >= 4.6.4

```js
// 将扩展菜单注册到 wangEditor 中。
soundCode(wangEditor)

const editor = new wangEditor('#div')

// Monaco Editor 加载超时（单位：毫秒）
editor.config.soundCodeTimeout = 5000

// Monaco Editor 配置项
editor.config.soundCodeOption = {}

editor.create()
```

> wangeditor version < 4.6.4

```js
const editor = new wangEditor('#div')

// 将扩展菜单注册到 wangEditor 中。
soundCode(editor)

// Monaco Editor 加载超时（单位：毫秒）
editor.config.soundCodeTimeout = 5000

// Monaco Editor 配置项
editor.config.soundCodeOption = {}

editor.create()
```

## 禁用

本扩展的菜单注册名为**soundCode**，如果在注册后需要禁用它（ >= v4.6.4），只需要在自定义菜单中排除即可

```js
editor.config.excludeMenus = ['soundCode']
```
