
const popupWrapper = document.querySelector("#popup-wrapper");

const effectsButtons = document.querySelectorAll("#effects a");

const cpitem = document.querySelector("#cpitem");
const styletitle = document.querySelector(".popup-head h2");

const repeatFun = () =>{
      if(popupWrapper.classList.contains("popup-wrapper")){
            popupWrapper.classList.add("popup-wrapper-open");
            document.body.style.overflow = "hidden";
        }
}

effectsButtons.forEach((button =>{
    button.addEventListener("click", (e) =>{
        e.preventDefault();
        if(e.target.className === "hvr-grow"){
            repeatFun();
            styletitle.innerHTML = "Grow";
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
        // 2
        else if(e.target.className === "hvr-shrink"){
            repeatFun();
            styletitle.innerHTML = "Shrink";
            cpitem.innerHTML =
            `
<code class=" language-css"><span class="token selector">.hvr-shrink</span> <span class="token punctuation">{</span>
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
  <span class="token punctuation">}</span></code>
            `
        }
        // 3
        else if(e.target.className === "hvr-pulse"){
            repeatFun();
            styletitle.innerHTML = "Pulse";
            
            cpitem.innerHTML =
            `
<code class=" language-css"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-pulse</span> <span class="token punctuation">{</span>
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
	<span class="token punctuation">}</span></code>
`
        }
        // 4
        else if(e.target.className === "hvr-pulse-grow"){
            repeatFun();
            styletitle.innerHTML = "Pulse Grow";
            cpitem.innerHTML =
`
<code class=" language-css"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-pulse-grow</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span></code>
`
        }
        // 5
        else if(e.target.className === "hvr-pulse-shrink"){
            repeatFun();
            styletitle.innerHTML = "Pulse Shrink"; 
            cpitem.innerHTML =
`
<code class=" language-css"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-pulse-shrink</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span></code>
`
    }
    //6
    else if(e.target.className === "hvr-push"){
        repeatFun();
        styletitle.innerHTML = "Push";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-push</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span></code>
`
    }
    //7
    else if(e.target.className === "hvr-pop"){
        repeatFun();
        styletitle.innerHTML = "Pop";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-pop</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`
    
    }
    //8
    else if(e.target.className === "hvr-bounce-in"){
        repeatFun();
        styletitle.innerHTML = ("Bounce In");
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token selector">.hvr-bounce-in</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span></code>
`
    }
    //9
    else if(e.target.className ==="hvr-bounce-out"){
        repeatFun();
        styletitle.innerHTML = "Bounce Out";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token selector">.hvr-bounce-out</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`

    }
    // 10
    else if(e.target.className === "hvr-rotate"){
        repeatFun();
        styletitle.innerHTML = "Rotate";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token selector">.hvr-rotate</span> <span class="token punctuation">{</span>
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
<span class="token selector">.hvr-rotate:hover, .hvr-rotate:focus, .hvr-rotate:active</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>
`
    }
    // 11
    else if(e.target.className === "hvr-grow-rotate"){
        repeatFun();
        styletitle.innerHTML = "Grow Rotate";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token selector">.hvr-grow-rotate</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`
    }
    // 12
    else if(e.target.className === "hvr-float"){
        repeatFun();
        styletitle.innerHTML = "Float";
        cpitem.innerHTML = 
`
<code class=" language-css"><span class="token selector">.hvr-float</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`
    
    }
    //13
    else if(e.target.className === "hvr-sink"){
        repeatFun();
        styletitle.innerHTML = "Sink";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token selector">.hvr-sink</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`

    } 
    // 14
    else if(e.target.className === "hvr-bob"){
        repeatFun();
        styletitle.innerHTML = "Bob";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-bob</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`

    }
    // 15
    else if(e.target.className === "hvr-hang"){
        repeatFun();
        styletitle.innerHTML = "Hang";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-hang</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`
    }// 16
    else if(e.target.className === "hvr-skew"){
        repeatFun();
        styletitle.innerHTML = "Skew";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token selector">.hvr-skew</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`
    }
    // 17
    else if(e.target.className === "hvr-skew-forward"){
        repeatFun();
        styletitle.innerHTML = "Skew Forward";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token selector">.hvr-skew-forward</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`
    }
    // 18
    else if(e.target.className === "hvr-skew-backward"){
        repeatFun();
        styletitle.innerHTML = "Skew Backward";
        cpitem.innerHTML =
`
<code class=" language-css"><span class="token selector">.hvr-skew-backward</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`
    }
    // 19
    else if(e.target.className === "hvr-wobble-horizontal"){
        repeatFun();
        styletitle.innerHTML = "Wobble Horizontal";
        cpitem.innerHTML = 
`
<code class=" language-css"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> hvr-wobble-horizontal</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span></code>
`
    }

    // console.log(cpitem.innerHTML);





















    });
}));














const popupClose = document.querySelector(".popup-close");

popupClose.addEventListener("click", () =>{
    if(popupWrapper.classList.contains("popup-wrapper-open")){
        popupWrapper.classList.remove("popup-wrapper-open");
        document.body.style.overflow = "scroll";
        cpitem.innerHTML = '';
    }
});

popupWrapper.addEventListener("click", e =>{
    const patharray = e.path;
    if(patharray.length<=5){
        if(popupWrapper.classList.contains("popup-wrapper-open")){
            popupWrapper.classList.remove("popup-wrapper-open");
            document.body.style.overflow = "scroll";
            cpitem.innerHTML = '';
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
