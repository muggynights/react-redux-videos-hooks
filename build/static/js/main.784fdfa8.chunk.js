(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},21:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(13),r=a.n(c),l=a(2),s=function(e){var t=e.onFormSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],s=c[1];return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r)},className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Search For a Video"),i.a.createElement("input",{type:"text",value:r,onChange:function(e){s(e.target.value)}}))))},u=(a(21),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),o=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(u,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},m=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},d=a(3),v=a.n(d),p=a(14),f=a(15),E=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"type",maxResults:5,key:"AIzaSyBqG7ij6XpYoJti0D0bfAETjibNncpqlKQ"}}),b=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),i=a[0],c=a[1];Object(n.useEffect)((function(){r(e)}),[e]);var r=function(){var e=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/search",{params:{q:t}});case 2:a=e.sent,c(a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[i,r]},N=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],r=b("buildings"),u=Object(l.a)(r,2),d=u[0],v=u[1];return Object(n.useEffect)((function(){c(d[0])}),[d]),i.a.createElement("div",{className:"ui container"},i.a.createElement(s,{onFormSubmit:v}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(m,{video:a})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(o,{videos:d,onVideoSelect:c})))))};r.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.784fdfa8.chunk.js.map