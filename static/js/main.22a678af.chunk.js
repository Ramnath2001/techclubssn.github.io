(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e){e.exports={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.83,width:1.1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:171,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},231:function(e,t,a){e.exports=a(521)},236:function(e,t,a){},238:function(e,t,a){},240:function(e,t,a){},256:function(e,t){},258:function(e,t){},290:function(e,t){},291:function(e,t){},357:function(e,t){},521:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(39),l=a.n(r),i=(a(236),a(139)),o=a(28),c=a(29),u=a(31),d=a(30),m=a(32),p=a(40),h=(a(238),a(240),a(221)),y=a.n(h),b=a(222),v=a.n(b),E=a(223),f=a(523),g=a(526),k=a(527),w=a(74),S=a(75),O=a(135),j=a(524),C=a(529),N=a(528),T=a(95),x=T.Element,D=T.scroller,H=T.animateScroll,z=0,P=E,_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={navExpanded:!1},a.setNavExpanded=a.setNavExpanded.bind(Object(p.a)(Object(p.a)(a))),a.closeNav=a.closeNav.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setNavExpanded",value:function(e){this.setState({navExpanded:e})}},{key:"closeNav",value:function(){this.setState({navExpanded:!1})}},{key:"render",value:function(){return s.a.createElement(j.a,{inverse:!0,fixedTop:!0,onToggle:this.setNavExpanded,expanded:this.state.navExpanded},s.a.createElement(j.a.Header,null,s.a.createElement(j.a.Brand,null,s.a.createElement(f.a,{to:"/",onClick:this.closeNav},s.a.createElement("button",{style:{background:"transparent",borderColor:"transparent"}},"TechClubSSN"))),s.a.createElement(j.a.Toggle,{style:{marginRight:"27px"}})),s.a.createElement(j.a.Collapse,null,s.a.createElement(C.a,{pullRight:!0},s.a.createElement(N.a,{eventKey:1,href:"#"},s.a.createElement(f.a,{to:"/news",onClick:this.closeNav,className:"navbar-link-style"},"News")),s.a.createElement(N.a,{eventKey:2,href:"#"},s.a.createElement(f.a,{to:"/sessions",onClick:this.closeNav,className:"navbar-link-style"},"Sessions")),s.a.createElement(N.a,{eventKey:3,href:"#"},s.a.createElement(f.a,{to:"/about",onClick:this.closeNav,className:"navbar-link-style"},"About Us")),s.a.createElement(N.a,{eventKey:4,href:"#"},s.a.createElement(f.a,{to:"/team",onClick:this.closeNav,className:"navbar-link-style"},"Team")),s.a.createElement(N.a,{style:{paddingRight:"10px"},className:"navbar-link-style",eventKey:5,href:"https://github.com/techclubssn",target:"_blank",rel:"noopener noreferrer"},"GitHub"))))}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"customMarkdownParse",value:function(e){for(var t=0,a=0,n=0,r=0,l=!1,i=-1,o={type:[],content:{data:[],link:[]}},c=0;c<e.length;c++)"["!==e[c]||l||(r=c,a=c+1),"]"!==e[c]||"("!==e[c+1]||l||(o.type.push("p"),o.content.data.push(e.substr(t,r-t)),o.content.link.push(""),n=c,i=c+1,l=!0),")"===e[c]&&l&&(o.type.push("a"),o.content.data.push(e.substr(a,n-a)),o.content.link.push(e.substr(i+1,c-i-1)),l=!1,t=c+1);return o.type.push("p"),o.content.data.push(e.substr(t,e.length)),o.content.link.push(""),s.a.createElement("span",null,o.type.map(function(e,t){return s.a.createElement("span",{key:t},"p"===e?s.a.createElement("span",null,o.content.data[t]):s.a.createElement("a",{className:"footer-link",href:o.content.link[t],target:"_blank",rel:"noopener noreferrer"},s.a.createElement("b",null,o.content.data[t])))}))}},{key:"render",value:function(){return s.a.createElement("span",null,this.customMarkdownParse(this.props.data))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={displayPara:a.props.sticky},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"paraContent",value:function(){return s.a.createElement("div",{style:{paddingBottom:"5px"}},s.a.createElement("p",null,"Sessions are weekly activities organized by the TechClub members. They are usually comprised of tutorials and classes on a particular area of concentration. We also organize talks and provide guidance on technical events, projects and opportunities."),s.a.createElement("p",null,"Sessions are mostly conducted during TechClub hours, which are usually kept at the last few periods of Thursday or Tuesday. All sessions are open to everyone, however they might happen during class hours of other departments. This section lists out the date and venue of upcoming and past sessions."))}},{key:"toggleDisplayPara",value:function(){var e=this.props.sticky,t=this.state.displayPara;!1===e&&!0===t?this.setState({displayPara:!1}):!1===e&&!1===t&&this.setState({displayPara:!0})}},{key:"sessionHeaderSticky",value:function(){var e=this,t=this.state.displayPara;return s.a.createElement("div",null,!0===this.props.sticky?s.a.createElement(S.Sticky,null,function(t){var a=t.style;return s.a.createElement("div",{style:Object(i.a)({},a,{paddingTop:"30px",paddingBottom:"47px"})},s.a.createElement("h1",null,"Sessions"),e.paraContent())}):s.a.createElement("div",null,s.a.createElement("h1",null,"Sessions"),s.a.createElement(O.Collapse,{isOpened:t},this.paraContent()),s.a.createElement("button",{onClick:function(){return e.toggleDisplayPara()},className:"btn btn-warning"},!0===t?"Less":"More")))}},{key:"renderTimeLine",value:function(){var e=this.props.sticky?"87px":"0px";return 0===this.props.data.length?s.a.createElement("div",{align:"center",style:{paddingTop:e}},s.a.createElement("h4",null,"Fetching latest information"),s.a.createElement("div",{className:"loader"})):s.a.createElement(w.Timeline,{orientation:"right",lineColor:"#333",lineStyle:{width:"4px"}},this.props.data.slice(0).reverse().map(function(e,t){return s.a.createElement(w.TimelineEvent,{title:e.sessionName,container:"card",subtitle:s.a.createElement("div",null,s.a.createElement("p",{style:{margin:"0"}}," ","Date: "+e.date," "),s.a.createElement("p",{style:{margin:"0"}},""===e.venue?"Venue: TBD":"Venue: "+e.venue)),cardHeaderStyle:{background:"orange"},bubbleStyle:{background:"orange",borderColor:"#333",borderWidth:"4px"},titleStyle:{fontSize:"18px",color:"#333",fontFamily:"Cabin"},subtitleStyle:{fontSize:"11px",color:"white"},contentStyle:{fontFamily:"Cabin",fontSize:"14px"}},s.a.createElement(M,{data:e.details}))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement(S.StickyContainer,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6 col-sm-push-6 sessionsHeader"},this.sessionHeaderSticky()),s.a.createElement("div",{className:"col-sm-6 col-sm-pull-6 sessionsStyle"},this.renderTimeLine()))))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={displayPara:a.props.sticky},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"paraContent",value:function(){return s.a.createElement("div",{style:{paddingBottom:"5px"}},s.a.createElement("p",null,"Information on the latest news regarding TechClub, Events and Hackathons."))}},{key:"toggleDisplayPara",value:function(){var e=this.props.sticky,t=this.state.displayPara;!1===e&&!0===t?this.setState({displayPara:!1}):!1===e&&!1===t&&this.setState({displayPara:!0})}},{key:"newsHeaderSticky",value:function(){var e=this,t=this.state.displayPara;return s.a.createElement("div",null,!0===this.props.sticky?s.a.createElement(S.Sticky,null,function(t){var a=t.style;return s.a.createElement("div",{style:Object(i.a)({},a,{paddingTop:"30px",paddingBottom:"30px"})},s.a.createElement("h1",null,"Anouncements"),e.paraContent())}):s.a.createElement("div",null,s.a.createElement("h1",null,"Anouncements"),s.a.createElement(O.Collapse,{isOpened:t},this.paraContent()),s.a.createElement("button",{onClick:function(){return e.toggleDisplayPara()},className:"btn btn-warning"},!0===t?"Less":"More")))}},{key:"renderTimeLine",value:function(){var e=this.props.sticky?"37px":"0px";return 0===this.props.data.length?s.a.createElement("div",{align:"center",style:{paddingTop:e}},s.a.createElement("h4",null,"Fetching latest information"),s.a.createElement("div",{className:"loader"})):s.a.createElement(w.Timeline,{orientation:"left",lineColor:"#333",lineStyle:{width:"4px"}},this.props.data.slice(0).reverse().map(function(e,t){return s.a.createElement(w.TimelineEvent,{title:e.headline,subtitle:"Date: "+e.date,container:"card",cardHeaderStyle:{background:"orange"},bubbleStyle:{background:"orange",borderColor:"#333",borderWidth:"4px"},titleStyle:{fontSize:"18px",color:"#333",fontFamily:"Cabin"},subtitleStyle:{fontSize:"11px",color:"white"},contentStyle:{fontFamily:"Cabin",fontSize:"14px"}},s.a.createElement(M,{data:e.news}))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement(S.StickyContainer,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12 sessionsHeader"},this.newsHeaderSticky()),s.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12 sessionsStyle"},this.renderTimeLine()))))}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return s.a.createElement("div",{className:"aboutUsStyle"},s.a.createElement("div",{className:"aboutContainer"},s.a.createElement("img",{className:"aboutImg",src:this.props.largeScreen?"/cover_large.jpg":"/cover_small.jpg",alt:"Hackathon"}),s.a.createElement("div",{className:"aboutHeading"},s.a.createElement("h1",null,"A B O U T"))),s.a.createElement("div",{className:"aboutContent"},s.a.createElement("h4",null,"Tech Club SSN is a student run organization of the department of ECE in SSN College of Engineering."),s.a.createElement("hr",null),s.a.createElement("h1",null,"Our Mission"),s.a.createElement("p",null,"Since its inception in 2014, Tech Club SSN serves to enhance student involvement in fields revolving around Electronics and Computer Science. We do this by conducting tutorials, classes and events on practical concepts in fields such as Computer Vision, IoT, Robotics and Machine Learning. We organize technical events around the year where students can apply their newly acquired skills. Moreover, we guide students to pursue their aspirations in the fields of their interest by preparing them for internships, independant research work, significant technical events and hackathons."),s.a.createElement("hr",null),s.a.createElement("h1",null,"Join Us"),s.a.createElement("p",null,"Let's build something great together. We conduct weekly sessions and lots of events throughout the year. Sessions are mostly conducted during TechClub hours, which are usually kept at the last few periods of Thursday or Tuesday. Details of upcoming sessions will be updated on the website. Stay tuned to the news section of the website for information on exciting events!"),s.a.createElement("p",null,"Tech Club SSN is a welcoming community that is open for all. No pre-requisite knowledge is required! A desire to learn and build something is more than enough. Even though Tech Club is an organization based in the department of ECE, students of all departments are welcome to join our activities! However, since most sessions are conducted on Tech Club hours which are only available on ECE timetables (from 3rd semester and above), we cannot guarantee OD for regular sessions for students belonging to other departments (and first years students). OD will be provided for almost every other acitivity for everyone!"),s.a.createElement("hr",null),s.a.createElement("h1",null,"Study Guides"),s.a.createElement("p",null,"We document the materials used in our sessions so that students can refer to it even if they miss out on the sessions. Also, we document information regarding internships, technical opportunities, MS application process and much more. Checkout our GitHub page for all such materials.")))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"scrollToTop",value:function(){H.scrollToTop()}},{key:"render",value:function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("button",{onClick:this.scrollToTop,className:"footer-chevron"},s.a.createElement("i",{className:"fas fa-chevron-up"})),s.a.createElement("hr",{width:"80%",style:{marginTop:"7px"}}),s.a.createElement("h3",null,"TechClubSSN"),s.a.createElement("p",null,"Built using React. Fork the website",s.a.createElement("a",{href:"https://github.com/techclubssn/techclubssn.github.io",target:"_blank",rel:"noopener noreferrer",className:"footer-link"}," here"),"."))}}]),t}(n.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"noUrlHandler",value:function(e,t){return""===e?s.a.createElement("h4",null,s.a.createElement("b",null,t)):s.a.createElement("h4",null,s.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},t))}},{key:"noImgHandler",value:function(e,t){return""===t?s.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",alt:e,className:"teamImg"}):s.a.createElement("img",{src:t,alt:e,className:"teamImg"})}},{key:"rowBuilder",value:function(e){for(var t=e.length,a=Math.ceil(t/3),n=[],r=0;r<a;r++){for(var l=[],i=0;i<3;i++){var o=3*r+i;o<t&&l.push(s.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12"},s.a.createElement("div",{key:o},this.noImgHandler(e[o].name,e[o].dp),this.noUrlHandler(e[o].web,e[o].name),s.a.createElement("h5",{style:{marginTop:"-5px"}},e[o].role))))}n.push(s.a.createElement("div",{className:"row",style:{paddingTop:"20px"}},l))}return s.a.createElement("div",{className:"container"},n)}},{key:"renderTeam",value:function(){return 0===this.props.data.length?s.a.createElement("div",{align:"center",style:{paddingBottom:"15px"}},s.a.createElement("h4",null,"Fetching team information"),s.a.createElement("div",{className:"loader"})):s.a.createElement("div",null,this.rowBuilder(this.props.data))}},{key:"render",value:function(){return s.a.createElement("div",{className:"teamStyle"},s.a.createElement("h1",{style:{fontFamily:"Cabin"}},"Meet the Team"),this.renderTeam())}}]),t}(n.Component),I={height:"100vh",border:"3px",boxSizing:"border-box",overflowX:"hidden",overflowY:"hidden",margin:"0px"},U={position:"absolute",top:"5%"},R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={enableHomeScroll:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"scrollToElement",value:function(e){var t={};arguments.length>1&&void 0!==arguments[1]&&arguments[1]||(t={smooth:!0,offset:-50}),D.scrollTo(e,t)}},{key:"componentDidMount",value:function(){"sessions"===this.props.dest&&this.scrollToElement("sess"),"news"===this.props.dest&&this.scrollToElement("news"),"home"===this.props.dest&&this.scrollToElement("home",!0)}},{key:"componentDidUpdate",value:function(){"sessions"===this.props.dest&&this.scrollToElement("sess"),"news"===this.props.dest&&this.scrollToElement("news"),"home"===this.props.dest&&(z<1?z+=1:this.scrollToElement("home"))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{style:I},s.a.createElement(x,{name:"home"}),s.a.createElement("div",null,s.a.createElement(v.a,{params:P,style:U})),s.a.createElement("div",{className:"logoMobile"},s.a.createElement("img",{src:"/imgs/logo.png",alt:"logo",className:"logoSize"}))),s.a.createElement(x,{name:"news"},s.a.createElement(B,{data:this.props.newsData,sticky:this.props.sticky})),s.a.createElement(x,{name:"sess"},s.a.createElement(W,{data:this.props.sessionData,sticky:this.props.sticky})))}}]),t}(n.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(g.a,null,s.a.createElement(k.a,{exact:!0,path:"/",render:function(t){return s.a.createElement(R,{newsData:e.props.data.newsData,sessionData:e.props.data.sessionData,sticky:e.props.data.sticky,dest:"home"})}}),s.a.createElement(k.a,{path:"/news",render:function(t){return s.a.createElement(R,{newsData:e.props.data.newsData,sessionData:e.props.data.sessionData,sticky:e.props.data.sticky,dest:"news"})}}),s.a.createElement(k.a,{path:"/sessions",render:function(t){return s.a.createElement(R,{newsData:e.props.data.newsData,sessionData:e.props.data.sessionData,sticky:e.props.data.sticky,dest:"sessions"})}}),s.a.createElement(k.a,{path:"/about",render:function(t){return s.a.createElement(L,{largeScreen:e.props.data.sticky})}}),s.a.createElement(k.a,{path:"/team",render:function(t){return s.a.createElement(F,{data:e.props.data.teamData,dest:"team"})}}))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={sessionData:[],newsData:[],teamData:[],sticky:window.innerWidth>768},a.updateWidth=a.updateWidth.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"updateWidth",value:function(){!1===this.state.sticky&&window.innerWidth>768?this.setState({sticky:!0}):!0===this.state.sticky&&window.innerWidth<=768&&this.setState({sticky:!1})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.updateWidth),y.a.init({key:"1AOZhova18bEDHNjI7OfdqzxtVyZg6Mg5ECAuMERHwD4",callback:function(t,a){e.setState({sessionData:t.Sessions.elements,newsData:t.News.elements,teamData:t.Team.elements})},simpleSheet:!1})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(_,null)),s.a.createElement(K,{data:this.state}),s.a.createElement(A,null))}}]),t}(n.Component),V=a(525);l.a.render(s.a.createElement(V.a,null,s.a.createElement(q,null)),document.getElementById("root"))}},[[231,2,1]]]);
//# sourceMappingURL=main.22a678af.chunk.js.map