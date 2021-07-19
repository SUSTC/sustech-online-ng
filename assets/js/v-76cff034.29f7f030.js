(self.webpackChunk=self.webpackChunk||[]).push([[4970],{260:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>l});const l={key:"v-76cff034",path:"/service/email/",title:"电子邮件服务",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"通过网页收发邮件",slug:"通过网页收发邮件",children:[{level:3,title:"通过 QQ 电脑客户端进入企业邮网页",slug:"通过-qq-电脑客户端进入企业邮网页",children:[]}]},{level:2,title:"在移动设备上收发邮件",slug:"在移动设备上收发邮件",children:[{level:3,title:"参数",slug:"参数",children:[]},{level:3,title:"微信",slug:"微信",children:[]},{level:3,title:"苹果自带邮件应用（Mail.app）",slug:"苹果自带邮件应用-mail-app",children:[]},{level:3,title:"QQ邮箱客户端",slug:"qq邮箱客户端",children:[]},{level:3,title:"Outlook客户端",slug:"outlook客户端",children:[]},{level:3,title:"安卓手机通用教程",slug:"安卓手机通用教程",children:[]}]},{level:2,title:"在计算机上收发邮件",slug:"在计算机上收发邮件",children:[{level:3,title:"Windows自带的邮件应用",slug:"windows自带的邮件应用",children:[]},{level:3,title:"MacOS自带的邮件应用",slug:"macos自带的邮件应用",children:[]},{level:3,title:"Outlook桌面版",slug:"outlook桌面版",children:[]}]},{level:2,title:"更多阅读/参考",slug:"更多阅读-参考",children:[]}],filePathRelative:"service/email/README.md",git:{createdTime:159446045e4,updatedTime:1625889507e3,contributors:[]}}},705:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>J});var l=a(6252);const r=(0,l.uE)('<h1 id="电子邮件服务" tabindex="-1"><a class="header-anchor" href="#电子邮件服务" aria-hidden="true">#</a> 电子邮件服务</h1><p>学校使用企业邮箱作为邮件系统，并为每位同学分配形如<strong>12010100@mail.sustech.edu.cn</strong>的邮箱。</p><p>一般来说，教职员的邮箱后缀为**@sustech.edu.cn**，同学的邮箱后缀为**@mail.sustech.edu.cn**，每位同学还可以申请一个带有姓名拼音和入学年份的邮箱别名（如在2020年入学的张三，将可以申请别名为 <strong>zhangs2020@mail.sustech.edu.cn</strong> 的邮箱。若需申请姓名+入学年份的别名邮箱，向信息中心发主题问“申请邮箱别名”的邮件，即可申请。</p><p>电子邮件可以通过网页或客户端收取。</p><h2 id="通过网页收发邮件" tabindex="-1"><a class="header-anchor" href="#通过网页收发邮件" aria-hidden="true">#</a> 通过网页收发邮件</h2>',5),n=(0,l.Uk)("访问 QQ 企业邮箱登录页"),i={href:"https://exmail.qq.com/login",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("https://exmail.qq.com/login"),h=(0,l.Uk)("，输入邮箱和密码登入。也可通过"),o={href:"https://mail.sustech.edu.cn/",target:"_blank",rel:"noopener noreferrer"},c=(0,l.Uk)("https://mail.sustech.edu.cn/"),s=(0,l.Uk)("上方的"),u={href:"https://mail.sustech.edu.cn/sso?lang=zh",target:"_blank",rel:"noopener noreferrer"},m=(0,l.Uk)("CAS登录邮箱"),p=(0,l.Uk)("链接登入，首次登入需要输入密码绑定CAS账户和邮箱。"),f=(0,l.uE)('<h3 id="通过-qq-电脑客户端进入企业邮网页" tabindex="-1"><a class="header-anchor" href="#通过-qq-电脑客户端进入企业邮网页" aria-hidden="true">#</a> 通过 QQ 电脑客户端进入企业邮网页</h3><p>登录 QQ 企业邮箱网页版后，可在“设置” --&gt; “提醒服务” --&gt; “QQ 提醒”中绑定 QQ 号码，绑定后可以通过网页邮箱上方工具栏中的“QQ 邮箱 / 企业邮箱”选项切换邮箱。 在“设置” --&gt; “提醒服务” --&gt; “QQ 提醒”中选择“点击 QQ 面板的小信封直接进入企业邮箱”选项并保存后，可以直接通过 QQ 电脑客户端进入网页版企业邮箱。</p><h2 id="在移动设备上收发邮件" tabindex="-1"><a class="header-anchor" href="#在移动设备上收发邮件" aria-hidden="true">#</a> 在移动设备上收发邮件</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>假如一位同学的邮箱是<strong>12010100@mail.sustech.edu.cn</strong>，密码是<strong>sustech-manual</strong> 。</p><table><thead><tr><th style="text-align:center;">项目</th><th>值</th><th>其他参数</th></tr></thead><tbody><tr><td style="text-align:center;">用户名</td><td><code>12010100@mail.sustech.edu.cn</code></td><td></td></tr><tr><td style="text-align:center;">密码</td><td><code>sustech-manual</code></td><td></td></tr><tr><td style="text-align:center;">邮件服务器（Exchange）</td><td>ex.exmail.qq.com</td><td></td></tr><tr><td style="text-align:center;">发件服务器（SMTP）</td><td>smtp.exmail.qq.com</td><td>使用SSL，端口号465</td></tr><tr><td style="text-align:center;">发件服务器（POP3）</td><td>pop.exmail.qq.com</td><td>使用SSL，端口号995</td></tr><tr><td style="text-align:center;">收件服务器（IMAP）</td><td>imap.exmail.qq.com</td><td>使用SSL，端口号993</td></tr></tbody></table><h3 id="微信" tabindex="-1"><a class="header-anchor" href="#微信" aria-hidden="true">#</a> 微信</h3><p>关注“腾讯企业邮箱”公众号，并按提示操作。</p><h3 id="苹果自带邮件应用-mail-app" tabindex="-1"><a class="header-anchor" href="#苹果自带邮件应用-mail-app" aria-hidden="true">#</a> 苹果自带邮件应用（Mail.app）</h3><p>建议使用Exchange方式收件。</p>',10),W={href:"https://support.apple.com/zh-cn/HT201320",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("向 iPhone、iPad 或 iPod touch 添加电子邮件帐户"),b=(0,l.Wm)("h3",{id:"qq邮箱客户端",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#qq邮箱客户端","aria-hidden":"true"},"#"),(0,l.Uk)(" QQ邮箱客户端")],-1),k=(0,l.Wm)("p",null,"按照应用提示操作即可。",-1),x=(0,l.Wm)("h3",{id:"outlook客户端",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#outlook客户端","aria-hidden":"true"},"#"),(0,l.Uk)(" Outlook客户端")],-1),E=(0,l.Wm)("p",null,"建议使用Exchange方式收件。",-1),q={href:"https://support.microsoft.com/zh-cn/office/%E5%9C%A8-outlook-for-android-%E5%BA%94%E7%94%A8%E4%B8%AD%E8%AE%BE%E7%BD%AE%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6-886db551-8dfa-4fd5-b835-f8e532091872?ui=zh-cn&rs=zh-cn&ad=cn",target:"_blank",rel:"noopener noreferrer"},Q=(0,l.Uk)("在 Outlook for Android 应用中设置电子邮件"),U=(0,l.Wm)("h3",{id:"安卓手机通用教程",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#安卓手机通用教程","aria-hidden":"true"},"#"),(0,l.Uk)(" 安卓手机通用教程")],-1),v=(0,l.Wm)("p",null,"建议使用Exchange方式收件。",-1),A={href:"https://service.exmail.qq.com/cgi-bin/help?subtype=1&&id=20019&&no=1001530",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("如何在Android系统中使用腾讯企业邮箱Exchange同步服务？"),P=(0,l.Wm)("h2",{id:"在计算机上收发邮件",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#在计算机上收发邮件","aria-hidden":"true"},"#"),(0,l.Uk)(" 在计算机上收发邮件")],-1),w=(0,l.Wm)("h3",{id:"windows自带的邮件应用",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#windows自带的邮件应用","aria-hidden":"true"},"#"),(0,l.Uk)(" Windows自带的邮件应用")],-1),S=(0,l.Wm)("p",null,"建议使用Exchange方式收件。",-1),y={href:"https://support.microsoft.com/zh-cn/office/%e5%9c%a8-windows-10-%e9%82%ae%e4%bb%b6%e5%ba%94%e7%94%a8%e4%b8%ad%e8%ae%be%e7%bd%ae%e7%94%b5%e5%ad%90%e9%82%ae%e4%bb%b6-7ff79e8b-439b-4b47-8ff9-3f9a33166c60?ui=zh-cn&rs=zh-cn&ad=cn",target:"_blank",rel:"noopener noreferrer"},z=(0,l.Uk)("在 Windows 10 邮件应用中设置电子邮件"),M=(0,l.Wm)("h3",{id:"macos自带的邮件应用",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#macos自带的邮件应用","aria-hidden":"true"},"#"),(0,l.Uk)(" MacOS自带的邮件应用")],-1),O=(0,l.Wm)("p",null,"建议使用IMAP方式收件。",-1),_={href:"https://support.apple.com/zh-cn/guide/mail/mail35803/mac",target:"_blank",rel:"noopener noreferrer"},C=(0,l.Uk)("在 Mac 上的“邮件”中添加或移除电子邮件帐户"),D={href:"https://support.apple.com/zh-cn/guide/mail/cpmlprefacctadv/mac",target:"_blank",rel:"noopener noreferrer"},L=(0,l.Uk)("在 Mac 上的“邮件”中更改服务器设置"),T=(0,l.Wm)("h3",{id:"outlook桌面版",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#outlook桌面版","aria-hidden":"true"},"#"),(0,l.Uk)(" Outlook桌面版")],-1),I=(0,l.Wm)("p",null,"由于QQ邮箱不支持完整版的Exchange（只支持Exchange Activesync）因此Outlook桌面版不能以Exchange模式添加账户，只能使用IMAP或POP模式添加账户。",-1),j={href:"https://support.microsoft.com/zh-cn/office/%E5%90%91-outlook-%E6%B7%BB%E5%8A%A0%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6%E5%B8%90%E6%88%B7-6e27792a-9267-4aa4-8bb6-c84ef146101b",target:"_blank",rel:"noopener noreferrer"},H=(0,l.Uk)("向 Outlook 添加电子邮件帐户"),R=(0,l.Wm)("h2",{id:"更多阅读-参考",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#更多阅读-参考","aria-hidden":"true"},"#"),(0,l.Uk)(" 更多阅读/参考")],-1),N={href:"https://qianjian.space/2017/09/email-guide/",target:"_blank",rel:"noopener noreferrer"},Y=(0,l.Uk)("Email 使用指南/浅见"),F={href:"https://service.exmail.qq.com/cgi-bin/help?subtype=1&id=28&no=1000585",target:"_blank",rel:"noopener noreferrer"},G=(0,l.Uk)("如何设置IMAP、POP3/SMTP及其SSL加密方式？/腾讯企业邮箱"),J={render:function(e,t){const a=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[r,(0,l.Wm)("p",null,[n,(0,l.Wm)("a",i,[d,(0,l.Wm)(a)]),h,(0,l.Wm)("a",o,[c,(0,l.Wm)(a)]),s,(0,l.Wm)("a",u,[m,(0,l.Wm)(a)]),p]),f,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",W,[g,(0,l.Wm)(a)])])]),b,k,x,E,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",q,[Q,(0,l.Wm)(a)])])]),U,v,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",A,[B,(0,l.Wm)(a)])])]),P,w,S,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",y,[z,(0,l.Wm)(a)])])]),M,O,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Wm)("a",_,[C,(0,l.Wm)(a)])])]),(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Wm)("a",D,[L,(0,l.Wm)(a)])])])]),T,I,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",j,[H,(0,l.Wm)(a)])])]),R,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",N,[Y,(0,l.Wm)(a)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",F,[G,(0,l.Wm)(a)])])])],64)}}}}]);