import{r as e}from"./rolldown-runtime-D0yXDDFE.js";import{a as t,o as n}from"./framework-Dm2LD62T.js";import{t as r}from"./sitePath-CXwsywWg.js";var i=e(t(),1),a=e=>`${e.x},${e.y}`;function o(e){let t=e.trim().split(/\r?\n/),n=t.length,r=0;for(let e of t)e.length>r&&(r=e.length);let i={x:0,y:0},a=[],o=[],s=[];for(let e=0;e<n;e++){let n=t[e];for(let t=0;t<n.length;t++){let r=n[t],c={x:t,y:e};r===`#`?s.push(c):r===`@`?i=c:r===`+`?(i=c,o.push(c)):r===`$`?a.push(c):r===`*`?(a.push(c),o.push(c)):r===`.`&&o.push(c)}}return{player:i,boxes:a,goals:o,walls:s,width:r,height:n}}function s(e,t){let n=new Set(t.map(a));return e.every(e=>n.has(a(e)))}function c(e,t,n){if(n.has(a(e)))return!1;let r=t.has(a({x:e.x,y:e.y-1})),i=t.has(a({x:e.x,y:e.y+1})),o=t.has(a({x:e.x-1,y:e.y})),s=t.has(a({x:e.x+1,y:e.y}));return r&&o||r&&s||i&&o||i&&s}function l(e,t,n){let r=new Set(e.walls.map(a)),i=new Map(e.boxes.map((e,t)=>[a(e),t])),o={x:e.player.x+t,y:e.player.y+n},s=a(o);if(r.has(s))return null;if(i.has(s)){let c=i.get(s),l={x:o.x+t,y:o.y+n},u=a(l);if(r.has(u)||i.has(u))return null;let d=[...e.boxes];d[c]=l;let f={playerBefore:e.player,playerAfter:o,pushedBoxIndex:c,boxBefore:e.boxes[c],boxAfter:l};return{nextState:{...e,player:o,boxes:d},step:f}}let c={playerBefore:e.player,playerAfter:o,pushedBoxIndex:-1};return{nextState:{...e,player:o},step:c}}function u(e,t,n,r){let i=new Set([...n.map(a),...r.map(a)]),o=a(t);if(i.has(o))return null;let s=a(e),c=[{point:e,path:[e]}],l=new Set([s]);for(;c.length>0;){let{point:e,path:n}=c.shift();if(e.x===t.x&&e.y===t.y)return n;for(let[t,r]of[[0,-1],[0,1],[-1,0],[1,0]]){let o={x:e.x+t,y:e.y+r},s=a(o);!l.has(s)&&!i.has(s)&&(l.add(s),c.push({point:o,path:[...n,o]}))}}return null}var d=`
#####
#@$.#
#####,
######
#@ $ #
#  $.#
#   .#
######,
  ###
  #.#
  #$#
### ###
#. $@.#
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
#####.#
    ###,
######
#    #
# $$ #
# .. #
#  @ #
######,
########
#  #   #
# $ $  #
#  #...#
#  @   #
########,
#######
#  .  #
# $$$ #
# ... #
#  @  #
#######,
#########
#   #   #
# $ $ $ #
#...#...#
#   @   #
#########,
  #####
###   #
#   $ #
# # # #
# . . #
#@ $  #
#######,
  ###
  #.#
###$###
# .@. #
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
# .. .. #
##  @  ##
 #######,
######
# .. #
# $$ #
# $$ #
# .. #
# @  #
######,
#########
# . #   #
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
# #$# #
# $ $ #
#  @  #
#######,
#########
#..#   .#
#$$# $  #
#  #    #
#  @    #
#########,
  #####
  # . #
###$#$###
# . @ . #
###$#$###
  # . #
  #####,
#########
#@$     #
# ##### #
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
  #####
  # . #
###$ $###
# . @ . #
### $ ###
  # . #
  #####,
#########
#@ $ $ .#
### ### #
# . $ . #
#########,
#########
# . . . #
# # # # #
# $ $ $ #
#   @   #
#########,
  #####
 ## . ##
## . . ##
#  $ $ $#
##  @  ##
 ##   ##
  #####,
   ###
  ##.##
 ## . ##
##  $  ##
#  $ . $#
##  @  ##
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
# ..@.. #
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
# # # # #
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
#   .   #
# $#.#$ #
# . @ . #
# $#.#$ #
#   .   #
#########,
#########
#@$ $ $ #
# ##### #
# . . . #
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
## # # ##
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
# ..@.. #
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
###########
# . # . # . #
# $ # $ # $ #
#     @     #
###########,
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
###########`.split(`,`),f=n();function p(){let[e,t]=(0,i.useState)(0),[n,p]=(0,i.useState)(null),[m,h]=(0,i.useState)([]),[g,_]=(0,i.useState)(0),[v,y]=(0,i.useState)(0),[b,x]=(0,i.useState)(1),[S,C]=(0,i.useState)(!1),[w,T]=(0,i.useState)(!1),[E,D]=(0,i.useState)(!1),[O,k]=(0,i.useState)(!1);(0,i.useEffect)(()=>{try{let e=localStorage.getItem(`realm-sokoban-progress-v1`);if(e){let t=JSON.parse(e);t.unlocked&&x(t.unlocked)}}catch{}},[]);let A=(0,i.useCallback)(e=>{let n=o(d[e]||d[0]);t(e),p(n),h([]),_(0),y(0),C(!1),T(!1)},[]);(0,i.useEffect)(()=>{A(0)},[A]);let j=(0,i.useCallback)((t,r)=>{if(!n||w)return;let i=l(n,t,r);if(!i)return;h(e=>[{...n},...e].slice(0,50)),y(e=>e+1),i.step.pushedBoxIndex>=0&&_(e=>e+1),p(i.nextState);let o=new Set(i.nextState.walls.map(a)),u=new Set(i.nextState.goals.map(a));if(C(i.nextState.boxes.some(e=>c(e,o,u))),s(i.nextState.boxes,i.nextState.goals)&&(T(!0),e+2>b)){let t=Math.min(50,e+2);x(t);try{localStorage.setItem(`realm-sokoban-progress-v1`,JSON.stringify({unlocked:t}))}catch{}}},[n,w,e,b]),M=()=>{if(m.length===0||!n||w)return;let[e,...t]=m;p(e),h(t),C(!1)};(0,i.useEffect)(()=>{let e=e=>{e.key===`ArrowUp`||e.key===`w`||e.key===`W`?(e.preventDefault(),j(0,-1)):e.key===`ArrowDown`||e.key===`s`||e.key===`S`?(e.preventDefault(),j(0,1)):e.key===`ArrowLeft`||e.key===`a`||e.key===`A`?(e.preventDefault(),j(-1,0)):e.key===`ArrowRight`||e.key===`d`||e.key===`D`?(e.preventDefault(),j(1,0)):(e.key===`u`||e.key===`U`||e.key===`z`||e.key===`Z`)&&M()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[j]);let N=e=>{if(!n||w)return;let t=u(n.player,e,n.walls,n.boxes);if(t&&t.length>1){let e=n,r=0;for(let n=1;n<t.length;n++){let i=t[n].x-t[n-1].x,a=t[n].y-t[n-1].y,o=l(e,i,a);o&&(e=o.nextState,r++)}y(e=>e+r),p(e)}};if(!n)return null;let P=new Set(n.walls.map(a)),F=new Set(n.goals.map(a)),I=new Set(n.boxes.map(a)),L=a(n.player);return(0,f.jsxs)(`main`,{className:`sokoban-shell`,children:[(0,f.jsxs)(`header`,{className:`sokoban-header`,children:[(0,f.jsx)(`a`,{href:r(`/`),className:`sokoban-home`,children:`← 大廳`}),(0,f.jsxs)(`div`,{className:`sokoban-brand`,children:[(0,f.jsx)(`span`,{className:`seal`,children:`箱`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`small`,{children:`SOKOBAN 3D · 50 PUZZLES`}),(0,f.jsx)(`h1`,{children:`推箱子 3D`})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,f.jsxs)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>D(!0),children:[`選關 (`,e+1,`/50)`]}),(0,f.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>A(e),children:`重設`})]})]}),(0,f.jsxs)(`div`,{className:`sokoban-stats-bar`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`span`,{children:[`關卡: `,(0,f.jsxs)(`strong`,{children:[`第 `,e+1,` 關`]})]}),(0,f.jsxs)(`span`,{style:{marginLeft:`1rem`},children:[`推動: `,(0,f.jsx)(`strong`,{children:g}),` 次`]}),(0,f.jsxs)(`span`,{style:{marginLeft:`1rem`},children:[`步數: `,(0,f.jsx)(`strong`,{children:v})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:[S&&(0,f.jsx)(`span`,{style:{color:`#ef4444`,fontWeight:700},children:`⚠️ 死鎖警示`}),(0,f.jsxs)(`button`,{type:`button`,className:`sokoban-home`,onClick:M,disabled:m.length===0,children:[`↶ 撤銷 (`,m.length,`)`]})]})]}),(0,f.jsx)(`div`,{className:`sokoban-board-wrapper`,children:(0,f.jsx)(`div`,{className:`sokoban-board`,style:{gridTemplateColumns:`repeat(${n.width}, 36px)`,gridTemplateRows:`repeat(${n.height}, 36px)`},children:Array.from({length:n.height}).map((e,t)=>Array.from({length:n.width}).map((e,n)=>{let r=`${n},${t}`,i=P.has(r),a=F.has(r),o=I.has(r),s=L===r,c=`sokoban-cell`,l=``;return i?(c+=` wall`,l=`🧱`):o&&a?(c+=` box-on-goal`,l=`⭐`):o?(c+=` box`,l=`📦`):s?(c+=` floor`,l=`👷`):a?(c+=` goal`,l=`🎯`):c+=` floor`,(0,f.jsx)(`div`,{className:c,onClick:()=>N({x:n,y:t}),children:l},r)}))})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginTop:`1rem`},children:[(0,f.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>j(0,-1),children:`↑`}),(0,f.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>j(-1,0),children:`←`}),(0,f.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>j(0,1),children:`↓`}),(0,f.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>j(1,0),children:`→`})]}),w&&(0,f.jsx)(`div`,{className:`reversi-overlay`,children:(0,f.jsxs)(`div`,{className:`reversi-dialog`,children:[(0,f.jsx)(`h2`,{style:{color:`#38bdf8`},children:`🎉 關卡完美通關！`}),(0,f.jsxs)(`p`,{children:[`恭喜將所有箱子精準推入目標點！`,(0,f.jsx)(`br`,{}),`推動次數：`,(0,f.jsx)(`strong`,{children:g}),` 次 ｜ 總步數：`,(0,f.jsx)(`strong`,{children:v}),` 步。`]}),(0,f.jsxs)(`div`,{className:`dialog-actions`,children:[(0,f.jsx)(`a`,{href:r(`/`),className:`reversi-home`,style:{display:`inline-block`},children:`返回大廳`}),e<49?(0,f.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>A(e+1),children:`進入下一關 →`}):(0,f.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>A(0),children:`從頭重溫`})]})]})}),E&&(0,f.jsx)(`div`,{className:`reversi-overlay`,children:(0,f.jsxs)(`div`,{className:`reversi-dialog`,style:{maxWidth:`480px`},children:[(0,f.jsx)(`h2`,{children:`選擇推箱子關卡 (1~50)`}),(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(10, 1fr)`,gap:`6px`,margin:`1rem 0`},children:Array.from({length:50}).map((t,n)=>{let r=n<b;return(0,f.jsx)(`button`,{type:`button`,disabled:!r,style:{padding:`0.5rem 0`,background:n===e?`#3b82f6`:r?`rgba(255,255,255,0.1)`:`rgba(255,255,255,0.02)`,color:r?`#fff`:`#475569`,borderRadius:`6px`,border:`1px solid rgba(255,255,255,0.1)`,cursor:r?`pointer`:`not-allowed`,fontWeight:700},onClick:()=>{A(n),D(!1)},children:n+1},n)})}),(0,f.jsx)(`div`,{className:`dialog-actions`,children:(0,f.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>D(!1),children:`關閉`})})]})})]})}export{p as default};