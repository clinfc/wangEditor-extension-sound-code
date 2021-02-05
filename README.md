# wangEditor-extension-sound-code

> wangEditor 扩展菜单 - 源码编辑

# 使用

目前本扩展未发布 npm，需要拿取 `dist/soundCode.min.js` 放在自己的项目中使用。

## 菜单注册

> version >= 4.6.4

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

> version < 4.6.4

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
