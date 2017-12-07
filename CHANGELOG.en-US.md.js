webpackJsonp([228],{1777:function(e,n){e.exports={content:["article",{},["h2","3.0.0"],["p",["code","2017-12-04"]],["p","Learn more in the ",["a",{title:null,href:"https://medium.com/ant-design/announcing-ant-design-3-0-70e3e65eca0c"},"Ant Design 3.0 announcement post"],"!"],["h3","Major Changes"],["ul",["li",["p","New ",["a",{title:null,href:"https://ant.design/docs/spec/colors#Color-Palettes"},"color system"],", We changed our primary color from \u300e",["code","#108EE9"],"\u300f to \u300e",["code","#1890FF"],'\u300f, we called the new primary color "\u62c2\u6653\u84dd (Daybreak Blue)" which means the color of the sky at daybreak.']],["li",["p","New design of components."]],["li",["p","Increased the base font size from 12px to 14px."]],["li",["p","Changed default locale to ",["code","en_US"],"."]],["li",["p","Support React 16."]],["li",["p","Better TypeScript support."]],["li",["p","New ",["a",{title:null,href:"https://ant.design/components/list/"},"List"]," component."]],["li",["p","New ",["a",{title:null,href:"https://ant.design/components/divider/"},"Divider"]," component."]],["li",["p","30 New ",["a",{title:null,href:"https://ant.design/components/icon/"},"icons"],"."]]],["h3","Breaking Changes"],["ul",["li",["p","Card's ",["code","noHovering"]," has been renamed to ",["code","hoverable"],"\uff0cand its default value now is ",["code","true"],"."]],["li",["p","Added new Grid breakpoints. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/7230"},"#7230"]]],["li",["p","Form ",["code","getFieldDecorator"],"'s ",["code","exclusive"]," option has been removeed."]],["li",["p","Added ",["code","Form.createFormField"],", and you must use it to wrap field data returned in ",["code","option.mapPropsToFields"],":"],["pre",{lang:"diff",highlighted:"import { Form } from 'antd';\n\nForm.create({\n  mapPropsToFields() {\n    return {\n<span class=\"token deleted\">-     name: { value: 'antd' },</span>\n<span class=\"token inserted\">+     name: Form.createFormField({ value: 'antd' }),</span>\n    };\n  },\n})"},["code","import { Form } from 'antd';\n\nForm.create({\n  mapPropsToFields() {\n    return {\n-     name: { value: 'antd' },\n+     name: Form.createFormField({ value: 'antd' }),\n    };\n  },\n})"]]],["li",["p","Improved global reset style, if you encounter style problem after upgrading, you can try import our v2 compatible style."],["pre",{lang:"javascript",highlighted:'<span class="token keyword">import</span> <span class="token string">\'antd/lib/style/v2-compatible-reset\'</span><span class="token punctuation">;</span>'},["code","import 'antd/lib/style/v2-compatible-reset';"]],["p","Or use less"],["pre",{lang:"less",highlighted:'<span class="token variable">@import</span> <span class="token string">\'~antd/lib/style/v2-compatible-reset.less\'</span><span class="token punctuation">;</span>'},["code","@import '~antd/lib/style/v2-compatible-reset.less';"]]],["li",["p","Since we changed default locale to en_US, LocalProvider is not required any more for English users."]],["li",["p","We don't set ",["code",'size="large"']," to ",["code","Input"]," in ",["code","Form"]," by default any more."]],["li",["p","UMD version of ",["code","dist/antd.js"]," doesn't include moment any more, you need add moment by yourself if you are using the UMD version."],["pre",{lang:"diff",highlighted:'<span class="token deleted">&lt;html></span>\n  &lt;head>\n<span class="token inserted">+   &lt;script src="https://unpkg.com/moment@2.19.3/moment.js">&lt;/script></span>\n    &lt;script src="https://unpkg.com/antd@3.0.0/dist/antd.js">&lt;/script>\n  &lt;/head>\n<span class="token deleted">&lt;/html></span>'},["code",'<html>\n  <head>\n+   <script src="https://unpkg.com/moment@2.19.3/moment.js"><\/script>\n    <script src="https://unpkg.com/antd@3.0.0/dist/antd.js"><\/script>\n  </head>\n</html>']]]],["h3","Removed Deprecations"],["ul",["li",["p","\ud83d\uddd1 DatePicker.Calendar has been removed, you can use Calendar directly."]],["li",["p","\ud83d\uddd1 DatePicker's ",["code","toggleOpen"]," prop has been removed, use ",["code","onOpenChange"]," instead."]],["li",["p","\ud83d\uddd1 Form's ",["code","inline"],", ",["code","horizontal"],", ",["code","vertical"]," props has been removed, use ",["code","layout"]," instead."]],["li",["p","\ud83d\uddd1 Input's ",["code","type"]," prop has dropped textarea support, please use Input.TextArea instead."]],["li",["p","\ud83d\uddd1 Mention's ",["code","toEditorState"]," has been removed."]],["li",["p","\ud83d\uddd1 Select's ",["code","multiple"],", ",["code","combobox"],", ",["code","tags"]," props has been removed, use ",["code","mode"]," instead."]]],["h3","Features and Improvements"],["ul",["li",["p","\ud83c\udf1f Tabs added new size ",["code",'size="large"'],"\u3002"]],["li",["p","\ud83c\udf1f Row's ",["code","gutter"]," now support responsive setting, you can write ",["code","gutter={{ sm: 16, lg: 32 }}"],"."]],["li",["p","\ud83c\udf1f Spin added new ",["code","indicator"]," prop to allow setting custom indicator. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/7977"},"#7977"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/7977"},"@kossel"]]],["li",["p","\ud83c\udf1f Input.Search added new ",["code","enterButton"]," prop to allow setting custom search button.",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/7596"},"#7596"]]],["li",["p","\ud83c\udf1f Mention added new ",["code","placement"]," prop to allow setting the popup direction."]],["li",["p","\ud83c\udf1f Carousel added new ",["code","next()"],", ",["code","prev()"],", ",["code","goTo(slideNumber)"]," methods to allow controlling slides programmatically."]],["li",["p","\ud83c\udf1f Button added link support\uff0cButton with ",["code","href"]," prop will render to ",["code","<a>"],". ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/8343"},"#8343"]]],["li",["p","\ud83c\udf1f Steps was refactored, first rendering won't flash. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/6010"},"#6010"]]],["li",["p","\ud83c\udf1f Switch added new ",["code","loading"]," prop to show a loading status."]],["li",["p","Menu"],["ul",["li",["p","\ud83c\udf1f Added new ",["code","subMenuOpenDelay"]," and ",["code","subMenuCloseDelay"]," props to allow setting delay time for submenu toggling."]],["li",["p","\ud83c\udf1f Added new ",["code","forceSubMenuRender"]," prop to render submenu even if it's collapsed. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5586"},"#5586"]]]]],["li",["p","Form"],["ul",["li",["p","\ud83c\udf1f Added animations for validation message showing."]],["li",["p","\ud83c\udf1f Added field conditional rendering support. ",["a",{title:null,href:"https://github.com/react-component/form/issues/117"},"#react-component/117"]]]]],["li",["p","Message"],["ul",["li",["p","\ud83c\udf1f Allow ",["code","duration"]," optional. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/7857"},"#7857"]," ",["a",{title:null,href:"https://github.com/monkindey"},"@monkindey"]]]]],["li",["p","Badge"],["ul",["li",["p","\ud83c\udf1f Added new ",["code","offset"]," prop to allow setting the offset of status point."]],["li",["p","\ud83c\udf1f ",["code","status"]," can use whith ",["code","children"]," now. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/8164"},"#8164"]]]]],["li",["p","Card"],["ul",["li",["p","\ud83c\udf1f Added new ",["code","inner"]," type. ",["a",{title:null,href:"https://ant.design/components/card/#components-card-demo-inner"},"Demo"],"\u3002"]],["li",["p","\ud83c\udf1f Added ",["code","cover"],"\u3001",["code","actions"]," and a new ",["code","Meta"]," component. ",["a",{title:null,href:"https://ant.design/components/card/#components-card-demo-meta"},"Demo"],"\u3002"]]]],["li",["p","DatePicker"],["ul",["li",["p","\ud83c\udf1f Added ",["code","mode"]," and ",["code","onPanelChange"],"\uff0cto allow controlling the panel mode. ",["a",{title:null,href:"https://ant.design/components/date-picker/#components-date-picker-demo-mode"},"Demo"],"\u3002"]],["li",["p","\ud83c\udf1f Added ",["code","WeekPicker"]," component. ",["a",{title:null,href:"https://ant.design/components/date-picker/#components-date-picker-demo-basic"},"Demo"]]],["li",["p","\ud83c\udf1f Added new ",["code","dateRender"]," prop to allow customizing date cell."]]]],["li",["p","TimePicker"],["ul",["li",["p","\ud83c\udf1f Added new ",["code","hourStep"],", ",["code","minuteStep"],", ",["code","secondStep"]," props to allow customizing time setps. ",["a",{title:null,href:"https://ant.design/components/time-picker/#components-time-picker-demo-interval-options"},"Demo"]]],["li",["p","\ud83c\udf1f Added new ",["code","focusOnOpen"]," prop to focus input after panel is open."]]]],["li",["p","Table"],["ul",["li",["p","\ud83c\udf1f Added new ",["code","components"]," prop to allow overriding default table elements."],["pre",{lang:"javascript",highlighted:'<span class="token comment" spellcheck="true">// You can override following elements</span>\n<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">{</span>\n  table<span class="token punctuation">:</span> MyTable<span class="token punctuation">,</span>\n  header<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    wrapper<span class="token punctuation">:</span> HeaderWrapper<span class="token punctuation">,</span>\n    row<span class="token punctuation">:</span> HeaderRow<span class="token punctuation">,</span>\n    cell<span class="token punctuation">:</span> HeaderCell<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  body<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    wrapper<span class="token punctuation">:</span> BodyWrapper<span class="token punctuation">,</span>\n    row<span class="token punctuation">:</span> BodyRow<span class="token punctuation">,</span>\n    cell<span class="token punctuation">:</span> BodyCell<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token operator">&lt;</span>Table components<span class="token operator">=</span><span class="token punctuation">{</span>components<span class="token punctuation">}</span> columns<span class="token operator">=</span><span class="token punctuation">{</span>columns data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token operator">/</span><span class="token operator">></span>'},["code","// You can override following elements\nconst components = {\n  table: MyTable,\n  header: {\n    wrapper: HeaderWrapper,\n    row: HeaderRow,\n    cell: HeaderCell,\n  },\n  body: {\n    wrapper: BodyWrapper,\n    row: BodyRow,\n    cell: BodyCell,\n  },\n};\n\n<Table components={components} columns={columns data={data}}  />"]]],["li",["p","\ud83c\udf1f Added new ",["code","onRow"]," prop to allow passing custom props to table body row."]],["li",["p","\ud83c\udf1f Added new ",["code","onHeaderRow"]," props to allow passing custom props to table header row."]],["li",["p","\ud83c\udf1f Added ",["code","column[onCell]"]," to allow passing custom props to table body cell."]],["li",["p","\ud83c\udf1f Added ",["code","column[onHeaderCell]"]," to allow passing custom props to table header cell."]],["li",["p","\ud83c\udf1f Added ",["code","column[align]"]," to allow setting how text aligns."]],["li",["p","\ud83c\udf1f Added ",["code","column[defaultSortOrder]"]," to allow setting default sort order. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/8111"},"#8111"]," ",["a",{title:null,href:"https://github.com/megawac"},"@megawac"]]],["li",["p","\ud83c\udf1f Added ",["code","rowSelection[fixed]"]," to allow fixing the selection column.\u3002"]],["li",["p","\ud83d\ude45 Deprecated ",["code","getBodyWrapper"],", please use ",["code","components"]," instead."]],["li",["p","\ud83d\ude45 Deprecated ",["code","onRowClick"],"\uff0c",["code","onRowDoubleClick"],"\u3001",["code","onRowContextMenu"],"\u3001",["code","onRowMouseEnter"],"\u3001",["code","onRowMouseLeave"],", please use ",["code","onRow"]," instead."],["pre",{lang:"javascript",highlighted:'<span class="token operator">&lt;</span>Table onRow<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onDoubleClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onContextMenu<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onMouseEnter<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onMouseLeave<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>'},["code","<Table onRow={(record) => ({\n  onClick: () => {},\n  onDoubleClick: () => {},\n  onContextMenu: () => {},\n  onMouseEnter: () => {},\n  onMouseLeave: () => {},\n})} />"]]]]],["li",["p","Select"],["ul",["li",["p","\ud83c\udf1f Option's value can be a number in single or multiple mode."]],["li",["p","\ud83c\udf1f Added new ",["code","maxTagCount"]," and ",["code","maxTagPlaceholder"]," props."]],["li",["p","\ud83c\udf1f Added new ",["code","showAction"]," prop to allow setting the trigger action for popup."]],["li",["p","\ud83c\udf1f Added new ",["code","onMouseEnter"]," and ",["code","onMouseLeave"]," callback."]]]],["li",["p","LocaleProvider"],["ul",["li",["p","\ud83c\uddee\ud83c\uddf8 Added Icelandic. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/7561"},"#7561"]," ",["a",{title:null,href:"https://github.com/paunovic-stefan"},"@paunovic-stefan"]]],["li",["p","\ud83c\uddea\ud83c\uddec Added Egyptian Arabic. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/7888"},"#7888"]," ",["a",{title:null,href:"https://github.com/mohamed-seada-1994"},"@mohamed-seada-1994"]]],["li",["p","\ud83c\uddfa\ud83c\udde6 Added Ukrainian. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/8169"},"#8169"]," ",["a",{title:null,href:"https://github.com/anxolerd"},"@anxolerd"]]]]]],["h3","Bug fixes"],["ul",["li",["p","Form"],["ul",["li",["p","\ud83d\udc1e Fixed issue result in Input icon is hovered by feedback icon."]],["li",["p","\ud83d\udc1e Fixed feedback icon not centered in large input."]]]],["li",["p","\ud83d\udc1e Fix Menu key press error. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/8089"},"#8089"]]]],["h3","Other things"],["ul",["li",["p","Don't need set ",["code","allowSyntheticDefaultImports"]," when using in TypeScript."]],["li",["p","We removed ",["code","react@0.14"]," and ",["code","react@15"]," from ",["code","peerDependencies"],", though ",["code","antd@3.0"]," still works on old React versions, but we highly recommend you upgrading to React 16 since we may use the new features only exists in React 16 in the future. See ",["a",{title:null,href:"https://reactjs.org/blog/2017/09/26/react-v16.0.html"},"React 16"]]],["li",["p","Fully es module support, if you are using webpack 3, you can set babel-plugin-import's ",["code","libraryDirectory"]," to ",["code","es"]," to enable tree shaking ."]],["li",["p","We will support 2.x branch until July in next year."]]],["h2","2.x"],["p","Visit ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/2.x-stable/CHANGELOG.md"},"GitHub"]," to read ",["code","2.x"]," change logs."],["h2","1.11.4"],["p","Visit ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/1.x-stable/CHANGELOG.md"},"GitHub"]," to read change logs from ",["code","0.x"]," to ",["code","1.x"],"."]],meta:{order:6,title:"Change Log",toc:!1,timeline:!0,filename:"CHANGELOG.en-US.md"},description:["section",["p",["code","antd"]," strictly follows ",["a",{title:null,href:"http://semver.org/"},"Semantic Versioning 2.0.0"],"."],["h4","Release Schedule"],["ul",["li",["p","Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix)."]],["li",["p","Monthly release: minor version at the end of every month for new features."]],["li",["p","Major version release is not included in this schedule for breadking change and new features."]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#3.0.0",title:"3.0.0"},"3.0.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#2.x",title:"2.x"},"2.x"]],["li",["a",{className:"bisheng-toc-h2",href:"#1.11.4",title:"1.11.4"},"1.11.4"]]]}}});