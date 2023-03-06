(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{284:function(t,r,e){"use strict";e.r(r);var s=e(14),v=Object(s.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#generic-flags"}},[t._v("Generic flags")])]),e("li",[e("a",{attrs:{href:"#etcd-flags"}},[t._v("Etcd flags")])]),e("li",[e("a",{attrs:{href:"#transport-flags"}},[t._v("Transport flags")])])])]),e("p"),t._v(" "),e("p",[t._v("Etcd-Carry本身就是一个命令行工具，它的命令参数如下。")]),t._v(" "),e("h2",{attrs:{id:"generic-flags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generic-flags"}},[t._v("#")]),t._v(" Generic flags")]),t._v(" "),e("p",[e("strong",[t._v("--debug bool")])]),t._v(" "),e("p",[t._v("客户端GRPC调试日志开关，默认false")]),t._v(" "),e("p",[e("strong",[t._v("--mirror-rule string")])]),t._v(" "),e("p",[t._v("Etcd-Carry同步规则文件路径，若该文件里未配置任何过滤规则，则不会同步任何数据。")]),t._v(" "),e("h2",{attrs:{id:"etcd-flags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etcd-flags"}},[t._v("#")]),t._v(" Etcd flags")]),t._v(" "),e("p",[e("strong",[t._v("--encryption-provider-config string")])]),t._v(" "),e("p",[t._v("k8s在etcd中存储Secret资源所用到的加密算法配置文件，由kube-apiserver指定。")]),t._v(" "),e("p",[e("strong",[t._v("--kube-prefix string")])]),t._v(" "),e("p",[t._v("k8s资源存储在etcd中所用的key前缀，默认为“/registry”。")]),t._v(" "),e("p",[e("strong",[t._v("--max-txn-ops uint")])]),t._v(" "),e("p",[t._v("同步更新期间每个etcd事务中允许的最大操作数，默认为128，不能超过etcd server端支持的最大值。")]),t._v(" "),e("p",[e("strong",[t._v("--rev int")])]),t._v(" "),e("p",[t._v("开始同步的起始revision，默认会从源etcd集群当前最新的revision开始同步。")]),t._v(" "),e("h2",{attrs:{id:"transport-flags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transport-flags"}},[t._v("#")]),t._v(" Transport flags")]),t._v(" "),e("p",[e("strong",[t._v("--source-cacert string")])]),t._v(" "),e("p",[t._v("和源etcd集群建立安全连接时所需要的CA文件路径。")]),t._v(" "),e("p",[e("strong",[t._v("--source-cert string")])]),t._v(" "),e("p",[t._v("和源etcd集群建立安全连接时所需要的证书文件路径。")]),t._v(" "),e("p",[e("strong",[t._v("--source-key string")])]),t._v(" "),e("p",[t._v("和源etcd集群建立安全连接时所需要的密钥文件路径。")]),t._v(" "),e("p",[e("strong",[t._v("--source-insecure-skip-tls-verify bool")])]),t._v(" "),e("p",[t._v("是否跳过源etcd集群的证书检查，默认false")]),t._v(" "),e("p",[e("strong",[t._v("--source-insecure-transport")])]),t._v(" "),e("p",[t._v("是否禁用客户端安全连接，默认为true")]),t._v(" "),e("p",[e("strong",[t._v("--source-endpoints strings")])]),t._v(" "),e("p",[t._v("源etcd集群节点列表，多个节点ip:port之间以逗号分隔。")]),t._v(" "),e("p",[e("strong",[t._v("--dest-cacert string")])]),t._v(" "),e("p",[t._v("和目的etcd集群建立安全连接时所需要的CA文件路径。")]),t._v(" "),e("p",[e("strong",[t._v("--dest-cert string")])]),t._v(" "),e("p",[t._v("和目的etcd集群建立安全连接时所需要的证书文件路径。")]),t._v(" "),e("p",[e("strong",[t._v("--dest-key string")])]),t._v(" "),e("p",[t._v("和目的etcd集群建立安全连接时所需要的密钥文件路径。")]),t._v(" "),e("p",[e("strong",[t._v("--dest-insecure-skip-tls-verify")])]),t._v(" "),e("p",[t._v("是否跳过目的etcd集群的证书检查，默认false")]),t._v(" "),e("p",[e("strong",[t._v("--dest-insecure-transport")])]),t._v(" "),e("p",[t._v("是否禁用客户端安全连接，默认为true")]),t._v(" "),e("p",[e("strong",[t._v("--dest-endpoints strings")])]),t._v(" "),e("p",[t._v("目的etcd集群节点列表，多个节点ip:port之间以逗号分隔。")]),t._v(" "),e("p",[e("strong",[t._v("--keepalive-time duration")])]),t._v(" "),e("p",[t._v("客户端连接的keepalive时间，默认2s。")]),t._v(" "),e("p",[e("strong",[t._v("--keepalive-timeout duration")])]),t._v(" "),e("p",[t._v("客户端连接的 keepalive 超时时间，默认6s。")])])}),[],!1,null,null,null);r.default=v.exports}}]);