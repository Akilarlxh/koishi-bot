// 配置项文档：https://koishi.js.org/api/app.html
module.exports = {
  // Koishi 服务器监听的端口
  port: 20202,
  onebot: {
    // 对应 cqhttp 配置项 http_config.post_urls, ws_reverse_servers.reverse_url
    path: '',
    secret: '',
  },
  bots: [{
    type: 'onebot:http',
    // 对应 cqhttp 配置项 http_config.port
    server: 'http://localhost:5700',
    selfId: 3553174998,
    token: '',
  }],
  plugins: {
    common: {
      respondent: [
{match: /(?=提问清单)/,
reply: `现在可以公开的情报
------------------------
#00.糖果屋十条盟约
#01.什么是front-matter
#02.标签分类设置
#03.遇到报错如何处理
#04.本群的提问流程
#05.如何自定义魔改css
#06.怎么添加看板娘及换装模型
#07.怎么给博客提速
#08.github访问不了怎么办
#09.怎么升级主题
#10.使用糖果屋友链魔改后，相册样式错乱，如何解决
#11.外挂标签详解
#12.博客编辑器推荐
#13.图床选用方案推荐
#14.Vercel访问不了
#15.本地修改提交后与线上不一致
#16.Twikoo登录失败
#17.新手任务学习分支线
#18.怎么搭建群聊机器人
------------------------
`
},
{
match: /(?=#00)/,
reply: `        糖果屋十条盟约
【一】群内禁止任何意义上的挑衅、嘲讽与暴力。
【二】所有提问尽量通过在群内统一讨论来解决。
【三】提问内容需尽可能完善（注1）。内容过少视为无效问题。
【四】在不违反第三条的情况下，提问内容，范围皆不受限制。
【五】被提问的一方有权决定是否回答。
【六】提问方在问题得到解决后要承担一次为后来者解答同类问题的责任。（注2）
【七】若需远程协助，提前准备好远程桌面软件。（注3）
【八】提问过程当中有不正当行为者（注4），一旦发现就直接禁言。
【九】以神之名宣布，以上各条皆为不变的规则。
【十】大家一起和平地玩吧!!

注1：提问内容应该尽量包括当前的运行效果，可以在线查看到此效果的站点链接，控制台报错，参考的教程，理想状态下预期的效果。
注2：此项仅需要在责任人有闲暇时履行。且更多是作为约定而非义务。
注3：远程桌面软件可以在群文件中下载，推荐使用Todesk。
注4：指恶意打断问答流程，如连发表情包，调戏群机器人，刷网络梗，复读机等刷屏行为。指正解答方的错误不算在内。
`},
{
match: /(?=糖果屋十条盟约)/,
reply: `        糖果屋十条盟约
【一】群内禁止任何意义上的挑衅、嘲讽与暴力。
【二】所有提问尽量通过在群内统一讨论来解决。
【三】提问内容需尽可能完善（注1）。内容过少视为无效问题。
【四】在不违反第三条的情况下，提问内容，范围皆不受限制。
【五】被提问的一方有权决定是否回答。
【六】提问方在问题得到解决后要承担一次为后来者解答同类问题的责任。（注2）
【七】若需远程协助，提前准备好远程桌面软件。（注3）
【八】提问过程当中有不正当行为者（注4），一旦发现就直接禁言。
【九】以神之名宣布，以上各条皆为不变的规则。
【十】大家一起和平地玩吧!!

注1：提问内容应该尽量包括当前的运行效果，可以在线查看到此效果的站点链接，控制台报错，参考的教程，理想状态下预期的效果。
注2：此项仅需要在责任人有闲暇时履行。且更多是作为约定而非义务。
注3：远程桌面软件可以在群文件中下载，推荐使用Todesk。
注4：指恶意打断问答流程，如连发表情包，调戏群机器人，刷网络梗，复读机等刷屏行为。指正解答方的错误不算在内。
`},
{
match: /(?=#01)/,
reply: `每篇文章或者页面的 markdown 文件开头用“---”包裹的部分就是 front-matter ，
例如：
---
title:
subtitle:
date:
updated:
tags:
categories:
description:
comments:
---
每个主题自带的front-matter不一定相同。详情需要参阅对应的主题文档。
butterfly主题的front-matter可以参考：
https://butterfly.js.org/posts/dc584b87/#Front-matter
您可以通过修改[Blogroot]/scaffolds/目录下的模板文件来配置默认的front-matter。
`},
{
match: /(?=front-matter)/,
reply: `每篇文章或者页面的 markdown 文件开头用“---”包裹的部分就是 front-matter ，
例如：
---
title:
subtitle:
date:
updated:
tags:
categories:
description:
comments:
---
每个主题自带的front-matter不一定相同。详情需要参阅对应的主题文档。
butterfly主题的front-matter可以参考：
https://butterfly.js.org/posts/dc584b87/#Front-matter
您可以通过修改[Blogroot]/scaffolds/目录下的模板文件来配置默认的front-matter。
`},
{
match: /(?=#02)/,
reply: `每篇文章的标签和分类都可以在对应 markdown 文件的 front-matter 中进行设置

---
title: 标签设置
categories:
  - 一级分类
  - 二级分类
  - 二级分类
tags:
  - tag1
  - tag2
  - tag3
---

如果你需要为文章添加多个一级分类，官方文档还提供了一下写法。

---
categories:
  - [Diary, PlayStation]
  - [Diary, Games]
  - [Life]
---

此时这篇文章同时包括三个分类：PlayStation 和 Games 分别都是父分类 Diary 的子分类，同时 Life 是一个没有子分类的分类。

更多内容可以参看Hexo官方文档：https://hexo.io/zh-cn/。`,
},
{
match: /(?=标签分类)/,
reply: `每篇文章的标签和分类都可以在对应 markdown 文件的 front-matter 中进行设置

---
title: 标签设置
categories:
  - 一级分类
  - 二级分类
  - 二级分类
tags:
  - tag1
  - tag2
  - tag3
---

如果你需要为文章添加多个一级分类，官方文档还提供了一下写法。

---
categories:
  - [Diary, PlayStation]
  - [Diary, Games]
  - [Life]
---

此时这篇文章同时包括三个分类：PlayStation 和 Games 分别都是父分类 Diary 的子分类，同时 Life 是一个没有子分类的分类。

更多内容可以参看Hexo官方文档：https://hexo.io/zh-cn/。`,
},
{
match: /(?=#03)/,
reply: `首先排查是修改了哪些内容。同时，每次修改了博客的配置文件（即 _config.yml 或 _config.butterfly.yml 等)都要记得运行 hexo clean 指令清空缓存后再运行 hexo generate 重新生成静态文件。
若是因为自己配置项填写错误闹乌龙，将会被无情的钉上耻辱柱。


如果是在博客搭建过程中遇到了问题，可以直接下载群文件中的menu.sh，搭配糖果屋优化日记中的第一节搭建教程一起使用。
win10：https://akilar.top/posts/6ef63e2d/
ubuntu：https://akilar.top/posts/e5502ef6/

如果是涉及到pug，styl，yml等语法格式严格的文件的修改，请先确认你使用的不是记事本或者notepad++。
因为notepad++会将四个空格和两个空格的缩进识别成一样的，这对缩进严格的语法来说是致命的。
然后截图反馈控制台报错或者修改的文件代码。

常见的yml格式错误包括缩进不一致，全半角符号错误，空格缺失等。
常见的pug错误包括相对路径错误，空格键和tab键混用等。
常见的styl错误包括缩进层级有误，语法错误，变量声明缺失等。

若是缩进造成的错误，可以通过先将报错行代码顶格，然后用tab对照你参考的教程进行调整。

如果是糖果屋站内教程，还需要反馈当前的主题版本和魔改部位。若是站外教程，在提供原帖的情况下，本群可以提供有限的排错建议。
`},
{
match: /(?=遇到报错)/,
reply: `首先排查是修改了哪些内容。同时，每次修改了博客的配置文件（即 _config.yml 或 _config.butterfly.yml 等)都要记得运行 hexo clean 指令清空缓存后再运行 hexo generate 重新生成静态文件。
若是因为自己配置项填写错误闹乌龙，将会被无情的钉上耻辱柱。


如果是在博客搭建过程中遇到了问题，可以直接下载群文件中的menu.sh，搭配糖果屋优化日记中的第一节搭建教程一起使用。
win10：https://akilar.top/posts/6ef63e2d/
ubuntu：https://akilar.top/posts/e5502ef6/

如果是涉及到pug，styl，yml等语法格式严格的文件的修改，请先确认你使用的不是记事本或者notepad++。
因为notepad++会将四个空格和两个空格的缩进识别成一样的，这对缩进严格的语法来说是致命的。
然后截图反馈控制台报错或者修改的文件代码。

常见的yml格式错误包括缩进不一致，全半角符号错误，空格缺失等。
常见的pug错误包括相对路径错误，空格键和tab键混用等。
常见的styl错误包括缩进层级有误，语法错误，变量声明缺失等。

若是缩进造成的错误，可以通过先将报错行代码顶格，然后用tab对照你参考的教程进行调整。

如果是糖果屋站内教程，还需要反馈当前的主题版本和魔改部位。若是站外教程，在提供原帖的情况下，本群可以提供有限的排错建议。
`},
{
match: /(?=#04)/,
reply: `欢迎光临糖果屋。本群的提问流程详情请参考群公告或者糖果屋十条盟约。

博客咨询之前可以留意群应用内的精华消息，里面有以前群友的优秀解答和提问示例。当然也可以直接问我，发送【提问清单】即可。

提问时请提供相应的教程链接，报错截图，配置项截图，源码修改情况，报错输出log等内容（不一定都需要，但是尽可能完备的信息有助于我们快速帮您定位错误所在），提问截图时注意给密钥打码，若因个人疏忽导致密钥泄露记得尽快重置密钥。

希望提问解答双方都有足够的耐心，同时提问方也要有问题得不到解答的心理准备。

如果不是糖果屋内教程，也请提供教程原帖链接，同时本店只能提供有限的排错建议。若需要远程协助，建议安装Teamviewer或者todesk，群文件中有相应的安装包。为了避免和对方远程桌面软件不一致，请务必在安装前商量清楚。

提问时必须认真学习对方的解答内容，确保知识掌握扎实。
`},
{
match: /(?=提问流程)/,
reply: `欢迎光临糖果屋。本群的提问流程详情请参考群公告或者糖果屋十条盟约。

博客咨询之前可以留意群应用内的精华消息，里面有以前群友的优秀解答和提问示例。当然也可以直接问我，发送【提问清单】即可。

提问时请提供相应的教程链接，报错截图，配置项截图，源码修改情况，报错输出log等内容（不一定都需要，但是尽可能完备的信息有助于我们快速帮您定位错误所在），提问截图时注意给密钥打码，若因个人疏忽导致密钥泄露记得尽快重置密钥。

希望提问解答双方都有足够的耐心，同时提问方也要有问题得不到解答的心理准备。

如果不是糖果屋内教程，也请提供教程原帖链接，同时本店只能提供有限的排错建议。若需要远程协助，建议安装Teamviewer或者todesk，群文件中有相应的安装包。为了避免和对方远程桌面软件不一致，请务必在安装前商量清楚。

提问时必须认真学习对方的解答内容，确保知识掌握扎实。
`},
{
match: /(?=#05)/,
reply: `自定义魔改CSS的方式参考糖果屋教程：
https://akilar.top/posts/ebf20e02/
目前已有的自定义魔改内容包括
- 魔改样式引入方案
- 字体样式修改(包含字体的引用和使用)
- 版块显隐修改(简单粗暴的隐藏不想显示的内容)
- 透明度修改(包含一图流方案)
- 侧栏按钮缩进方案(包含Aplayer全局吸底标签自动缩进隐藏)
- 夜间模式或阅读模式修改
- 随机背景或头图banner效果
- 图片模糊渐变清晰效果(butterfly_v3.7.1+自带，无需修改)
- 鼠标指针图标替换
- 站点标签title动态变化
`},
{
match: /(?=自定义魔改)/,
reply: `自定义魔改CSS的方式参考糖果屋教程：
https://akilar.top/posts/ebf20e02/
目前已有的自定义魔改内容包括
- 魔改样式引入方案
- 字体样式修改(包含字体的引用和使用)
- 版块显隐修改(简单粗暴的隐藏不想显示的内容)
- 透明度修改(包含一图流方案)
- 侧栏按钮缩进方案(包含Aplayer全局吸底标签自动缩进隐藏)
- 夜间模式或阅读模式修改
- 随机背景或头图banner效果
- 图片模糊渐变清晰效果(butterfly_v3.7.1+自带，无需修改)
- 鼠标指针图标替换
- 站点标签title动态变化
`},
{
match: /(?=#06)/,
reply: `糖果屋的看板娘使用的是张书樵大佬基于fghrsh大佬的前端方案魔改整合的项目。
教程参看：https://akilar.top/posts/5b8f515f/
因为有涉及到js和css的引入，单纯使用的话看教程足矣，但想要活用（比如修改看板娘位置）还需要自己多多学习css语法。
部分涉及看板娘位置调整的提问可以翻找一下教程帖的评论区。
`},
{
match: /(?=添加看板娘)/,
reply: `糖果屋的看板娘使用的是张书樵大佬基于fghrsh大佬的前端方案魔改整合的项目。
教程参看：https://akilar.top/posts/5b8f515f/
因为有涉及到js和css的引入，单纯使用的话看教程足矣，但想要活用（比如修改看板娘位置）还需要自己多多学习css语法。
部分涉及看板娘位置调整的提问可以翻找一下教程帖的评论区。
`},
{
match: /(?=#07)/,
reply: `关于博客的提速是一个较为长线的过程。你需要重点掌握包括静态资源压缩，图床迁移，CDN加速，异步加载等内容。
详细的优化路线可以参考糖果屋的优化日记：
https://akilar.top/posts/7c16c4bb/

学习分支推荐优先进行Vercel部署：
https://akilar.top/posts/812734f8/
再来是掌握Github Action的基础部署：
https://akilar.top/posts/f752c86d/
之后就是熟读静态资源加速方案，对博客进行静态资源压缩，图床迁移，CDN加速：
https://akilar.top/posts/969dffe3/

学习顺序没有绝对规定。如果涉及教程联动的，帖内也会给出对应的链接。
`},
{
match: /(?=博客提速)/,
reply: `关于博客的提速是一个较为长线的过程。你需要重点掌握包括静态资源压缩，图床迁移，CDN加速，异步加载等内容。
详细的优化路线可以参考糖果屋的优化日记：
https://akilar.top/posts/7c16c4bb/

学习分支推荐优先进行Vercel部署：
https://akilar.top/posts/812734f8/
再来是掌握Github Action的基础部署：
https://akilar.top/posts/f752c86d/
之后就是熟读静态资源加速方案，对博客进行静态资源压缩，图床迁移，CDN加速：
https://akilar.top/posts/969dffe3/

学习顺序没有绝对规定。如果涉及教程联动的，帖内也会给出对应的链接。
`},
{
match: /(?=#08)/,
reply: `Github访问不了一般情况下是由DNS污染导致的。
一种办法是直接使用Clash或者V2Ray等软件，这样可以直接使用境外访问渠道。（立场上不推荐您这么做）
另一种更好的办法是更改本地hosts，添加IP映射，具体操作方法可以参考糖果屋内教程：
https://akilar.top/posts/61b3e163/
如果实在紧急，可以请群内成员帮忙提供实时IP映射表。
按照CYFAN的说法，使用cloudflare反代来访问github也是种办法。可以尝试自己搜索方案。学会了记得来教我。
`},
{
match: /(?=github访问不了)/,
reply: `Github访问不了一般情况下是由DNS污染导致的。
一种办法是直接使用Clash或者V2Ray等软件，这样可以直接使用境外访问渠道。（立场上不推荐您这么做）
另一种更好的办法是更改本地hosts，添加IP映射，具体操作方法可以参考糖果屋内教程：
https://akilar.top/posts/61b3e163/
如果实在紧急，可以请群内成员帮忙提供实时IP映射表。
按照CYFAN的说法，使用cloudflare反代来访问github也是种办法。可以尝试自己搜索方案。学会了记得来教我。
`},
{
match: /(?=#09)/,
reply: `以下仅以Butterfly主题为例进行阐述，其他主题的升级方案大同小异。
未魔改的，参照官方文档给出的指令进行升级，之后根据更新日志在_config.butterfly.yml中增删变动的配置项即可。
魔改过的有三种选择，
一是继续做钉子户。大多数情况下我真的建议你这么做。挑个喜欢的版本养老挺好的。
二是删档重来。如果魔改的内容不算太繁复的话，这么做是合理的。
三，在做好心理准备的情况下，挑战使用git diff处理的方式进行平滑升级。
具体操作可以参看糖果屋教程：https://akilar.top/posts/bbf68ad4/
此处给出个人经验建议，可以活用github的compare功能，挑出升级时变动的几个文件。然后按照路径逐个替换当前的文件，这样就只需要处理这几个变动的文件。而不需要去理会以前魔改过的文件。一般情况下，主题升级的文件数目在40个左右，处理起来不算太难。
`},
{
match: /(?=怎么升级主题)/,
reply: `以下仅以Butterfly主题为例进行阐述，其他主题的升级方案大同小异。
未魔改的，参照官方文档给出的指令进行升级，之后根据更新日志在_config.butterfly.yml中增删变动的配置项即可。
魔改过的有三种选择，
一是继续做钉子户。大多数情况下我真的建议你这么做。挑个喜欢的版本养老挺好的。
二是删档重来。如果魔改的内容不算太繁复的话，这么做是合理的。
三，在做好心理准备的情况下，挑战使用git diff处理的方式进行平滑升级。
具体操作可以参看糖果屋教程：https://akilar.top/posts/bbf68ad4/
此处给出个人经验建议，可以活用github的compare功能，挑出升级时变动的几个文件。然后按照路径逐个替换当前的文件，这样就只需要处理这几个变动的文件。而不需要去理会以前魔改过的文件。一般情况下，主题升级的文件数目在40个左右，处理起来不算太难。
`},
{
match: /(?=#10)/,
reply: `推测是友链样式中某个img标签定位重写的作用域没有限制好，紧急修复方案如下：
在自定义样式中加入以下内容：

/*相册页面定位修复*/
.justified-gallery > div > img,
.justified-gallery > figure > img,
.justified-gallery > a > a > img,
.justified-gallery > div > a > img,
.justified-gallery > figure > a > img,
.justified-gallery > a > svg,
.justified-gallery > div > svg,
.justified-gallery > figure > svg,
.justified-gallery > a > a > svg,
.justified-gallery > div > a > svg,
.justified-gallery > figure > a > svg{
  position:static!important;
}

不清楚如何添加自定义样式的可以参考：https://akilar.top/posts/ebf20e02/
`},
{
match: /(?=相册样式错乱)/,
reply: `推测是友链样式中某个img标签定位重写的作用域没有限制好，紧急修复方案如下：
在自定义样式中加入以下内容：

/*相册页面定位修复*/
.justified-gallery > div > img,
.justified-gallery > figure > img,
.justified-gallery > a > a > img,
.justified-gallery > div > a > img,
.justified-gallery > figure > a > img,
.justified-gallery > a > svg,
.justified-gallery > div > svg,
.justified-gallery > figure > svg,
.justified-gallery > a > a > svg,
.justified-gallery > div > a > svg,
.justified-gallery > figure > a > svg{
  position:static!important;
}

不清楚如何添加自定义样式的可以参考：https://akilar.top/posts/ebf20e02/
`},
{
match: /(?=#11)/,
reply: `外挂标签能在博客编写过程中帮助我们快速的填写重复的代码片段。
糖果屋的外挂标签已经整合成npm插件，基本上所有butterfly主题版本都可以使用。
具体配置教程及外挂标签文档请参看站内教程：
https://akilar.top/posts/615e2dec/
如果您想转载糖果屋的外挂标签文档，群文件内有markdown源文件。唯一的要求就是转载请注明出处。
欢迎诸位客人尝试编写属于自己的外挂标签，DIY教程可以参考：
https://akilar.top/posts/e2bf861f/
`},
{
match: /(?=外挂标签详解)/,
reply: `外挂标签能在博客编写过程中帮助我们快速的填写重复的代码片段。
糖果屋的外挂标签已经整合成npm插件，基本上所有butterfly主题版本都可以使用。
具体配置教程及外挂标签文档请参看站内教程：
https://akilar.top/posts/615e2dec/
如果您想转载糖果屋的外挂标签文档，群文件内有markdown源文件。唯一的要求就是转载请注明出处。
欢迎诸位客人尝试编写属于自己的外挂标签，DIY教程可以参考：
https://akilar.top/posts/e2bf861f/
`},
{
match: /(?=#12)/,
reply: `目前使用体验较好的博客编辑器用Atom，VScode。（冰老师用铅笔！）
糖果屋使用的是Atom，这款编辑器的优点是具备强大的插件市场，缺点是插件市场在国内经常打不开。不过可以通过换源解决这个问题。Atom自带的git plus图形化界面还能有效帮助那些不清楚git指令的萌新。Atom配置教程可以参考站内教程：
https://akilar.top/posts/498e6e74/

VScode也同样具备丰富的插件市场，不过从店长的使用体验来看，还是Atom的插件市场对小白亲和度高一些。
关于VScode的配置和插件推荐可以咨询群内使用VScode的客人。
`},
{
match: /(?=博客编辑器)/,
reply: `目前使用体验较好的博客编辑器用Atom，VScode。（冰老师用铅笔！）
糖果屋使用的是Atom，这款编辑器的优点是具备强大的插件市场，缺点是插件市场在国内经常打不开。不过可以通过换源解决这个问题。Atom自带的git plus图形化界面还能有效帮助那些不清楚git指令的萌新。Atom配置教程可以参考站内教程：
https://akilar.top/posts/498e6e74/

VScode也同样具备丰富的插件市场，不过从店长的使用体验来看，还是Atom的插件市场对小白亲和度高一些。
关于VScode的配置和插件推荐可以咨询群内使用VScode的客人。
`},
{
match: /(?=#13)/,
reply: `目前来看，最佳的图床方案是采用各大服务商提供的 cos 或者 oss 服务。
其次是利用 github 存储图片并使用 jsdelivr 的 CDN 加速服务。
糖果屋使用的图床方案可以参考
[NPM图床的使用方案]： https://akilar.top/posts/3e956346/，
此方案在 github + jsdelivr 的基础上延伸，增加 npm 的备份，并充分利用npm丰富的国内镜像节点。
`},
{
match: /(?=图床选用)/,
reply: `目前来看，最佳的图床方案是采用各大服务商提供的 cos 或者 oss 服务。
其次是利用 github 存储图片并使用 jsdelivr 的 CDN 加速服务。
糖果屋使用的图床方案可以参考
[NPM图床的使用方案]： https://akilar.top/posts/3e956346/，
此方案在 github + jsdelivr 的基础上延伸，增加 npm 的备份，并充分利用npm丰富的国内镜像节点。
`},
{
match: /(?=#14)/,
reply: `Vercel本身就对线路存在一定的挑剔性。对移动的线路特别不友好。
如果是这种硬性网络原因，建议配合多线部署，不友好的线路就链到coding或者netlify下面。
多线部署的基本原理参考此文：https://akilar.top/posts/54c08a4b/

2021年5月10日起，Vercel的大陆IP相继被墙，官方发布的通告建议是修改解析记录。
到你的dns解析服务商那里修改对应的解析记录。
将指向 Vercel 的 A 记录值从 76.76.21.21. 改为 76.223.126.88.
将指向 Vercel 的 CNAME 记录从 cname.vercel-dns.com 更改为 cname-china.vercel-dns.com

A记录指向的 IP 也可以从这个里面找，
https://gist.github.com/ChenYFan/fc2bd4ec1795766f2613b52ba123c0f8
因为是gist，所以大概要翻墙才能看。
`},
{
match: /(?=Vercel访问)/,
reply: `Vercel本身就对线路存在一定的挑剔性。对移动的线路特别不友好。
如果是这种硬性网络原因，建议配合多线部署，不友好的线路就链到coding或者netlify下面。
多线部署的基本原理参考此文：https://akilar.top/posts/54c08a4b/

2021年5月10日起，Vercel的大陆IP相继被墙，官方发布的通告建议是修改解析记录。
到你的dns解析服务商那里修改对应的解析记录。
将指向 Vercel 的 A 记录值从 76.76.21.21. 改为 76.223.126.88.
将指向 Vercel 的 CNAME 记录从 cname.vercel-dns.com 更改为 cname-china.vercel-dns.com

A记录指向的 IP 也可以从这个里面找，
https://gist.github.com/ChenYFan/fc2bd4ec1795766f2613b52ba123c0f8
因为是gist，所以大概要翻墙才能看。
`},
{
match: /(?=#15)/,
reply: `本地修改成功后，与线上不一致的情况大致可以划分为三种。
一种是页面缓存，这个很大程度上是因为浏览器缓存、cdn缓存造成的。浏览器缓存可以通过按 Ctrl+F5 强制刷新来解决。CDN缓存较为麻烦，如果是自己的服务器使用的CDN服务，那么服务商应该会提供刷新CDN服务的渠道。如果是jsdelivr的CDN，可以使用purge接口来刷新，使用方法是将你要刷新的cdn链接 如 https://cdn.jsdelivr.net/npm/package@version/file 中的cdn改成purge 即 https://purge.jsdelivr.net/npm/package@version/file

另一种情况一般出现在评论类型的插件中，原因是没有在后端添加安全域名。请按照你参考的评论文档去相应的后端服务控制台添加安全域名。

另外还有一种特殊情况，如果使用了gulp插件中的babel插件，因为它会将ES6降级为ES5，导致部分js失效。而在本地预览时，其实是读的你source目录下未被压缩的内容，所以会出现本地没问题，线上出问题的情况。参照优化日记中关于gulp的部分：https://akilar.top/posts/969dffe3/ 自行添加屏蔽项或者换用terser压缩插件。
`},
{
match: /(?=与线上不一致)/,
reply: `本地修改成功后，与线上不一致的情况大致可以划分为三种。
一种是页面缓存，这个很大程度上是因为浏览器缓存、cdn缓存造成的。浏览器缓存可以通过按 Ctrl+F5 强制刷新来解决。CDN缓存较为麻烦，如果是自己的服务器使用的CDN服务，那么服务商应该会提供刷新CDN服务的渠道。如果是jsdelivr的CDN，可以使用purge接口来刷新，使用方法是将你要刷新的cdn链接 如 https://cdn.jsdelivr.net/npm/package@version/file 中的cdn改成purge 即 https://purge.jsdelivr.net/npm/package@version/file

另一种情况一般出现在评论类型的插件中，原因是没有在后端添加安全域名。请按照你参考的评论文档去相应的后端服务控制台添加安全域名。

另外还有一种特殊情况，如果使用了gulp插件中的babel插件，因为它会将ES6降级为ES5，导致部分js失效。而在本地预览时，其实是读的你source目录下未被压缩的内容，所以会出现本地没问题，线上出问题的情况。参照优化日记中关于gulp的部分：https://akilar.top/posts/969dffe3/ 自行添加屏蔽项或者换用terser压缩插件。
`},
{
match: /(?=#16)/,
reply: `如果你是指之前输入密码还能正常登录，但是最近哪怕密码正确也登录不上去，且F12控制台报错
{"code":"OPERATION_FAIL"}[AUTH_INVALID_CUSTOM_LOGIN_TICKET] Key do not exist or expired"}

这种情况一般是腾讯云函数版本特有，应该是因为在配置好登录私钥之后，又在后台重新下载了登录私钥，导致之前配置的登录私钥失效了，
解决方案是到 https://console.cloud.tencent.com/tcb/database/collection/config
 云开发控制台->数据库里面，找到config，将重新下载的私钥内容覆盖到 CREDENTIALS ，即重新配置私钥即可。
`},
{
match: /(?=Twikoo登录失败)/,
reply: `如果你是指之前输入密码还能正常登录，但是最近哪怕密码正确也登录不上去，且F12控制台报错
{"code":"OPERATION_FAIL"}[AUTH_INVALID_CUSTOM_LOGIN_TICKET] Key do not exist or expired"}

这种情况一般是腾讯云函数版本特有，应该是因为在配置好登录私钥之后，又在后台重新下载了登录私钥，导致之前配置的登录私钥失效了，
解决方案是到 https://console.cloud.tencent.com/tcb/database/collection/config
 云开发控制台->数据库里面，找到config，将重新下载的私钥内容覆盖到 CREDENTIALS ，即重新配置私钥即可。
`},
{
match: /(?=#17)/,
reply: `Hexo博客新手任务学习分支线：

主线任务1：根据博客搭建教程完成博客的本地搭建，配合github完成线上部署。
教程链接：https://akilar.top/posts/6ef63e2d/
任务难度：⭐⭐⭐

支线任务1：挑选一款合适的主题，推荐使用Butterfly主题，跟随主题文档完成基本配置。
教程链接：https://butterfly.js.org/
任务难度：⭐⭐⭐⭐⭐

主线任务2：在根目录[Blogroot]下打开终端,使用 hexo new post <title> 新建一篇文章。可以在[Blogroot]/source/_post/目录下找到新建的文章。可以通过修改[Blogroot]/scaffolds/post.md的模板内容来改变默认生成的文章格式。
教程链接：https://hexo.io/zh-cn/docs/writing
任务难度：⭐

支线任务2：学习markdown基本语法，使用markdown语法编写博客。
教程链接：https://guides.github.com/features/mastering-markdown/
任务难度：⭐⭐

支线任务3：熟练掌握markdown基本语法后，可以使用外挂标签丰富博客文章的格式。
教程链接：https://akilar.top/posts/615e2dec/
任务难度：⭐⭐

主线任务3：学习github action，将博客源码托管至github，并通过github action完成线上部署。
教程链接：https://akilar.top/posts/f752c86d/
任务难度：⭐⭐⭐⭐

支线任务4：使用Vercel部署博客网页，进一步提高访问速度
教程链接：https://akilar.top/posts/812734f8/
任务难度：⭐

博客优化副本任务：按照糖果屋优化日记的教程索引，完成博客基本优化
教程链接：https://akilar.top/posts/7c16c4bb/
任务难度：⭐⭐⭐⭐⭐

博客美化副本任务：按照糖果屋美化日记的教程索引，挑选喜爱的组件对博客进行自定义美化。
教程链接：https://akilar.top/posts/f99b208/
任务难度：难度不详，遇强则强
`},
{
match: /(?=新手任务)/,
reply: `Hexo博客新手任务学习分支线：

主线任务1：根据博客搭建教程完成博客的本地搭建，配合github完成线上部署。
教程链接：https://akilar.top/posts/6ef63e2d/
任务难度：⭐⭐⭐

支线任务1：挑选一款合适的主题，推荐使用Butterfly主题，跟随主题文档完成基本配置。
教程链接：https://butterfly.js.org/
任务难度：⭐⭐⭐⭐⭐

主线任务2：在根目录[Blogroot]下打开终端,使用 hexo new post <title> 新建一篇文章。可以在[Blogroot]/source/_post/目录下找到新建的文章。可以通过修改[Blogroot]/scaffolds/post.md的模板内容来改变默认生成的文章格式。
教程链接：https://hexo.io/zh-cn/docs/writing
任务难度：⭐

支线任务2：学习markdown基本语法，使用markdown语法编写博客。
教程链接：https://guides.github.com/features/mastering-markdown/
任务难度：⭐⭐

支线任务3：熟练掌握markdown基本语法后，可以使用外挂标签丰富博客文章的格式。
教程链接：https://akilar.top/posts/615e2dec/
任务难度：⭐⭐

主线任务3：学习github action，将博客源码托管至github，并通过github action完成线上部署。
教程链接：https://akilar.top/posts/f752c86d/
任务难度：⭐⭐⭐⭐

支线任务4：使用Vercel部署博客网页，进一步提高访问速度
教程链接：https://akilar.top/posts/812734f8/
任务难度：⭐

博客优化副本任务：按照糖果屋优化日记的教程索引，完成博客基本优化
教程链接：https://akilar.top/posts/7c16c4bb/
任务难度：⭐⭐⭐⭐⭐

博客美化副本任务：按照糖果屋美化日记的教程索引，挑选喜爱的组件对博客进行自定义美化。
教程链接：https://akilar.top/posts/f99b208/
任务难度：难度不详，遇强则强
`},
{
match: /(?=#18)/,
reply: `本群使用的QQ机器人框架是go-cqhttp + koishi
koishi本身就有详细的文档。
https://koishi.js.org/
`},
{
match: /(?=搭建群聊机器人)/,
reply: `本群使用的QQ机器人框架是go-cqhttp + koishi
koishi本身就有详细的文档。
https://koishi.js.org/
`},
{
match: /(?=老板娘)/,
reply: ` ▄︻┻┳═一 … ☆ヽ（≧□≦）ノ
不要叫我老板娘，叫我小秘书......不对，要叫我编辑大人！
`},
{
match: /(?=他妈的)/,
reply: 'Ψ(￣∀￣)Ψ 侦测到在途的禁言打击，不许说脏话'
},
{
match: /(?=giegie)/,
reply: ' o(￣ヘ￣o＃) 茶里茶气的真讨厌'
},
{
match: /(?=小秘书)/,
reply: `┗|｀O′|┛ 嗷~~
不是小秘书。是编辑大人！`
},
{
match: /(?=编辑大人)/,
reply: ' (๑•̀ㅂ•́)و✧ 嗯。有事起奏，无事退下。（高贵冷艳）'
},
{
match: /(?=店长在)/,
reply: ' 店长不在，有事问我，发送【提问清单】即可'
},
{
match: /(?=我偶尔也是可以在的)/,
reply: '一边歇着去，这儿没你事了。'
},
{
match: '。',
reply: '一个泡泡'
},
{
match: '。。',
reply: '两个泡泡'
},
{
match: '。。。',
reply: '三个...你以为我还会数下去吗？再发，头给你打掉！'
},
{
match: /。{4,}/,
reply: `▄︻┻┳═一…… ☆（>○<）
砰！你死了！`
},
{
match: /(?=逼话)/,
reply: `哔哗：有被冒犯到。你礼貌吗？`
},
{
match: /(?=闭嘴)/,
reply: `你才喜欢张着嘴打字！
(〃＞目＜)`
},
{
match: /(?=带带弟弟)/,
reply: `不带弟弟，只带妹妹。要不把你格叽格叽了！
o(^▽^)o`
},
{
match: /(?=确实)/,
reply: `检测到确实怪出没
呼噜呼噜，不怕不怕菜狗乖，摸摸下巴摸脑袋
o(^▽^)o`
},
{
match: /(?=不太聪明)/,
reply: `说别人不太聪明的家伙
肯定不讨人喜欢
o(╥﹏╥)o`
},
{
match: /(?=我要减肥)/,
reply: `自己算算这是你第几次说要减肥
我就没见你哪次成功过
`},
// {
// match: /(?=)/,
// reply: `
// `},
],
},
  webui: {},
  './my-plugin': {},
  },
}
