"use strict";(this.webpackChunkcordcord_app=this.webpackChunkcordcord_app||[]).push([[27565],{390001:(e,t,n)=>{n.d(t,{qR:()=>i,X_:()=>a,dA:()=>o,U5:()=>l});var r=n(276489);function u(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function i(e){var t=l();return Array.from(e.defaultActionTypes).map((function(e){return t[e]}))}function a(e){return e.type===r.jj.FLAG_TO_CHANNEL}function o(e){return e.type===r.jj.USER_COMMUNICATION_DISABLED}function l(){var e;return u(e={},r.jj.UNKNOWN,{type:r.jj.UNKNOWN}),u(e,r.jj.BLOCK_MESSAGE,{type:r.jj.BLOCK_MESSAGE}),u(e,r.jj.FLAG_TO_CHANNEL,{type:r.jj.FLAG_TO_CHANNEL,metadata:{channelId:void 0}}),u(e,r.jj.USER_COMMUNICATION_DISABLED,{type:r.jj.USER_COMMUNICATION_DISABLED,metadata:{durationSeconds:60}}),e}},209518:(e,t,n)=>{n.d(t,{DO:()=>d,vo:()=>_,Fn:()=>O,nC:()=>p,ep:()=>E,km:()=>g,QO:()=>y,Vb:()=>A,YN:()=>M,ZF:()=>b,Ar:()=>v})
;var r=n(99298),u=n(631134),i=n(390001),a=n(617509),o=n(117412),l=n(975483),c=n(276489),s=n(959797),f=function(e,t){return"".concat(e,"-").concat(t,"-new-rule")},d=function(e){return(null==e?void 0:e.triggerType)===c.fX.KEYWORD},_=function(e){return(null==e?void 0:e.triggerType)===c.fX.ML_SPAM},O=function(e){return(null==e?void 0:e.triggerType)===c.fX.DEFAULT_KEYWORD_LIST},p=function(e){return(null==e?void 0:e.triggerType)===c.fX.MENTION_SPAM};function E(e,t){var n=l.I6[t],r=(0,l.jp)(t,e),a={id:f(e,t),name:n.getDefaultRuleName(),guildId:e,eventType:n.eventType,triggerType:t,triggerMetadata:r,enabled:!0,creatorId:u.default.getId(),actions:(0,i.qR)(n),position:0,exemptChannels:new Set,exemptRoles:new Set};if(A(a))throw new Error(s.Z.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);var c=(0,o.mY)(e,t);c>0&&(a.name+=" ".concat(c+1));return a}function g(e,t){if(e.length>t)throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({limit:t}));e.forEach((function(e){
if(e.length>c.hu||e.length<c.Vk)throw new a.V6(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({keyword:e,max:c.hu,min:c.Vk}))}))}function y(e){if(d(e)){var t,n,r=null!==(t=e.triggerMetadata.keywordFilter)&&void 0!==t?t:[],u=null!==(n=e.triggerMetadata.regexPatterns)&&void 0!==n?n:[];if(0===r.length&&0===u.length)throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);g(r,c.RH);!function(e){if(e.length>c.VW)throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({limit:c.VW}));e.forEach((function(e){if(e.length>c.aj||e.length<c.uE)throw new a.uS(s.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({regex:e,max:c.aj,min:c.uE}))}))}(u)}if(0===e.actions.length)throw new Error(s.Z.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS)}function A(e){var t;return(0,r.BH)(null!==(t=null==e?void 0:e.id)&&void 0!==t?t:"INVALID_SNOWFLAKE")}function M(e){
return e===c.q4.MESSAGE_SEND?s.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND:s.Z.Messages.GUILD_AUTOMOD_UNKNOWN}function b(e){switch(e){case c.jj.BLOCK_MESSAGE:return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;case c.jj.FLAG_TO_CHANNEL:return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;default:return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN}}function v(e){switch(e){case c.fX.KEYWORD:return s.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;case c.fX.ML_SPAM:return s.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;case c.fX.DEFAULT_KEYWORD_LIST:return s.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_RULE_NAME;default:return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN}}},117412:(e,t,n)=>{n.d(t,{mY:()=>v,I2:()=>h,RD:()=>S,pH:()=>D});var r=n(667294),u=n(185253),i=n(948861),a=n(323657),o=n(870978),l=n(295935),c=n(276489);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,u,i,a){try{var o=e[i](a),l=o.value}catch(e){
n(e);return}o.done?t(l):Promise.resolve(l).then(r,u)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function a(e){f(i,r,u,a,o,"next",e)}function o(e){f(i,r,u,a,o,"throw",e)}a(void 0)}))}}function _(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){_(e,t,n[t])}))}return e}function p(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){
return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,i=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){o=!0;u=e}finally{try{a||null==n.return||n.return()}finally{if(o)throw u}}return i}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}var A=function(e,t){var n,r,u,i,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(u=2&i[0]?r.return:i[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,i[1])).done)return u;(r=0,u)&&(i=[2&i[0],u.value]);switch(i[0]){case 0:case 1:u=i;break;case 4:a.label++
;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(u=a.trys,u=u.length>0&&u[u.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){a.label=i[1];break}if(6===i[0]&&a.label<u[1]){a.label=u[1];u=i;break}if(u&&a.label<u[2]){a.label=u[2];a.ops.push(i);break}u[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},M={};var b=(0,u.Z)((function(e,t){return{rules:{},fetching:!1,error:null,updateRule:function(n){var r,u,i=n.guildId,a=n.id,o=n.triggerType,c=t().rules,s=null!==(r=c[i])&&void 0!==r?r:{},f=null!==(u=s[o])&&void 0!==u?u:[],d=f.some((function(e){return e.id===a})),E=f.filter((function(e){return!(0,l.U)(e.id)||e.triggerType!=o})),y=d?E.map((function(e){return e.id===a?n:e})):g(E).concat([n]);e({rules:p(O({},c),_({},i,p(O({},s),_({},o,y)))),error:null})},removeRule:function(n,r){
var u=t().rules,i=u[r],a=Object.keys(i).reduce((function(e,t){var r,u=Number(t),a=null!==(r=i[u])&&void 0!==r?r:[];e[u]=a.filter((function(e){return e.id!==n}));return e}),i);e({rules:p(O({},u),_({},r,a)),error:null})},syncRules:(n=d((function(n){var r,u,i,l,s;return A(this,(function(f){switch(f.label){case 0:if(!function(e){var t;return Date.now()-(null!==(t=M[e])&&void 0!==t?t:0)>2e4}(n))return[2];M[n]=Date.now();f.label=1;case 1:f.trys.push([1,3,,4]);return[4,(0,o.$Y)(n)];case 2:r=f.sent();u=function(e){var t,n=(_(t={},c.fX.KEYWORD,[]),_(t,c.fX.ML_SPAM,[]),_(t,c.fX.DEFAULT_KEYWORD_LIST,[]),_(t,c.fX.MENTION_SPAM,[]),t);e.forEach((function(e){var t,r=e.triggerType;null===(t=n[r])||void 0===t||t.push(e)}));return n}(r);i=t().rules;e({rules:p(O({},i),_({},n,u)),error:null});return[3,4];case 3:l=f.sent();s=new a.Hx(l);e({error:s});return[3,4];case 4:return[2]}}))})),function(e){return n.apply(this,arguments)})};var n})),v=function(e,t){var n,r
;return(null!==(r=null===(n=b.getState().rules[e])||void 0===n?void 0:n[t])&&void 0!==r?r:[]).length};function h(e){var t=E(r.useState(!1),2),n=t[0],u=t[1],a=E(b((function(e){return[e.syncRules,e.fetching]}),i.Z),2),o=a[0],l=a[1];return[n,r.useCallback(d((function(){return A(this,(function(t){switch(t.label){case 0:if(l||null==e)return[2];t.label=1;case 1:t.trys.push([1,,3,4]);u(!0);return[4,o(e)];case 2:t.sent();return[3,4];case 3:u(!1);return[7];case 4:return[2]}}))})),[e,l,o])]}function S(e){var t=E(h(e),2),n=t[0],u=t[1];r.useEffect((function(){d((function(){return A(this,(function(e){switch(e.label){case 0:return[4,u()];case 1:e.sent();return[2]}}))}))()}),[e,u]);return[n,u]}function D(e){return b((function(t){var n;return{rulesByTriggerType:null!==(n=t.rules[null!=e?e:""])&&void 0!==n?n:{},updateRule:t.updateRule,removeRule:t.removeRule}}))}},975483:(e,t,n)=>{n.d(t,{vT:()=>r,I6:()=>s,r5:()=>d,V9:()=>_,yU:()=>O,Z6:()=>p,jp:()=>E})
;var r,u,i=n(667294),a=n(379908),o=n(276489),l=n(959797);function c(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}!function(e){e.NEW="new";e.RECOMMENDED="recommended";e.BETA="beta"}(r||(r={}));var s=(c(u={},o.fX.UNKNOWN,{getDefaultRuleName:function(){return l.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME},type:o.fX.UNKNOWN,eventType:o.q4.UNKNOWN,perGuildMaxCount:0,availableActionTypes:new Set,flags:new Set,defaultActionTypes:new Set}),c(u,o.fX.SPAM_LINK,{getDefaultRuleName:function(){return l.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME},type:o.fX.SPAM_LINK,eventType:o.q4.MESSAGE_SEND,perGuildMaxCount:0,availableActionTypes:new Set,flags:new Set,defaultActionTypes:new Set}),c(u,o.fX.KEYWORD,{getDefaultRuleName:function(){return l.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME},type:o.fX.KEYWORD,eventType:o.q4.MESSAGE_SEND,perGuildMaxCount:5,
availableActionTypes:new Set([o.jj.BLOCK_MESSAGE,o.jj.FLAG_TO_CHANNEL,o.jj.USER_COMMUNICATION_DISABLED]),flags:new Set,defaultActionTypes:new Set([o.jj.BLOCK_MESSAGE])}),c(u,o.fX.ML_SPAM,{getDefaultRuleName:function(){return l.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME},type:o.fX.ML_SPAM,eventType:o.q4.MESSAGE_SEND,perGuildMaxCount:1,availableActionTypes:new Set([o.jj.BLOCK_MESSAGE,o.jj.FLAG_TO_CHANNEL]),flags:new Set([r.BETA]),defaultActionTypes:new Set([o.jj.BLOCK_MESSAGE])}),c(u,o.fX.DEFAULT_KEYWORD_LIST,{getDefaultRuleName:function(){return l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_RULE_NAME},type:o.fX.DEFAULT_KEYWORD_LIST,eventType:o.q4.MESSAGE_SEND,perGuildMaxCount:1,availableActionTypes:new Set([o.jj.BLOCK_MESSAGE,o.jj.FLAG_TO_CHANNEL]),flags:new Set([]),defaultActionTypes:new Set([o.jj.BLOCK_MESSAGE])}),c(u,o.fX.MENTION_SPAM,{getDefaultRuleName:function(){return l.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME},type:o.fX.MENTION_SPAM,eventType:o.q4.MESSAGE_SEND,
perGuildMaxCount:1,availableActionTypes:new Set([o.jj.BLOCK_MESSAGE,o.jj.FLAG_TO_CHANNEL,o.jj.USER_COMMUNICATION_DISABLED]),flags:new Set([r.BETA]),defaultActionTypes:new Set([o.jj.BLOCK_MESSAGE])}),u),f=[s[o.fX.MENTION_SPAM],s[o.fX.ML_SPAM],s[o.fX.DEFAULT_KEYWORD_LIST],s[o.fX.KEYWORD]],d=function(e,t){return s[e].flags.has(t)};function _(e){return Array.from(s[e].availableActionTypes)}function O(e,t){var n=e.id,r=e.eventType,u=e.triggerType,i=e.actions,a=s[u];if(t.filter((function(e){return n!==e.id&&e.triggerType===u})).length>a.perGuildMaxCount)throw new Error("You have exceeded the maximum number of rules of type ".concat(u));if(i.some((function(e){return!a.availableActionTypes.has(e.type)})))throw new Error("You have provided an action that is not available for this trigger type");if(r!==a.eventType)throw new Error("You have provided an event type that is not available for this trigger type")}function p(){return i.useMemo((function(){return f.filter((function(e){
return e.perGuildMaxCount>0})).map((function(e){return e.type}))}),[])}function E(e,t){var n=(0,a.H7)(t);switch(e){case o.fX.DEFAULT_KEYWORD_LIST:return{allowList:[],presets:[]};case o.fX.KEYWORD:return{keywordFilter:[],regexPatterns:[],allowList:[]};case o.fX.MENTION_SPAM:return{mentionTotalLimit:o.Ic,mentionRaidProtectionEnabled:n};case o.fX.ML_SPAM:default:return}}},379908:(e,t,n)=>{n.d(t,{H7:()=>s,n7:()=>l,ky:()=>c,tz:()=>o,au:()=>f});var r=n(553494),u=(0,r.B)({kind:"guild",id:"2022-11_automod_keyword_allowlist",label:"Automod Keyword AllowList",defaultConfig:{enabled:!1},treatments:[{id:1,label:"Automod Keyword AllowList",config:{enabled:!0}}]}),i=(0,r.B)({kind:"guild",id:"2022-11_automod_non_community_guilds_release",label:"Automod Non-Community Guilds Release",defaultConfig:{enabled:!1},treatments:[{id:1,label:"Automod Non-Community Guilds Release",config:{enabled:!0}}]}),a=(0,r.B)({kind:"guild",id:"2022-12_mention_raid_limit",label:"Automod Mention Raid Limit",defaultConfig:{
enabled:!1},treatments:[{id:1,label:"Automod Mention Raid Limit",config:{enabled:!0}}]});function o(e){return u.useExperiment({guildId:e},{autoTrackExposure:!0}).enabled}function l(e){return i.getCurrentConfig({guildId:e}).enabled}function c(e){return i.useExperiment({guildId:e},{autoTrackExposure:!0}).enabled}function s(e){return a.getCurrentConfig({guildId:e}).enabled}function f(e){return a.useExperiment({guildId:e},{autoTrackExposure:!0}).enabled}},870978:(e,t,n)=>{n.d(t,{JK:()=>A,mm:()=>h,$Y:()=>D,Je:()=>b,qY:()=>g});var r=n(675860),u=n(90816),i=n(346529),a=n(496486);function o(e){return null==e?e:Object.keys(e).reduce((function(t,n){var r=(0,a.camelCase)(n);"object"!=typeof e[n]||Array.isArray(e[n])?t[r]=e[n]:t[r]=o(e[n]);return t}),{})}function l(e){return null==e?e:Object.keys(e).reduce((function(t,n){var r=(0,a.snakeCase)(n);"object"!=typeof e[n]||Array.isArray(e[n])?t[r]=e[n]:t[r]=l(e[n]);t[r]=e[n];return t}),{})}var c=n(461061);function s(e,t,n,r,u,i,a){try{
var o=e[i](a),l=o.value}catch(e){n(e);return}o.done?t(l):Promise.resolve(l).then(r,u)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function a(e){s(i,r,u,a,o,"next",e)}function o(e){s(i,r,u,a,o,"throw",e)}a(void 0)}))}}var d=function(e,t){var n,r,u,i,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(u=2&i[0]?r.return:i[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,i[1])).done)return u;(r=0,u)&&(i=[2&i[0],u.value]);switch(i[0]){case 0:case 1:u=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(u=a.trys,
u=u.length>0&&u[u.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){a.label=i[1];break}if(6===i[0]&&a.label<u[1]){a.label=u[1];u=i;break}if(u&&a.label<u[2]){a.label=u[2];a.ops.push(i);break}u[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};function _(e){return{type:e.type,metadata:l(e.metadata)}}function O(e){var t,n,r=l(e.triggerMetadata);null!=r&&delete r.keywordLists;return{id:e.id,name:e.name,guild_id:e.guildId,event_type:e.eventType,trigger_type:e.triggerType,trigger_metadata:r,actions:e.actions.filter(u.lm).map(_),enabled:e.enabled,creator_id:e.creatorId,position:e.position,exempt_channels:Array.from(null!==(t=e.exemptChannels)&&void 0!==t?t:[]),exempt_roles:Array.from(null!==(n=e.exemptRoles)&&void 0!==n?n:[])}}function p(e){return{type:e.type,metadata:o(e.metadata)}}function E(e){var t,n,r,a={
id:null!==(t=e.id)&&void 0!==t?t:i.Z.fromTimestamp(Date.now()),name:e.name,guildId:e.guild_id,eventType:e.event_type,triggerType:e.trigger_type,triggerMetadata:o(e.trigger_metadata),actions:e.actions.filter(u.lm).map(p),enabled:e.enabled,creatorId:e.creator_id,position:e.position,exemptChannels:new Set(null!==(n=e.exempt_channels)&&void 0!==n?n:[]),exemptRoles:new Set(null!==(r=e.exempt_roles)&&void 0!==r?r:[])};null!=a.triggerMetadata&&delete a.triggerMetadata.keywordLists;return a}function g(e){return y.apply(this,arguments)}function y(){return(y=f((function(e){var t;return d(this,(function(n){switch(n.label){case 0:t=O(e);return[4,r.Z.post({url:c.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),body:t})];case 1:return[2,o(n.sent().body)]}}))}))).apply(this,arguments)}function A(e){return M.apply(this,arguments)}function M(){return(M=f((function(e){var t;return d(this,(function(n){switch(n.label){case 0:delete(t=O(e)).id;return[4,r.Z.post({url:c.ANM.GUILD_AUTOMOD_RULES(e.guildId),body:t})]
;case 1:return[2,E(n.sent().body)]}}))}))).apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return(v=f((function(e){var t;return d(this,(function(n){switch(n.label){case 0:t=O(e);return[4,r.Z.patch({url:c.ANM.GUILD_AUTOMOD_RULE(e.guildId,e.id),body:t})];case 1:return[2,E(n.sent().body)]}}))}))).apply(this,arguments)}function h(e,t){return S.apply(this,arguments)}function S(){return(S=f((function(e,t){return d(this,(function(n){switch(n.label){case 0:return[4,r.Z.delete({url:c.ANM.GUILD_AUTOMOD_RULE(t,e)})];case 1:n.sent();return[2,!0]}}))}))).apply(this,arguments)}function D(e){return L.apply(this,arguments)}function L(){return(L=f((function(e){var t;return d(this,(function(n){switch(n.label){case 0:return[4,r.Z.get({url:c.ANM.GUILD_AUTOMOD_RULES(e)})];case 1:t=n.sent();return Array.isArray(t.body)?[2,t.body.map(E)]:[2,[]]}}))}))).apply(this,arguments)}},955439:(e,t,n)=>{n.d(t,{Ac:()=>a,Ze:()=>o,cb:()=>l,se:()=>c,kU:()=>s})
;var r=/[\t\n,]/g,u=/\s{2,}/g,i=/[*"']/g;function a(e){return e.split(r).map((function(e){return e.replace(u," ").trim()})).filter((function(e){return e.length>0}))}function o(e){var t=new Set(e);return Array.from(t)}function l(e){return e.sort((function(e,t){var n=e.replaceAll(i,""),r=t.replaceAll(i,"");return n.localeCompare(r)}))}function c(e){return e.join(", ")}function s(e){return e.includes("\n")||e.includes(",")}},929330:(e,t,n)=>{n.d(t,{z:()=>l,N:()=>c});var r=n(653772),u=n(940712),i=n(379908),a=n(461061),o=function(e){var t=r.Z.getGuild(e);return null!=t&&((t.hasFeature(a.oNc.COMMUNITY)||(0,i.n7)(e))&&u.Z.can(a.Plq.MANAGE_GUILD,t))};function l(e){return null!=e&&o(e)}function c(e){return o(e)}},295935:(e,t,n)=>{n.d(t,{U:()=>u});var r=new Set(["1030554520465440818"]);function u(e){return null!=e&&r.has(e)}},693165:(e,t,n)=>{n.d(t,{w:()=>S,V:()=>D})
;var r=n(496486),u=n.n(r),i=n(185253),a=n(323657),o=n(90816),l=n(617509),c=n(209518),s=n(975483),f=n(870978),d=n(955439),_=n(295935),O=n(461061),p=n(959797);function E(e,t,n,r,u,i,a){try{var o=e[i](a),l=o.value}catch(e){n(e);return}o.done?t(l):Promise.resolve(l).then(r,u)}function g(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){g(e,t,n[t])}))}return e}function A(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){
return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}var M=function(e,t){var n,r,u,i,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(u=2&i[0]?r.return:i[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,i[1])).done)return u;(r=0,u)&&(i=[2&i[0],u.value]);switch(i[0]){case 0:case 1:u=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(u=a.trys,u=u.length>0&&u[u.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){a.label=i[1];break}
if(6===i[0]&&a.label<u[1]){a.label=u[1];u=i;break}if(u&&a.label<u[2]){a.label=u[2];a.ops.push(i);break}u[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};function b(e){if(e.code===O.evJ.INVALID_FORM_BODY){var t,n;if(null!=(null===(t=e.errors)||void 0===t||null===(n=t.trigger_metadata)||void 0===n?void 0:n.regex_patterns))return p.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR}return e.getAnyErrorMessage()}var v=Object.freeze({editingRule:null,hasChanges:!1,isLoading:!1,errorMessage:null}),h=(0,i.Z)((function(e,t){return{editingRule:null,hasChanges:!1,setEditingRule:function(n){var r=t().editingRule,i=null!=n&&null!=r&&n.id===r.id,a=u().cloneDeep(n);null!=a&&(a=A(y({},a),{actions:a.actions.filter(o.lm)}));e({editingRule:a,hasChanges:i,errorMessage:null})},createNewEditingRule:function(t,n,r){var u=y({},(0,c.ep)(t,n),null!=r?r:{});e({editingRule:u,hasChanges:!1});return u},
isLoading:!1,errorMessage:null,cancelEditingRule:function(){e(y({},v))},saveRule:(r=(n=function(t,n){var r,u,i,o,O,E;return M(this,(function(g){switch(g.label){case 0:if(null==t){e(y({},v));return[2,null]}try{if((0,c.DO)(t)){t.triggerMetadata.keywordFilter=(0,d.cb)((0,d.Ze)(null!==(r=t.triggerMetadata.keywordFilter)&&void 0!==r?r:[]));t.triggerMetadata.allowList=(0,d.cb)((0,d.Ze)(null!==(u=t.triggerMetadata.allowList)&&void 0!==u?u:[]))}(0,c.Fn)(t)&&(t.triggerMetadata.allowList=(0,d.cb)((0,d.Ze)(null!==(i=t.triggerMetadata.allowList)&&void 0!==i?i:[])));(0,s.yU)(t,n);(0,c.QO)(t)}catch(t){t instanceof l.V6?e({errorMessage:p.Z.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,isLoading:!1}):t instanceof l.uS?e({errorMessage:p.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,isLoading:!1}):e({errorMessage:t.message,isLoading:!1});return[2,null]}g.label=1;case 1:g.trys.push([1,6,,7]);e({isLoading:!0});o=null;return!(0,c.Vb)(t)||(0,_.U)(t.id)?[3,3]:[4,(0,f.Je)(t)];case 2:o=g.sent()
;return[3,5];case 3:return[4,(0,f.JK)(t)];case 4:o=g.sent();g.label=5;case 5:e(y({},v));return[2,o];case 6:O=g.sent();E=new a.Hx(O);e({isLoading:!1,errorMessage:b(E)});return[3,7];case 7:return[2,null]}}))},function(){var e=this,t=arguments;return new Promise((function(r,u){var i=n.apply(e,t);function a(e){E(i,r,u,a,o,"next",e)}function o(e){E(i,r,u,a,o,"throw",e)}a(void 0)}))}),function(e,t){return r.apply(this,arguments)}),saveEditingRule:function(e){var n=t(),r=n.editingRule;return(0,n.saveRule)(r,e)}};var n,r}));function S(){return h((function(e){return{hasChanges:e.hasChanges,editingRule:e.editingRule,isLoading:e.isLoading,errorMessage:e.errorMessage,saveRule:e.saveRule,saveEditingRule:e.saveEditingRule,cancelEditingRule:e.cancelEditingRule}}))}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=h((function(e){return{hasChanges:e.hasChanges,editingRule:e.editingRule,setEditingRule:e.setEditingRule,createNewEditingRule:e.createNewEditingRule}}))
;null!=e&&t.setEditingRule(e);return t}},222015:(e,t,n)=>{n.d(t,{c:()=>g});var r=n(53211),u=n(356004),i=n(105405),a=n(859023),o=n(976703),l=n(219946),c=n(523283),s=n(276489),f=n(809096),d=n(959797),_=function(e){switch(e){case s.jj.BLOCK_MESSAGE:return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;case s.jj.FLAG_TO_CHANNEL:return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;case s.jj.USER_COMMUNICATION_DISABLED:return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER}},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.fX.KEYWORD;switch(e){case s.jj.BLOCK_MESSAGE:switch(t){case s.fX.MENTION_SPAM:return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;case s.fX.ML_SPAM:return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;default:return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION}case s.jj.FLAG_TO_CHANNEL:
return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;case s.jj.USER_COMMUNICATION_DISABLED:return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION}},p=function(e,t){switch(e){case s.jj.BLOCK_MESSAGE:return null;case s.jj.FLAG_TO_CHANNEL:var n,o=null==t||null===(n=t.metadata)||void 0===n?void 0:n.channelId;if(null==o)return null;var l=u.Z.getChannel(o);if(null==l)return null;var c=(0,r.F)(l,a.default,i.Z);return d.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({channelName:c});case s.jj.USER_COMMUNICATION_DISABLED:var _,O,p=null!==(O=null==t||null===(_=t.metadata)||void 0===_?void 0:_.durationSeconds)&&void 0!==O?O:0,E=(0,f.L9)(p);return null==E?null:d.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({duration:E})}},E=function(e){switch(e){case s.jj.BLOCK_MESSAGE:return c.Z;case s.jj.FLAG_TO_CHANNEL:return o.Z;case s.jj.USER_COMMUNICATION_DISABLED:return l.Z}};function g(e,t,n){
return function(e){switch(e){case s.jj.BLOCK_MESSAGE:case s.jj.FLAG_TO_CHANNEL:case s.jj.USER_COMMUNICATION_DISABLED:return!0;default:return!1}}(e)?{headerText:null!==(r=_(e))&&void 0!==r?r:"",descriptionText:null!==(u=O(e,n))&&void 0!==u?u:"",helperText:null!==(i=p(e,t))&&void 0!==i?i:null,icon:null!==(a=E(e))&&void 0!==a?a:c.Z}:null;var r,u,i,a}},794633:(e,t,n)=>{n.d(t,{gK:()=>d,XN:()=>_,af:()=>O});var r=n(785893),u=(n(667294),n(897576));function i(e,t,n,r,u,i,a){try{var o=e[i](a),l=o.value}catch(e){n(e);return}o.done?t(l):Promise.resolve(l).then(r,u)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var a=e.apply(t,n);function o(e){i(a,r,u,o,l,"next",e)}function l(e){i(a,r,u,o,l,"throw",e)}o(void 0)}))}}function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){o(e,t,n[t])}))}return e}function c(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}var s=function(e,t){var n,r,u,i,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){
if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(u=2&i[0]?r.return:i[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,i[1])).done)return u;(r=0,u)&&(i=[2&i[0],u.value]);switch(i[0]){case 0:case 1:u=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(u=a.trys,u=u.length>0&&u[u.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){a.label=i[1];break}if(6===i[0]&&a.label<u[1]){a.label=u[1];u=i;break}if(u&&a.label<u[2]){a.label=u[2];a.ops.push(i);break}u[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};function f(e){return new Promise((function(t){(0,u.ZD)((function(){return e((function(){t(!0)}),(function(e){t(!1);return e()}))}))}))}var d=function(e){return f((t=a((function(t,u){var i,a
;return s(this,(function(o){switch(o.label){case 0:return[4,n.e(12769).then(n.bind(n,712769))];case 1:i=o.sent(),a=i.default;return[2,function(n){return(0,r.jsx)(a,c(l({},n),{ruleName:e,onConfirm:t,onClose:function(){return u(n.onClose)},onCancel:function(){return u(n.onClose)}}))}]}}))})),function(e,n){return t.apply(this,arguments)}));var t},_=function(e,t){return f((u=a((function(u,i){var a,o;return s(this,(function(s){switch(s.label){case 0:return[4,n.e(8435).then(n.bind(n,408435))];case 1:a=s.sent(),o=a.default;return[2,function(n){return(0,r.jsx)(o,c(l({},n),{ruleName:e,keyword:t,onConfirm:u,onClose:function(){return i(n.onClose)},onCancel:function(){return i(n.onClose)}}))}]}}))})),function(e,t){return u.apply(this,arguments)}));var u},O=function(e){return function(t){return f((u=a((function(u,i){var a,o,f;return s(this,(function(s){switch(s.label){case 0:return[4,n.e(26485).then(n.bind(n,926485))];case 1:a=s.sent(),o=a.default;f=function(){t();u()};return[2,function(t){
return(0,r.jsx)(o,c(l({ruleName:e},t),{onConfirm:f,onClose:function(){return i(t.onClose)},onCancel:function(){return i(t.onClose)}}))}]}}))})),function(e,t){return u.apply(this,arguments)}));var u}}}}]);
//# sourceMappingURL=71a0e56bf1d443756cdc.js.map