(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,r){e.exports=r(49)},39:function(e,t,r){},41:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(28),s=r.n(o),i=(r(39),r(7)),c=r(8),u=r(11),p=r(9),l=r(12),h=(r(41),r(10)),m=r(20),d=r(33),f=r(19),O={FETCH_PHOTO_URLS:"FETCH_PHOTO_URLS",SET_PHOTO_SIZE:"SET_PHOTO_SIZE",SET_PHOTO_BORDER_RADIUS:"SET_PHOTO_BORDER_RADIUS",UPDATE_NEW_INPUT_ID:"UPDATE_NEW_INPUT_ID",SET_ARRAY_OF_USER_AVATARS:"SET_ARRAY_OF_USER_AVATARS"},v=function(e){return{type:O.SET_ARRAY_OF_USER_AVATARS,arrayOfUserAvatars:e}},b=function(){return{type:O.FETCH_PHOTO_URLS}},E={photoSize:window.innerWidth<400?window.innerWidth:400,photoBorderRadius:0,arrayOfUserAvatars:[{id:2,url:""},{id:7,url:""},{id:1,url:""},{id:8,url:""},{id:3,url:""},{id:9,url:""}],newPhotoInput:""};var y=r(16),A=r(21),j=r.n(A),_=r(17);function U(e){return fetch("https://picurl.herokuapp.com/users/".concat(e),{method:"GET",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8",accept:"application/json"},mode:"cors"}).then(function(e){return e.json()})}var w=j.a.mark(R),S=j.a.mark(T);function R(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(O.FETCH_PHOTO_URLS,T);case 2:case"end":return e.stop()}},w,this)}function T(){var e,t,r,n,a,o,s;return j.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(_.c)(function(e){return Object(y.a)(e.arrayOfUserAvatars)});case 3:e=i.sent,t=!0,r=!1,n=void 0,i.prev=7,a=e[Symbol.iterator]();case 9:if(t=(o=a.next()).done){i.next=18;break}if(""!==(s=o.value).url){i.next=15;break}return i.next=14,Object(_.a)(U,s.id);case 14:s.url=i.sent.url;case 15:t=!0,i.next=9;break;case 18:i.next=24;break;case 20:i.prev=20,i.t0=i.catch(7),r=!0,n=i.t0;case 24:i.prev=24,i.prev=25,t||null==a.return||a.return();case 27:if(i.prev=27,!r){i.next=30;break}throw n;case 30:return i.finish(27);case 31:return i.finish(24);case 32:return i.next=35,Object(_.b)({type:O.SET_ARRAY_OF_USER_AVATARS,arrayOfUserAvatars:e});case 35:i.next=41;break;case 37:return i.prev=37,i.t1=i.catch(0),i.next=41,console.log("Error on getting photoes data",i.t1);case 41:case"end":return i.stop()}},S,this,[[0,37],[7,20,24,32],[25,,27,31]])}var N=r(51),P=r(53),k=r(52),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"setting-controller-div"},a.a.createElement("input",{type:"range",min:"80",max:window.innerWidth<400?window.innerWidth:400,step:"1",value:this.props.photoSize,onChange:function(t){return e.props.setPhotoSize(t.currentTarget.value)}}),a.a.createElement("label",{htmlFor:""},"Size: ",this.props.photoSize),a.a.createElement("input",{type:"range",min:"0",max:"50",step:"1",value:this.props.photoBorderRadius,onChange:function(t){return e.props.setPhotoBorderRadius(t.currentTarget.value)}}),a.a.createElement("label",{htmlFor:""},"Radius: ",this.props.photoBorderRadius))}}]),t}(n.Component),g=Object(h.b)(function(e){return{photoSize:e.photoSize,photoBorderRadius:e.photoBorderRadius}},function(e){return{setPhotoSize:function(t){return e(function(e){return{type:O.SET_PHOTO_SIZE,photoSize:e}}(t))},setPhotoBorderRadius:function(t){return e(function(e){return{type:O.SET_PHOTO_BORDER_RADIUS,photoBorderRadius:e}}(t))}}})(I),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"photo-element-div",style:{height:"".concat(this.props.photoSize,"px"),width:"".concat(this.props.photoSize,"px")}},a.a.createElement("img",{src:this.props.url,alt:"Some avatar",height:this.props.photoSize,width:this.props.photoSize,style:{borderRadius:"".concat(this.props.photoBorderRadius,"%")}}))}}]),t}(n.Component),D=Object(h.b)(function(e){return{photoSize:e.photoSize,photoBorderRadius:e.photoBorderRadius}},null)(C),H=r(50),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPhotoUrls()}},{key:"generateAllPhotoes",value:function(){for(var e=this.props.arrayOfUserAvatars,t=[],r=0;r<e.length;r++)t.push(a.a.createElement(D,{key:r,url:e[r].url}));return t}},{key:"render",value:function(){return a.a.createElement("div",{className:"view-module-div"},a.a.createElement("div",{className:"view-module-controls-div"},a.a.createElement(g,null),a.a.createElement(H.a,{to:"photolist"},a.a.createElement("button",null,"Edit avatars list"))),a.a.createElement("div",{className:"view-module-photoes-div"},this.generateAllPhotoes()))}}]),t}(n.Component),B=Object(h.b)(function(e){return{arrayOfUserAvatars:e.arrayOfUserAvatars}},function(e){return{fetchPhotoUrls:function(){return e(b())}}})(x),z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"deleteElement",value:function(){var e=Object(y.a)(this.props.arrayOfUserAvatars);e.splice(this.props.photoElementNumber,1),this.props.setArrayOfUserAvatars(e)}},{key:"moveUp",value:function(){var e=Object(y.a)(this.props.arrayOfUserAvatars),t=e[this.props.photoElementNumber];e[this.props.photoElementNumber]=e[this.props.photoElementNumber-1],e[this.props.photoElementNumber-1]=t,this.props.setArrayOfUserAvatars(e)}},{key:"moveDown",value:function(){var e=Object(y.a)(this.props.arrayOfUserAvatars),t=e[this.props.photoElementNumber];e[this.props.photoElementNumber]=e[this.props.photoElementNumber+1],e[this.props.photoElementNumber+1]=t,this.props.setArrayOfUserAvatars(e)}},{key:"render",value:function(){return a.a.createElement("div",{className:"photo-control-item-div"},a.a.createElement("button",{className:"photo-control-btn-up",onClick:this.moveUp.bind(this),disabled:0===this.props.photoElementNumber},"\u2191 Up"),a.a.createElement("button",{className:"photo-control-btn-down",onClick:this.moveDown.bind(this),disabled:this.props.photoElementNumber===this.props.arrayOfUserAvatars.length-1},"\u2193 Down"),a.a.createElement("div",{className:"photo-control-span"},a.a.createElement("span",null,this.props.arrayOfUserAvatars[this.props.photoElementNumber].id)),a.a.createElement("button",{className:"photo-control-btn-del",onClick:this.deleteElement.bind(this)},a.a.createElement("i",{className:"fa fa-trash"}),"\xa0Delete"))}}]),t}(n.Component),F=Object(h.b)(function(e){return{arrayOfUserAvatars:e.arrayOfUserAvatars}},function(e){return{setArrayOfUserAvatars:function(t){return e(v(t))}}})(z),W=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"onChangeHandler",value:function(e){/^[0-9\b]+$/.test(e.currentTarget.value)&&""!==e.currentTarget.value&&this.props.updateNewIdInput(e.currentTarget.value)}},{key:"onKeyPressHandler",value:function(e){"Enter"===e.key&&""!==this.props.newPhotoInput&&this.setNewArray()}},{key:"onClickHandler",value:function(){""!==this.props.newPhotoInput&&this.setNewArray()}},{key:"setNewArray",value:function(){var e=Object(y.a)(this.props.arrayOfUserAvatars);e.reverse(),e.push({id:+this.props.newPhotoInput,url:""}),e.reverse(),this.props.setArrayOfUserAvatars(e),this.props.fetchPhotoUrls(),this.props.updateNewIdInput("")}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"new-photo-input"},a.a.createElement("input",{value:this.props.newPhotoInput,placeholder:"Enter new ID",type:"number",autoFocus:!0,onKeyPress:function(t){return e.onKeyPressHandler(t)},onChange:function(t){return e.onChangeHandler(t)}}),a.a.createElement("button",{onClick:this.onClickHandler.bind(this)},"Enter"))}}]),t}(n.Component),V=Object(h.b)(function(e){return{newPhotoInput:e.newPhotoInput,photoIds:e.photoIds,arrayOfUserAvatars:e.arrayOfUserAvatars}},function(e){return{updateNewIdInput:function(t){return e(function(e){return{type:O.UPDATE_NEW_INPUT_ID,newPhotoInput:e}}(t))},setArrayOfUserAvatars:function(t){return e(v(t))},fetchPhotoUrls:function(){return e(b())}}})(W),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"generateAllPhotoElements",value:function(){for(var e=this.props.arrayOfUserAvatars,t=[],r=0;r<e.length;r++)t.push(a.a.createElement(F,{key:r,photoElementNumber:r}));return t}},{key:"render",value:function(){return a.a.createElement("div",{className:"list-changer-div"},a.a.createElement(H.a,{to:""},a.a.createElement("button",{className:"go-back-button"},a.a.createElement("i",{className:"fa fa-home"}),"\xa0\xa0\xa0Go back")),a.a.createElement(V,null),this.generateAllPhotoElements())}}]),t}(n.Component),L=Object(h.b)(function(e){return{arrayOfUserAvatars:e.arrayOfUserAvatars}},null)(Y),Z=function(){return a.a.createElement("section",{className:"home"},a.a.createElement(B,null))},K=function(){return a.a.createElement("section",{className:"changer"},a.a.createElement(L,null))},G=Object(d.a)(),J=Object(m.c)(function(e,t){switch(t.type){case O.SET_PHOTO_SIZE:return Object(f.a)({},e,{photoSize:t.photoSize});case O.SET_PHOTO_BORDER_RADIUS:return Object(f.a)({},e,{photoBorderRadius:t.photoBorderRadius});case O.UPDATE_NEW_INPUT_ID:return Object(f.a)({},e,{newPhotoInput:t.newPhotoInput});case O.SET_ARRAY_OF_USER_AVATARS:return Object(f.a)({},e,{arrayOfUserAvatars:t.arrayOfUserAvatars});default:return e||Object(f.a)({},E)}},Object(m.a)(G));G.run(R);var $=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(h.a,{store:J},a.a.createElement(N.a,null,a.a.createElement("div",{className:"main-div"},a.a.createElement(P.a,null,a.a.createElement(k.a,{exact:!0,path:"/",component:Z}),a.a.createElement(k.a,{path:"/photolist",component:K}),a.a.createElement(k.a,{component:Z})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.f826b3b7.chunk.js.map