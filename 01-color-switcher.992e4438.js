!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=null;t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){t.stopBtn.disabled=!1,t.startBtn.disabled=!0,n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.992e4438.js.map