import{r as e}from"./rolldown-runtime-D0yXDDFE.js";import{a as t,o as n}from"./framework-Dm2LD62T.js";import{t as r}from"./sitePath-yR_Sue8-.js";var i=e(t(),1),a=e=>`${e.x},${e.y}`;function o(e){let t=e.replace(/^(?:[ \t]*\r?\n)+|(?:\r?\n[ \t]*)+$/g,``).split(/\r?\n/),n=t.length,r=0;for(let e of t)e.length>r&&(r=e.length);let i={x:0,y:0},a=[],o=[],s=[];for(let e=0;e<n;e++){let n=t[e];for(let t=0;t<r;t++){let r=n[t]??`#`,c={x:t,y:e};r===`#`?s.push(c):r===`@`?i=c:r===`+`?(i=c,o.push(c)):r===`$`?a.push(c):r===`*`?(a.push(c),o.push(c)):r===`.`&&o.push(c)}}let c=new Set,l=[],u=(e,i)=>{let a=`${e},${i}`;e>=0&&e<r&&i>=0&&i<n&&t[i][e]===` `&&!c.has(a)&&(c.add(a),l.push({x:e,y:i}))};for(let e=0;e<r;e++)u(e,0),u(e,n-1);for(let e=0;e<n;e++)u(0,e),u(r-1,e);for(let e=0;e<l.length;e++){let{x:t,y:n}=l[e];u(t-1,n),u(t+1,n),u(t,n-1),u(t,n+1)}return s.push(...l),{player:i,boxes:a,goals:o,walls:s,width:r,height:n}}function s(e,t,n){let r=l(e.state,t,n);return r?{state:r.nextState,steps:e.steps+1,pushes:e.pushes+ +(r.step.pushedBoxIndex>=0)}:e}function c(e,t){let n=new Set(t.map(a));return e.length>0&&e.length===t.length&&new Set(e.map(a)).size===e.length&&e.every(e=>n.has(a(e)))}function l(e,t,n){if(!Number.isInteger(t)||!Number.isInteger(n)||Math.abs(t)+Math.abs(n)!==1)return null;let r=t=>t.x>=0&&t.x<e.width&&t.y>=0&&t.y<e.height,i=new Set(e.walls.map(a)),o=new Map(e.boxes.map((e,t)=>[a(e),t])),s={x:e.player.x+t,y:e.player.y+n},c=a(s);if(!r(s)||i.has(c))return null;if(o.has(c)){let l=o.get(c),u={x:s.x+t,y:s.y+n},d=a(u);if(!r(u)||i.has(d)||o.has(d))return null;let f=[...e.boxes];f[l]=u;let p={playerBefore:e.player,playerAfter:s,pushedBoxIndex:l,boxBefore:e.boxes[l],boxAfter:u};return{nextState:{...e,player:s,boxes:f},step:p}}let l={playerBefore:e.player,playerAfter:s,pushedBoxIndex:-1};return{nextState:{...e,player:s},step:l}}function u(e,t,n,r,i){let o=[e,...n,...r],s=i?.width??Math.max(...o.map(e=>e.x))+1,c=i?.height??Math.max(...o.map(e=>e.y))+1,l=e=>Number.isInteger(e.x)&&Number.isInteger(e.y)&&e.x>=0&&e.x<s&&e.y>=0&&e.y<c;if(!l(e)||!l(t))return null;let u=new Set([...n.map(a),...r.map(a)]),d=a(t);if(u.has(d))return null;let f=a(e),p=[{point:e,path:[e]}],m=new Set([f]);for(let e=0;e<p.length;e++){let{point:n,path:r}=p[e];if(n.x===t.x&&n.y===t.y)return r;for(let[e,t]of[[0,-1],[0,1],[-1,0],[1,0]]){let i={x:n.x+e,y:n.y+t},o=a(i);l(i)&&!m.has(o)&&!u.has(o)&&(m.add(o),p.push({point:i,path:[...r,i]}))}}return null}function d(e){let t=new Set(e.walls.map(a)),n=n=>n.x>=0&&n.x<e.width&&n.y>=0&&n.y<e.height&&!t.has(a(n)),r=[...e.goals],i=new Set(r.map(a));for(let e=0;e<r.length;e++)for(let[t,o]of[[0,1],[0,-1],[1,0],[-1,0]]){let s={x:r[e].x+t,y:r[e].y+o},c={x:s.x+t,y:s.y+o};n(s)&&n(c)&&!i.has(a(s))&&(i.add(a(s)),r.push(s))}let o=new Set;for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++)n({x:r,y:t})&&!i.has(`${r},${t}`)&&o.add(`${r},${t}`);return o}function f(e,t=15e3){let n=d(e),r=new Set(e.walls.map(a)),i=[[0,1],[0,-1],[1,0],[-1,0]],o=[{state:e,moves:[]}],s=new Set;for(let e=0;e<o.length&&e<t;e++){let{state:t,moves:l}=o[e];if(c(t.boxes,t.goals))return l;let u=new Set(t.boxes.map(a)),d=e=>e.x>=0&&e.x<t.width&&e.y>=0&&e.y<t.height&&!r.has(a(e))&&!u.has(a(e)),f=new Map([[a(t.player),[]]]),p=[t.player];for(let e=0;e<p.length;e++){let t=p[e];for(let[e,n]of i){let r={x:t.x+e,y:t.y+n};d(r)&&!f.has(a(r))&&(f.set(a(r),[...f.get(a(t)),{x:e,y:n}]),p.push(r))}}let m=[...u].sort().join(`;`)+`|`+[...f.keys()].sort()[0];if(!s.has(m)){s.add(m);for(let[e,r]of t.boxes.entries())for(let[s,c]of i){let i={x:r.x-s,y:r.y-c},u={x:r.x+s,y:r.y+c},p=f.get(a(i));if(!p||!d(u)||n.has(a(u)))continue;let m=t.boxes.map((t,n)=>n===e?u:t);o.push({state:{...t,player:r,boxes:m},moves:[...l,...p,{x:s,y:c}]})}}}return null}var p=`
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
###########`.split(`,`),m=n();function h(){let[e,t]=(0,i.useState)(0),[n,l]=(0,i.useState)(()=>o(p[0])),[h,g]=(0,i.useState)([]),[_,v]=(0,i.useState)(``),[y,b]=(0,i.useState)(0),[x,S]=(0,i.useState)(0),[C,w]=(0,i.useState)(1),[T,E]=(0,i.useState)(!1),[D,O]=(0,i.useState)(!1),[k,A]=(0,i.useState)(!1),[j,M]=(0,i.useState)(!1);(0,i.useEffect)(()=>{try{let e=localStorage.getItem(`realm-sokoban-progress-v1`);if(e){let t=JSON.parse(e);Number.isInteger(t?.unlocked)&&queueMicrotask(()=>w(Math.max(1,Math.min(50,t.unlocked))))}}catch{}},[]);let N=(0,i.useCallback)(e=>{let n=o(p[e]||p[0]);t(e),l(n),g([]),b(0),S(0),E(!1),O(!1),v(``)},[]),P=(0,i.useCallback)((t,r)=>{if(!n||D||k||j)return;let i={state:n,steps:x,pushes:y},o=s(i,t,r);if(o===i)return;g(e=>[i,...e].slice(0,100)),S(o.steps),b(o.pushes),v(``),l(o.state);let u=d(o.state);if(E(o.state.boxes.some(e=>u.has(a(e)))),c(o.state.boxes,o.state.goals)&&(O(!0),e+2>C)){let t=Math.min(50,e+2);w(t);try{localStorage.setItem(`realm-sokoban-progress-v1`,JSON.stringify({unlocked:t}))}catch{}}},[n,x,y,D,e,C,k,j]),F=()=>{if(h.length===0||!n||k||j)return;let[e,...t]=h;l(e.state),S(e.steps),b(e.pushes),g(t);let r=d(e.state);E(e.state.boxes.some(e=>r.has(a(e)))),O(!1),v(``)};(0,i.useEffect)(()=>{let e=e=>{if(j||k){e.key===`Escape`&&(M(!1),A(!1));return}e.altKey||e.ctrlKey||e.metaKey||e.target instanceof HTMLElement&&e.target.matches(`input, textarea, select, [contenteditable=true]`)||(e.key===`ArrowUp`||e.key===`w`||e.key===`W`?(e.preventDefault(),P(0,-1)):e.key===`ArrowDown`||e.key===`s`||e.key===`S`?(e.preventDefault(),P(0,1)):e.key===`ArrowLeft`||e.key===`a`||e.key===`A`?(e.preventDefault(),P(-1,0)):e.key===`ArrowRight`||e.key===`d`||e.key===`D`?(e.preventDefault(),P(1,0)):(e.key===`u`||e.key===`U`||e.key===`z`||e.key===`Z`)&&(e.preventDefault(),F()))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)});let I=e=>{if(!n||D||k||j)return;if(n.boxes.some(t=>t.x===e.x&&t.y===e.y)&&Math.abs(e.x-n.player.x)+Math.abs(e.y-n.player.y)===1){P(e.x-n.player.x,e.y-n.player.y);return}let t=u(n.player,e,n.walls,n.boxes,n);if(t&&t.length>1){let e={state:n,steps:x,pushes:y},r=e;for(let n=1;n<t.length;n++){let r=t[n].x-t[n-1].x,i=t[n].y-t[n-1].y;e=s(e,r,i)}g(e=>[r,...e].slice(0,100)),S(e.steps),l(e.state),v(``)}},L=()=>{if(!n||D)return;let e=f(n);if(!e?.length){v(`搜尋範圍內找不到解法；可撤銷或重設後再試。這不代表已證明無解。`);return}let t=e[0];P(t.x,t.y),v(`已示範解法的下一步，可用 Z 撤銷。`)};if(!n)return null;let R=new Set(n.walls.map(a)),z=new Set(n.goals.map(a)),B=new Set(n.boxes.map(a)),V=a(n.player);return(0,m.jsxs)(`main`,{className:`sokoban-shell`,children:[(0,m.jsxs)(`header`,{className:`sokoban-header`,children:[(0,m.jsx)(`a`,{href:r(`/`),className:`sokoban-home`,children:`← 大廳`}),(0,m.jsxs)(`div`,{className:`sokoban-brand`,children:[(0,m.jsx)(`span`,{className:`seal`,children:`箱`}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`small`,{children:`SOKOBAN 3D · 50 PUZZLES`}),(0,m.jsx)(`h1`,{children:`推箱子 3D`})]})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,m.jsxs)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>A(!0),children:[`選關 (`,e+1,`/50)`]}),(0,m.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>N(e),children:`重設`})]})]}),(0,m.jsxs)(`div`,{className:`sokoban-stats-bar`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`span`,{children:[`關卡: `,(0,m.jsxs)(`strong`,{children:[`第 `,e+1,` 關`]})]}),(0,m.jsxs)(`span`,{style:{marginLeft:`1rem`},children:[`推動: `,(0,m.jsx)(`strong`,{children:y}),` 次`]}),(0,m.jsxs)(`span`,{style:{marginLeft:`1rem`},children:[`步數: `,(0,m.jsx)(`strong`,{children:x})]})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:[T&&(0,m.jsx)(`span`,{style:{color:`#ef4444`,fontWeight:700},children:`⚠️ 死鎖警示`}),(0,m.jsxs)(`button`,{type:`button`,className:`sokoban-home`,onClick:F,disabled:h.length===0,children:[`↶ 撤銷 (`,h.length,`)`]}),(0,m.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:L,disabled:D,children:`提示一步`})]})]}),(0,m.jsx)(`p`,{role:`status`,style:{textAlign:`center`,minHeight:`1.5em`},children:_||(T?`箱子已進入無法推回目標的死格；按 Z 撤銷。`:`點擊地板自動走路、鄰近箱子可直接推動。Z 撤銷並還原步數。`)}),(0,m.jsx)(`div`,{className:`sokoban-viewport`,children:(0,m.jsx)(`div`,{className:`sokoban-grid`,role:`grid`,"aria-label":`推箱子第 ${e+1} 關盤面`,style:{gridTemplateColumns:`repeat(${n.width}, 36px)`,gridTemplateRows:`repeat(${n.height}, 36px)`},children:Array.from({length:n.height}).map((e,t)=>Array.from({length:n.width}).map((e,n)=>{let r=`${n},${t}`,i=R.has(r),a=z.has(r),o=B.has(r),s=V===r,c=`sokoban-cell`,l=``;return i?(c+=` wall`,l=`🧱`):o&&a?(c+=` box on-goal`,l=`⭐`):o?(c+=` box`,l=`📦`):s?(c+=` floor player`,l=`👷`):a?(c+=` goal`,l=`🎯`):c+=` floor`,(0,m.jsx)(`button`,{type:`button`,className:c,onClick:()=>I({x:n,y:t}),role:`gridcell`,tabIndex:s?0:-1,"aria-label":`${String.fromCharCode(65+n)}${t+1}，${i?`牆`:o&&a?`箱子已在目標`:o?`箱子`:s?`玩家`:a?`目標`:`地板`}`,children:l},r)}))})}),(0,m.jsxs)(`div`,{className:`sokoban-controls`,"aria-label":`方向控制`,children:[(0,m.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>P(0,-1),"aria-label":`向上移動`,children:`↑`}),(0,m.jsxs)(`div`,{className:`dpad-row`,children:[(0,m.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>P(-1,0),"aria-label":`向左移動`,children:`←`}),(0,m.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>P(0,1),"aria-label":`向下移動`,children:`↓`}),(0,m.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>P(1,0),"aria-label":`向右移動`,children:`→`})]})]}),D&&(0,m.jsx)(`div`,{className:`reversi-overlay`,children:(0,m.jsxs)(`div`,{className:`reversi-dialog`,children:[(0,m.jsx)(`h2`,{style:{color:`#38bdf8`},children:`🎉 關卡完美通關！`}),(0,m.jsxs)(`p`,{children:[`恭喜將所有箱子精準推入目標點！`,(0,m.jsx)(`br`,{}),`推動次數：`,(0,m.jsx)(`strong`,{children:y}),` 次 ｜ 總步數：`,(0,m.jsx)(`strong`,{children:x}),` 步。`]}),(0,m.jsxs)(`div`,{className:`dialog-actions`,children:[(0,m.jsx)(`a`,{href:r(`/`),className:`reversi-home`,style:{display:`inline-block`},children:`返回大廳`}),e<49?(0,m.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>N(e+1),children:`進入下一關 →`}):(0,m.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>N(0),children:`從頭重溫`})]})]})}),k&&(0,m.jsx)(`div`,{className:`reversi-overlay`,children:(0,m.jsxs)(`div`,{className:`reversi-dialog`,style:{maxWidth:`480px`},children:[(0,m.jsx)(`h2`,{children:`選擇推箱子關卡 (1~50)`}),(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(10, 1fr)`,gap:`6px`,margin:`1rem 0`},children:Array.from({length:50}).map((t,n)=>{let r=n<C;return(0,m.jsx)(`button`,{type:`button`,disabled:!r,style:{padding:`0.5rem 0`,background:n===e?`#3b82f6`:r?`rgba(255,255,255,0.1)`:`rgba(255,255,255,0.02)`,color:r?`#fff`:`#475569`,borderRadius:`6px`,border:`1px solid rgba(255,255,255,0.1)`,cursor:r?`pointer`:`not-allowed`,fontWeight:700},onClick:()=>{N(n),A(!1)},children:n+1},n)})}),(0,m.jsx)(`div`,{className:`dialog-actions`,children:(0,m.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>A(!1),children:`關閉`})})]})})]})}export{h as default};