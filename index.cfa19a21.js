const debounce=e=>{let t;return(...o)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame((()=>{e(...o)}))}},storeScroll=()=>{let e=window.scrollY/(document.body.clientHeight-window.innerHeight)*100;document.documentElement.setAttribute("style",`--scrollpos: ${e}`)};document.addEventListener("scroll",debounce(storeScroll),{passive:!0}),storeScroll();
//# sourceMappingURL=index.cfa19a21.js.map
