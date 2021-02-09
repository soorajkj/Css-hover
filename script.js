
const popupWrapper = document.querySelector("#popup-wrapper");

const effectsButtons = document.querySelectorAll("#effects a");

const cpitem = document.querySelector("#cpitem");
const styletitle = document.querySelector(".popup-head h2");

const repeatCode = () =>{
	cpitem.innerHTML=
`<span class="token selector">
*:focus</span><span class="token punctuation">{</span>
	<span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">[class^="hvr-"]</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
	<span class="token comment">/* Prevent highlight colour when element is tapped */</span>
	<span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/* Smooth fonts */</span>
	<span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
	<span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
`


}



const repeatFun = () =>{
      if(popupWrapper.classList.contains("popup-wrapper")){
            popupWrapper.classList.add("popup-wrapper-open");
            document.body.style.overflow = "hidden";
        }
}

const popupClose = document.querySelector(".popup-close");

popupClose.addEventListener("click", () =>{
    if(popupWrapper.classList.contains("popup-wrapper-open")){
        popupWrapper.classList.remove("popup-wrapper-open");
        document.body.style.overflow = "scroll";
        cpitem.innerHTML = '';
    }
});


effectsButtons.forEach((button =>{
    button.addEventListener("click", (e) =>{
        e.preventDefault();
        if(e.target.className === "hvr-grow"){
            repeatFun();
            styletitle.innerHTML = "Grow";
			      repeatCode();
            cpitem.innerHTML+=
`<span class="token selector">.hvr-grow</span> <span class="token punctuation">{</span>
	  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
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
<span class="token punctuation">}</span></code>`   
        }
        // 2
        if(e.target.className === "hvr-shrink"){
            repeatFun();
            styletitle.innerHTML = "Shrink";
			      repeatCode();
            cpitem.innerHTML +=
`<span class="token selector">.hvr-shrink</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
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
<span class="token selector">.hvr-shrink:hover, .hvr-shrink:focus, .hvr-shrink:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

        }
        // 3
        if(e.target.className === "hvr-pulse"){
            repeatFun();
            styletitle.innerHTML = "Pulse";
            repeatCode();
            cpitem.innerHTML +=
            `<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-pulse</span> <span class="token punctuation">{</span>
	<span class="token selector">25%</span> <span class="token punctuation">{</span>
		<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token selector">75%</span> <span class="token punctuation">{</span>
		<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token atrule"><span class="token rule">@keyframes</span> hvr-pulse</span> <span class="token punctuation">{</span>
	<span class="token selector">25%</span> <span class="token punctuation">{</span>
		<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">75%</span> <span class="token punctuation">{</span>
		<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-pulse</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-pulse<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-pulse<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

        }
        // 4
        if(e.target.className === "hvr-pulse-grow"){
            repeatFun();
            styletitle.innerHTML = "Pulse Grow";
			repeatCode();
            cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-pulse-grow</span> <span class="token punctuation">{</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token atrule"><span class="token rule">@keyframes</span> hvr-pulse-grow</span> <span class="token punctuation">{</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token selector">.hvr-pulse-grow</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-pulse-grow<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-pulse-grow<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

        }
        // 5
        if(e.target.className === "hvr-pulse-shrink"){
            repeatFun();
            styletitle.innerHTML = "Pulse Shrink"; 
			repeatCode();
            cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-pulse-shrink</span> <span class="token punctuation">{</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token atrule"><span class="token rule">@keyframes</span> hvr-pulse-shrink</span> <span class="token punctuation">{</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token selector">.hvr-pulse-shrink</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-pulse-shrink:hover, .hvr-pulse-shrink:focus, .hvr-pulse-shrink:active</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-pulse-shrink<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-pulse-shrink<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

    }
    //6
    if(e.target.className === "hvr-push"){
        repeatFun();
        styletitle.innerHTML = "Push";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-push</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token atrule"><span class="token rule">@keyframes</span> hvr-push</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token selector">.hvr-push</span> <span class="token punctuation">{</span>
		<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-push:hover, .hvr-push:focus, .hvr-push:active</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-push<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-push<span class="token punctuation">;</span>
        <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
        <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
        <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
        <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

    }
    //7
    if(e.target.className === "hvr-pop"){
        repeatFun();
        styletitle.innerHTML = "Pop";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-pop</span> <span class="token punctuation">{</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> hvr-pop</span> <span class="token punctuation">{</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token selector">.hvr-pop</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-pop:hover, .hvr-pop:focus, .hvr-pop:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-pop<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-pop<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

    
    }
    //8
    if(e.target.className === "hvr-bounce-in"){
        repeatFun();
        styletitle.innerHTML = ("Bounce In");
		repeatCode();
        cpitem.innerHTML +=
`<span class="token selector">.hvr-bounce-in</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.47<span class="token punctuation">,</span> 2.02<span class="token punctuation">,</span> 0.31<span class="token punctuation">,</span> -0.36<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.47<span class="token punctuation">,</span> 2.02<span class="token punctuation">,</span> 0.31<span class="token punctuation">,</span> -0.36<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

    }
    //9
    if(e.target.className ==="hvr-bounce-out"){
        repeatFun();
        styletitle.innerHTML = "Bounce Out";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token selector">.hvr-bounce-out</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-out:hover, .hvr-bounce-out:focus, .hvr-bounce-out:active</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.47<span class="token punctuation">,</span> 2.02<span class="token punctuation">,</span> 0.31<span class="token punctuation">,</span> -0.36<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.47<span class="token punctuation">,</span> 2.02<span class="token punctuation">,</span> 0.31<span class="token punctuation">,</span> -0.36<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    // 10
    if(e.target.className === "hvr-rotate"){
        repeatFun();
        styletitle.innerHTML = "Rotate";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token selector">.hvr-rotate</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
	<span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-rotate:hover, .hvr-rotate:focus, .hvr-rotate:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

    }
    // 11
    if(e.target.className === "hvr-grow-rotate"){
        repeatFun();
        styletitle.innerHTML = "Grow Rotate";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token selector">.hvr-grow-rotate</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
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
<span class="token selector">.hvr-grow-rotate:hover, .hvr-grow-rotate:focus, .hvr-grow-rotate:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

    }
    // 12
    if(e.target.className === "hvr-float"){
        repeatFun();
        styletitle.innerHTML = "Float";
		repeatCode();
        cpitem.innerHTML += 
`<span class="token selector">.hvr-float</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-float:hover, .hvr-float:focus, .hvr-float:active</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    
    }
    //13
    if(e.target.className === "hvr-sink"){
        repeatFun();
        styletitle.innerHTML = "Sink";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token selector">.hvr-sink</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
	<span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
	<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sink:hover, .hvr-sink:focus, .hvr-sink:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`



    } 
    // 14
    if(e.target.className === "hvr-bob"){
        repeatFun();
        styletitle.innerHTML = "Bob";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-bob</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> hvr-bob</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-bob-float</span> <span class="token punctuation">{</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> hvr-bob-float</span> <span class="token punctuation">{</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bob</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-bob-float<span class="token punctuation">,</span> hvr-bob<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-bob-float<span class="token punctuation">,</span> hvr-bob<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
	<span class="token property">animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
	<span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
	<span class="token property">animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    // 15
    if(e.target.className === "hvr-hang"){
        repeatFun();
        styletitle.innerHTML = "Hang";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-hang</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> hvr-hang</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-hang-sink</span> <span class="token punctuation">{</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>   
    <span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> hvr-hang-sink</span> <span class="token punctuation">{</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-hang</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-hang:hover, .hvr-hang:focus, .hvr-hang:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-hang-sink<span class="token punctuation">,</span> hvr-hang<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-hang-sink<span class="token punctuation">,</span> hvr-hang<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
	<span class="token property">animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
	<span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
	<span class="token property">animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }// 16
    if(e.target.className === "hvr-skew"){
        repeatFun();
        styletitle.innerHTML = "Skew";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token selector">.hvr-skew</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
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
<span class="token selector">.hvr-skew:hover, .hvr-skew:focus, .hvr-skew:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    // 17
    if(e.target.className === "hvr-skew-forward"){
        repeatFun();
        styletitle.innerHTML = "Skew Forward";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token selector">.hvr-skew-forward</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
	<span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
	<span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 <span class="token selector">.hvr-skew-forward:hover, .hvr-skew-forward:focus, .hvr-skew-forward:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    // 18
    if(e.target.className === "hvr-skew-backward"){
        repeatFun();
        styletitle.innerHTML = "Skew Backward";
		repeatCode();
        cpitem.innerHTML +=
`<span class="token selector">.hvr-skew-backward</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
	<span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
	<span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-skew-backward:hover, .hvr-skew-backward:focus, .hvr-skew-backward:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    // 19
    if(e.target.className === "hvr-wobble-horizontal"){
        repeatFun();
        styletitle.innerHTML = "Wobble Horizontal";
		repeatCode();
        cpitem.innerHTML += 
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-wobble-horizontal</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> hvr-wobble-horizontal</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-horizontal</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-wobble-horizontal<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-wobble-horizontal<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    // 20
    if(e.target.className === "hvr-wobble-vertical"){
      	repeatFun();
      	styletitle.innerHTML = "Wobble Vertical";
		repeatCode();
      	cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-wobble-vertical</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-wobble-vertical</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-vertical</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-wobble-vertical<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-wobble-vertical<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    // 21
    if(e.target.className === "hvr-wobble-to-bottom-right"){
      repeatFun();
      styletitle.innerHTML = "Wobble To Bottom Right";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-wobble-to-bottom-right</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> 8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> 8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-6px<span class="token punctuation">,</span> -6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-6px<span class="token punctuation">,</span> -6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>4px<span class="token punctuation">,</span> 4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>4px<span class="token punctuation">,</span> 4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-2px<span class="token punctuation">,</span> -2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-2px<span class="token punctuation">,</span> -2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> 1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> 1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-wobble-to-bottom-right</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> 8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> 8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-6px<span class="token punctuation">,</span> -6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-6px<span class="token punctuation">,</span> -6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>4px<span class="token punctuation">,</span> 4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>4px<span class="token punctuation">,</span> 4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-2px<span class="token punctuation">,</span> -2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-2px<span class="token punctuation">,</span> -2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> 1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> 1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-to-bottom-right</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-to-bottom-right:hover, .hvr-wobble-to-bottom-right:focus, .hvr-wobble-to-bottom-right:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-wobble-to-bottom-right<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-wobble-to-bottom-right<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    // 22
    if(e.target.className === "hvr-wobble-to-top-right"){
      repeatFun();
      styletitle.innerHTML = "Wobble To Top Right";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-wobble-to-top-right</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> -8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> -8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-6px<span class="token punctuation">,</span> 6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-6px<span class="token punctuation">,</span> 6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>4px<span class="token punctuation">,</span> -4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>4px<span class="token punctuation">,</span> -4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-2px<span class="token punctuation">,</span> 2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-2px<span class="token punctuation">,</span> 2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> -1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> -1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-wobble-to-top-right</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> -8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> -8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-6px<span class="token punctuation">,</span> 6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-6px<span class="token punctuation">,</span> 6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>4px<span class="token punctuation">,</span> -4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>4px<span class="token punctuation">,</span> -4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-2px<span class="token punctuation">,</span> 2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-2px<span class="token punctuation">,</span> 2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> -1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> -1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-to-top-right</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-to-top-right:hover, .hvr-wobble-to-top-right:focus, .hvr-wobble-to-top-right:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-wobble-to-top-right<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-wobble-to-top-right<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
    }
    //23
    if(e.target.className === "hvr-wobble-top"){
      repeatFun();
      styletitle.innerHTML = "Wobble Top";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-wobble-top</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-wobble-top</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-top</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
	<span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-top:hover, .hvr-wobble-top:focus, .hvr-wobble-top:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-wobble-top<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-wobble-top<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
    }

    //24
    if(e.target.className === "hvr-wobble-bottom"){
      repeatFun();
      styletitle.innerHTML = "Wobble Bottom";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-wobble-bottom</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-wobble-bottom</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-bottom</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 100% 0<span class="token punctuation">;</span>
	<span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-bottom:hover, .hvr-wobble-bottom:focus, .hvr-wobble-bottom:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-wobble-bottom<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-wobble-bottom<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
    }

    //25
    if(e.target.className === "hvr-wobble-skew"){
      repeatFun();
      styletitle.innerHTML = "Wobble Skew";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-wobble-skew</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-wobble-skew</span> <span class="token punctuation">{</span>
	<span class="token selector">16.65%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">33.3%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">49.95%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-6deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">66.6%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">83.25%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-skew</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-wobble-skew:hover, .hvr-wobble-skew:focus, .hvr-wobble-skew:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-wobble-skew<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-wobble-skew<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
    }

    //25
    if(e.target.className === "hvr-buzz"){
      repeatFun();
      styletitle.innerHTML = "Buzz";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-buzz</span> <span class="token punctuation">{</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-buzz</span> <span class="token punctuation">{</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-buzz</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-buzz:hover, .hvr-buzz:focus, .hvr-buzz:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-buzz<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-buzz<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.15s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.15s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
    }

    //26
    if(e.target.className === "hvr-buzz-out"){
      repeatFun();
      styletitle.innerHTML = "Buzz Out";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-buzz-out</span> <span class="token punctuation">{</span>
	<span class="token selector">10%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">20%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">30%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">40%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">60%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">70%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">80%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">90%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-buzz-out</span> <span class="token punctuation">{</span>
	<span class="token selector">10%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">20%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">30%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">40%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">50%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">60%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">70%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">80%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">90%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
	  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-buzz-out</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-buzz-out<span class="token punctuation">;</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-buzz-out<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
	<span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
    }

    //27
    if(e.target.className === "hvr-forward"){
      repeatFun();
      styletitle.innerHTML = "Forward";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token selector">.hvr-forward</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
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
<span class="token selector">.hvr-forward:hover, .hvr-forward:focus, .hvr-forward:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
    }

    //28
    if(e.target.className === "hvr-backward"){
      repeatFun();
      styletitle.innerHTML = "Backward";
	  repeatCode();
      cpitem.innerHTML +=
`<span class="token selector">.hvr-backward</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
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
<span class="token selector">.hvr-backward:hover, .hvr-backward:focus, .hvr-backward:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`

    }

	//BACKGROUND //29
    if(e.target.className === "hvr-fade"){
		repeatFun();
		styletitle.innerHTML = "Fade";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-fade</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">,</span> background-color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">,</span> background-color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`


    }
    //30
	if(e.target.className === "hvr-back-pulse"){
		repeatFun();
		styletitle.innerHTML = "Back Pulse";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-back-pulse</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 166<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-back-pulse</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 166<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-back-pulse</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">,</span> background-color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">,</span> background-color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-back-pulse<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-back-pulse<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-delay</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//31
	if(e.target.className === "hvr-sweep-to-right"){
		repeatFun();
		styletitle.innerHTML = "Sweep To Right";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-sweep-to-right</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-right:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 50%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 50%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//32
	if(e.target.className === "hvr-sweep-to-left"){
		repeatFun();
		styletitle.innerHTML = "Sweep To Left";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-sweep-to-left</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-left:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 100% 50%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 50%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-left:hover, .hvr-sweep-to-left:focus, .hvr-sweep-to-left:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-left:hover:before, .hvr-sweep-to-left:focus:before, .hvr-sweep-to-left:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//33
	if(e.target.className === "hvr-sweep-to-bottom"){
		repeatFun();
		styletitle.innerHTML = "Sweep To Bottom";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-sweep-to-bottom</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-bottom:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50% 0<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-bottom:hover, .hvr-sweep-to-bottom:focus, .hvr-sweep-to-bottom:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-bottom:hover:before, .hvr-sweep-to-bottom:focus:before, .hvr-sweep-to-bottom:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//34
	if(e.target.className === "hvr-sweep-to-top"){
		repeatFun();
		styletitle.innerHTML = "Sweep To Top";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-sweep-to-top</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-top:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50% 100%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 100%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-top:hover, .hvr-sweep-to-top:focus, .hvr-sweep-to-top:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-sweep-to-top:hover:before, .hvr-sweep-to-top:focus:before, .hvr-sweep-to-top:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//35
	if(e.target.className === "hvr-bounce-to-right"){
		repeatFun();
		styletitle.innerHTML = "Bounce To Right";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-bounce-to-right</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-right:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 50%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 50%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//36
	if(e.target.className === "hvr-bounce-to-left"){
		repeatFun();
		styletitle.innerHTML = "Bounce To Left";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-bounce-to-left</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token selector">.hvr-bounce-to-left:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 100% 50%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 50%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token selector">.hvr-bounce-to-left:hover, .hvr-bounce-to-left:focus, .hvr-bounce-to-left:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token selector">.hvr-bounce-to-left:hover:before, .hvr-bounce-to-left:focus:before, .hvr-bounce-to-left:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//37
	if(e.target.className === "hvr-bounce-to-bottom"){
		repeatFun();
		styletitle.innerHTML = "Bounce To Bottom";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-bounce-to-bottom</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-bottom:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50% 0<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-bottom:hover, .hvr-bounce-to-bottom:focus, .hvr-bounce-to-bottom:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-bottom:hover:before, .hvr-bounce-to-bottom:focus:before, .hvr-bounce-to-bottom:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//38
	if(e.target.className === "hvr-bounce-to-top"){
		repeatFun();
		styletitle.innerHTML = "Bounce To Top";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-bounce-to-top</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-top:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50% 100%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 100%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-bounce-to-top:hover:before, .hvr-bounce-to-top:focus:before, .hvr-bounce-to-top:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//39
	if(e.target.className === "hvr-radial-out"){
		repeatFun();
		styletitle.innerHTML = "Radial Out";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-radial-out</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-radial-out:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`


	}
	//40
	if(e.target.className === "hvr-radial-in"){
		repeatFun();
		styletitle.innerHTML = "Radial In";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-radial-in</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-radial-in:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-radial-in:hover, .hvr-radial-in:focus, .hvr-radial-in:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-radial-in:hover:before, .hvr-radial-in:focus:before, .hvr-radial-in:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`
	}
	//41
	if(e.target.className === "hvr-rectangle-in"){
		repeatFun();
		styletitle.innerHTML = "Rectangle In";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-rectangle-in</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-rectangle-in:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//42
	if(e.target.className === "hvr-rectangle-out"){
		repeatFun();
		styletitle.innerHTML = "Rectangle Out";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-rectangle-out</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-rectangle-out:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-rectangle-out:hover, .hvr-rectangle-out:focus, .hvr-rectangle-out:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-rectangle-out:hover:before, .hvr-rectangle-out:focus:before, .hvr-rectangle-out:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//43
	if(e.target.className === "hvr-shutter-in-horizontal"){
		repeatFun();
		styletitle.innerHTML = "Shutter In Horizontal";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-shutter-in-horizontal</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-in-horizontal:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-in-horizontal:hover, .hvr-shutter-in-horizontal:focus, .hvr-shutter-in-horizontal:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-in-horizontal:hover:before, .hvr-shutter-in-horizontal:focus:before, .hvr-shutter-in-horizontal:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//44
	if(e.target.className === "hvr-shutter-out-horizontal"){
		repeatFun();
		styletitle.innerHTML = "Shutter Out Horizontal";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-shutter-out-horizontal</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-out-horizontal:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 45
	if(e.target.className === "hvr-shutter-in-vertical"){
		repeatFun();
		styletitle.innerHTML = "Shutter In Vertical";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-shutter-in-vertical</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-in-vertical:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-in-vertical:hover, .hvr-shutter-in-vertical:focus, .hvr-shutter-in-vertical:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-in-vertical:hover:before, .hvr-shutter-in-vertical:focus:before, .hvr-shutter-in-vertical:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//46
	if(e.target.className === "hvr-shutter-out-vertical"){
		repeatFun();
		styletitle.innerHTML = "Shutter Out Vertical";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-shutter-out-vertical</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-out-vertical:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-out-vertical:hover, .hvr-shutter-out-vertical:focus, .hvr-shutter-out-vertical:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-shutter-out-vertical:hover:before, .hvr-shutter-out-vertical:focus:before, .hvr-shutter-out-vertical:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`
	}
	// ICON
	//47
	if(e.target.className === "hvr-icon-back"){
		repeatFun();
		styletitle.innerHTML = "Icon Back";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-back</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-back .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-back:hover .hvr-icon, .hvr-icon-back:focus .hvr-icon, .hvr-icon-back:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 48
	if(e.target.className === "hvr-icon-forward"){
		repeatFun();
		styletitle.innerHTML = "Icon Forward";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-forward</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-forward .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-forward:hover .hvr-icon, .hvr-icon-forward:focus .hvr-icon, .hvr-icon-forward:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//49
	if(e.target.className === "hvr-icon-down"){
		repeatFun();
		styletitle.innerHTML = "Icon Down";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-down</span> <span class="token punctuation">{</span>
    <span class="token selector">0%,
      50%,
      100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">25%,
      75%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-down</span> <span class="token punctuation">{</span>
    <span class="token selector">0%,
      50%,
      100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">25%,
      75%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-down</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-down .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-down:hover .hvr-icon, .hvr-icon-down:focus .hvr-icon, .hvr-icon-down:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-down<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-down<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 50
	if(e.target.className === "hvr-icon-up"){
		repeatFun();
		styletitle.innerHTML = "Icon Up";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-up</span> <span class="token punctuation">{</span>
    <span class="token selector">0%,
      50%,
      100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">25%,
      75%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-up</span> <span class="token punctuation">{</span>
    <span class="token selector">0%,
      50%,
      100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">25%,
      75%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-up</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-up .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-up:hover .hvr-icon, .hvr-icon-up:focus .hvr-icon, .hvr-icon-up:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-up<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-up<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 51
	if(e.target.className === "hvr-icon-spin"){
		repeatFun();
		styletitle.innerHTML = "Icon Spin";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-spin</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-spin .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-spin:hover .hvr-icon, .hvr-icon-spin:focus .hvr-icon, .hvr-icon-spin:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//52
	if(e.target.className === "hvr-icon-drop"){
		repeatFun();
		styletitle.innerHTML = "Icon Drop";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-drop</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">51%,
      100%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-drop</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">51%,
      100%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-drop</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-drop .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-drop:hover .hvr-icon, .hvr-icon-drop:focus .hvr-icon, .hvr-icon-drop:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-drop<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-drop<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-delay</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> 1.64<span class="token punctuation">,</span> 0.37<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//53
	if(e.target.className === "hvr-icon-fade"){
		repeatFun();
		styletitle.innerHTML = "Icon Fade";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-fade</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-fade .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-fade:hover .hvr-icon, .hvr-icon-fade:focus .hvr-icon, .hvr-icon-fade:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 54
	if(e.target.className === "hvr-icon-float-away"){
		repeatFun();
		styletitle.innerHTML = "Icon Float Away";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-float-away</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-float-away</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-float-away</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-float-away .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-float-away:hover .hvr-icon, .hvr-icon-float-away:focus .hvr-icon, .hvr-icon-float-away:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-float-away<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-float-away<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 55
	if(e.target.className === "hvr-icon-sink-away"){
		repeatFun();
		styletitle.innerHTML = "Icon Sink Away";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-sink-away</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-sink-away</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-sink-away</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-sink-away .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-sink-away:hover .hvr-icon, .hvr-icon-sink-away:focus .hvr-icon, .hvr-icon-sink-away:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-sink-away<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-sink-away<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 56
	if(e.target.className === "hvr-icon-grow"){
		repeatFun();
		styletitle.innerHTML = "Icon Grow";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-grow</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-grow .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-grow:hover .hvr-icon, .hvr-icon-grow:focus .hvr-icon, .hvr-icon-grow:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 57
	if(e.target.className === "hvr-icon-shrink"){
		repeatFun();
		styletitle.innerHTML = "Icon Shrink";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-shrink</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-shrink .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-shrink:hover .hvr-icon, .hvr-icon-shrink:focus .hvr-icon, .hvr-icon-shrink:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//58
	if(e.target.className === "hvr-icon-pulse"){
		repeatFun();
		styletitle.innerHTML = "Icon Pulse";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-pulse</span> <span class="token punctuation">{</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">75%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-pulse</span> <span class="token punctuation">{</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">75%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse:hover .hvr-icon, .hvr-icon-pulse:focus .hvr-icon, .hvr-icon-pulse:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-pulse<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-pulse<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 59
	if(e.target.className === "hvr-icon-pulse-grow"){
		repeatFun();
		styletitle.innerHTML = "Icon Pulse Grow";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-pulse-grow</span> <span class="token punctuation">{</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-pulse-grow</span> <span class="token punctuation">{</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse-grow</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse-grow .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse-grow:hover .hvr-icon, .hvr-icon-pulse-grow:focus .hvr-icon, .hvr-icon-pulse-grow:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-pulse-grow<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-pulse-grow<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//60
	if(e.target.className === "hvr-icon-pulse-shrink"){
		repeatFun();
		styletitle.innerHTML = "Icon Pulse Shrink";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-pulse-shrink</span> <span class="token punctuation">{</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-pulse-shrink</span> <span class="token punctuation">{</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse-shrink</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse-shrink .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pulse-shrink:hover .hvr-icon, .hvr-icon-pulse-shrink:focus .hvr-icon, .hvr-icon-pulse-shrink:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-pulse-shrink<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-pulse-shrink<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//61
	if(e.target.className === "hvr-icon-push"){
		repeatFun();
		styletitle.innerHTML = "Icon Push";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-push</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-push</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-push</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-push .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-push:hover .hvr-icon, .hvr-icon-push:focus .hvr-icon, .hvr-icon-push:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-push<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-push<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`
	}
	// 62
	if(e.target.className === "hvr-icon-pop"){
		repeatFun();
		styletitle.innerHTML = "Icon Pop";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-pop</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-pop</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pop</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pop .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-pop:hover .hvr-icon, .hvr-icon-pop:focus .hvr-icon, .hvr-icon-pop:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-pop<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-pop<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//63
	if(e.target.className === "hvr-icon-bounce"){
		repeatFun();
		styletitle.innerHTML = "Icon Bounce";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-bounce</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-bounce .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-bounce:hover .hvr-icon, .hvr-icon-bounce:focus .hvr-icon, .hvr-icon-bounce:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.47<span class="token punctuation">,</span> 2.02<span class="token punctuation">,</span> 0.31<span class="token punctuation">,</span> -0.36<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.47<span class="token punctuation">,</span> 2.02<span class="token punctuation">,</span> 0.31<span class="token punctuation">,</span> -0.36<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 64
	if(e.target.className === "hvr-icon-rotate"){
		repeatFun();
		styletitle.innerHTML = "Icon Rotate";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-rotate</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-rotate .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-rotate:hover .hvr-icon, .hvr-icon-rotate:focus .hvr-icon, .hvr-icon-rotate:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 65
	if(e.target.className === "hvr-icon-grow-rotate"){
		repeatFun();
		styletitle.innerHTML = "Icon Grow Rotate";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-grow-rotate</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-grow-rotate .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">hvr-icon-grow-rotate:hover .hvr-icon, .hvr-icon-grow-rotate:focus .hvr-icon, .hvr-icon-grow-rotate:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>12deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 66
	if(e.target.className === "hvr-icon-float"){
		repeatFun();
		styletitle.innerHTML = "Icon Float";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-float</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-float .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-float:hover .hvr-icon, .hvr-icon-float:focus .hvr-icon, .hvr-icon-float:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 67
	if(e.target.className === "hvr-icon-sink"){
		repeatFun();
		styletitle.innerHTML = "Icon sink";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-icon-sink</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-sink .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-sink:hover .hvr-icon, .hvr-icon-sink:focus .hvr-icon, .hvr-icon-sink:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 68
	if(e.target.className === "hvr-icon-bob"){
		repeatFun();
		styletitle.innerHTML = "Icon Bob";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-bob</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-bob</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-bob-float</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-bob-float</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-bob</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-bob .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-bob:hover .hvr-icon, .hvr-icon-bob:focus .hvr-icon, .hvr-icon-bob:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-bob-float<span class="token punctuation">,</span> hvr-icon-bob<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-bob-float<span class="token punctuation">,</span> hvr-icon-bob<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
    <span class="token property">animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 69
	if(e.target.className === "hvr-icon-hang"){
		repeatFun();
		styletitle.innerHTML = "Icon Hang";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-hang</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-hang</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-hang-sink</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-hang-sink</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-hang</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-hang .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-hang:hover .hvr-icon, .hvr-icon-hang:focus .hvr-icon, .hvr-icon-hang:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-hang-sink<span class="token punctuation">,</span> hvr-icon-hang<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-hang-sink<span class="token punctuation">,</span> hvr-icon-hang<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
    <span class="token property">animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-bob</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-bob .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-bob:hover .hvr-icon, .hvr-icon-bob:focus .hvr-icon, .hvr-icon-bob:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-bob-float<span class="token punctuation">,</span> hvr-icon-bob<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-bob-float<span class="token punctuation">,</span> hvr-icon-bob<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> .3s<span class="token punctuation">,</span> 1.5s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">,</span> .3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">,</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> infinite<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
    <span class="token property">animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">,</span> alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	//70
	if(e.target.className === "hvr-icon-wobble-horizontal"){
		repeatFun();
		styletitle.innerHTML = "Icon Wobble Horizontal";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-wobble-horizontal</span> <span class="token punctuation">{</span>
    <span class="token selector">16.65%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">33.3%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">49.95%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">66.6%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">83.25%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-wobble-horizontal</span> <span class="token punctuation">{</span>
    <span class="token selector">16.65%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">33.3%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">49.95%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">66.6%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">83.25%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-wobble-horizontal</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-wobble-horizontal .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-wobble-horizontal:hover .hvr-icon, .hvr-icon-wobble-horizontal:focus .hvr-icon, .hvr-icon-wobble-horizontal:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-wobble-horizontal<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-wobble-horizontal<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 71
	if(e.target.className === "hvr-icon-wobble-vertical"){
		repeatFun();
		styletitle.innerHTML = "Icon Wobble Vertical";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-wobble-vertical</span> <span class="token punctuation">{</span>
    <span class="token selector">16.65%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">33.3%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">49.95%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">66.6%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">83.25%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-wobble-vertical</span> <span class="token punctuation">{</span>
    <span class="token selector">16.65%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">33.3%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">49.95%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">66.6%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">83.25%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-wobble-vertical</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-wobble-vertical .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-wobble-vertical:hover .hvr-icon, .hvr-icon-wobble-vertical:focus .hvr-icon, .hvr-icon-wobble-vertical:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-wobble-vertical<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-wobble-vertical<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 72
	if(e.target.className === "hvr-icon-buzz"){
		repeatFun();
		styletitle.innerHTML = "Icon Buzz";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-buzz</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-buzz</span> <span class="token punctuation">{</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-buzz</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-buzz .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-buzz:hover .hvr-icon, .hvr-icon-buzz:focus .hvr-icon, .hvr-icon-buzz:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-buzz<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-buzz<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.15s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.15s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`

	}
	// 73
	if(e.target.className === "hvr-icon-buzz-out"){
		repeatFun();
		styletitle.innerHTML = "Icon Buzz Out";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-icon-buzz-out</span> <span class="token punctuation">{</span>
    <span class="token selector">10%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">20%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">30%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">40%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">60%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">70%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">80%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">90%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-icon-buzz-out</span> <span class="token punctuation">{</span>
    <span class="token selector">10%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">20%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">30%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">40%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">60%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">70%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">80%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-1deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">90%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-1px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-buzz-out</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-buzz-out .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-icon-buzz-out:hover .hvr-icon, .hvr-icon-buzz-out:focus .hvr-icon, .hvr-icon-buzz-out:active .hvr-icon</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-icon-buzz-out<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-icon-buzz-out<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`
	}
	// BORDER TRANSITIONS
	// 74
	if(e.target.className === "hvr-border-fade"){
		repeatFun();
		styletitle.innerHTML = "Border Fade";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-border-fade</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> box-shadow<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> box-shadow<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 0 4px #e1e1e1<span class="token punctuation">,</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* Hack to improve aliasing on mobile/tablet devices */</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-border-fade:hover, .hvr-border-fade:focus, .hvr-border-fade:active</span> <span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 0 4px  #009945<span class="token punctuation">,</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* Hack to improve aliasing on mobile/tablet devices */</span>
<span class="token punctuation">}</span></code>
`
	}
	// 75
	if(e.target.className === "hvr-hollow"){
		repeatFun();
		styletitle.innerHTML = "Hollow";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-hollow</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> background<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> background<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 0 4px #e1e1e1<span class="token punctuation">,</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* Hack to improve aliasing on mobile/tablet devices */</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-hollow:hover, .hvr-hollow:focus, .hvr-hollow:active</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 76
	if(e.target.className === "hvr-trim"){
		repeatFun();
		styletitle.innerHTML = "Trim";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-trim</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-trim:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> white solid 4px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> opacity<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> opacity<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-trim:hover:before, .hvr-trim:focus:before, .hvr-trim:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 77
	if(e.target.className === "hvr-ripple-out"){
		repeatFun();
		styletitle.innerHTML = "Ripple Out";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-ripple-out</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">top</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-ripple-out</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">top</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-ripple-out</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-ripple-out:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> #e1e1e1 solid 6px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-ripple-out:hover:before, .hvr-ripple-out:focus:before, .hvr-ripple-out:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-ripple-out<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-ripple-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 78
	if(e.target.className === "hvr-ripple-in"){
		repeatFun();
		styletitle.innerHTML = "Ripple In";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-ripple-in</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> hvr-ripple-in</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-ripple-in</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-ripple-in:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> #e1e1e1 solid 4px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -12px<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-ripple-in:hover:before, .hvr-ripple-in:focus:before, .hvr-ripple-in:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> hvr-ripple-in<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> hvr-ripple-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	//79
	if(e.target.className === "hvr-outline-out"){
		repeatFun();
		styletitle.innerHTML = "Outline Out";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-outline-out</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-outline-out:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> #e1e1e1 solid 4px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> left<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-outline-out:hover:before, .hvr-outline-out:focus:before, .hvr-outline-out:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	//80
	if(e.target.className === "hvr-outline-in"){
		repeatFun();
		styletitle.innerHTML = "Outline In";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-outline-in</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-outline-in:before</span> <span class="token punctuation">{</span>
    <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> #e1e1e1 solid 4px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -16px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -16px<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> -16px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -16px<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> left<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-outline-in:hover:before, .hvr-outline-in:focus:before, .hvr-outline-in:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -8px<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	//81
	if(e.target.className === "hvr-round-corners"){
		repeatFun();
		styletitle.innerHTML = "Round Corners";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-round-corners</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> border-radius<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> border-radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-round-corners:hover, .hvr-round-corners:focus, .hvr-round-corners:active</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 82
	if(e.target.className === "hvr-underline-from-left"){
		repeatFun();
		styletitle.innerHTML = "Underline From Left";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-underline-from-left</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-underline-from-left:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 83
	if(e.target.className === "hvr-underline-from-center"){
		repeatFun();
		styletitle.innerHTML = "Underline From Center";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-underline-from-center</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-underline-from-center:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 51%<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 51%<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	//84
	if(e.target.className === "hvr-underline-from-right"){
		repeatFun();
		styletitle.innerHTML = "Underline From Right";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-underline-from-right</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-underline-from-right:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-underline-from-right:hover:before, .hvr-underline-from-right:focus:before, .hvr-underline-from-right:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 85
	if(e.target.className === "hvr-overline-from-left"){
		repeatFun();
		styletitle.innerHTML = "Overline From Left";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-overline-from-left</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-overline-from-left:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-overline-from-left:hover:before, .hvr-overline-from-left:focus:before, .hvr-overline-from-left:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 86
	if(e.target.className === "hvr-overline-from-center"){
		repeatFun();
		styletitle.innerHTML = "Overline From Center";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-overline-from-center</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-overline-from-center:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 51%<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 51%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 87
	if(e.target.className === "hvr-overline-from-right"){
		repeatFun();
		styletitle.innerHTML = "Overline From Right";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-overline-from-right</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-overline-from-right:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-overline-from-right:hover:before, .hvr-overline-from-right:focus:before, .hvr-overline-from-right:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 88
	if(e.target.className === "hvr-reveal"){
		repeatFun();
		styletitle.innerHTML = "Reveal";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-reveal</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-reveal:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> border-width<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> border-width<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-reveal:hover:before, .hvr-reveal:focus:before, .hvr-reveal:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	//89
	if(e.target.className === "hvr-underline-reveal"){
		repeatFun();
		styletitle.innerHTML = "Underline Reveal";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-underline-reveal</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-underline-reveal:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-underline-reveal:hover:before, .hvr-underline-reveal:focus:before, .hvr-underline-reveal:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	//90
	if(e.target.className === "hvr-overline-reveal"){
		repeatFun();
		styletitle.innerHTML = "Overline Reveal";
		repeatCode();
		cpitem.innerHTML +=
`<span class="token selector">.hvr-overline-reveal</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-overline-reveal:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>  #009945<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hvr-overline-reveal:hover:before, .hvr-overline-reveal:focus:before, .hvr-overline-reveal:active:before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>`
	}
	// 91






















  });

}));


popupWrapper.addEventListener("click", e =>{
    const patharray = e.path;
    if(patharray.length<=5){
        if(popupWrapper.classList.contains("popup-wrapper-open")){
            popupWrapper.classList.remove("popup-wrapper-open");
            document.body.style.overflow = "scroll";
            cpitem.innerHTML += '';
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
const currentYear = document.querySelector('.year');
currentYear.innerHTML = year;