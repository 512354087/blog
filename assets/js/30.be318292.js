(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{664:function(s,a,n){"use strict";n.r(a);var e=n(76),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"如何实现三栏布局（左右两边固定宽度，中间自适应）？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现三栏布局（左右两边固定宽度，中间自适应）？"}},[s._v("#")]),s._v(" 如何实现三栏布局（左右两边固定宽度，中间自适应）？")]),s._v(" "),a("ul",[a("li",[s._v("使用flex布局： 父元素设置 display: flex，左右两边设置固定宽度，中间设置 flex-grow: 1；")]),s._v(" "),a("li",[s._v("使用浮动布局：左右两边设置固定宽度，而且分别设置 float:left和right，这个方法有一个需要注意的是在HTML中，中间栏需要和右边栏进行对调；")]),s._v(" "),a("li",[s._v("使用绝对定位布局：左右两边设置固定宽度和 position:absolute,而且分别设置 left: 0和 right: 0，中间栏只要设置左右margin为左右栏的宽度就可以了（需要注意的是左右两边需要设置 top: 0，不然右边会被订下来）")])]),s._v(" "),a("h2",{attrs:{id:"如何实现弹窗水平垂直居中？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现弹窗水平垂直居中？"}},[s._v("#")]),s._v(" 如何实现弹窗水平垂直居中？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div class="dialog">\n    <div class="dialog-content"></div>\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("position元素已知宽度")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".dialog{\n    position: relative;\n    width: 500px;\n    height: 500px;\n    background: goldenrod\n}\n.dialog-content{\n    width: 200px;\n    height: 200px;\n    background: rebeccapurple;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin:-100px 0 0 -100px;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("transform 元素未知宽度")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".dialog{\n    position: relative;\n    width: 500px;\n    height: 500px;\n    background: goldenrod\n}\n.dialog-content{\n    width: 200px;\n    height: 200px;\n    background: rebeccapurple;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"知道如何修改this的指向吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知道如何修改this的指向吗？"}},[s._v("#")]),s._v(" 知道如何修改this的指向吗？")]),s._v(" "),a("p",[s._v("修改this指向的办法有三种： apply、 call和 bind\napply、 call：通过传入需要指向的对象，从而改变 this的指向，指向传入的第一个参数;\nbind：它会创建一个函数的实例，其this值会被绑定到传给bind()函数的值。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  window.color = 'red';\n  var o = { color:'blue' };\n  function sayColor(){\n      console.log(this.color);\n  }\n  var globalSaycolor = sayColor;\n  var objectSaycolor = sayColor.bind(o);\n  globalSaycolor();  // red\n  objectSaycolor();  // blue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("其实还有一种：new关键字改变this指向\n因为在 new的过程中，其中有一个步骤为将构造函数内部的 this指向实例对象，所以通过 new关键字也可以改变 this的指向。")]),s._v(" "),a("h2",{attrs:{id:"apply和-call的区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply和-call的区别？"}},[s._v("#")]),s._v(" apply和 call的区别？")]),s._v(" "),a("p",[s._v("相同点：可以用来代替另一个对象调用一个方法，将一个函数的对象上下文从初始的上下文改变为由thisObj指定的新对象。\n不同点：实际上， apply和 call的功能是一样的，只是传入的参数列表形式不同。\napply：最多只能有两个参数——新 this对象和一个数组 argArray。如果给该方法传递多个参数，则把参数都写进这个数组里面，当然，即使只有一个参数，也要写进数组里。如果 argArray不是一个有效的数组或 arguments对象，那么将导致一个 TypeError。如果没有提供 argArray和 thisObj任何一个参数，那么Global对象将被用作 thisObj，并且无法被传递任何参数。\ncall：它可以接受多个参数，第一个参数与 apply一样，后面则是一串参数列表。这个方法主要用在js对象各方法相互调用的时候，使当前this实例指针保持一致，或者在特殊情况下需要改变this指针。如果没有提供 thisObj参数，那么 Global 对象被用作 thisObj。")]),s._v(" "),a("h2",{attrs:{id:"map和-object-有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map和-object-有什么区别？"}},[s._v("#")]),s._v(" map和 Object 有什么区别？")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('1. 一个对象通常都有自己的原型，所以一个对象总有一个"prototype"键。\n2. 一个对象的键只能是字符串或者Symbols，但一个Map的键可以是任意值。\n3. 你可以通过size属性很容易地得到一个Map的键值对个数，而对象的键值对个数只能手动确认\n')])])]),a("h2",{attrs:{id:"npm出现位置错误时-可以解决的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm出现位置错误时-可以解决的方法"}},[s._v("#")]),s._v(" npm出现位置错误时 可以解决的方法")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1. 清理缓存\n2. 升级版本。\n3. 切换镜像。\n")])])]),a("h2",{attrs:{id:"面试题1-实现数组扁平化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题1-实现数组扁平化"}},[s._v("#")]),s._v(" 面试题1 实现数组扁平化")]),s._v(" "),a("p",[s._v("将一个多维数组变为一维数组：[1, [2, 3, [4, 5]]]  ------\x3e    [1, 2, 3, 4, 5]")]),s._v(" "),a("ul",[a("li",[s._v("1.ES6的flat(depth) depth Infinity 无穷大")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let arr = [1, [2, 3, [4, 5]]];\nconst newArr = arr.flat(Infinity);\nconsole.log(newArr)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("2.序列化后正则")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let str = JSON.stringify(arr).replace(/(\\[|\\])/g, '');\nstr = '[' + str + ']';\nJSON.parse(str);   // [1, 2, 3, 4, 5]\nconsole.log(str)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("3.树状数据最直接是递归")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function flat(arr:any[]):number[]{\n    let newArr:any[] = []\n    for (let child of arr){\n        if (child instanceof Array){\n            newArr = newArr.concat(flat(child))\n        }else {\n            newArr.push(child)\n        }\n    }\n    return newArr\n}\nconsole.log(flat(arr))\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"面试题二-实现数组去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题二-实现数组去重"}},[s._v("#")]),s._v(" 面试题二 实现数组去重")]),s._v(" "),a("ul",[a("li",[a("ol",[a("li",[s._v("使用 filter 方法  返回数组匹配的第一个")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const arr2:string[] = ["banana", "apple", "orange", "lemon", "apple", "lemon"];\nfunction removeDuplicates(data:string[]) {\n    return data.filter((value, index) => data.indexOf(value) === index);\n}\nconsole.log(removeDuplicates(arr2)); // [ \'banana\', \'apple\', \'orange\', \'lemon\' ]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("2.使用 ES6 的 Set Set 是 ES6 中的新对象类型，用于创建唯一key的集合。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function removeDuplicates1(data:string[]){\n    return [...new Set(data)]\n}\nconsole.log(removeDuplicates1(arr2)); // [ 'banana', 'apple', 'orange', 'lemon' ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"面试题三-排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题三-排序"}},[s._v("#")]),s._v(" 面试题三 排序")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1.基础排序算法")])]),s._v(" "),a("li",[a("p",[s._v("2.进阶排序算饭")])]),s._v(" "),a("li",[a("p",[s._v("冒泡")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function bubbleSortBase(arr:any[]){\n  const len = arr.length;\n  for(let i=0;i<len;i++){\n    for(let j=0;j<len-1;j++){\n      // 前一个数字 > 大于后一个数字\n      if(arr[j]>arr[j+1]){\n        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; // es6 解构赋值\n      }\n    }\n  }\n  return arr;\n}\n\nconsole.log(bubbleSortBase(newArr))\n\n// es6 默认转成字符串\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("ES6 排序")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(newArr.sort((a,b)=>{return (a as number) - (b as number);}))\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);