(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{82:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" Cookie")]),a("h2",{attrs:{id:"document-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" document.cookie")]),a("p",[t._v('"cookienoparam=cookienoparamcookienoparam; cookiename=cookievalue"')]),a("p",[t._v("js 的 document上也可以增加cookie")]),a("p",[t._v("document.cookie='a=b';\n\"a=b\"")]),a("p",[t._v('document.cookie\n"cookienoparam=cookienoparamcookienoparam; a=b; cookiename=cookievalue"')]),a("h2",{attrs:{id:"会话cookie和持久cookie的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#会话cookie和持久cookie的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 会话cookie和持久cookie的区别")]),a("p",[t._v("如果不设置过期时间，则表示这个cookie生命周期为浏览器会话期间，只要关闭浏览器窗口，cookie就消失了。这种生命期为浏览会话期的cookie被称为会话cookie。会话cookie一般不保存在硬盘上而是保存在内存里。")]),a("p",[t._v("如果设置了过期时间，浏览器就会把cookie保存到硬盘上，关闭后再次打开浏览器，这些cookie依然有效直到超过设定的过期时间。")]),a("p",[t._v("存储在硬盘上的cookie可以在不同的浏览器进程间共享，比如两个IE窗口。而对于保存在内存的cookie，不同的浏览器有不同的处理方式。")]),a("h2",{attrs:{id:"如何为cookie-设置-httponly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何为cookie-设置-httponly","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何为cookie 设置 HttpOnly")]),a("p",[t._v("将cookie设置成HttpOnly是为了 "),a("code",[t._v("防止XSS攻击")]),t._v("，窃取cookie内容，这样就增加了cookie的安全性，即便是这样，也不要将重要信息存入cookie。")]),a("p",[t._v("如何在Java中设置cookie是HttpOnly呢？")]),a("p",[t._v("Servlet 2.5 API 不支持 cookie设置HttpOnly\nhttp://docs.oracle.com/cd/E17802_01/products/products/servlet/2.5/docs/servlet-2_5-mr2/")]),a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Servlet --\x3e")]),a("br"),t._v("\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("br"),t._v("\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.servlet"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("br"),t._v("\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("servlet-api"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("br"),t._v("\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.5"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("br"),t._v("\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provided"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("br"),t._v("\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("br")])]),a("p",[t._v("建议升级Tomcat7.0，它已经实现了Servlet3.0\nhttp://tomcat.apache.org/tomcat-7.0-doc/servletapi/javax/servlet/http/Cookie.html")]),a("p",[t._v("但是苦逼的是现实是，老板是不会让你升级的。那就介绍另外一种办法：")]),a("p",[t._v("利用 "),a("code",[t._v("HttpResponse")]),t._v(" 的 "),a("code",[t._v("addHeader")]),t._v(" 方法，设置 "),a("code",[t._v("Set-Cookie")]),t._v(" 的值")]),a("p",[t._v("cookie字符串的格式："),a("code",[t._v("key=value; Expires=date; Path=path; Domain=domain; Secure; HttpOnly")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//设置cookie")]),a("br"),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Set-Cookie"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"uid=112; Path=/; HttpOnly"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),a("br"),a("span",{attrs:{class:"token comment"}},[t._v("//设置多个cookie")]),a("br"),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Set-Cookie"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"uid=112; Path=/; HttpOnly"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Set-Cookie"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"timeout=30; Path=/test; HttpOnly"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),a("br"),a("span",{attrs:{class:"token comment"}},[t._v("//设置https的cookie")]),a("br"),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Set-Cookie"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"uid=112; Path=/; Secure; HttpOnly"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br")])]),a("h2",{attrs:{id:"httpsession常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpsession常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" HttpSession常见问题")]),a("p",[t._v("（在本小节中session的含义为⑤和⑥的混合）")]),a("h3",{attrs:{id:"_1、session在何时被创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、session在何时被创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、session在何时被创建")]),a("p",[t._v('一个常见的误解是以为session在有客户端访问时就被创建，然而事实是直到某server端程序调用 HttpServletRequest.getSession(true)这样的语句时才被创建，注意如果JSP没有显示的使用 <% @page session="false"%> 关闭session，则JSP文件在编译成Servlet时将会自动加上这样一条语句 HttpSession session = HttpServletRequest.getSession(true);这也是JSP中隐含的 session对象的来历。')]),a("p",[t._v("由于session会消耗内存资源，因此，如果不打算使用session，应该在所有的JSP中关闭它。")]),a("h3",{attrs:{id:"_2、session何时被删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、session何时被删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、session何时被删除")]),a("p",[t._v("综合前面的讨论，session在下列情况下被删除")]),a("ul",[a("li",[t._v("a.程序调用HttpSession.invalidate();")]),a("li",[t._v("或 b.距离上一次收到客户端发送的session id时间间隔超过了session的超时设置;")]),a("li",[t._v("或 c.服务器进程被停止（非持久session）")])]),a("h3",{attrs:{id:"_3、如何做到在浏览器关闭时删除session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、如何做到在浏览器关闭时删除session","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、如何做到在浏览器关闭时删除session")]),a("p",[t._v("严格的讲，做不到这一点。可以做一点努力的办法是在所有的客户端页面里使用javascript代码window.oncolose来监视浏览器的关闭动作，然后向服务器发送一个请求来删除session。但是对于浏览器崩溃或者强行杀死进程这些非常规手段仍然无能为力。")]),a("h3",{attrs:{id:"_4、有个httpsessionlistener是怎么回事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、有个httpsessionlistener是怎么回事","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、有个HttpSessionListener是怎么回事")]),a("p",[t._v("你可以创建这样的listener去监控session的创建和销毁事件，使得在发生这样的事件时你可以做一些相应的工作。注意是session的创建和销毁动作触发listener，而不是相反。类似的与HttpSession有关的listener还有 HttpSessionBindingListener，HttpSessionActivationListener和 HttpSessionAttributeListener。")]),a("h3",{attrs:{id:"_5、存放在session中的对象必须是可序列化的吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、存放在session中的对象必须是可序列化的吗","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、存放在session中的对象必须是可序列化的吗")]),a("p",[t._v("不是必需的。要求对象可序列化只是为了session能够在集群中被复制或者能够持久保存或者在必要时server能够暂时把session交换出内存。在 Weblogic Server的session中放置一个不可序列化的对象在控制台上会收到一个警告。我所用过的某个iPlanet版本如果 session中有不可序列化的对象，在session销毁时会有一个Exception，很奇怪。")])])}],!1,null,null,null);s.default=e.exports}}]);