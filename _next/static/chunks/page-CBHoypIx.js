import{r as e}from"./rolldown-runtime-D0yXDDFE.js";import{a as t,o as n}from"./framework-Dm2LD62T.js";import{t as r}from"./sitePath-yR_Sue8-.js";import{t as i}from"./useModalFocus-DrdmwW1m.js";var a=e(t(),1),o=e=>`${e.x},${e.y}`;function s(e){let t=e.replace(/^(?:[ \t]*\r?\n)+|(?:\r?\n[ \t]*)+$/g,``).split(/\r?\n/),n=t.length,r=0;for(let e of t)e.length>r&&(r=e.length);let i={x:0,y:0},a=[],o=[],s=[];for(let e=0;e<n;e++){let n=t[e];for(let t=0;t<r;t++){let r=n[t]??`#`,c={x:t,y:e};r===`#`?s.push(c):r===`@`?i=c:r===`+`?(i=c,o.push(c)):r===`$`?a.push(c):r===`*`?(a.push(c),o.push(c)):r===`.`&&o.push(c)}}let c=new Set,l=[],u=(e,i)=>{let a=`${e},${i}`;e>=0&&e<r&&i>=0&&i<n&&t[i][e]===` `&&!c.has(a)&&(c.add(a),l.push({x:e,y:i}))};for(let e=0;e<r;e++)u(e,0),u(e,n-1);for(let e=0;e<n;e++)u(0,e),u(r-1,e);for(let e=0;e<l.length;e++){let{x:t,y:n}=l[e];u(t-1,n),u(t+1,n),u(t,n-1),u(t,n+1)}return s.push(...l),{player:i,boxes:a,goals:o,walls:s,width:r,height:n}}function c(e,t,n){let r=u(e.state,t,n);return r?{state:r.nextState,steps:e.steps+1,pushes:e.pushes+ +(r.step.pushedBoxIndex>=0)}:e}function l(e,t){let n=new Set(t.map(o));return e.length>0&&e.length===t.length&&new Set(e.map(o)).size===e.length&&e.every(e=>n.has(o(e)))}function u(e,t,n){if(!Number.isInteger(t)||!Number.isInteger(n)||Math.abs(t)+Math.abs(n)!==1)return null;let r=t=>t.x>=0&&t.x<e.width&&t.y>=0&&t.y<e.height,i=new Set(e.walls.map(o)),a=new Map(e.boxes.map((e,t)=>[o(e),t])),s={x:e.player.x+t,y:e.player.y+n},c=o(s);if(!r(s)||i.has(c))return null;if(a.has(c)){let l=a.get(c),u={x:s.x+t,y:s.y+n},d=o(u);if(!r(u)||i.has(d)||a.has(d))return null;let f=[...e.boxes];f[l]=u;let p={playerBefore:e.player,playerAfter:s,pushedBoxIndex:l,boxBefore:e.boxes[l],boxAfter:u};return{nextState:{...e,player:s,boxes:f},step:p}}let l={playerBefore:e.player,playerAfter:s,pushedBoxIndex:-1};return{nextState:{...e,player:s},step:l}}function d(e,t,n,r,i){let a=[e,...n,...r],s=i?.width??Math.max(...a.map(e=>e.x))+1,c=i?.height??Math.max(...a.map(e=>e.y))+1,l=e=>Number.isInteger(e.x)&&Number.isInteger(e.y)&&e.x>=0&&e.x<s&&e.y>=0&&e.y<c;if(!l(e)||!l(t))return null;let u=new Set([...n.map(o),...r.map(o)]),d=o(t);if(u.has(d))return null;let f=o(e),p=[{point:e,path:[e]}],m=new Set([f]);for(let e=0;e<p.length;e++){let{point:n,path:r}=p[e];if(n.x===t.x&&n.y===t.y)return r;for(let[e,t]of[[0,-1],[0,1],[-1,0],[1,0]]){let i={x:n.x+e,y:n.y+t},a=o(i);l(i)&&!m.has(a)&&!u.has(a)&&(m.add(a),p.push({point:i,path:[...r,i]}))}}return null}function f(e){let t=new Set(e.walls.map(o)),n=n=>n.x>=0&&n.x<e.width&&n.y>=0&&n.y<e.height&&!t.has(o(n)),r=[...e.goals],i=new Set(r.map(o));for(let e=0;e<r.length;e++)for(let[t,a]of[[0,1],[0,-1],[1,0],[-1,0]]){let s={x:r[e].x+t,y:r[e].y+a},c={x:s.x+t,y:s.y+a};n(s)&&n(c)&&!i.has(o(s))&&(i.add(o(s)),r.push(s))}let a=new Set;for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++)n({x:r,y:t})&&!i.has(`${r},${t}`)&&a.add(`${r},${t}`);return a}function p(e,t=15e3){let n=f(e),r=new Set(e.walls.map(o)),i=[[0,1],[0,-1],[1,0],[-1,0]],a=[{state:e,moves:[]}],s=new Set;for(let e=0;e<a.length&&e<t;e++){let{state:t,moves:c}=a[e];if(l(t.boxes,t.goals))return c;let u=new Set(t.boxes.map(o)),d=e=>e.x>=0&&e.x<t.width&&e.y>=0&&e.y<t.height&&!r.has(o(e))&&!u.has(o(e)),f=new Map([[o(t.player),[]]]),p=[t.player];for(let e=0;e<p.length;e++){let t=p[e];for(let[e,n]of i){let r={x:t.x+e,y:t.y+n};d(r)&&!f.has(o(r))&&(f.set(o(r),[...f.get(o(t)),{x:e,y:n}]),p.push(r))}}let m=[...u].sort().join(`;`)+`|`+[...f.keys()].sort()[0];if(!s.has(m)){s.add(m);for(let[e,r]of t.boxes.entries())for(let[s,l]of i){let i={x:r.x-s,y:r.y-l},u={x:r.x+s,y:r.y+l},p=f.get(o(i));if(!p||!d(u)||n.has(o(u)))continue;let m=t.boxes.map((t,n)=>n===e?u:t);a.push({state:{...t,player:r,boxes:m},moves:[...c,...p,{x:s,y:l}]})}}}return null}var m=`
#####
#@$.#
#####,
######
#@   #
# $$ #
#  ..#
######,
  ###
  #.#
  #$#
### ###
#. $@ #
###$###
  #.#
  ###,
#####
#@  #
# $$#
# ..#
#####,
  #####
  #   #
  #$  #
### $.#
#@  $.#
#    .#
#     #
#######,
######
#    #
# $$ #
# .. #
#  @ #
######,
########
#  #   #
# $ $  #
#  # ..#
#  @   #
########,
#######
#     #
# $$$ #
# ... #
#  @  #
#######,
#########
#   #   #
# $ $ $ #
#...#   #
#   @   #
#########,
  #####
###   #
#   $ #
# # # #
# . . #
#@ $  #
#     #
#######,
  ###
  #.#
###$###
#  @  #
###$###
  #.#
  ###,
#######
#  .  #
#  $  #
#  $  #
#  .  #
#  @  #
#######,
#########
# . # . #
# $ # $ #
#   @   #
#########,
  #####
 ##   ##
## $ $ ##
# .   . #
##  @  ##
 #######,
######
# .. #
# $$ #
#    #
# $$ #
# .. #
# @  #
######,
#########
# .     #
# $ $ $ #
# . # . #
#   @   #
#########,
#######
#@ $ .#
# ### #
# $ . #
# ### #
# $ . #
#######,
#######
# ... #
#  $  #
# $ $ #
#  @  #
#######,
#########
#..#   .#
#$$# $  #
#  #    #
#  @    #
#########,
#########
#   .   #
#  $#$  #
# . @ . #
#  $#$  #
#   .   #
#########,
#########
#       #
#@$     #
# ## ## #
# #...# #
# #$$ # #
#       #
#########,
###########
# .. #    #
# $$ # $$ #
#    # .. #
#    @    #
###########,
#########
#   .   #
#  $ $  #
# . @   #
#   $   #
#   .   #
#########,
#########
#       #
#@ $ $ .#
### ### #
# . $ . #
#       #
#########,
#########
# . . . #
# #   # #
# $ $ $ #
#   @   #
#########,
  #####
 ## . ##
## . . ##
#  $ $$ #
#   @   #
 ##   ##
  #####,
   ###
  ##.##
 ## . ##
##  $  ##
#  $ .$ #
#   @   #
 #######,
#########
#@  # ..#
# $ # $$#
# $     #
#.. #   #
#########,
#########
# . # . #
# $ # $ #
#   #   #
# $ # $ #
# . # . #
#   @   #
#########,
  #####
 ## . ##
## $ $ ##
# . @ . #
## $ $ ##
 ## . ##
  #####,
#######
# ... #
# $#$ #
#  $  #
#  @  #
#######,
#########
# . . . #
# #   # #
# $ $ $ #
#       #
#   @   #
#########,
#######
#  .  #
 # $ #
  #@#
 # $ #
#  .  #
#######,
########
#@ $ . #
## ### #
#  $ . #
# #### #
#  $ . #
########,
#########
#  ...  #
#  $$$  #
# # # # #
#   @   #
#########,
#########
# .. .. #
# $$ $$ #
#   @   #
#########,
#########
#       #
# $ . $ #
# . @ . #
# $ . $ #
#       #
#########,
#########
#       #
#@$ $ $ #
#       #
# ## ## #
# . . . #
#       #
#########,
#########
#...#   #
#$$$#   #
#   #   #
#   @   #
#########,
###########
#  .....  #
#  $$$$$  #
#    @    #
###########,
#########
#  ...  #
## #   ##
#  $$$  #
#   @   #
#########,
#########
# . # . #
# $ @ $ #
#   #   #
#########,
  #####
 ## . ##
## $ $ ##
# . @ . #
## $ $ ##
 ## . ##
  #####,
#######
# ... #
# $$$ #
#  @  #
#######,
#########
#  ...  #
#  $$$  #
#   @   #
#########,
###########
#  ....   #
#  $$$$   #
#    @    #
###########,
#########
# . # . #
# $ # $ #
#   @   #
#########,
#############
# . # . # . #
# $ # $ # $ #
#     @     #
#############,
#########
# .. .. #
# $$ $$ #
#   @   #
#########,
###########
#  .....  #
#  $$$$$  #
# # # # # #
#    @    #
###########`.split(`,`),h=n();function g(){let[e,t]=(0,a.useState)(0),[n,u]=(0,a.useState)(()=>s(m[0])),[g,_]=(0,a.useState)([]),[v,y]=(0,a.useState)(``),[b,x]=(0,a.useState)(0),[S,C]=(0,a.useState)(0),[w,T]=(0,a.useState)(1),[E,D]=(0,a.useState)(!1),[O,k]=(0,a.useState)(!1),[A,j]=(0,a.useState)(!1),[M,N]=(0,a.useState)(!1),P=(0,a.useRef)(null),F=(0,a.useRef)(null),I=(0,a.useRef)(null);i({open:A,dialogRef:P,initialFocus:`button:not([disabled])`,onEscape:()=>j(!1),returnFocus:F}),i({open:O,dialogRef:I,initialFocus:`button.primary`,returnFocus:`.sokoban-cell[tabindex='0']`}),(0,a.useEffect)(()=>{try{let e=localStorage.getItem(`realm-sokoban-progress-v1`);if(e){let t=JSON.parse(e);Number.isInteger(t?.unlocked)&&queueMicrotask(()=>T(Math.max(1,Math.min(50,t.unlocked))))}}catch{}},[]);let L=(0,a.useCallback)(e=>{let n=s(m[e]||m[0]);t(e),u(n),_([]),x(0),C(0),D(!1),k(!1),y(``)},[]),R=(0,a.useCallback)((t,r)=>{if(!n||O||A||M)return;let i={state:n,steps:S,pushes:b},a=c(i,t,r);if(a===i)return;_(e=>[i,...e].slice(0,100)),C(a.steps),x(a.pushes),y(``),u(a.state);let s=f(a.state);if(D(a.state.boxes.some(e=>s.has(o(e)))),l(a.state.boxes,a.state.goals)&&(k(!0),e+2>w)){let t=Math.min(50,e+2);T(t);try{localStorage.setItem(`realm-sokoban-progress-v1`,JSON.stringify({unlocked:t}))}catch{}}},[n,S,b,O,e,w,A,M]),z=()=>{if(g.length===0||!n||A||M)return;let[e,...t]=g;u(e.state),C(e.steps),x(e.pushes),_(t);let r=f(e.state);D(e.state.boxes.some(e=>r.has(o(e)))),k(!1),y(``)};(0,a.useEffect)(()=>{let e=e=>{if(M||A){e.key===`Escape`&&(N(!1),j(!1));return}e.altKey||e.ctrlKey||e.metaKey||e.target instanceof HTMLElement&&e.target.matches(`input, textarea, select, [contenteditable=true]`)||(e.key===`ArrowUp`||e.key===`w`||e.key===`W`?(e.preventDefault(),R(0,-1)):e.key===`ArrowDown`||e.key===`s`||e.key===`S`?(e.preventDefault(),R(0,1)):e.key===`ArrowLeft`||e.key===`a`||e.key===`A`?(e.preventDefault(),R(-1,0)):e.key===`ArrowRight`||e.key===`d`||e.key===`D`?(e.preventDefault(),R(1,0)):(e.key===`u`||e.key===`U`||e.key===`z`||e.key===`Z`)&&(e.preventDefault(),z()))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)});let B=e=>{if(!n||O||A||M)return;if(n.boxes.some(t=>t.x===e.x&&t.y===e.y)&&Math.abs(e.x-n.player.x)+Math.abs(e.y-n.player.y)===1){R(e.x-n.player.x,e.y-n.player.y);return}let t=d(n.player,e,n.walls,n.boxes,n);if(t&&t.length>1){let e={state:n,steps:S,pushes:b},r=e;for(let n=1;n<t.length;n++){let r=t[n].x-t[n-1].x,i=t[n].y-t[n-1].y;e=c(e,r,i)}_(e=>[r,...e].slice(0,100)),C(e.steps),u(e.state),y(``)}},V=()=>{if(!n||O)return;let e=p(n);if(!e?.length){y(`搜尋範圍內找不到解法；可撤銷或重設後再試。這不代表已證明無解。`);return}let t=e[0];R(t.x,t.y),y(`已示範解法的下一步，可用 Z 撤銷。`)};if(!n)return null;let H=new Set(n.walls.map(o)),U=new Set(n.goals.map(o)),W=new Set(n.boxes.map(o)),G=o(n.player);return(0,h.jsxs)(`main`,{className:`sokoban-shell game-edition table-puzzle-edition sokoban-edition`,"data-ui-revision":`2026-10-10.6`,children:[(0,h.jsxs)(`header`,{className:`sokoban-header`,children:[(0,h.jsx)(`a`,{href:r(`/`),className:`sokoban-home`,children:`← 大廳`}),(0,h.jsxs)(`div`,{className:`sokoban-brand`,children:[(0,h.jsx)(`span`,{className:`seal`,children:`箱`}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`small`,{children:`五十道關卡 · 步步推敲`}),(0,h.jsx)(`h1`,{children:`推箱子 3D`})]})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,h.jsxs)(`button`,{type:`button`,className:`sokoban-home`,ref:F,onClick:()=>j(!0),children:[`選關 (`,e+1,`/50)`]}),(0,h.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>L(e),children:`重設`})]})]}),(0,h.jsxs)(`div`,{className:`puzzle-workbench`,children:[(0,h.jsx)(`section`,{className:`puzzle-board-area`,"aria-label":`搬運工房`,children:(0,h.jsx)(`div`,{className:`sokoban-viewport`,children:(0,h.jsx)(`div`,{className:`sokoban-grid`,role:`grid`,"aria-label":`推箱子第 ${e+1} 關盤面`,style:{gridTemplateColumns:`repeat(${n.width}, 36px)`,gridTemplateRows:`repeat(${n.height}, 36px)`},children:Array.from({length:n.height}).map((e,t)=>(0,h.jsx)(`div`,{role:`row`,style:{display:`contents`},children:Array.from({length:n.width}).map((e,n)=>{let r=`${n},${t}`,i=H.has(r),a=U.has(r),o=W.has(r),s=G===r,c=`sokoban-cell`,l=``;return i?(c+=` wall`,l=`🧱`):o&&a?(c+=` box on-goal`,l=`⭐`):o?(c+=` box`,l=`📦`):s?(c+=` floor player`,l=`👷`):a?(c+=` goal`,l=`🎯`):c+=` floor`,(0,h.jsx)(`button`,{type:`button`,className:c,onClick:()=>B({x:n,y:t}),role:`gridcell`,tabIndex:s?0:-1,"aria-label":`${String.fromCharCode(65+n)}${t+1}，${i?`牆`:o&&a?`箱子已在目標`:o?`箱子`:s?`玩家`:a?`目標`:`地板`}`,children:l},r)})},t))})})}),(0,h.jsxs)(`aside`,{className:`puzzle-toolbox`,"aria-label":`搬運操作`,children:[(0,h.jsx)(`h2`,{children:`每一箱，都有去處。`}),(0,h.jsx)(`p`,{className:`puzzle-intro`,children:`把箱子推到目標，先留好轉身的位置。卡住時可撤銷，重新找路。`}),(0,h.jsxs)(`div`,{className:`sokoban-stats-bar`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(`span`,{children:[`關卡: `,(0,h.jsxs)(`strong`,{children:[`第 `,e+1,` 關`]})]}),(0,h.jsxs)(`span`,{style:{marginLeft:`1rem`},children:[`推動: `,(0,h.jsx)(`strong`,{children:b}),` 次`]}),(0,h.jsxs)(`span`,{style:{marginLeft:`1rem`},children:[`步數: `,(0,h.jsx)(`strong`,{children:S})]})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:[E&&(0,h.jsx)(`span`,{style:{color:`#ef4444`,fontWeight:700},children:`⚠️ 死鎖警示`}),(0,h.jsxs)(`button`,{type:`button`,className:`sokoban-home`,onClick:z,disabled:g.length===0,children:[`↶ 撤銷 (`,g.length,`)`]}),(0,h.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:V,disabled:O,children:`提示一步`})]})]}),(0,h.jsx)(`p`,{role:`status`,style:{textAlign:`center`,minHeight:`1.5em`},children:v||(E?`箱子已進入無法推回目標的死格；按 Z 撤銷。`:`點擊地板自動走路、鄰近箱子可直接推動。Z 撤銷並還原步數。`)}),(0,h.jsxs)(`div`,{className:`sokoban-controls`,"aria-label":`方向控制`,children:[(0,h.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>R(0,-1),"aria-label":`向上移動`,children:`↑`}),(0,h.jsxs)(`div`,{className:`dpad-row`,children:[(0,h.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>R(-1,0),"aria-label":`向左移動`,children:`←`}),(0,h.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>R(0,1),"aria-label":`向下移動`,children:`↓`}),(0,h.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>R(1,0),"aria-label":`向右移動`,children:`→`})]})]})]})]}),O&&(0,h.jsx)(`div`,{className:`reversi-overlay`,children:(0,h.jsxs)(`div`,{className:`reversi-dialog`,ref:I,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`sokoban-victory-title`,tabIndex:-1,children:[(0,h.jsx)(`h2`,{id:`sokoban-victory-title`,style:{color:`#38bdf8`},children:`🎉 關卡完美通關！`}),(0,h.jsxs)(`p`,{children:[`恭喜將所有箱子精準推入目標點！`,(0,h.jsx)(`br`,{}),`推動次數：`,(0,h.jsx)(`strong`,{children:b}),` 次 ｜ 總步數：`,(0,h.jsx)(`strong`,{children:S}),` 步。`]}),(0,h.jsxs)(`div`,{className:`dialog-actions`,children:[(0,h.jsx)(`a`,{href:r(`/`),className:`reversi-home`,style:{display:`inline-block`},children:`返回大廳`}),e<49?(0,h.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>L(e+1),children:`進入下一關 →`}):(0,h.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>L(0),children:`從頭重溫`})]})]})}),A&&(0,h.jsx)(`div`,{className:`reversi-overlay`,children:(0,h.jsxs)(`div`,{className:`reversi-dialog`,ref:P,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`sokoban-selector-title`,tabIndex:-1,style:{maxWidth:`480px`},children:[(0,h.jsx)(`h2`,{id:`sokoban-selector-title`,children:`選擇推箱子關卡 (1~50)`}),(0,h.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(10, 1fr)`,gap:`6px`,margin:`1rem 0`},children:Array.from({length:50}).map((t,n)=>{let r=n<w;return(0,h.jsx)(`button`,{type:`button`,disabled:!r,style:{padding:`0.5rem 0`,background:n===e?`#3b82f6`:r?`rgba(255,255,255,0.1)`:`rgba(255,255,255,0.02)`,color:r?`#fff`:`#475569`,borderRadius:`6px`,border:`1px solid rgba(255,255,255,0.1)`,cursor:r?`pointer`:`not-allowed`,fontWeight:700},onClick:()=>{L(n),j(!1)},children:n+1},n)})}),(0,h.jsx)(`div`,{className:`dialog-actions`,children:(0,h.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>j(!1),children:`關閉`})})]})})]})}export{g as default};