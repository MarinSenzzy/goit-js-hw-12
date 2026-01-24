import{a as u,S as L,i as b}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const S="54255948-743bb2e2e8edc610c07792dbd",v="https://pixabay.com";u.defaults.baseURL=v;async function w(r,o){const{data:e}=await u.get("/api/",{params:{q:r||"",image_type:"photo",key:S,orientation:"horizontal",safesearch:!0,page:o||1,per_page:15}});return console.log(e),e}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),E=new L(".gallery a"),M=r=>r.map(({webformatURL:o,largeImageURL:e,tags:l,likes:t,views:s,comments:i,downloads:h})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${e}">
  <img
  class="gallery-image"
  src="${o}"
  alt="${l}"
  />
  </a>
   <ul class="discriptions">
      <li>
        <p class="disc-title">likes</p>
        <p class="disc-text">${t}</p>
      </li>
      <li>
        <p class="disc-title">views</p>
        <p class="disc-text">${s}</p>
      </li>
      <li>
        <p class="disc-title">comments</p>
        <p class="disc-text">${i}</p>
      </li>
      <li>
        <p class="disc-title">downloads</p>
        <p class="disc-text">${h}</p>
      </li>
    </ul>
  </li>
  `).join(" ");function q(r){f.insertAdjacentHTML("beforeend",M(r)),E.refresh()}function x(){f.innerHTML=""}function O(){m.classList.remove("is-hidden")}function B(){m.classList.add("is-hidden")}function I(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}const n=r=>{b.error({message:r,closeOnClick:!0,close:!1,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutLeft"})},P=document.querySelector(".form"),$=document.querySelector(".load-more");let d=35,a=null,c=null;P.addEventListener("submit",R);$.addEventListener("click",A);function R(r){r.preventDefault();const o=r.currentTarget;y();const{"search-text":{value:e}}=o.elements;if(c=e.trim(),!c){n("Please fill in the search field!");return}d=1,x(),g(c,d),o.reset()}async function g(r,o){O();try{const e=await w(r,o);if(a=e.total,a===0){n("Sorry, there are no images matching your search query. Please try again!");return}q(e.hits),o*15<a?I():(y(),o>1&&n("We're sorry, but you've reached the end of search results."))}catch(e){console.log(e),n(e.message)}finally{B()}}async function A(r){d+=1,console.log(a),await g(c,d);const e=document.querySelector(".gallery .gallery-item").getBoundingClientRect();console.log(e);const l=e.height*2;console.log("🚀 ~ loadMoreFn ~ liHight:",l),window.scrollBy({top:l,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
