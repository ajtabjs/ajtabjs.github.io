"use strict";(this.webpackChunkcordcord_app=this.webpackChunkcordcord_app||[]).push([[69669],{692454:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(675860),o=n(173436),i=n(682684),s=n(278641),a=n(992497),c=n(461061),u=n(959797);function l(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(e){n(e);return}a.done?t(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){l(i,r,o,s,a,"next",e)}function a(e){l(i,r,o,s,a,"throw",e)}s(void 0)}))}}var d=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,
o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;r=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},p={pinMessage:function(e,t){return f((function(){var n,o;return d(this,(function(s){switch(s.label){case 0:n=e.id,o=e.name;return[4,i.Z.unarchiveThreadIfNecessary(e.id)];case 1:s.sent();r.Z.put({url:c.ANM.PIN(n,t),oldFormErrors:!0}).catch((function(){var t;t=e.isPrivate()?u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({maxPins:c.tG9}):u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
maxPins:c.tG9,channelName:o});a.Z.show({title:u.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,body:t,confirmText:u.Z.Messages.OKAY})}));return[2]}}))}))()},unpinMessage:function(e,t){return f((function(){return d(this,(function(n){switch(n.label){case 0:return[4,i.Z.unarchiveThreadIfNecessary(e.id)];case 1:n.sent();r.Z.delete({url:c.ANM.PIN(e.id,t),oldFormErrors:!0}).catch((function(){return a.Z.show({title:u.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,body:u.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,confirmText:u.Z.Messages.TRY_AGAIN,cancelText:u.Z.Messages.CANCEL,onConfirm:p.unpinMessage.bind(p,e,t)})}));return[2]}}))}))()},ackPins:function(e){o.Z.dispatch({type:"CHANNEL_PINS_ACK",channelId:e})},fetchPins:function(e){var t=s.Z.getPinnedMessages(e);if(null==t||!t.loaded&&!t.loading){o.Z.dispatch({type:"LOAD_PINNED_MESSAGES",channelId:e});r.Z.get({url:c.ANM.PINS(e),retries:2,oldFormErrors:!0}).then((function(t){o.Z.dispatch({type:"LOAD_PINNED_MESSAGES_SUCCESS",messages:t.body,channelId:e})}),(function(){
o.Z.dispatch({type:"LOAD_PINNED_MESSAGES_FAILURE",channelId:e})}))}}};const h=p},961713:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(785893),o=n(667294),i=n(294184),s=n.n(i),a=n(489992),c=n(692454),u=n(549425),l=n(53211),f=n(180445),d=n(849832),p=n(435500),h=n(105405),O=n(859023),g=n(191940),y=n(812895),b=n(736488),m=n(30741),E=n(897576),v=n(418674),P=n(340034),j=n(461061),_=n(959797),S=n(878101),N=n.n(S);function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function x(e){x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return x(e)}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){
return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){T(e,t,n[t])}))}return e}function Z(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function D(e,t){
return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e,t){A=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return A(e,t)}var L=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return D(this,n)}}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,
writable:!0,configurable:!0}});t&&A(e,t)}(n,e);var t=C(n);function n(){M(this,n);var e;(e=t.apply(this,arguments)).state={report:!1};e.handleDelete=function(){var t=e.state.report,n=e.props,r=n.channel,o=n.message;t?(0,d.ak)(o,(function(){return u.Z.deleteMessage(r.id,o.id)})):u.Z.deleteMessage(r.id,o.id)};e.handleToggleReport=function(t){e.setState({report:t})};return e}n.prototype.render=function(){var e,t,n=this.state.report,o=this.props,i=o.channel,s=o.message,c=o.showContextMenuHint,u=I(o,["channel","message","showContextMenuHint"]),l=i.type===j.d4z.GUILD_ANNOUNCEMENT&&(0,v.yE)(s.flags,j.iLy.CROSSPOSTED);c&&(e=(0,r.jsx)(y.Z,{className:N().spacingTop,children:_.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()}));(0,P.vc)(s)&&(t=(0,r.jsx)(b.Z,{value:n,onChange:this.handleToggleReport,hideBorder:!0,className:N().spacingTop,children:_.Z.Messages.DELETE_MESSAGE_REPORT}));return(0,r.jsx)(f.Z.Provider,{value:i.guild_id,children:(0,r.jsxs)(m.default,Z(w({
header:l?_.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER:_.Z.Messages.DELETE_MESSAGE_TITLE,confirmText:_.Z.Messages.DELETE,cancelText:_.Z.Messages.CANCEL,onConfirm:this.handleDelete},u),{children:[(0,r.jsx)(a.xv,{variant:"text-md/normal",className:N().spacing,children:l?_.Z.Messages.DELETE_FOLLOWED_NEWS_BODY:_.Z.Messages.DELETE_MESSAGE_BODY}),(0,r.jsx)("div",{className:N().message,children:(0,r.jsx)(p.Z,{channel:i,message:s,disableInteraction:!0})}),t,e]}))})};return n}(o.PureComponent);const k={confirmPin:function(e,t){(0,E.h7)((function(n){var o,i=(0,l.F)(e,O.default,h.Z);o=e.isPrivate()?_.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL:_.Z.Messages.PIN_MESSAGE_BODY.format({channelName:i});return(0,r.jsx)(f.Z.Provider,{value:e.guild_id,children:(0,r.jsxs)(m.default,Z(w({header:_.Z.Messages.PIN_MESSAGE_TITLE,confirmText:_.Z.Messages.PIN_CONFIRM,cancelText:_.Z.Messages.CANCEL,confirmButtonColor:g.Co.Colors.BRAND,onConfirm:function(){return c.Z.pinMessage(e,t.id)}},n),{children:[(0,r.jsx)(a.xv,{
variant:"text-md/normal",className:N().spacing,children:o}),(0,r.jsx)("div",{className:N().message,children:(0,r.jsx)(p.Z,{channel:e,message:t,animateAvatar:!1,disableInteraction:!0})})]}))})}))},confirmUnpin:function(e,t){(0,E.h7)((function(n){return(0,r.jsx)(f.Z.Provider,{value:e.guild_id,children:(0,r.jsxs)(m.default,Z(w({header:_.Z.Messages.UNPIN_MESSAGE_TITLE,confirmText:_.Z.Messages.UNPIN_CONFIRM,cancelText:_.Z.Messages.CANCEL,onConfirm:function(){return c.Z.unpinMessage(e,t.id)}},n),{children:[(0,r.jsx)(a.xv,{variant:"text-md/normal",className:N().spacing,children:_.Z.Messages.UNPIN_MESSAGE_BODY}),(0,r.jsx)("div",{className:s()(N().message,N().spacing),children:(0,r.jsx)(p.Z,{channel:e,message:t,disableInteraction:!0})}),(0,r.jsx)(y.Z,{children:_.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()})]}))})}))},confirmDelete:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(0,E.h7)((function(o){return(0,r.jsx)(R,w({channel:e,message:t,
showContextMenuHint:n},o))}))},confirmEdit:function(e,t,n){(0,E.h7)((function(o){return(0,r.jsx)(m.default,Z(w({header:_.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,confirmText:_.Z.Messages.CONFIRM,cancelText:_.Z.Messages.CANCEL,confirmButtonColor:g.Co.Colors.BRAND,onConfirm:function(){return u.Z.editMessage(e,t,{content:n})}},o),{children:(0,r.jsx)(a.xv,{variant:"text-md/normal",className:N().spacing,children:_.Z.Messages.EDIT_FOLLOWED_NEWS_BODY})}))}))}}},76212:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(785893),o=(n(667294),n(294184)),i=n.n(o),s=n(661933);function a(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function c(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))
;n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}const u=function(e){var t,n=function(t){return(0,r.jsx)(s.Z,{children:function(n){return(0,r.jsx)(e,c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){a(e,t,n[t])}))}return e}({},t),{className:i()(n,t.className)}))}})};n.displayName="withDefaultColorContext(".concat(null!==(t=e.displayName)&&void 0!==t?t:e.name,")");return n}},278641:(e,t,n)=>{n.d(t,{Z:()=>M});var r=n(496486),o=n.n(r),i=n(791462),s=n(173436),a=n(819525),c=n(817513),u=n(356004),l=n(212218),f=n(653772),d=n(171447),p=n(105405),h=n(859023);function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return g(e)}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){b=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return b(e,t)}var m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}var v={};function P(e){
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=u.Z.getChannel(e),i=null!=o?o.getGuildId():null;return{id:e,messages:t.map((function(e){return(0,a.e5)(e)})),guildId:i,loaded:n,loading:r}}function j(e){var t=e.channel;delete v[t.id]}function _(){o().forEach(v,(function(e){o().forEach(e.messages,(function(e){e.timestamp.locale(c.default.locale)}))}))}function S(){o().forEach(v,(function(e){e.messages=e.messages.map((function(e){return e.set("blocked",p.Z.isBlocked(e.author.id))}))}))}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&b(e,t)}(n,e);var t=E(n);function n(){O(this,n);return t.apply(this,arguments)}var r=n.prototype;r.initialize=function(){
this.waitFor(u.Z,f.Z,l.ZP,d.Z,h.default,c.default)};r.getPinnedMessages=function(e){var t;return null!==(t=v[e])&&void 0!==t?t:void 0};r.loaded=function(e){return null!=v[e]&&v[e].loaded};r.__getLocalVars=function(){return{channels:v}};return n}(i.ZP.Store);N.displayName="ChannelPinsStore";const M=new N(s.Z,{CONNECTION_OPEN:function(){v={}},GUILD_DELETE:function(e){var t=e.guild;v=o()(v).filter((function(e){return e.guildId!==t.id})).keyBy("id").value()},MESSAGE_UPDATE:function(e){var t=e.message.id,n=e.message.channel_id;if(null==n)return!1;var r=v[n];if(null==r&&!e.message.pinned)return!1;if(null!=e.message.author)if(e.message.pinned){if(null==r){r=P(n,[e.message],!1);v[n]=r;return}r.messages=r.messages.slice();var i=o().findIndex(r.messages,(function(e){return e.id===t}));-1===i?r.messages.unshift((0,a.e5)(e.message)):r.messages[i]=(0,a.wi)(r.messages[i],e.message);v[n]=r}else{if(null==r)return;var s=o().findIndex(r.messages,(function(e){return e.id===t}));if(-1===s)return
;r.messages=r.messages.slice();r.messages.splice(s,1);v[n]=r}else if(null!=r){var c=o().findIndex(r.messages,(function(e){return e.id===t}));if(c>=0){var u=r.messages[c],l=(0,a.wi)(u,e.message);if(l!==u){var f=r.messages.slice();f[c]=l;v[n].messages=f}}}},MESSAGE_DELETE:function(e){var t=e.id,n=e.channelId,r=v[n];if(null==r)return!1;if(0===o().remove(r.messages,(function(e){return e.id===t})).length)return!1;r.messages=r.messages.slice();v[n]=r},MESSAGE_DELETE_BULK:function(e){var t=e.ids,n=e.channelId,r=v[n];null!=r&&(r.messages=r.messages.filter((function(e){return-1===t.indexOf(e.id)})))},LOAD_PINNED_MESSAGES:function(e){var t=e.channelId;v[t]=P(t,[],!1,!0)},LOAD_PINNED_MESSAGES_SUCCESS:function(e){var t=e.channelId,n=e.messages;v[t]=P(t,n,!0)},LOAD_PINNED_MESSAGES_FAILURE:function(e){var t=e.channelId;delete v[t]},USER_SETTINGS_PROTO_UPDATE:_,I18N_LOAD_SUCCESS:_,CHANNEL_DELETE:j,THREAD_DELETE:j,RELATIONSHIP_ADD:S,RELATIONSHIP_REMOVE:S})},430834:(e,t,n)=>{n.d(t,{Z:()=>j})
;var r=n(785893),o=n(667294),i=n(294184),s=n.n(i),a=n(647446),c=n(248088),u=n(39802),l=n(832010),f=n(76212),d=n(461061),p=n(378902),h=n.n(p);function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function y(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
;if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done);s=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m={mass:1,tension:250},E={TOP:"M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",BOTTOM:"M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"},v={
TOP:"M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",BOTTOM:"M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z"},P={TOP:"M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",BOTTOM:"M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"};const j=(0,f.Z)((function(e){var t,n,i,f,p,O,j,_,S=e.id,N=e.onChange,M=e.checked,T=e.disabled,x=e.className,w=e.focusProps,Z=e.innerRef,I=o.useContext(u.S).reducedMotion,D=o.useRef(null),A=b(o.useState(!1),2),L=A[0],C=A[1],R=(0,l.Sl)(d.Ilk.PRIMARY_DARK_400),k=(0,l.Sl)(d.Ilk.STATUS_GREEN_600),G=(0,c.useSpring)({config:m,opacity:T?.3:1,state:L?M?.7:.3:M?1:0}),B=G.state,U=G.opacity;return(0,r.jsx)(a.tE,y(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){
return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){g(e,t,n[t])}))}return e}({},w),{within:!0,offset:-2,children:(0,r.jsxs)(c.animated.div,{className:s()(h().container,x,(t={},g(t,h().checked,M),g(t,h().disabled,T),t)),onMouseDown:function(){return!T&&C(!0)},onMouseUp:function(){return C(!1)},onMouseLeave:function(){return C(!1)},style:{opacity:U,backgroundColor:B.to({output:[R.hex,k.hex]})},children:[(0,r.jsxs)(c.animated.svg,{className:h().slider,viewBox:"0 0 28 20",preserveAspectRatio:"xMinYMid meet",style:{left:B.to({range:[0,.3,.7,1],output:[-3,1,8,12]})},"aria-hidden":!0,children:[(0,r.jsx)(c.animated.rect,{fill:"white",x:B.to({range:[0,.3,.7,1],output:[4,0,0,4]}),y:B.to({range:[0,.3,.7,1],output:[0,1,1,0]}),height:B.to({range:[0,.3,.7,1],output:[20,18,18,20]}),width:B.to({range:[0,.3,.7,1],output:[20,28,28,20]}),rx:"10"}),(n=B,i=R,f=k,p=I.enabled,O=n.to({output:[i.hex,f.hex]}),j=p?[E.TOP,E.TOP,P.TOP,P.TOP]:[E.TOP,v.TOP,v.TOP,P.TOP],
_=p?[E.BOTTOM,E.BOTTOM,P.BOTTOM,P.BOTTOM]:[E.BOTTOM,v.BOTTOM,v.BOTTOM,P.BOTTOM],(0,r.jsxs)("svg",{viewBox:"0 0 20 20",fill:"none",children:[(0,r.jsx)(c.animated.path,{fill:O,d:n.to({range:[0,.3,.7,1],output:j})}),(0,r.jsx)(c.animated.path,{fill:O,d:n.to({range:[0,.3,.7,1],output:_})})]}))]}),(0,r.jsx)("input",{id:S,type:"checkbox",ref:function(e){D.current=e;null!=Z&&(Z.current=e)},className:h().input,tabIndex:T?-1:0,onKeyDown:function(e){T||e.repeat||" "!==e.key&&"Enter"!==e.key||C(!0)},onKeyUp:function(e){var t;if(!T&&L&&!e.repeat){C(!1);"Enter"===e.key&&(null===(t=D.current)||void 0===t||t.click())}},onChange:function(e){C(!1);null==N||N(e.currentTarget.checked,e)},checked:M,disabled:T})]})}))}))},736488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(785893),o=n(667294),i=n(294184),s=n.n(i),a=n(647446),c=n(95467),u=n(892472),l=n(430834),f=n(757987),d=n(272729),p=n(15063),h=n(604175),O=n(959797),g=n(879761),y=n.n(g);function b(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,
configurable:!0,writable:!0}):e[t]=n;return e}function m(e){var t=e.value,n=e.disabled,i=void 0!==n&&n,g=e.hideBorder,m=void 0!==g&&g,E=e.tooltipNote,v=e.onChange,P=e.className,j=e.style,_=e.note,S=e.helpdeskArticleId,N=e.children,M=o.useRef(null),T=o.useRef(null),x=(0,d.Dt)(),w=(0,r.jsx)(l.Z,{id:x,checked:t,onChange:v,disabled:i,focusProps:{enabled:!1},innerRef:M});return(0,r.jsxs)("div",{style:j,className:s()(y().container,P,b({},y().disabled,i)),children:[(0,r.jsx)(a.tE,{within:!0,offset:-4,focusTarget:M,ringTarget:T,children:(0,r.jsxs)("div",{className:y().labelRow,ref:T,children:[(0,r.jsx)("label",{htmlFor:x,className:y().title,children:N}),(0,r.jsx)("div",{className:y().control,children:null!=E?(0,r.jsx)(f.DY,{text:E,children:w}):w})]})}),null!=_&&(0,r.jsx)("div",{className:y().note,children:(0,r.jsx)(h.Z,{disabled:i,type:h.Y.DESCRIPTION,children:_})}),null!=S&&(0,r.jsx)("div",{className:y().note,children:(0,r.jsx)(h.Z,{disabled:i,type:h.Y.DESCRIPTION,children:(0,r.jsx)(u.Z,{
href:c.Z.getArticleURL(S),children:O.Z.Messages.LEARN_MORE})})}),!m&&(0,r.jsx)(p.Z,{className:y().dividerDefault})]})}},428142:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(785893),o=(n(667294),n(240243));function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function s(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){
var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function c(e){var t=e.width,n=void 0===t?24:t,c=e.height,u=void 0===c?24:c,l=e.color,f=void 0===l?"currentColor":l,d=e.foreground,p=a(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){i(e,t,n[t])}))}return e}({},(0,o.Z)(p)),{width:n,height:u,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{className:d,fill:f,d:"M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z"})}))}},340034:(e,t,n)=>{n.d(t,{a4:()=>c,vc:()=>u})
;var r=n(356004),o=n(95350),i=n(940712),s=n(859023),a=n(461061);function c(e){return null!=e&&function(e){if(null==e)return!1;var t=e.id,n=s.default.getCurrentUser();return null!=n&&n.id!==t}(e.author)}function u(e){return null!=e&&c(e)&&function(e){var t=r.Z.getChannel(e);if(null==t)return!1;if(t.type===a.d4z.DM||t.type===a.d4z.GROUP_DM)return!0;if(i.Z.canWithPartialContext(a.Plq.MANAGE_MESSAGES,{channelId:e})){var n=o.Z.getMemberCount(t.getGuildId());return null!=n&&n>=50}return!1}(e.getChannelId())}}}]);
//# sourceMappingURL=88890b93f09ac5185216.js.map