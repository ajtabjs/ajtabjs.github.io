(this.webpackChunkcordcord_app=this.webpackChunkcordcord_app||[]).push([[4310],{483683:(e,n,t)=>{e.exports=t.p+"72db7a1fbe5d3c861fe63c26f634b5d2.svg"},63685:(e,n,t)=>{e.exports=t.p+"a4e25b25c89b862150e6eeb520e67dd5.svg"},9523:(e,n,t)=>{"use strict";t.d(n,{c:()=>T});var r=t(23279),_=t.n(r),a=t(675860),E=t(173436),i=t(541405),s=t(461061);function u(e,n,t,r,_,a,E){try{var i=e[a](E),s=i.value}catch(e){t(e);return}i.done?n(s):Promise.resolve(s).then(r,_)}var l,d,o=function(e,n){var t,r,_,a,E={label:0,sent:function(){if(1&_[0])throw _[1];return _[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;E;)try{if(t=1,r&&(_=2&a[0]?r.return:a[0]?r.throw||((_=r.return)&&_.call(r),0):r.next)&&!(_=_.call(r,a[1])).done)return _;(r=0,_)&&(a=[2&a[0],_.value]);switch(a[0]){case 0:case 1:_=a;break;case 4:
E.label++;return{value:a[1],done:!1};case 5:E.label++;r=a[1];a=[0];continue;case 7:a=E.ops.pop();E.trys.pop();continue;default:if(!(_=E.trys,_=_.length>0&&_[_.length-1])&&(6===a[0]||2===a[0])){E=0;continue}if(3===a[0]&&(!_||a[1]>_[0]&&a[1]<_[3])){E.label=a[1];break}if(6===a[0]&&E.label<_[1]){E.label=_[1];_=a;break}if(_&&E.label<_[2]){E.label=_[2];E.ops.push(a);break}_[2]&&E.ops.pop();E.trys.pop();continue}a=n.call(e,E)}catch(e){a=[6,e];r=0}finally{t=_=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},T=_()((d=(l=function(e){var n;return o(this,(function(t){switch(t.label){case 0:t.trys.push([0,2,,3]);E.Z.dispatch({type:"EVENT_DIRECTORY_FETCH_START"});return[4,a.Z.get({url:s.ANM.DIRECTORY_CHANNEL_ENTRIES(e),query:{type:i.C2.GUILD_SCHEDULED_EVENT}})];case 1:n=t.sent();E.Z.dispatch({type:"EVENT_DIRECTORY_FETCH_SUCCESS",channelId:e,entries:n.body});return[3,3];case 2:t.sent();E.Z.dispatch({type:"EVENT_DIRECTORY_FETCH_FAILURE"});return[3,3];case 3:return[2]}}))},
function(){var e=this,n=arguments;return new Promise((function(t,r){var _=l.apply(e,n);function a(e){u(_,t,r,a,E,"next",e)}function E(e){u(_,t,r,a,E,"throw",e)}a(void 0)}))}),function(e){return d.apply(this,arguments)}),200)},992054:(e,n,t)=>{"use strict";t.d(n,{Z:()=>G});var r=t(496486),_=t.n(r),a=t(791462),E=t(173436),i=t(613258),s=t(989232),u=t(541405);function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e){o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return o(e)}function T(e,n){return!n||"object"!==A(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e,n){c=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return c(e,n)}function I(e){
return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function L(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0
}catch(e){return!1}}();return function(){var t,r=o(e);if(n){var _=o(this).constructor;t=Reflect.construct(r,arguments,_)}else t=r.apply(this,arguments);return T(this,t)}}var M=!1,O={},C={},U={},f=function(e){U[e.guild_scheduled_event.id]=new s.Z(e.guild_scheduled_event.guild);C[e.guild_scheduled_event.id]=e.guild_scheduled_event;return{channelId:e.directory_channel_id,scheduledEventId:e.entity_id,type:u.C2.GUILD_SCHEDULED_EVENT,authorId:e.author_id,createdAt:e.created_at}};var p=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&c(e,n)}(t,e);var n=L(t);function t(){d(this,t);return n.apply(this,arguments)}var r=t.prototype;r.isFetching=function(){return M};r.getEventDirectoryEntries=function(e){if(null!=e)return O[e]};r.getCachedGuildByEventId=function(e){var n;return null!==(n=U[e])&&void 0!==n?n:void 0}
;r.getCachedGuildScheduledEventById=function(e){var n;return null!==(n=C[e])&&void 0!==n?n:void 0};r.__getLocalVars=function(){return{fetching:M,eventDirectoryEntries:O,cachedGuildScheduledEvents:C,cachedGuildByEvents:U,eventDirectoryEntryFromServer:f}};return t}(a.ZP.Store);p.displayName="EventDirectoryStore";const G=new p(E.Z,{EVENT_DIRECTORY_FETCH_START:function(){M=!0},EVENT_DIRECTORY_FETCH_SUCCESS:function(e){var n=e.channelId,t=e.entries;M=!1;var r=_().sortBy(I(t),[function(e){return(0,i.CQ)(e.guild_scheduled_event)}]),a=_().map(r,f);O[n]=a},EVENT_DIRECTORY_FETCH_FAILURE:function(){M=!1}})},541405:(e,n,t)=>{"use strict";t.d(n,{C2:()=>r,VX:()=>_,sE:()=>a,AR:()=>E,b7:()=>o,Pp:()=>T});var r,_,a,E,i=t(368365),s=t(108580),u=t(461061),l=t(959797);function d(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}!function(e){e[e.GUILD=0]="GUILD";e[e.GUILD_SCHEDULED_EVENT=1]="GUILD_SCHEDULED_EVENT"}(r||(r={}));!function(e){
e.GUILD_TEMPLATES="guild-templates";e.CUSTOMIZE_NEW_GUILD="customize-new-guild";e.CHOOSE_GUILD="choose-guild";e.CUSTOMIZE_EXISTING_GUILD="customize-existing-guild";e.CONFIRMATION="confirmation"}(_||(_={}));!function(e){e.CREATE="CREATE";e.HUB_SCHOOL_CLUB="HUB_SCHOOL_CLUB";e.HUB_STUDY="HUB_STUDY";e.HUB_CLASS="HUB_CLASS";e.HUB_SOCIAL="HUB_SOCIAL";e.HUB_MAJOR="HUB_MAJOR";e.HUB_DORM="HUB_DORM"}(a||(a={}));!function(e){e[e.ALL=-1]="ALL";e[e.UNCATEGORIZED=0]="UNCATEGORIZED";e[e.SCHOOL_CLUB=1]="SCHOOL_CLUB";e[e.CLASS=2]="CLASS";e[e.STUDY_SOCIAL=3]="STUDY_SOCIAL";e[e.MISC=5]="MISC"}(E||(E={}));function o(e){return"883060064561299456"===e?[{value:E.SCHOOL_CLUB,label:l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1},{value:E.CLASS,label:l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2},{value:E.STUDY_SOCIAL,label:l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3},{value:E.MISC,label:l.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5}]:[{value:E.SCHOOL_CLUB,label:l.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,idealSize:100},{
value:E.CLASS,label:l.Z.Messages.DIRECTORY_CATEGORY_CLASS},{value:E.STUDY_SOCIAL,label:l.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,idealSize:50},{value:E.MISC,label:l.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS}]}function T(){var e;return d(e={},a.CREATE,{id:a.CREATE,code:"2TffvPucqHkN",label:l.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,channels:[],system_channel_id:null}),d(e,a.HUB_SCHOOL_CLUB,{id:a.HUB_SCHOOL_CLUB,code:"UMUbvRpRZhS6",label:l.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,channels:[{id:"00",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,type:u.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,type:u.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,type:u.d4z.GUILD_TEXT},{id:"03",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,type:u.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
type:u.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:u.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:u.d4z.GUILD_TEXT},{id:"13",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:u.d4z.GUILD_TEXT},{id:"20",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:u.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:u.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,type:u.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,type:u.d4z.GUILD_VOICE}],roles:[{id:"00",name:"@everyone",permissions:s.ZP.DEFAULT},{id:"01",name:"officers (example)",mentionable:!0,hoist:!0,
permissions:i.Z.combine(s.ZP.DEFAULT,u.Plq.MANAGE_ROLES,u.Plq.MANAGE_CHANNELS,u.Plq.KICK_MEMBERS,u.Plq.BAN_MEMBERS,u.Plq.MANAGE_NICKNAMES,u.Plq.MANAGE_GUILD_EXPRESSIONS,u.Plq.MANAGE_MESSAGES,u.Plq.SEND_TTS_MESSAGES),color:3066993}],system_channel_id:"12"}),d(e,a.HUB_STUDY,{id:a.HUB_STUDY,code:"2JBhzzca2vfT",label:l.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,channels:[{id:"00",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:u.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,type:u.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:u.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:u.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:u.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:u.d4z.GUILD_TEXT},{id:"12",parent_id:"10",
name:l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:u.d4z.GUILD_TEXT},{id:"20",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:u.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:u.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:u.d4z.GUILD_VOICE},{id:"23",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:u.d4z.GUILD_VOICE}],system_channel_id:"12"}),d(e,a.HUB_CLASS,{id:a.HUB_CLASS,code:"r86WWBwTGspb",label:l.Z.Messages.GUILD_TEMPLATE_HEADER_CLASS,channels:[{id:"00",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:u.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,type:u.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:u.d4z.GUILD_TEXT},{id:"10",parent_id:null,
name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:u.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:u.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:u.d4z.GUILD_TEXT},{id:"13",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:u.d4z.GUILD_TEXT},{id:"20",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:u.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:u.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:u.d4z.GUILD_VOICE},{id:"23",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:u.d4z.GUILD_VOICE}],system_channel_id:"12"}),d(e,a.HUB_SOCIAL,{id:a.HUB_SOCIAL,code:"AvvtXE3mfbCR",label:l.Z.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,channels:[{id:"00",parent_id:null,
name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:u.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:u.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:u.d4z.GUILD_TEXT},{id:"03",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:u.d4z.GUILD_TEXT},{id:"04",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_MEETUPS,type:u.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:u.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,type:u.d4z.GUILD_VOICE},{id:"12",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,type:u.d4z.GUILD_VOICE},{id:"13",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,type:u.d4z.GUILD_VOICE}],system_channel_id:"02"}),d(e,a.HUB_MAJOR,{id:a.HUB_MAJOR,code:"FhmfDR6Arvsc",
label:l.Z.Messages.GUILD_TEMPLATE_HEADER_MAJOR,channels:[{id:"00",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:u.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,type:u.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:u.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:u.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:u.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:u.d4z.GUILD_TEXT},{id:"13",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:u.d4z.GUILD_TEXT},{id:"20",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:u.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:u.d4z.GUILD_VOICE},{id:"22",parent_id:"20",
name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:u.d4z.GUILD_VOICE},{id:"23",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:u.d4z.GUILD_VOICE}],system_channel_id:"12"}),d(e,a.HUB_DORM,{id:a.HUB_DORM,code:"fkq8xHfrGE58",label:l.Z.Messages.GUILD_TEMPLATE_HEADER_DORM,channels:[{id:"00",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:u.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:l.Z.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,type:u.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:u.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:u.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:u.d4z.GUILD_TEXT},{id:"13",parent_id:"10",name:l.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:u.d4z.GUILD_TEXT},{id:"20",parent_id:null,
name:l.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:u.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:u.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,type:u.d4z.GUILD_VOICE},{id:"23",parent_id:"20",name:l.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,type:u.d4z.GUILD_VOICE}],system_channel_id:"12"}),e}},293378:(e,n,t)=>{"use strict";t.d(n,{TT:()=>E,AN:()=>i,LK:()=>s});var r=t(368365),_=t(531648),a=t(461061),E=r.Z.combine(a.Plq.VIEW_CHANNEL,a.Plq.MANAGE_EVENTS),i=r.Z.combine(E,a.Plq.CONNECT),s=r.Z.combine(E,_.yP)},864254:(e,n,t)=>{"use strict";t.d(n,{Q:()=>u,o:()=>l});var r=t(653772),_=t(940712),a=t(293378),E=t(461061);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){
var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,_,a=[],E=!0,i=!1;try{for(t=t.call(e);!(E=(r=t.next()).done);E=!0){a.push(r.value);if(n&&a.length===n)break}}catch(e){i=!0;_=e}finally{try{E||null==t.return||t.return()}finally{if(i)throw _}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){var n=s(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[_.Z],1),t=n[0];return e.isGuildStageVoice()?t.can(a.LK,e):e.isGuildVoice()?t.can(a.AN,e):t.can(a.TT,e)}function l(e,n){
var t=s(arguments.length>2&&void 0!==arguments[2]?arguments[2]:[_.Z,r.Z],2),a=t[0],i=t[1],l=i.getGuild(e);return null!=l&&(!!a.can(E.Plq.ADMINISTRATOR,l)||(null==n?a.can(E.Plq.MANAGE_EVENTS,l):u(n,[a])))}},498814:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});var r=t(667294),_=t(791462),a=t(1812),E=t(653772),i=t(940712),s=t(864254),u=t(461061);const l=function(e,n){var t=(0,_.e7)([E.Z],(function(){return E.Z.getGuild(e)}),[e]),l=(0,_.e7)([a.ZP],(function(){return a.ZP.getChannels(e)[a.Zb]}),[e]),d=r.useMemo((function(){return null!=n?l.filter((function(e){return e.channel.type===n})):l}),[l,n]);return(0,_.e7)([i.Z],(function(){if(i.Z.can(u.Plq.ADMINISTRATOR,t))return!0;if(i.Z.can(u.Plq.MANAGE_EVENTS,t))return!0;var e=!0,n=!1,r=void 0;try{for(var _,a=d[Symbol.iterator]();!(e=(_=a.next()).done);e=!0){var E=_.value.channel;if((0,s.Q)(E,[i.Z]))return!0}}catch(e){n=!0;r=e}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return!1}),[d,t])}},875684:(e,n,t)=>{"use strict";t.d(n,{
o:()=>i});var r=t(791462),_=t(653772),a=t(940712),E=t(864254);function i(e,n){return(0,r.e7)([a.Z,_.Z],(function(){return(0,E.o)(e,n,[a.Z,_.Z])}),[n,e])}},217891:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>M,qY:()=>O,gM:()=>C,k5:()=>U,u1:()=>f,eF:()=>p,sz:()=>G});var r=t(667294),_=t(791462),a=t(992054),E=t(356004),i=t(1812),s=t(653772),u=t(940712),l=t(90816),d=t(613258),o=t(694470),T=t(998689),c=t(461061);function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,_,a=[],E=!0,i=!1;try{for(t=t.call(e);!(E=(r=t.next()).done);E=!0){a.push(r.value);if(n&&a.length===n)break}}catch(e){i=!0;_=e}finally{try{E||null==t.return||t.return()}finally{if(i)throw _}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return I(e,n)
;var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=[];function M(e,n){return(0,_.Wu)([s.Z,a.Z,d.ZP,u.Z,E.Z,i.ZP],(function(){var t=s.Z.getGuild(e);if(null==t)return L;if(t.hasFeature(c.oNc.HUB)){var r,_,o=null===(r=i.ZP.getDefaultChannel(t.id))||void 0===r?void 0:r.id;return(null!==(_=a.Z.getEventDirectoryEntries(o))&&void 0!==_?_:[]).map((function(e){var n=e.scheduledEventId,t=d.ZP.getGuildScheduledEvent(n);return null!=t?t:a.Z.getCachedGuildScheduledEventById(n)})).filter(l.lm)}return d.ZP.getGuildScheduledEventsByIndex(null!=n?n:d.bN.GUILD_EVENT_UPCOMING(t.id)).filter((function(e){var n=e.channel_id
;if(null==n)return!0;var t=E.Z.getChannel(n);return u.Z.can(c.Plq.VIEW_CHANNEL,t)}))}),[e])}function O(e){return(0,_.e7)([d.ZP,E.Z,u.Z],(function(){var n=E.Z.getChannel(e);if(!u.Z.can(c.Plq.VIEW_CHANNEL,n))return null;if(null==(null==n?void 0:n.guild_id))return null;var t=d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_ACTIVE(e));return t.length>0?t[0]:null}),[e])}function C(e){var n=(0,_.Wu)([d.ZP],(function(){return d.ZP.getGuildScheduledEventsForGuild(e)}),[e]);return r.useMemo((function(){var e=new Map;n.forEach((function(n){var t=n.channel_id;null!=t&&e.set(t,n)}));return e}),[n])}function U(e){return(0,_.e7)([d.ZP,E.Z,u.Z],(function(){return d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_ACTIVE(e)).find((function(e){if(e.entity_type===T.WX.NONE||!(0,d.xt)(e))return!1;if(null==e.channel_id)return!0;var n=E.Z.getChannel(e.channel_id);return u.Z.can(c.Plq.VIEW_CHANNEL,n)}))}),[e])}function f(e){return(0,_.e7)([d.ZP],(function(){
return d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_UPCOMING(e))}),[e])}function p(e){return(0,_.e7)([E.Z,d.ZP],(function(){var n=d.ZP.getGuildScheduledEventsByIndex(d.bN.GUILD_EVENT_ACTIVE(e)).find((function(e){return null!=E.Z.getChannel(e.channel_id)}));return E.Z.getChannel(null==n?void 0:n.channel_id)}),[e])}function G(e){var n=A(r.useState((function(){return Date.now()})),2),t=n[0],a=n[1];r.useEffect((function(){var e=setInterval((function(){a(Date.now())}),9e5);return function(){return clearInterval(e)}}),[]);var E=(0,_.e7)([d.ZP],(function(){return d.ZP.getGuildScheduledEventsByIndex(d.bN.CHANNEL_EVENT_UPCOMING(e))}),[e,t]);return r.useMemo((function(){return E.filter((function(e){return e.status!==T.p1.ACTIVE&&(0,o.ub)(e.scheduled_start_time,e.scheduled_end_time).withinStartWindow}))}),[E])}},976794:(e,n,t)=>{"use strict";t.d(n,{l:()=>r});var r=(0,t(185253).Z)((function(e){return{canCloseModal:!0,onUpdateCanCloseModal:function(n){e({canCloseModal:n})}}}))},
143074:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(35599),_=t(897576),a=t(976794),E=t(461061),i=t(86030),s="guild-event-modal";const u=function(){var e=(0,r.bp)()===E.IlC.POPOUT?i.u1:i.z1;return{modalKey:s,contextKey:e,onCloseRequest:function(){a.l.getState().canCloseModal&&(0,_.Mr)(s,e)}}}},825816:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=(0,t(553494).B)({kind:"guild",id:"2021-11_hub_events",label:"Hub Events",defaultConfig:{showHubEventsList:!1},treatments:[{id:1,label:"Show Hub Events List",config:{showHubEventsList:!0}}]})},218024:(e,n,t)=>{"use strict";t.d(n,{Z:()=>E});var r=t(791462),_=t(653772),a=t(461061);function E(e){return(0,r.e7)([_.Z],(function(){if(null==e)return!1;var n,t=_.Z.getGuild(e);return null!==(n=null==t?void 0:t.hasFeature(a.oNc.HUB))&&void 0!==n&&n}),[e])}},64914:(e,n,t)=>{"use strict";t.d(n,{b:()=>_});var r=t(461061);function _(e,n,t,_){var a=null!=t?t:n
;return null!=a&&e.can(r.Plq.CREATE_INSTANT_INVITE,a)||null!=n&&null!=n.vanityURLCode||null!=(null==_?void 0:_.invite_code)}},422877:(e,n,t)=>{"use strict";t.d(n,{Z:()=>T});var r=t(785893),_=(t(667294),t(294184)),a=t.n(_),E=t(959797),i=t(300443),s=t.n(i),u=t(483683),l=t.n(u),d=t(63685),o=t.n(d);function T(e){var n=e.className,t=e.children;return(0,r.jsxs)("div",{className:a()(s().container,n),children:[(0,r.jsx)("img",{alt:E.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:o(),className:a()(s().sparkleIcon,s().sparkleBottom)}),t,(0,r.jsx)("img",{alt:E.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:l(),className:a()(s().sparkleIcon,s().sparkleTop)})]})}}}]);
//# sourceMappingURL=7f5881888ac01f0e88f0.js.map