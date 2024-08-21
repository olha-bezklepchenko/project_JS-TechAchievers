import{e as M,b as O,S as p,N as g,K as v,A as L,M as P,a as y,i as c}from"./assets/vendor-CVat-jAs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const j=document.querySelector(".js-dropdown-toggle"),d=document.querySelector(".js-dropdown-menu"),S=document.querySelectorAll(".js-header-menu-link");j.addEventListener("click",function(){d.classList.toggle("show")});S.forEach(e=>{e.addEventListener("click",function(){d.classList.remove("show")})});window.addEventListener("click",function(e){document.querySelector(".dropdown").contains(e.target)||d.classList.remove("show")});S.forEach(e=>{e.addEventListener("click",function(n){n.preventDefault();const o=this.getAttribute("href").substring(1),r=document.getElementById(o);window.scrollTo({top:r.offsetTop,behavior:"smooth"}),d.classList.remove("show")})});(()=>{const e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".js-header-link"),t=()=>{const s=e.classList.contains("is-open");n.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),O[s?"enableBodyScroll":"disableBodyScroll"](document.body)};r.forEach(s=>s.addEventListener("click",t)),n.addEventListener("click",t),o.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),M(document.body))})})();new p(".skills-container",{modules:[g,v],direction:"horizontal",loop:!0,wrapperClass:"about-skills",slideClass:"about-sk-item",keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:5}},navigation:{nextEl:".about-btn-next"}});new L(document.querySelector(".accordion-container"),{duration:200,showMultiple:!0,elementClass:"about-accordion-item",panelClass:"about-ac-panel",triggerClass:"about-accordion-btn",activeClass:"about-active",onOpen:A,onClose:B});function k(e,n){const o=e.querySelector(".about-ac-svg");o&&(o.style.transform=`rotate(${n}deg)`)}function A(e){k(e,180)}function B(e){k(e,0)}let x={root:null,rootMargin:"5px",threshold:.5},T=function(e,n){e.forEach(o=>{o.isIntersecting&&(console.log("find",o),o.target.classList.add("active"))})},z=new IntersectionObserver(T,x),D=document.querySelectorAll(".anim");D.forEach(e=>{z.observe(e)});document.addEventListener("DOMContentLoaded",()=>{new p(".project-swiper-container",{modules:[g,v],slidesPerView:1,spaceBetween:16,watchOverflow:!1,loop:!1,direction:"horizontal",speed:1e3,navigation:{nextEl:".swiper-project-right",prevEl:".swiper-project-left"},keyboard:{enabled:!0}})});new L(document.querySelector(".faq-list"),{duration:200,showMultiple:!0,elementClass:"faq-item",panelClass:"faq-panel",triggerClass:"faq-trigger",activeClass:"faq-active",onOpen:R,onClose:V});function q(e,n){const o=e.querySelector(".faq-btn-open");o&&(o.style.transform=`rotate(${n}deg)`)}function R(e){q(e,180)}function V(e){q(e,0)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".marquee"),n=new IntersectionObserver((o,r)=>{o.forEach(t=>{t.isIntersecting?(t.target.classList.add("active"),t.target.querySelectorAll(".marquee-line").forEach(l=>{l.style.animationPlayState="running"})):(t.target.classList.remove("active"),t.target.querySelectorAll(".marquee-line").forEach(l=>{l.style.animationPlayState="paused"}))})},{threshold:.1});e.forEach(o=>{n.observe(o)})});new p(".reviews-swiper",{modules:[g,v,P],direction:"horizontal",watchOverflow:!1,speed:700,spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});const h=document.querySelector(".reviews-list");y.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";async function H(){try{return(await y.get()).data}catch(e){throw console.log(e),e}}function I(e){return e.map(({_id:n,author:o,avatar_url:r,review:t})=>`
        <li class="swiper-slide reviews-list-item">
          <img
            class="reviews-item-img"
            src="${r}"
            alt="${o}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title section-subtitle">${o}</h3>
          <p class="reviews-item-text section-text">
           ${t}
          </p>
        </li>`).join("")}async function $(){try{const e=await H();h.insertAdjacentHTML("beforeend",I(e))}catch(e){console.log(e),c.error({message:"Sorry, the server is not responding!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),h.insertAdjacentHTML("beforeend",'<li class="item-message"><p>Not Found</p></li>')}}$();const u=document.querySelector(".work-tgt-form"),E=document.querySelector("[data-modal]"),N=document.querySelector("[data-modal-close]"),F=document.querySelector("[data-send]"),i=u.querySelector('input[type="email"]'),b=document.querySelector(".backdrop"),a=i.nextElementSibling;function C(){i.value.length>0?i.validity.valid?(i.classList.add("valid"),i.classList.remove("invalid"),a.querySelector(".valid-feedback").style.display="block",a.querySelector(".invalid-feedback").style.display="none"):(i.classList.add("invalid"),i.classList.remove("valid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="block"):(i.classList.remove("valid","invalid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="none")}i.addEventListener("blur",function(){C()});function K(){E.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function w(){E.classList.add("is-hidden"),document.body.classList.remove("modal-open")}F.addEventListener("click",async e=>{var t;if(e.preventDefault(),C(),!i.validity.valid){c.error({message:"Please enter a valid email address.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"});return}const n=new FormData(u),o=n.get("comment");if(!o.trim()){c.error({message:"Comments field cannot be empty.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"});return}const r={email:n.get("email"),comment:o};try{const s=await y.post("https://portfolio-js.b.goit.study/api/requests",JSON.stringify(r),{headers:{"Content-Type":"application/json"}});s.status>=200&&s.status<300&&(K(),u.reset(),i.classList.remove("valid","invalid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="none")}catch(s){throw console.error("Error fetching images:",s),console.error("Error details:",(t=s.response)==null?void 0:t.data),c.error({title:"Error",message:"Something went wrong. Please check your input and try again.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),s}});N.addEventListener("click",w);b.addEventListener("click",e=>{e.target===b&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&w()});function U(){const e=document.querySelector(".work-tgt-title"),n=e.getBoundingClientRect().top,o=window.innerHeight/1.3;n<o&&e.classList.add("visible")}window.addEventListener("scroll",U);const m=document.querySelector(".scroll-up"),f=document.querySelector(".scroll-down"),J=document.querySelector(".hero"),Y=document.querySelector(".footer");window.addEventListener("scroll",_);m.addEventListener("click",G);f.addEventListener("click",Q);function _(){const e=window.scrollY,n=J.offsetHeight,o=Y.getBoundingClientRect().top+e;e>n?m.classList.remove("hidden"):m.classList.add("hidden"),e<o-window.innerHeight?f.classList.remove("hidden"):f.classList.add("hidden")}function G(){window.scrollTo({top:0,behavior:"smooth"})}function Q(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map