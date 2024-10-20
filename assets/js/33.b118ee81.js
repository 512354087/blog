(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{668:function(s,n,t){"use strict";t.r(n);var e=t(76),a=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[s._v("#")]),s._v(" js")]),s._v(" "),n("h3",{attrs:{id:"数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),n("ul",[n("li",[s._v("基本类型")])]),s._v(" "),n("p",[s._v("boolean null string number symbol bigInt undefined")]),s._v(" "),n("ul",[n("li",[s._v("对象类型")])]),s._v(" "),n("p",[s._v("Object")]),s._v(" "),n("h3",{attrs:{id:"val-let-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#val-let-区别"}},[s._v("#")]),s._v(" val let 区别")]),s._v(" "),n("p",[s._v("val 有变量提升 let 没有 let 不能重写变量 var 可以")]),s._v(" "),n("h3",{attrs:{id:"apply-call-可以改变-this-指向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apply-call-可以改变-this-指向"}},[s._v("#")]),s._v(" apply call 可以改变 this 指向")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("apply\n对象 person 中包括了 fullName 方法，该方法使用了 this 指针；\nperson.fullName.apply(person1) 将 person 对象 fullName() 方法中的 this 指针修改为 person1 对象；\nperson.fullName.apply(person2) 将 person 对象 fullName() 方法中的 this 指针修改为 person2 对象。")])]),s._v(" "),n("li",[n("p",[s._v("call\n对象 person 中包括了 fullName 方法，该方法使用了 this 指针；\nperson.fullName.call(person1) 将 person 对象的 fullName() 方法中的 this 指针修改为 person1 对象；\nperson.fullName.call(person2) 将 person 对象的 fullName() 方法中的 this 指针修改为 person2 对象。")])]),s._v(" "),n("li",[n("p",[s._v('传参\napply() 多参数调用方法：person.fullName.apply(person1, ["Seattle", "USA"]))')]),s._v(" "),n("p",[s._v('call() 多参数调用方法：person.fullName.call(person1, "Seattle", "USA"))')])])]),s._v(" "),n("h3",{attrs:{id:"addeventlistener"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener"}},[s._v("#")]),s._v(" addEventListener()")]),s._v(" "),n("ul",[n("li",[s._v("addEventListener() 方法为指定元素添加事件处理程序。语法如下：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  element.addEventListener(event, function, useCapture)\n  第一个参数是事件的类型，如 “click” 或 “mousedown”。\n  第二个参数是当事件发生时我们需要调用的函数。\n  第三个参数是布尔值，指定使用事件冒泡还是事件捕获，此参数是可选的\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("自定义事件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 创建 CustomEvent 对象\nvar myEvent = new CustomEvent('myEvent', {\n  detail: {\n    key1: 'value1',\n    key2: 'value2'\n  }\n});\n\n// 触发事件并传递参数\nelement.dispatchEvent(myEvent);\n\nfunction myEventHandler(event) {\n  var detail = event.detail; // 获取传递的参数\n  console.log(detail.key1, detail.key2); // 输出参数值\n}\n\n// 监听自定义事件\nelement.addEventListener('myEvent', myEventHandler);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"react-生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期"}},[s._v("#")]),s._v(" react 生命周期")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("装载阶段：当组件实例被创建并插入DOM中时调用。\nconstructor(): 初始化React组件的状态。\ncomponentDidMount(): 组件已输出到DOM后执行，适合进行网络请求、定时器设置等。\n\n更新阶段：当组件的属性或状态发生变化时会触发。\ncomponentDidUpdate(): 组件更新后会调用此方法\n\n卸载阶段：当组件从DOM中移除时调用。\ncomponentWillUnmount(): 组件即将卸载时调用，可以在这里清除定时器、取消网络请求等。\n\ngetDerivedStateFromProps 它会在调用 render 方法之前\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"微任务和宏任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微任务和宏任务"}},[s._v("#")]),s._v(" 微任务和宏任务")]),s._v(" "),n("p",[s._v("JS 执行时，V8 会创建一个全局执行上下文，在创建上下文的同时，V8 也会在内部创建一个微任务队列。")]),s._v(" "),n("p",[s._v("有微任务队列，自然就有宏任务队列，任务队列中的每一个任务则都称为宏任务，在当前宏任务执行过程中，如果有新的微任务产生，就添加到微任务队列中。")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("宏任务")]),s._v(" "),n("th",[s._v("微任务")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("渲染事件")]),s._v(" "),n("td",[s._v("Promise.[ then/catch/finally ]")])]),s._v(" "),n("tr",[n("td",[s._v("请求")]),s._v(" "),n("td",[s._v("proxy")])]),s._v(" "),n("tr",[n("td",[s._v("script 代码块")]),s._v(" "),n("td",[s._v("MutationObserver(监听 DOM)")])]),s._v(" "),n("tr",[n("td",[s._v("setTimeout")]),s._v(" "),n("td",[s._v("node 中的 process.nextTick")])]),s._v(" "),n("tr",[n("td",[s._v("setInterval")]),s._v(" "),n("td",[s._v("queueMicrotask")])]),s._v(" "),n("tr",[n("td",[s._v("Node 中的 setImmediate")]),s._v(" "),n("td",[s._v("async/await")])]),s._v(" "),n("tr",[n("td",[s._v("I/O")]),s._v(" "),n("td",[s._v("...")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  console.log(1)  //宏1\n\tsetTimeout(()=>{ // 宏任务\n      console.log(2)\n  })\n  new Promise( resolve => { // 微\n      setTimeout(()=>{ // 宏任务\n        console.log(3)\n      })\n      resolve(4) // 回调 是微任务\n      console.log(5)\n  }).then( num => {\n      console.log(num)\n  })\n  function a(){ // 宏任务\n    console.log(6)\n  }\n  async function b(){ // 宏任务\n    await a()\n    console.log(7)\n  }\n  b()\n  console.log(8) // 宏任务\n\n  // 1 5 6  8  4 7 2 3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"javascript-防抖和节流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-防抖和节流"}},[s._v("#")]),s._v(" JavaScript 防抖和节流")]),s._v(" "),n("p",[s._v("一、防抖")]),s._v(" "),n("p",[s._v("1-1 防抖基本概念")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  防抖具体指的是某个函数在某段时间内，无论触发了多少次回调，都只执行最后一次。假如我们设置了一个等待时间 3 秒的函数，在这 3 秒内如果遇到函数调用请求就重新计时 3 秒，直至新的 3 秒内没有函数调用请求，此时执行函数，不然就以此类推重新计时。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("1-2 防抖实现原理")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  防抖实现原理就是利用定时器，函数第一次执行时设定一个定时器，并且通过闭包缓存起来，之后调用时发现已经设定过定时器就清空之前的定时器，并重新设定一个新的定时器，如果存在没有被清空的定时器，当定时器计时结束后触发函数执行。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("二、节流")]),s._v(" "),n("p",[s._v("2-1 节流基本概念")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  函数节流指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 无视后来产生的函数调用请求，也不会延长时间间隔。3 秒间隔结束后第一次遇到新的函数调用会触发执行，然后在这新的 3 秒内依旧无视后来产生的函数调用请求，以此类推。函数节流非常适用于函数被频繁调用的场景，例如：window.onresize() 事件、mousemove 事件、上传进度等情况。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("2-2 节流实现原理")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  实现原理就是通过一个布尔类型变量来判断是否可执行回调，当变量为true时，生成一个定时器，同时将变量取反通过闭包保存起来，当定时器执行完回调后，再将变量变为true，在变量为期false间，调用节流函数不会生成定时器\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"存储"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[s._v("#")]),s._v(" 存储")]),s._v(" "),n("p",[n("b",[s._v("cookie，localStorage，sessionStorage，indexDB")])]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[s._v("特性")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("cookie")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("localStorage")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("sessionStorage")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("indexDB")])])]),s._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("数据生命周期")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("一般由服务器生成，可以设置过期时间")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("除非被清理，否则一直存在")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("页面关闭就清理")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("除非被清理，否则一直存在")])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("数据存储大小")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("4K")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("5M")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("5M")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("无限")])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("与服务端通信")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("每次都会携带在 header 中，对于请求性能影响")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("不参与")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("不参与")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("不参与")])])])]),s._v(" "),n("p",[s._v("从上表可以看到，cookie 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 localStorage 和 sessionStorage 。对于不怎么改变的数据尽量使用 localStorage 存储，否则可以用 sessionStorage 存储。")]),s._v(" "),n("h2",{attrs:{id:"js-阻止事件冒泡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-阻止事件冒泡"}},[s._v("#")]),s._v(" js 阻止事件冒泡")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("window.onload = function () {\n  var oDiv1 = document.getElementById('div1');\n  var oDiv2 = document.getElementById('div2');\n\n  oDiv1.onclick = function (ev){\n      var oEvent = ev || event;\n      alert(\"this is div1\");\n\n      //js阻止事件冒泡\n      oEvent.cancelBubble = true;\n      oEvent.stopPropagation();\n\n      //js阻止链接默认行为，没有停止冒泡\n      oEvent.preventDefault();\n      return false;\n  }\n\n  oDiv2.onclick = function (ev){\n      var oEvent = ev || event;\n      alert(\"this is div2\");\n      oEvent.cancelBubble = true;\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"js-经典面试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-经典面试"}},[s._v("#")]),s._v(" js 经典面试")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.javascript的typeof返回哪些数据类型\nObject number function boolean underfined\n2 js数组去重\n//利用对象属性不能相等 去重\nfunction sort(arr){\n      var obj={};\n      var newArr=[];\n      for (var i = 0; i < arr.length; i++){\n          if(!obj[arr[i]]){ //如果能查找到，证明数组元素重复了\n            obj[arr[i]] = 1;\n            newArr.push(arr[i]);\n          }\n      };\n      return newArr;\n}\nvar arr=[1,2,3,4,4,4,5,3];\nconsole.log(sort(arr)；\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"时间复杂度-时间与数据增长的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度-时间与数据增长的关系"}},[s._v("#")]),s._v(" 时间复杂度 (时间与数据增长的关系)")]),s._v(" "),n("p",[s._v("数据结构和算法本身解决的是“快”和“省”的问题，即如何让代码运行得更快，如何让代码更省存储空间。所以，执行效率是算法一个非常重要的考量指标。那如何来衡量你编写的算法代码的执行效率呢？时间、空间复杂度分析。")]),s._v(" "),n("h2",{attrs:{id:"空间复杂度-空间与数据增长的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度-空间与数据增长的关系"}},[s._v("#")]),s._v(" 空间复杂度 (空间与数据增长的关系)")]),s._v(" "),n("p",[s._v("前面我讲过，时间复杂度的全称是渐进时间复杂度，表示算法的执行时间与数据规模之间的增长关系。类比一下，空间复杂度全称就是渐进空间复杂度（asymptotic space complexity），表示算法的存储空间与数据规模之间的增长关系。\n空间复杂度是对一个算法在运行过程中临时占用存储空间大小的量度。和时间复杂度相似，它是内存增长的趋势。\n常见的空间复杂度有 O(1)、O(n) 和 O(n^2)")]),s._v(" "),n("h2",{attrs:{id:"函数珂里化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数珂里化"}},[s._v("#")]),s._v(" 函数珂里化")]),s._v(" "),n("ul",[n("li",[s._v("珂里化是指把接受多个参数的函数变换成一个单一参数")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function add() {\n  const _args = [...arguments];\n  function fn() {\n    _args.push(...arguments);\n    return fn;\n  }\n  fn.toString = function() {\n    return _args.reduce((sum, cur) => sum + cur);\n  }\n  return fn;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("珂里化的应用：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const checkType = (type, content) => {\n  return Object.prototype.toString.call(content) === `[object ${type}]`;\n}\nconsole.log(checkType('Number', 2));\n\nconst curry = (type) => {\n  return function(content) {\n    return Object.prototype.toString.call(content) === `[object ${type}]`;\n  }\n}\nconst isNumber = curry('Number');\nconsole.log(isNumber(3));\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);