import{r as e}from"./rolldown-runtime-D0yXDDFE.js";import{a as t,o as n}from"./framework-Dm2LD62T.js";import{t as r}from"./sitePath-CXwsywWg.js";var i=e(t(),1),a=e=>`${e.x},${e.y}`;function o(e){let t=e.trim().split(/\r?\n/),n=t.length,r=0;for(let e of t)e.length>r&&(r=e.length);let i={x:0,y:0},a=[],o=[],s=[];for(let e=0;e<n;e++){let n=t[e];for(let t=0;t<n.length;t++){let r=n[t],c={x:t,y:e};r===`#`?s.push(c):r===`@`?i=c:r===`+`?(i=c,o.push(c)):r===`$`?a.push(c):r===`*`?(a.push(c),o.push(c)):r===`.`&&o.push(c)}}return{player:i,boxes:a,goals:o,walls:s,width:r,height:n}}function s(e,t){let n=new Set(t.map(a));return e.every(e=>n.has(a(e)))}function c(e,t,n){if(n.has(a(e)))return!1;let r=t.has(a({x:e.x,y:e.y-1})),i=t.has(a({x:e.x,y:e.y+1})),o=t.has(a({x:e.x-1,y:e.y})),s=t.has(a({x:e.x+1,y:e.y}));return r&&o||r&&s||i&&o||i&&s}function l(e,t,n){let r=new Set(e.walls.map(a)),i=new Map(e.boxes.map((e,t)=>[a(e),t])),o={x:e.player.x+t,y:e.player.y+n},s=a(o);if(r.has(s))return null;if(i.has(s)){let c=i.get(s),l={x:o.x+t,y:o.y+n},u=a(l);if(r.has(u)||i.has(u))return null;let d=[...e.boxes];d[c]=l;let f={playerBefore:e.player,playerAfter:o,pushedBoxIndex:c,boxBefore:e.boxes[c],boxAfter:l};return{nextState:{...e,player:o,boxes:d},step:f}}let c={playerBefore:e.player,playerAfter:o,pushedBoxIndex:-1};return{nextState:{...e,player:o},step:c}}function u(e,t,n,r){let i=new Set([...n.map(a),...r.map(a)]),o=a(t);if(i.has(o))return null;let s=a(e),c=[{point:e,path:[e]}],l=new Set([s]);for(;c.length>0;){let{point:e,path:n}=c.shift();if(e.x===t.x&&e.y===t.y)return n;for(let[t,r]of[[0,-1],[0,1],[-1,0],[1,0]]){let o={x:e.x+t,y:e.y+r},s=a(o);!l.has(s)&&!i.has(s)&&(l.add(s),c.push({point:o,path:[...n,o]}))}}return null}var d=[`
#####
#@$.#
#####`,`
######
#@ $ #
#  $.#
#   .#
######`,`
  ###
  #.#
  #$#
### ###
#. $@.#
###$###
  #.#
  ###`,`
#####
#@  #
# $$#
# ..#
#####`,`
  #####
  #   #
  #$  #
### $.#
#@  $.#
#####.#
    ###`,`
######
#    #
# $$ #
# .. #
#  @ #
######`,`
########
#  #   #
# $ $  #
#  #...#
#  @   #
########`,`
#######
#  .  #
# $$$ #
# ... #
#  @  #
#######`,`
#########
#   #   #
# $ $ $ #
#...#...#
#   @   #
#########`,`
  #####
###   #
#   $ #
# # # #
# . . #
#@ $  #
#######`,`
  ###
  #.#
###$###
# .@. #
###$###
  #.#
  ###`,`
#######
#  .  #
#  $  #
#  $  #
#  .  #
#  @  #
#######`,`
#########
# . # . #
# $ # $ #
#   @   #
#########`,`
  #####
 ##   ##
## $ $ ##
# .. .. #
##  @  ##
 #######`,`
######
# .. #
# $$ #
# $$ #
# .. #
# @  #
######`,...Array.from({length:35},(e,t)=>{let n=t+16,r=Math.min(3+Math.floor(n/10),6),i=`$`.repeat(r);return`
########
#  ${`.`.repeat(r)}  #
#  ${i}  #
#      #
#   @  #
########`.trim()})],f=n();function p(){let[e,t]=(0,i.useState)(0),[n,p]=(0,i.useState)(()=>o(d[0])),[m,h]=(0,i.useState)([]),[g,_]=(0,i.useState)(0),[v,y]=(0,i.useState)(0),[b,x]=(0,i.useState)(!1),[S,C]=(0,i.useState)(!1),[w,T]=(0,i.useState)(0),E=(0,i.useCallback)(e=>{let n=o(d[e]??d[0]);t(e),p(n),h([]),_(0),y(0),x(!1)},[]);(0,i.useEffect)(()=>{let e=new Set(n.walls.map(a)),t=new Set(n.goals.map(a)),r=0;for(let i of n.boxes)c(i,e,t)&&r++;T(r),s(n.boxes,n.goals)&&x(!0)},[n]);let D=(0,i.useCallback)((e,t)=>{if(b)return;let r=l(n,e,t);r&&(h(e=>[...e,n]),p(r.nextState),_(e=>e+1),r.step.pushedBoxIndex!==-1&&y(e=>e+1))},[n,b]);(0,i.useEffect)(()=>{let e=e=>{e.key===`ArrowUp`||e.key===`w`||e.key===`W`?(e.preventDefault(),D(0,-1)):e.key===`ArrowDown`||e.key===`s`||e.key===`S`?(e.preventDefault(),D(0,1)):e.key===`ArrowLeft`||e.key===`a`||e.key===`A`?(e.preventDefault(),D(-1,0)):e.key===`ArrowRight`||e.key===`d`||e.key===`D`?(e.preventDefault(),D(1,0)):e.key===`z`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),O())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[D]);let O=()=>{if(m.length===0||b)return;let e=m[m.length-1];p(e),h(e=>e.slice(0,e.length-1)),_(e=>Math.max(0,e-1))},k=(e,t)=>{let r=u(n.player,{x:e,y:t},n.walls,n.boxes);if(!r||r.length<=1)return;let i=n,a=[...m];for(let e=1;e<r.length;e++)a.push(i),i={...i,player:r[e]};h(a),p(i),_(e=>e+r.length-1)},A=new Set(n.walls.map(a)),j=new Set(n.goals.map(a)),M=new Set(n.boxes.map(a));return(0,f.jsxs)(`main`,{className:`sokoban-shell`,children:[(0,f.jsxs)(`header`,{className:`sokoban-header`,children:[(0,f.jsx)(`a`,{href:r(`/`),className:`sokoban-home`,children:`← 大廳`}),(0,f.jsxs)(`div`,{className:`sokoban-brand`,children:[(0,f.jsx)(`span`,{className:`seal`,children:`箱`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`small`,{children:`SOKOBAN 3D · 50 LEVELS`}),(0,f.jsx)(`h1`,{children:`推箱子 3D`})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,f.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>C(!0),children:`指南`}),(0,f.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:O,disabled:m.length===0,children:`撤銷`}),(0,f.jsx)(`button`,{type:`button`,className:`sokoban-home`,onClick:()=>E(e),children:`重置`})]})]}),(0,f.jsxs)(`div`,{className:`sokoban-stats-bar`,children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,f.jsx)(`label`,{htmlFor:`level-select`,children:(0,f.jsx)(`strong`,{children:`關卡：`})}),(0,f.jsx)(`select`,{id:`level-select`,value:e,onChange:e=>E(Number(e.target.value)),style:{background:`#1e293b`,color:`#fff`,border:`1px solid #475569`,padding:`0.3rem 0.6rem`,borderRadius:`6px`},children:d.map((e,t)=>(0,f.jsxs)(`option`,{value:t,children:[`第 `,t+1,` 關`]},t))})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`span`,{children:[`步數: `,(0,f.jsx)(`strong`,{children:g})]}),(0,f.jsxs)(`span`,{style:{marginLeft:`1rem`},children:[`推動: `,(0,f.jsx)(`strong`,{children:v})]})]}),w>0&&!b&&(0,f.jsx)(`span`,{style:{color:`#f87171`,fontSize:`0.85rem`,fontWeight:700},children:`⚠️ 偵測到死角箱子！`})]}),(0,f.jsx)(`div`,{className:`sokoban-viewport`,children:(0,f.jsx)(`div`,{className:`sokoban-grid`,style:{gridTemplateColumns:`repeat(${n.width}, 36px)`,gridTemplateRows:`repeat(${n.height}, 36px)`},children:Array.from({length:n.height}).map((e,t)=>Array.from({length:n.width}).map((e,r)=>{let i=`${r},${t}`,a=A.has(i),o=j.has(i),s=M.has(i),c=n.player.x===r&&n.player.y===t,l=`sokoban-cell floor`;return a?l=`sokoban-cell wall`:s?l=`sokoban-cell box ${o?`on-goal`:``}`:c?l=`sokoban-cell player`:o&&(l=`sokoban-cell goal`),(0,f.jsxs)(`div`,{className:l,onClick:()=>!a&&!s&&k(r,t),children:[c&&`🧙‍♂️`,s&&(o?`✨`:`📦`)]},i)}))})}),(0,f.jsxs)(`div`,{className:`sokoban-controls`,children:[(0,f.jsx)(`div`,{className:`dpad-row`,children:(0,f.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>D(0,-1),children:`↑`})}),(0,f.jsxs)(`div`,{className:`dpad-row`,children:[(0,f.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>D(-1,0),children:`←`}),(0,f.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>D(0,1),children:`↓`}),(0,f.jsx)(`button`,{type:`button`,className:`dpad-btn`,onClick:()=>D(1,0),children:`→`})]})]}),b&&(0,f.jsx)(`div`,{className:`reversi-overlay`,children:(0,f.jsxs)(`div`,{className:`reversi-dialog`,children:[(0,f.jsx)(`h2`,{style:{color:`#34d399`},children:`🎉 關卡完成！`}),(0,f.jsxs)(`p`,{children:[`恭喜突破第 `,(0,f.jsx)(`strong`,{children:e+1}),` 關！`,(0,f.jsx)(`br`,{}),`總步數：`,g,` 步 ｜ 推動次數：`,v,` 次。`]}),(0,f.jsxs)(`div`,{className:`dialog-actions`,children:[(0,f.jsx)(`a`,{href:r(`/`),className:`reversi-home`,style:{display:`inline-block`},children:`返回大廳`}),e<d.length-1&&(0,f.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>E(e+1),children:`進入下一關 →`})]})]})}),S&&(0,f.jsx)(`div`,{className:`reversi-overlay`,children:(0,f.jsxs)(`div`,{className:`reversi-dialog`,children:[(0,f.jsx)(`h2`,{children:`推箱子規則與操作`}),(0,f.jsxs)(`p`,{children:[`1. `,(0,f.jsx)(`strong`,{children:`目標`}),`：將所有木箱 📦 推到目標點 🎯 上。`,(0,f.jsx)(`br`,{}),`2. `,(0,f.jsx)(`strong`,{children:`推動規則`}),`：箱子只能推不能拉，一次只能推動一個箱子，不可推入死角。`,(0,f.jsx)(`br`,{}),`3. `,(0,f.jsx)(`strong`,{children:`操作方式`}),`：方向鍵／WASD 或點擊畫面虛擬按鍵；點擊地面空位可自動尋路走位。`,(0,f.jsx)(`br`,{}),`4. `,(0,f.jsx)(`strong`,{children:`死角警示`}),`：當箱子被推入兩側為牆的非目標邊角時，系統將即時發出警示。`]}),(0,f.jsx)(`div`,{className:`dialog-actions`,children:(0,f.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>C(!1),children:`明白`})})]})})]})}export{p as default};