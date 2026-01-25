import{a as u,S as L,i as b}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="54255948-743bb2e2e8edc610c07792dbd",v="https://pixabay.com";u.defaults.baseURL=v;async function w(r,t){const{data:o}=await u.get("/api/",{params:{q:r||"",image_type:"photo",key:S,orientation:"horizontal",safesearch:!0,page:t||1,per_page:15}});return o}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),E=new L(".gallery a"),M=r=>r.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:s,comments:l,downloads:g})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${o}">
  <img
  class="gallery-image"
  src="${t}"
  alt="${i}"
  />
  </a>
   <ul class="discriptions">
      <li>
        <p class="disc-title">likes</p>
        <p class="disc-text">${e}</p>
      </li>
      <li>
        <p class="disc-title">views</p>
        <p class="disc-text">${s}</p>
      </li>
      <li>
        <p class="disc-title">comments</p>
        <p class="disc-text">${l}</p>
      </li>
      <li>
        <p class="disc-title">downloads</p>
        <p class="disc-text">${g}</p>
      </li>
    </ul>
  </li>
  `).join(" ");function q(r){f.insertAdjacentHTML("beforeend",M(r)),E.refresh()}function x(){f.innerHTML=""}function O(){m.classList.remove("is-hidden")}function B(){m.classList.add("is-hidden")}function I(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}const a=r=>{b.error({message:r,closeOnClick:!0,close:!1,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutLeft"})},P=document.querySelector(".form"),$=document.querySelector(".load-more");let c=35,d=null,n=null;P.addEventListener("submit",R);$.addEventListener("click",A);function R(r){r.preventDefault();const t=r.currentTarget;y();const{"search-text":{value:o}}=t.elements;if(n=o.trim(),!n){a("Please fill in the search field!");return}c=1,x(),h(n,c),t.reset()}async function h(r,t){O();try{const o=await w(r,t);if(d=o.total,d===0){a("Sorry, there are no images matching your search query. Please try again!");return}q(o.hits),t*15<d?I():(y(),t>1&&a("We're sorry, but you've reached the end of search results."))}catch(o){console.log(o),a(o.message)}finally{B()}}async function A(r){c+=1,await h(n,c);const i=document.querySelector(".gallery .gallery-item").getBoundingClientRect().height*2;console.log("🚀 ~ loadMoreFn ~ liHight:",i),window.scrollBy({top:i,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
