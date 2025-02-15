
### 说明：

1. 本文档由DuRuofu撰写，由DuRuofu负责解释及执行。

### 修订历史：

| 文档名称   | 版本     | 作者      | 时间         | 备注   |
| ------ | ------ | ------- | ---------- | ---- |
| README | v1.0.0 | DuRuofu | 2024-05-17 | 首次建立 |

<div STYLE="page-break-after: always;"></div>

# README

### 项目目录：

```
│-dist                      编译结果
│─src                       
│	│─components            符合vue组件规范的uni-app组件目录
│	│  └─comp-a.vue         可复用的a组件
│	├─pages                 业务页面文件存放的目录
│	│  ├─index
│	│  │  └─index.vue       index页面
│	│  └─list
│	│     └─list.vue        list页面
│	├─static                存放应用引用的本地静态资源（如图片、视频等）的目录
│	├─stores                数据仓库
│	├─types                 TS类型
│	├─main.js               Vue初始化入口文件
│	├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
│	├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
│	├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
│	├─AndroidManifest.xml   Android原生应用清单文件 详见
│	├─Info.plist            iOS原生应用配置文件 详见
│	└─uni.scss              内置的常用样式变量
│-.gitignore                git忽略文件
│-index.html                页面入口文件
│-tsconfig.json             ts配置文件   
```

### 项目依赖：

- uni-app
- vue3
- TS
- uni-ui  页面组件库（uniapp官方出品）
- pinia
- eslint+ prettier
- husky

### 安装依赖

``` sh
npm i 
```


### 网络请求示例：
```js
	const res = await http<string>({
		url: 'https://jsonplaceholder.typicode.com/todos/1',
		method: "GET",
		header:{}
	})
```

### 代码提交规范：

**commit message格式**

```text
<type>(<scope>): <subject>
```

**type(必须)**  用于说明git commit的类别，只允许使用下面的标识。

- feat：新功能（feature）。
- fix：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
- docs：文档（documentation）。
- style：格式（不影响代码运行的变动）。
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）。
- perf：优化相关，比如提升性能、体验。
- test：增加测试。
- chore：构建过程或辅助工具的变动。
- revert：回滚到上一个版本。
- merge：代码合并。
- sync：同步主线或分支的Bug。

**scope(可选)**
scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

**subject(必须)**
subject是commit目的的简短描述，不超过50个字符。


其他：

- 结尾不加句号或其他标点符号。
- 根据以上规范git commit message将是如下的格式：

```text
fix(DAO):用户查询缺少username属性 
feat(Controller):用户查询接口开发
```


# 参考链接

1. https://megasu.gitee.io/uni-app-shop-note/
