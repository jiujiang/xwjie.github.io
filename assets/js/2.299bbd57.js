(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{50:function(t,e,r){t.exports=r.p+"assets/img/time.d7b637d5.png"},87:function(t,e,r){"use strict";r.r(e);var s=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"同步异步和水平扩展垂直扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步异步和水平扩展垂直扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 同步异步和水平扩展垂直扩展")]),s("p",[t._v("关于水平扩展和垂直扩展，很多同学应该都听过这2个概念，在系统架构里面经常说到，“架构要灵活，要能支持水平扩展和垂直扩展，巴拉巴拉。。。”，话每个人都会说，那么讲究什么是水平扩展什么是垂直扩展，关键是什么，如何能做到呢？ 今天简单说说个人的理解。")]),s("p",[t._v("打个比喻，假设现在有一堆的任务完成不了，当前的生产力无法完成，需要扩展的话，那么简单来说，"),s("strong",[t._v("水平扩展就是加人，垂直扩展就是加班l")]),t._v("。人不够，加人就是水平扩展，那么加人肯定是比较简单的，一个人做不完就2个，2个不够就10个，总有够的一天。加人容易解决，但是成本也高啊！所以你是老板的话，你更加乐意是让员工垂直扩展-加班，人还是一个人，活多了！加班和加人不一样，是有极限的，一个人加的班是由一定限度的。这里的加班"),s("strong",[t._v("不一定是工作时间的加长，更加多的是工作能力的提升")]),t._v("，个人的成长。"),s("strong",[t._v("怎么样才能加强工作能力？就是改变工作模式")]),t._v("，把自己的处理任务模式优化一下，让"),s("strong",[t._v("相同的资源能处理更加多的任务")]),t._v("，如把小任务集中处理，任务管理的统筹学等，这些都能提高效率。")]),s("p",[t._v("那么我们说回到技术，一个人能处理多少任务，我们可以简单理解为系统的"),s("strong",[t._v("吞吐量")]),t._v("，水平扩展就是增加节点增加机器搞集群这样可以处理更加多请求，垂直扩展就是修改代码让系统可以支持更加高的吞吐量。以前在webflux没有出来之前，我们更多的是优化代码，提升性能，这需要很高的技术能力和修改量，而现在有了webflux之后，我们可以使用webflux，让系统支持更加高的吞吐量。")]),s("h2",{attrs:{id:"webflux为什么能支持高吞吐量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webflux为什么能支持高吞吐量","aria-hidden":"true"}},[t._v("#")]),t._v(" webflux为什么能支持高吞吐量")]),s("p",[t._v("首先我们要知道webflux和之前的传统方式相比由什么不同？ webflux需要依赖异步servlet或者netty。我们重点说说异步servlet，我们只需要知道"),s("strong",[t._v("非异步的servlet阻塞了什么")]),t._v("就知道了。")]),s("p",[t._v("以最常见的springmvc+部署在tomcat举例，请求先到tomcat容器，tomcat的线程池会分配一个线程（假设叫线程A）处理该请求，其实就是调用该请求对于的servlet，也就是我们熟悉的spring的DispatchServlet，然后代码就到spring框架里面，在这里业务代码处理多久，线程A就要等多久，这就是"),s("strong",[t._v("同步阻塞调用")]),t._v("。那么tomcat的线程池容量是由一定大小的，当请求多了之后，线程就会用完，用完了之后就无法处理更加多的请求，这个时候就可能报失败，也可能排队，看tomcat的线程池配置，其实和jdk的线程池的配置是一样的。这就限制了系统的吞吐量！")]),s("p",[t._v("而webflux的响应式编程模式下，前面的步骤还是一样的，不同的是这个时候，spring框架也会由一个自己的线程池，tomcat的线程把任务交给spring框架后，然后就返回了，线程A就不需要阻塞等待，就可以去处理下一个请求了！这样就可以支持更加高的吞吐量，在相同的线程数下！就是说"),s("strong",[t._v("响应式编程里面，tomcat容器的线程根本不需要阻塞的等待！等任务处理完了，会通知tomcat容器，这就是异步！")])]),s("h2",{attrs:{id:"性能对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能对比","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能对比")]),s("p",[t._v("这里有一篇文章，很直观的说明了这2者的性能区别 "),s("a",{attrs:{href:"https://blog.csdn.net/get_set/article/details/79492439",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring WebFlux性能测试——响应式Spring的道法术器")]),t._v("，里面最后一张图片很能说明问题。")]),s("p",[s("img",{attrs:{src:r(50),alt:"Spring WebFlux性能测试——响应式Spring的道法术器"}})]),s("p",[t._v("其实每一个请求都是100ms，为什么请求并发多了之后，传统模式下后面的响应时间需要500-1000ms甚至更多的时间？"),s("strong",[t._v("因为你在排队等啊！这个500，你是等前面的4个处理完了才到你，所以你等了500ms，spring框架处理真的还是只花了100ms！而webflux这种模式下，响应时间基本是一条线没有变化，因为响应式编程里面，你根本不需要等！")])]),s("p",[t._v("这里我还写了一个没有spring框架的纯的异步servlet的demo，大家可以体会一下，重点需要知道，同步的servlet阻塞了什么！ github地址："),s("a",{attrs:{href:"https://github.com/xwjie/springwebflux-ask/tree/master/servlet3",target:"_blank",rel:"noopener noreferrer"}},[t._v("servlet3demo")])]),s("h2",{attrs:{id:"重要概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 重要概念")]),s("ul",[s("li",[t._v("水平扩展：加人，垂直扩展：加班。加班的体现更多的工作模式的优化，就是处理能力的提升。")]),s("li",[t._v("同步才有阻塞和非阻塞之分，因为他"),s("strong",[t._v("要等")]),t._v("。阻塞就是傻等，等到完成为止。非阻塞就是看一下没有完成就干别的事情去了，然后过一些时间在回来看完成没有，一直到完成为止。这2者的区别在于"),s("strong",[t._v("等的方式不同")]),t._v("！")]),s("li",[t._v("异步没有阻塞非阻塞之分，都是非阻塞，因为他"),s("strong",[t._v("根本不需要等")]),t._v("。异步都必定有"),s("strong",[t._v("回调")]),t._v("接口（回调通知），任务完成后会接收到通知。")]),s("li",[t._v("同步："),s("strong",[t._v("主动")]),t._v("等待，异步："),s("strong",[t._v("被动")]),t._v("接受通知。")]),s("li",[t._v("同步servlet阻塞了servlet容器的线程导致任务排队/丢弃，限制了吞吐量。")]),s("li",[t._v("webflux实现高吞吐量关键在于异步，不需要等待。")]),s("li",[t._v("webflux的高吞吐量并不会让你的任务更加快，任务处理该多少时间还是多少时间。")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),s("p",[t._v("个人认为，spring的weblfux响应式编程的高吞吐量特性，将会逐步会成为技术趋势，成为我们对系统进行垂直扩展的首选。那么应该如何进行spring的weblfux响应式编程呢？请参考我这篇文章："),s("a",{attrs:{href:"https://www.imooc.com/article/27181",target:"_blank",rel:"noopener noreferrer"}},[t._v("springboot2 webflux 响应式编程学习路径")]),t._v("，个人建议把基础夯实了在学习，直接学习步子扯的太大会有太多疑惑，这些疑惑迟早你要退回来补。当然更加高效的观看我的实战课程 "),s("a",{attrs:{href:"http://coding.imooc.com/class/209.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringBoot2.0不容错过的新特性 WebFlux响应式编程")]),t._v("，海量的知识点，从简到难，一个一个知识点底层原理运行机制的讲解，最后还直播讲解使用IoC/AOP编写类似feign的声明式的全响应式框架，相信你一定有能有所获！听完课程后，你也可以和面试官扯扯相关知识点的底层实现了！7小时只需要128元，良心课程，绝对物超所值！！：）")]),s("p",[t._v("同学们，看完了本文章，是不是也应该准备学习webflux对自己垂直扩展一下呢？提升自己的技术能力，让自己相同的工作时间赚更加多的钱。 "),s("a",{attrs:{href:"http://coding.imooc.com/class/209.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("去看看吧")])])])}],a=r(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);e.default=n.exports}}]);