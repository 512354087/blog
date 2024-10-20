(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{706:function(a,s,e){"use strict";e.r(s);var t=e(76),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("Git 每次提交代码，都要写 Commit message（提交说明），否则就不允许提交。但是，一般来说，commit message 应该清晰明了，说明本次提交的目的")]),a._v(" "),s("h3",{attrs:{id:"commit-message-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit-message-的作用"}},[a._v("#")]),a._v(" Commit message 的作用")]),a._v(" "),s("ul",[s("li",[a._v("提供更多的历史信息，方便快速浏览。\n比如，下面的命令显示上次发布后的变动，每个commit占据一行。你只看行首，就知道某次 commit 的目的")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git log <last tag> HEAD --pretty=format:%s\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("可以过滤某些commit（比如文档改动），便于快速查找信息")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git log <last release> HEAD --grep feature\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("可以直接从commit生成Change log。\nChange Log 是发布新版本时，用来说明与上一个版本差异的文档，详见后文")])]),a._v(" "),s("h2",{attrs:{id:"其他优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他优点"}},[a._v("#")]),a._v(" 其他优点")]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[a._v("可读性好，清晰，不必深入看代码即可了解当前commit的作用。")]),a._v(" "),s("li",[a._v("为 Code Reviewing做准备")]),a._v(" "),s("li",[a._v("方便跟踪工程历史")]),a._v(" "),s("li",[a._v("让其他的开发者在运行 git blame 的时候想跪谢")]),a._v(" "),s("li",[a._v("提高项目的整体质量，提高个人工程素质")])]),a._v(" "),s("h2",{attrs:{id:"commit-message-的格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit-message-的格式"}},[a._v("#")]),a._v(" Commit message 的格式")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("每次提交，Commit message 都包括三个部分：header，body 和 footer")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  <type>(<scope>): <subject>\n  <BLANK LINE>\n  <body>\n  <BLANK LINE>\n  <footer>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("其中，header 是必需的，body 和 footer 可以省略。\n不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。")]),a._v(" "),s("h3",{attrs:{id:"header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[a._v("#")]),a._v(" Header")]),a._v(" "),s("p",[a._v("Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。")]),a._v(" "),s("ul",[s("li",[a._v("type")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("用于说明 commit 的类别，只允许使用下面7个标识。\n\n* feat：新功能（feature）\n* fix：修补bug\n* docs：文档（documentation）\n* style： 格式（不影响代码运行的变动）\n* refactor：重构（即不是新增功能，也不是修改bug的代码变动）\n* test：增加测试\n* chore：构建过程或辅助工具的变动\n\n如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("ul",[s("li",[a._v("scope")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。\n例如在Angular，可以是$location, $browser, $compile, $rootScope, ngHref, ngClick, ngView等。\n如果你的修改影响了不止一个scope，你可以使用*代替。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ul",[s("li",[a._v("subject")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("subject是 commit 目的的简短描述，不超过50个字符。\n\n其他注意事项：\n\n以动词开头，使用第一人称现在时，比如change，而不是changed或changes\n\n第一个字母小写\n\n结尾不加句号（.）\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h2",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[a._v("#")]),a._v(" Body")]),a._v(" "),s("p",[a._v("Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例")]),a._v(" "),s("div",{staticClass:"language-More detailed explanatory text, if necessary. Wrap it to line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("about 72 characters or so. \nFurther paragraphs come after blank lines.\n- Bullet points are okay, too\n- Use a hanging indent\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("有两个注意点:")]),a._v(" "),s("ul",[s("li",[a._v("使用第一人称现在时，比如使用change而不是changed或changes。")]),a._v(" "),s("li",[a._v("永远别忘了第2行是空行")]),a._v(" "),s("li",[a._v("应该说明代码变动的动机，以及与以前行为的对比。")])]),a._v(" "),s("h2",{attrs:{id:"footer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[a._v("#")]),a._v(" Footer")]),a._v(" "),s("p",[a._v("Footer 部分只用于以下两种情况：")]),a._v(" "),s("h3",{attrs:{id:"不兼容变动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不兼容变动"}},[a._v("#")]),a._v(" 不兼容变动")]),a._v(" "),s("p",[a._v("如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。")]),a._v(" "),s("h3",{attrs:{id:"关闭-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭-issue"}},[a._v("#")]),a._v(" 关闭 Issue")]),a._v(" "),s("p",[a._v("如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Closes #234\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"revert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[a._v("#")]),a._v(" Revert")]),a._v(" "),s("p",[a._v("还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("revert: feat(pencil): add 'graphiteWidth' option\n\nThis reverts commit 667ecc1654a317a13331b17617d973392f415f02.\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("Body部分的格式是固定的，必须写成This reverts commit <hash>.，其中的hash是被撤销 commit 的 SHA 标识符。")]),a._v(" "),s("p",[a._v("如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。")]),a._v(" "),s("h2",{attrs:{id:"commitizen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commitizen"}},[a._v("#")]),a._v(" Commitizen")]),a._v(" "),s("p",[a._v("可以使用典型的git工作流程或通过使用CLI向导Commitizen来添加提交消息格式。")]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install -g commitizen\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("commitizen init cz-conventional-changelog --save --save-exact\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("以后，凡是用到git commit命令，一律改为使用git cz。这时，就会出现选项，用来生成符合格式的 Commit message。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/3827973-39053e8f0259dfda.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/557/format/webp",alt:"commit image"}})]),a._v(" "),s("h2",{attrs:{id:"validate-commit-msg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate-commit-msg"}},[a._v("#")]),a._v(" validate-commit-msg")]),a._v(" "),s("p",[a._v("validate-commit-msg 用于检查项目的 Commit message 是否符合Angular规范。")]),a._v(" "),s("p",[a._v('该包提供了使用githooks来校验commit message的一些二进制文件。在这里，我推荐使用husky，只需要添加"commitmsg": "validate-commit-msg"到你的package.json中的nam scripts即可.')]),a._v(" "),s("p",[a._v("当然，你还可以通过定义配置文件.vcmrc来自定义校验格式。详细使用请见文档 validate-commit-msg")]),a._v(" "),s("h2",{attrs:{id:"生成-change-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-change-log"}},[a._v("#")]),a._v(" 生成 Change log")]),a._v(" "),s("p",[a._v("如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成。生成的文档包括以下三个部分：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("New features")])]),a._v(" "),s("li",[s("p",[a._v("Bug fixes")])]),a._v(" "),s("li",[s("p",[a._v("Breaking changes.")])])]),a._v(" "),s("p",[a._v("每个部分都会罗列相关的 commit ，并且有指向这些 commit 的链接。当然，生成的文档允许手动修改，所以发布前，你还可以添加其他内容。")]),a._v(" "),s("p",[a._v("conventional-changelog 就是生成 Change log 的工具，运行下面的命令即可。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install -g conventional-changelog\n$ cd my-project\n$ conventional-changelog -p angular -i CHANGELOG.md -w\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);