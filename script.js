
const popupWrapper = document.querySelector("#popup-wrapper");

const effectsButtons = document.querySelectorAll("#effects a");

const cpitem = document.querySelector("#cpitem");

effectsButtons.forEach((button =>{
    button.addEventListener("click", (e) =>{
        e.preventDefault();
        if(e.target.className === "hvr-grow"){
              if(popupWrapper.classList.contains("popup-wrapper")){
            popupWrapper.classList.add("popup-wrapper-open");
            document.body.style.overflow = "hidden";
        }
            cpitem.innerHTML = 
                `
        <code class=" language-css"><span class="token selector">.hvr-grow</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
            <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
            <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
            <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
            <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
            <span class="token selector">.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span></code>
            `   
        }
    });
}));

const popupClose = document.querySelector(".popup-close");

popupClose.addEventListener("click", () =>{
    if(popupWrapper.classList.contains("popup-wrapper-open")){
        popupWrapper.classList.remove("popup-wrapper-open");
        document.body.style.overflow = "scroll";
    }
});

popupWrapper.addEventListener("click", e =>{
    const patharray = e.path;
    if(patharray.length<=5){
        if(popupWrapper.classList.contains("popup-wrapper-open")){
            popupWrapper.classList.remove("popup-wrapper-open");
            document.body.style.overflow = "scroll";
    }
}});


// Clipboard feature

const clipboard = document.querySelector('.clipboard');
const tooltip = document.querySelector('.tooltip');


clipboard.addEventListener('click', () =>{
 
    const elm = document.getElementById("cpitem");
  // for Internet Explorer

  if(document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    tooltip.style.display = "block"
  }
  else if(window.getSelection) {
    // other browsers

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    tooltip.classList.add("tooltip-display");
    setTimeout(() =>{
    tooltip.classList.remove("tooltip-display");
    },1000);
  }
});

// dynamically display year on footer
const date = new Date();
const year = date.getFullYear();
const cyear = document.querySelector('.year');
cyear.innerHTML = year;
