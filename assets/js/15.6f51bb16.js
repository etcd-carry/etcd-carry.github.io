(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{288:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#背景"}},[t._v("背景")])]),e("li",[e("a",{attrs:{href:"#规则简介"}},[t._v("规则简介")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("etcd的原始接口只能按照Key的前缀来批量同步数据，源集群中指定前缀下的所有数据都将被同步到目的集群。然而在某些场景下，我们期望有更细粒度的规则来精准地同步数据。我们可以通过配置Etcd-Carry过滤规则来达到这样的效果💯。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("当前过滤规则主要适用于过滤etcd中的Kubernetes数据。")])]),t._v(" "),e("h2",{attrs:{id:"规则简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则简介"}},[t._v("#")]),t._v(" 规则简介")]),t._v(" "),e("p",[t._v("目前Etcd-Carry过滤规则分三大类：")]),t._v(" "),e("ul",[e("li",[t._v("按命名空间过滤")]),t._v(" "),e("li",[t._v("按资源类型过滤")]),t._v(" "),e("li",[t._v("按标签过滤")])]),t._v(" "),e("p",[t._v("此外，我们提供了excludes参数来指定那些不希望被同步的数据，sequential参数指定那些希望被优先按序同步的数据。")])])}),[],!1,null,null,null);a.default=r.exports}}]);