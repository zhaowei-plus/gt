inquirer.js:
    guide风格命令行开发工具：
    guide风格的命令行，指 提问-回答 模式的命令行，inquirer.js支持常见的input输入,单选,多选,是/否等常见提问类型，并暴露了增加自定义类型的接口，参考官方文档很容易使用。


commander.js：
    git风格命令行开发工具：
    git风格命令行，是指通过主指令+子指令+参数的模式运行命令实现功能，和guide风格命令行没有本质区别，只是使用习惯的偏好


Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境


template：

meta.js 用于描述初始化项目时命令行的交互动作，通过 Inquirer.js 根据模板仓库中的 meta.js 文件中的设置，与用户进行一些简单的交互以确定项目的一些细节，在通过命令行交互确定了项目初始化的细节后，就该进入最后一道工序，按照模板初始化我们的项目啦
package.json