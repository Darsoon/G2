"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3458],{34576:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=n(5574),o=n.n(i),s=n(62435),a=n(85956),r=n(64236),l=n(25637),A=n(90482),c=n(86074),m={};function h(){var e=(0,a.pC)(),t=(0,s.useState)(!1),n=o()(t,2),i=n[0],h=n[1],g=(0,s.useRef)(a.m8.location.pathname);return(0,s.useEffect)((function(){return a.m8.listen((function(e){e.location.pathname!==g.current&&(g.current=e.location.pathname,document.documentElement.scrollTo(0,0))}))}),[]),(0,c.jsx)(r.D.Provider,{value:{pkg:{version:"5.0.19",repository:{type:"git",url:"https://github.com/antvis/g2"}},historyType:"browser",entryExports:m,demos:l.DE,components:l.wx,locales:A.k,loading:i,setLoading:h,hostname:void 0,themeConfig:{title:"G2",footer:'Copyright © 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,description:"The Grammar of Visualization in JavaScript",defaultLanguage:"zh",isAntVSite:!1,siteUrl:"https://antv.antgroup.com/",githubUrl:"https://github.com/antvis/g2",showSearch:!0,showGithubCorner:!0,showGithubStars:!0,showAntVProductsCard:!0,showLanguageSwitcher:!0,showWxQrcode:!0,showChartResize:!0,showAPIDoc:!0,showSpecTab:!0,es5:!1,versions:{"5.0.19":"https://g2.antv.antgroup.com","4.x":"https://g2-v4.antv.vision/","3.x":"https://g2-v3.antv.vision/","2.x":"https://antv.vision/old-site/g2/doc/index.html"},docsearchOptions:{apiKey:"200ec461f4aa0bb4f0e761566f1a1336",indexName:"antv_g2"},navs:[{slug:"docs/manual/introduction",title:{zh:"文档",en:"Docs"},order:3},{slug:"docs/spec/overview",title:{zh:"选项",en:"Spec"},order:2},{slug:"docs/api/overview",title:{zh:"API",en:"API"},order:1},{slug:"examples",title:{zh:"图表示例",en:"Examples"},order:0}],ecosystems:[{name:{zh:"G2Plot",en:"G2Plot (A charting library)"},url:"https://g2plot.antv.antgroup.com/"}],docs:[{slug:"manual/introduction",title:{zh:"简介",en:"Introduction"},order:1},{slug:"manual/core",title:{zh:"核心概念",en:"Core Concepts"},order:2},{slug:"manual/extra-topics",title:{zh:"进阶主题",en:"Extra Topics"},order:3},{slug:"spec/data",title:{zh:"数据 - Data",en:"Data"},order:3},{slug:"spec/mark",title:{zh:"图形 - Mark",en:"Mark"},order:4},{slug:"spec/transform",title:{zh:"变换 - Transform",en:"Transform"},order:5},{slug:"spec/scale",title:{zh:"比例尺 - Scale",en:"Scale"},order:6},{slug:"spec/coordinate",title:{zh:"坐标系 - Coordinate",en:"Coordinate"},order:7},{slug:"spec/composition",title:{zh:"复合 - Composition",en:"Composition"},order:8},{slug:"spec/component",title:{zh:"组件 - Component",en:"Component"},order:9},{slug:"spec/label",title:{zh:"数据标签 - Label",en:"Label"},order:10},{slug:"spec/animation",title:{zh:"动画 - Animation",en:"Animation"},order:11},{slug:"spec/interaction",title:{zh:"交互 - Interaction",en:"Interaction"},order:12},{slug:"spec/graph",title:{zh:"关系图 - Graph",en:"Graph"},order:13},{slug:"spec/geo",title:{zh:"地图 - Geo",en:"Geo"},order:14},{slug:"spec/theme",title:{zh:"主题 - Theme",en:"Theme"},order:16},{slug:"spec/plugin",title:{zh:"插件扩展 - Plugin",en:"Plugin"},order:17}],examples:[{slug:"general",title:{zh:"基础图表",en:"General"},icon:"other"},{slug:"analysis",title:{zh:"数据分析",en:"Analysis"},icon:"other"},{slug:"graph",title:{zh:"关系图",en:"Graph"},icon:"other"},{slug:"geo",title:{zh:"地理",en:"Geo"},icon:"other"},{slug:"annotation",title:{zh:"数据标注",en:"Annotation"},icon:"other"},{slug:"composition",title:{zh:"复合视图",en:"Composition"},icon:"other"},{slug:"component",title:{zh:"组件",en:"Component"},icon:"other"},{slug:"animation",title:{zh:"动画",en:"Animation"},icon:"other"},{slug:"interaction",title:{zh:"交互",en:"Interaction"},icon:"other"},{slug:"storytelling",title:{zh:"可视化叙事",en:"Stroytelling"},icon:"other"},{slug:"algorithm",title:{zh:"算法可视化",en:"Algorithm Vis"},icon:"other"},{slug:"unit",title:{zh:"单元可视化",en:"Unit"},icon:"other"},{slug:"style",title:{zh:"风格",en:"Style"},icon:"other"},{slug:"renderer",title:{zh:"渲染器",en:"Renderer"},icon:"other"},{slug:"accessible",title:{zh:"无障碍",en:"Accessible"},icon:"other"}],playground:{devDependencies:{typescript:"latest"},htmlCodeTemplate:"<!DOCTYPE html>\n        <html>\n          <head>\n            <meta charset='UTF-8'>\n            <title>{{title}}</title>\n          </head>\n          <body>\n            <div id='container' />\n            <script src='https://gw.alipayobjects.com/os/lib/antv/g2/5.0.19/dist/g2.min.js'><\/script>\n            <script src='https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.11.1/dist/data-set.js'><\/script>\n            <script>\n            \x3c!-- 浏览器引入，请使用全局命名空间 G2，如 new Chart() 改为 new G2.Chart，即可运行。 --\x3e\n            {{code}}\n            <\/script>\n          </body>\n        </html>"},announcement:{zh:"",en:""},detail:{title:{zh:"G2，可视化语法",en:"G2, a Visualization Grammar"},description:{zh:"G2 是一套简洁的渐进式可视化语法，用于报表搭建、数据探索以及可视化叙事。",en:"G2 is a concise and progressive visualization grammar for dashboard building, data exploration and storytelling."},image:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*wo_LToatmbwAAAAAAAAAAABkARQnAQ",buttons:[{text:{zh:"图表示例",en:"Examples"},link:"/examples/",type:"primary"},{text:{zh:"开始使用",en:"Getting Started"},link:"/manual/introduction/getting-started"}]},features:[{icon:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*4x_KTKyqwJgAAAAAAAAAAABkARQnAQ",title:{zh:"千变万化，自由组合",en:"The ever-changing, free combination"},description:{zh:"任何图表，都可以基于图形语法灵活绘制，满足你无限的创意",en:"Any chart can be drawn flexibly based on graphic syntax to satisfy your unlimited creativity"}},{icon:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ",title:{zh:"专业完备",en:"Professional complete"},description:{zh:"大量产品实践之上，提供绘图引擎、完备图形语法、专业设计规范",en:"On top of a large number of product practices, it provides a drawing engine, a complete graphics grammar, and professional design rules"}},{icon:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*_riSQZrgczgAAAAAAAAAAABkARQnAQ",title:{zh:"生动，可交互",en:"Vivid, interactive"},description:{zh:"强大的交互语法，助力可视分析，让图表栩栩如生",en:"owerful interactive syntax to help visual analysis and make charts come alive"}}],cases:[{logo:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*-dLnTIexOxwAAAAAAAAAAABkARQnAQ",title:{zh:"精品 Gallery",en:"Boutique Gallery"},description:{zh:"真实的数据可视化案例，我们将它们归纳为一个个故事性的设计模板，让用户达到开箱即用的效果。",en:"Real data visualization cases, we summarize them into story-based design templates, allowing users to achieve out-of-the-box effects."},link:"/examples",image:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*hDrgRb7ma4EAAAAAAAAAAABkARQnAQ"}],companies:[{name:"阿里云",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*V_xMRIvw2iwAAAAAAAAAAABkARQnAQ"},{name:"支付宝",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*lYDrRZvcvD4AAAAAAAAAAABkARQnAQ"},{name:"天猫",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*BQrxRK6oemMAAAAAAAAAAABkARQnAQ"},{name:"淘宝网",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*1l8-TqUr7UcAAAAAAAAAAABkARQnAQ"},{name:"网上银行",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ZAKFQJ5Bz4MAAAAAAAAAAABkARQnAQ"},{name:"京东",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*yh-HRr3hCpgAAAAAAAAAAABkARQnAQ"},{name:"yunos",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*_js7SaNosUwAAAAAAAAAAABkARQnAQ"},{name:"菜鸟",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*TgV-RZDODJIAAAAAAAAAAABkARQnAQ"}],editLink:"https://github.com/antvis/g2/edit/v5/{filename}"},_2_level_nav_available:!1},children:e})}}}]);