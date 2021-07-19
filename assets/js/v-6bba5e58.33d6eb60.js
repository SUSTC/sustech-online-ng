(self.webpackChunk=self.webpackChunk||[]).push([[60],{3903:(n,e,l)=>{"use strict";l.r(e),l.d(e,{data:()=>s});const s={key:"v-6bba5e58",path:"/service/network/ipv6/",title:"校内 IPv6 设置教程",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"IPv6 桥接",slug:"ipv6-桥接",children:[]},{level:2,title:"IPv6 NAT ©️ 戴郭轶",slug:"ipv6-nat-©️-戴郭轶",children:[]}],filePathRelative:"service/network/ipv6/README.md",git:{createdTime:1623941591e3,updatedTime:1623942305e3,contributors:[]}}},1152:(n,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>Fn});var s=l(6252);const m=l.p+"assets/img/image.479a39f2.png",a=l.p+"assets/img/image-3.02e26d7e.png",c=l.p+"assets/img/image-4-1024x143.2a090d7f.png",t=l.p+"assets/img/image-5-1024x257.64606c22.png",g=l.p+"assets/img/image-6-1024x333.35fa27ad.png",v=l.p+"assets/img/image-7.92fbc0c7.png",i=l.p+"assets/img/image-8-1024x484.331032f7.png",r=l.p+"assets/img/image-9-1024x435.08f5d1e0.png",u=l.p+"assets/img/image-10-1024x161.2a97dbab.png",f=l.p+"assets/img/image-11-1024x983.924ed25d.png",p=l.p+"assets/img/image-13-1024x530.58c81057.png",W=l.p+"assets/img/image-12.9f5996ad.png",A=l.p+"assets/img/image-14-1024x783.48b3c8ae.png",b=l.p+"assets/img/image-15-1024x173.35df410f.png",P=l.p+"assets/img/image-16-1024x538.314b13c1.png",d=l.p+"assets/img/image-18.b4cdc8f8.png",H=(0,s.Wm)("h1",{id:"校内-ipv6-设置教程",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#校内-ipv6-设置教程","aria-hidden":"true"},"#"),(0,s.Uk)(" 校内 IPv6 设置教程")],-1),w=(0,s.Wm)("p",null,"本篇教程是在南方科技大学的网络环境下写成。据我所知，下发128位前缀 IPv6 地址的学校不止南科大一所，本篇教程事实上具有普适性，其他大学的同学也可以进行参考。",-1),O=(0,s.Wm)("p",null,"事实上，在中国电信的家宽一般下发56位前缀的地址，也可使用本方法，但并无必要，可直接由路由分配地址无需 NAT。",-1),x=(0,s.Wm)("p",null,"南科大的 IPv6 下发的地址是 128位前缀，换言之，子网大小为 1，仅够一台设备使用。为了让一个物理网口下的多个设备共享网络，常见的解决方案是（1）交换机（2）路由器。两者的区别想必需要用到此教程的同学应该了解，这里仅介绍具体配置。",-1),D=(0,s.Wm)("h2",{id:"ipv6-桥接",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#ipv6-桥接","aria-hidden":"true"},"#"),(0,s.Uk)(" IPv6 桥接")],-1),I=(0,s.Uk)("根据工信部"),k={href:"https://www.miit.gov.cn/jgsj/txs/wjfb/art/2020/art_ed97eb9802da4f168acb823227663f1b.html",target:"_blank",rel:"noopener noreferrer"},j=(0,s.Uk)("《关于开展2019年IPv6网络就绪专项行动的通知》"),o=(0,s.Uk)(" 的要求，“新部署的家庭网关设备应全部支持IPv6，并默认配置支持IPv4/IPv6双栈，能够为网关下挂设备分配 IPv6 地址”。同学们新购买的路由器应该都支持 IPv6。例如水星等，国产路由器一般会将 IPv6 与 IPv4的设置分开。"),G=(0,s.Wm)("p",null,"在南科大校园网下，在 IPv6 的设置中选择 “桥接模式” 或 ”中继模式“，下级设备应该能分配到 2001 开头的公网 IPv6 地址。",-1),U=(0,s.Wm)("h2",{id:"ipv6-nat-©️-戴郭轶",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#ipv6-nat-©️-戴郭轶","aria-hidden":"true"},"#"),(0,s.Uk)(" IPv6 NAT ©️ 戴郭轶")],-1),B=(0,s.Wm)("p",null,"一些同学如果有特殊需求可能会使用 OpenWrt，里面有丰富的插件提供多样的服务。",-1),h=(0,s.Wm)("p",null,"这篇教程可以说是一篇咕咕咕了很久的教程，大概是在去年才开学的时候，当时公网限速在 700KB/s，所以就买了新路由3刷了 OpenWrt 进行多拨来解除限速，（现在解除了，最快能够跑到 90MB/s 左右，没有必要使用多拨来提升带宽）。不过当时也花了很久配置 IPv6 的经验，可能仍值得分享。",-1),X=(0,s.Wm)("p",null,"由于南科大的分配的128位前缀的地址，子网空间不足，需要使用本该被淘汰掉的 NAT 网络地址转换使得下级设备能够联网，正确配置后的效果如下：",-1),y=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:m,alt:"img"})],-1),z=(0,s.Wm)("p",null,"同时北洋园和蒲公英pt均能正常识别（需要在OpenWrt开启 UPnP ）：",-1),Y=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:"data:image/png;base64,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",alt:"img"})],-1),L=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:"data:image/png;base64,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",alt:"img"})],-1),E=(0,s.Wm)("p",null,[(0,s.Wm)("strong",null,"（PS：不要学我IPv6不打码直接发，因为 v6 默认就是公网地址，我在发完教程后会使用新的地址）")],-1),T=(0,s.Wm)("p",null,"电脑能成功获取内网IPv6,同时手机也能获得64位的 v6 地址，正常访问 v6 网络：",-1),M=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:a,alt:"img"})],-1),C=(0,s.Wm)("p",null,"相应的流程并不复杂，只需要一台刷入OpenWrt的路由器，一台电脑，WinSCP（可选），以及足够的耐心。",-1),S=(0,s.Wm)("p",null,"首先，我们需要登录进入路由器的后台管理页面,依次点击网络-接口：",-1),R=(0,s.Wm)("p",null,[(0,s.Uk)("将全局网络选项前缀进行修改，我个人使用的是 "),(0,s.Wm)("code",null,"fd34:fe56:7891:2f3a::/64"),(0,s.Uk)("；可以按照自己喜好选择一个内网前缀。")],-1),q=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:c,alt:"img"})],-1),N=(0,s.Wm)("p",null,"随后单击lan一栏的修改，我们需要修改一下内网的设置，滑到下方，点击高级设置，按照下图进行勾选：",-1),F=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:t,alt:"img"})],-1),K=(0,s.Wm)("p",null,"然后点击IPv6设置，路由器通告服务和DHCPv6服务修改为服务器模式，NDP代理设置为禁用，DHCPv6选择无状态的+有状态的，并勾选总是通告默认路由：",-1),J=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:g,alt:"img"})],-1),Q=(0,s.Wm)("p",null,"完成后点击保存&应用。",-1),V=(0,s.Wm)("p",null,"随后进入wan口的设置，勾选上使用内置的IPv6管理",-1),Z=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:v,alt:"img"})],-1),_=(0,s.Wm)("p",null,"随后进入wan6口的设置，将协议修改为DHCPv6客户端，请求IPv6地址为force，请求指定长度的IPv6前缀为已禁用：",-1),$=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:i,alt:"img"})],-1),nn=(0,s.Wm)("p",null,"进入高级设置，勾选上使用内置的IPv6管理，强制链路和使用默认网关：",-1),en=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:r,alt:"img"})],-1),ln=(0,s.Wm)("p",null,"之后选择网络-DHCP/DNS，进入高级设置，取消勾选禁止解析IPv6 DNS记录：",-1),sn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:u,alt:"img"})],-1),mn=(0,s.Wm)("p",null,"进入网络-防火墙：",-1),an=(0,s.Wm)("p",null,"将转发改为接受，下面的区域也需要改：",-1),cn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:f,alt:"img"})],-1),tn=(0,s.Wm)("p",null,"进入自定义规则，粘贴如下内容：",-1),gn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:p,alt:"img"})],-1),vn=(0,s.Wm)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-text"},[(0,s.Wm)("code",null,"WAN6=eth0.2\nLAN=br-lan\nip6tables -t nat -A POSTROUTING -o $WAN6 -j MASQUERADE\nip6tables -A FORWARD -m conntrack –ctstate RELATED,ESTABLISHED -j ACCEPT\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"4"),(0,s.Wm)("br")])],-1),rn=(0,s.Wm)("p",null,[(0,s.Uk)("其中 "),(0,s.Wm)("code",null,"eth0.2"),(0,s.Uk)(" 和 "),(0,s.Wm)("code",null,"br-lan"),(0,s.Uk)(" 需要修改为你网络-接口中显示的内容：")],-1),un=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:W,alt:"img"})],-1),fn=(0,s.Wm)("p",null,"如果有多拨需求的，提醒一下需要在负载均衡中将 defalut-rule 的备用成员改成默认（使用主路由表），由于我重新刷机做的教程且现在没有多拨的必要，就不演示了，没有需求的可以略过这一点。",-1),pn=(0,s.Wm)("p",null,"经过如上配置，重启路由器后，在网络，诊断中应该能够成功 ping 通 openwrt.org 的v6了，说明你的路由器已经成功接入 IPv6 网络了：",-1),Wn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:A,alt:"img"})],-1),An=(0,s.Uk)("但是如果我们打开 "),bn={href:"https://www.test-IPv6.com/",target:"_blank",rel:"noopener noreferrer"},Pn=(0,s.Uk)("https://www.test-IPv6.com/"),dn=(0,s.Uk)(" ，我们电脑还是没有连上v6的，这里就需要我们修改流量转发的路由表了，使用ssh工具连上路由器，没有的可以点击系统-TTYD终端：依次输入一下代码："),Hn=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Uk)("route -A inet6 "),(0,s.Wm)("span",{class:"token function"},"add"),(0,s.Uk)(" default gw fe80::3e8c:93ff:fed0:83c2 dev eth0.2\n/etc/init.d/firewall restart\n/etc/init.d/network restart\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br")])],-1),wn=(0,s.Wm)("p",null,"其中，第一行的fe80开头的一串v6地址需要修改为本机的默认网关，可以在状态-概览下获得，如图：",-1),On=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:b,alt:"img"})],-1),xn=(0,s.Uk)("而后面的eth0.2就是你网口的编号了，和防火墙哪那里一样，这个时候我们再打开 "),Dn={href:"https://www.test-IPv6.com/",target:"_blank",rel:"noopener noreferrer"},In=(0,s.Uk)("https://www.test-IPv6.com/"),kn=(0,s.Uk)(" ，可以发现，我们电脑已经接入IPv6了："),jn=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:P,alt:"img"})],-1),on=(0,s.Wm)("p",null,"但是，如果路由器关机重启后，我们刚才输入的三行代码会丢失，也就是会回到路由器有 IPv6 而电脑无法连接 IPv6 的状态，这个时候我们就需要编辑一个开机自启的脚本，让路由器再开机时自动添加：",-1),Gn=(0,s.Wm)("p",null,[(0,s.Uk)("具体操作为：使用 WinSCP 连接并登陆进入路由器，在 "),(0,s.Wm)("code",null,"/etc/hotplug.d/iface/"),(0,s.Uk)(" 目录下新建名为 "),(0,s.Wm)("code",null,"restart-IPv6"),(0,s.Uk)(" 的文件，修改内容为：")],-1),Un=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token shebang important"},"#!/bin/sh"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token punctuation"},"["),(0,s.Uk)(),(0,s.Wm)("span",{class:"token string"},[(0,s.Uk)('"'),(0,s.Wm)("span",{class:"token variable"},"$ACTION"),(0,s.Uk)('"')]),(0,s.Uk)(),(0,s.Wm)("span",{class:"token operator"},"="),(0,s.Uk)(),(0,s.Wm)("span",{class:"token function"},"ifup"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token punctuation"},"]"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token operator"},"||"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token builtin class-name"},"exit"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token number"},"0"),(0,s.Uk)("\nroute -A inet6 "),(0,s.Wm)("span",{class:"token function"},"add"),(0,s.Uk)(" default gw fe80::3e8c:93ff:fed0:83c2 dev eth0.2\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br")])],-1),Bn=(0,s.Wm)("p",null,"最后一行需要修改成和刚才一样的内容，然后给予可执行权限。",-1),hn=(0,s.Wm)("p",null,"没有 WinSCP 的可以在终端内输入以下内容：",-1),Xn=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"vim"),(0,s.Uk)(" /etc/hotplug.d/iface/restart-IPv6\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),yn=(0,s.Wm)("p",null,[(0,s.Uk)("然后再文本框中输入上面的三行内容，按 Esc 后退出 insert 模式，输入 "),(0,s.Wm)("code",null,":wq"),(0,s.Uk)(" 退出。")],-1),zn=(0,s.Wm)("p",null,"然后给予可执行权限：",-1),Yn=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"chmod"),(0,s.Uk)(" +x /etc/hotplug.d/iface/restart-IPv6\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Ln=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:d,alt:"img"})],-1),En=(0,s.Wm)("p",null,"这个时候，恭喜你，成功配置IPv6了哦~",-1),Tn=(0,s.Wm)("p",null,"对了，如果有挂pt需求的同学，别忘了在服务-UPnP中打开哦~",-1),Mn=(0,s.Wm)("p",null,"还存在一些应该是OpenWrt本身的问题，在使用IPv6的时候，无法手动配置端口转发，UPnP的端口转发是成功的，但是在防火墙下无法配置，使用 Socat 也没有成功。",-1),Cn=(0,s.Wm)("p",null,"感谢阅读！如果有什么问题或者建议，可以和我发邮件联系。",-1),Sn=(0,s.Wm)("p",null,"我的个人邮箱为：ntdgy2001@gmail.com / 12011211@mail.sustech.edu.cn",-1),Rn=(0,s.Uk)("原文章地址（NAT 部分）©️ 戴郭轶："),qn={href:"https://ntdgy.top/ntdgy/30/",target:"_blank",rel:"noopener noreferrer"},Nn=(0,s.Uk)("https://ntdgy.top/ntdgy/30/"),Fn={render:function(n,e){const l=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[H,w,O,x,D,(0,s.Wm)("p",null,[I,(0,s.Wm)("a",k,[j,(0,s.Wm)(l)]),o]),G,U,B,h,X,y,z,Y,L,E,T,M,C,S,R,q,N,F,K,J,Q,V,Z,_,$,nn,en,ln,sn,mn,an,cn,tn,gn,vn,rn,un,fn,pn,Wn,(0,s.Wm)("p",null,[An,(0,s.Wm)("a",bn,[Pn,(0,s.Wm)(l)]),dn]),Hn,wn,On,(0,s.Wm)("p",null,[xn,(0,s.Wm)("a",Dn,[In,(0,s.Wm)(l)]),kn]),jn,on,Gn,Un,Bn,hn,Xn,yn,zn,Yn,Ln,En,Tn,Mn,Cn,Sn,(0,s.Wm)("p",null,[Rn,(0,s.Wm)("a",qn,[Nn,(0,s.Wm)(l)])])],64)}}}}]);