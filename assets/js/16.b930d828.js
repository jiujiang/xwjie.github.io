(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"spring得到指定注解的类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring得到指定注解的类","aria-hidden":"true"}},[t._v("#")]),t._v(" spring得到指定注解的类")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),s("br"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("br"),s("br"),t._v("\t"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" IOException "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("br"),t._v("\t\tConfigurableApplicationContext appCtx "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SpringApplication"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("run")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Application"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("\t\t"),s("br"),t._v("\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String packageSearchPath "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"classpath*:com/ljm/springboot/**/*.class"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("\t\t"),s("br"),t._v("\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Resource"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" resources "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("br"),t._v("\t\t\t\tappCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getResources")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("packageSearchPath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("\t\t\t\t"),s("br"),t._v("\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" SimpleMetadataReaderFactory factory "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),s("br"),t._v("                "),s("span",{attrs:{class:"token class-name"}},[t._v("SimpleMetadataReaderFactory")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),s("br"),t._v("\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Resource resource "),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" resources"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("br"),t._v("             "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" MetadataReader mdReader "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" factory"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getMetadataReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("             "),s("br"),t._v("             "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" AnnotationMetadata am "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mdReader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getAnnotationMetadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("             Set"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" types "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" am"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getAnnotationTypes")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("             "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String type "),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" types"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("br"),t._v("            \t "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("equals")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("br"),t._v("            \t\t System"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("println")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getFilename")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("+")]),s("span",{attrs:{class:"token string"}},[t._v('" annotationde "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Component"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("            \t\t "),s("span",{attrs:{class:"token keyword"}},[t._v("break")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("            \t "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("br"),t._v("             "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("br"),t._v("             "),s("br"),t._v("         "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("br"),t._v("\t\t appCtx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("close")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("br"),t._v("\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("br"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("br"),s("br"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("br"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("LJMTest")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("br"),s("br"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("br"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),s("br"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("LJMTest2")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("br"),s("br"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("br")])])])}],!1,null,null,null);a.default=o.exports}}]);