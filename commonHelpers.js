import{e as E,b as C,S as f,N as g,K as v,A as w,M,a as y,i as c}from"./assets/vendor-CVat-jAs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const O=document.querySelector(".js-dropdown-toggle"),d=document.querySelector(".js-dropdown-menu"),b=document.querySelectorAll(".js-header-menu-link");O.addEventListener("click",function(){d.classList.toggle("show")});b.forEach(e=>{e.addEventListener("click",function(){d.classList.remove("show")})});window.addEventListener("click",function(e){document.querySelector(".dropdown").contains(e.target)||d.classList.remove("show")});b.forEach(e=>{e.addEventListener("click",function(n){n.preventDefault();const s=this.getAttribute("href").substring(1),r=document.getElementById(s);window.scrollTo({top:r.offsetTop,behavior:"smooth"}),d.classList.remove("show")})});(()=>{const e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".js-header-link"),t=()=>{const o=e.classList.contains("is-open");n.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),C[o?"enableBodyScroll":"disableBodyScroll"](document.body)};r.forEach(o=>o.addEventListener("click",t)),n.addEventListener("click",t),s.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),E(document.body))})})();new f(".skills-container",{modules:[g,v],direction:"horizontal",loop:!0,wrapperClass:"about-skills",slideClass:"about-sk-item",keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:5}},navigation:{nextEl:".about-btn-next"}});new w(document.querySelector(".accordion-container"),{duration:200,showMultiple:!0,elementClass:"about-accordion-item",panelClass:"about-ac-panel",triggerClass:"about-accordion-btn",activeClass:"about-active",onOpen:j,onClose:P});function S(e,n){const s=e.querySelector(".about-ac-svg");s&&(s.style.transform=`rotate(${n}deg)`)}function j(e){S(e,180)}function P(e){S(e,0)}document.addEventListener("DOMContentLoaded",()=>{new f(".project-swiper-container",{modules:[g,v],slidesPerView:1,spaceBetween:16,watchOverflow:!1,loop:!1,direction:"horizontal",speed:1e3,navigation:{nextEl:".swiper-project-right",prevEl:".swiper-project-left"},keyboard:{enabled:!0}})});new w(document.querySelector(".faq-list"),{duration:200,showMultiple:!0,elementClass:"faq-item",panelClass:"faq-panel",triggerClass:"faq-trigger",activeClass:"faq-active",onOpen:A,onClose:B});function L(e,n){const s=e.querySelector(".faq-btn-open");s&&(s.style.transform=`rotate(${n}deg)`)}function A(e){L(e,180)}function B(e){L(e,0)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".marquee"),n=new IntersectionObserver((s,r)=>{s.forEach(t=>{t.isIntersecting?(t.target.classList.add("active"),t.target.querySelectorAll(".marquee-line").forEach(l=>{l.style.animationPlayState="running"})):(t.target.classList.remove("active"),t.target.querySelectorAll(".marquee-line").forEach(l=>{l.style.animationPlayState="paused"}))})},{threshold:.1});e.forEach(s=>{n.observe(s)})});new f(".reviews-swiper",{modules:[g,v,M],direction:"horizontal",watchOverflow:!1,speed:700,spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});const h=document.querySelector(".reviews-list");y.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";async function x(){try{return(await y.get()).data}catch(e){throw console.log(e),e}}function T(e){return e.map(({_id:n,author:s,avatar_url:r,review:t})=>`
        <li class="swiper-slide reviews-list-item">
          <img
            class="reviews-item-img"
            src="${r}"
            alt="${s}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title section-subtitle">${s}</h3>
          <p class="reviews-item-text section-text">
           ${t}
          </p>
        </li>`).join("")}async function z(){try{const e=await x();h.insertAdjacentHTML("beforeend",T(e))}catch(e){console.log(e),c.error({message:"Sorry, the server is not responding!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),h.insertAdjacentHTML("beforeend",'<li class="item-message"><p>Not Found</p></li>')}}z();const u=document.querySelector(".work-tgt-form"),q=document.querySelector("[data-modal]"),D=document.querySelector("[data-modal-close]"),V=document.querySelector("[data-send]"),i=u.querySelector('input[type="email"]'),a=i.nextElementSibling;function k(){i.value.length>0?i.validity.valid?(i.classList.add("valid"),i.classList.remove("invalid"),a.querySelector(".valid-feedback").style.display="block",a.querySelector(".invalid-feedback").style.display="none"):(i.classList.add("invalid"),i.classList.remove("valid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="block"):(i.classList.remove("valid","invalid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="none")}i.addEventListener("blur",function(){k()});V.addEventListener("click",async e=>{var t;if(e.preventDefault(),k(),!i.validity.valid){c.error({message:"Please enter a valid email address.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"});return}const n=new FormData(u),s=n.get("comment");if(!s.trim()){c.error({message:"Comments field cannot be empty.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"});return}const r={email:n.get("email"),comment:s};try{const o=await y.post("https://portfolio-js.b.goit.study/api/requests",JSON.stringify(r),{headers:{"Content-Type":"application/json"}});o.status>=200&&o.status<300&&(q.classList.remove("is-hidden"),u.reset(),i.classList.remove("valid","invalid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="none")}catch(o){throw console.error("Error fetching images:",o),console.error("Error details:",(t=o.response)==null?void 0:t.data),c.error({title:"Error",message:"Something went wrong. Please check your input and try again.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),o}});D.addEventListener("click",()=>{q.classList.add("is-hidden")});const m=document.querySelector(".scroll-up"),p=document.querySelector(".scroll-down"),R=document.querySelector(".hero"),$=document.querySelector(".footer");window.addEventListener("scroll",H);m.addEventListener("click",N);p.addEventListener("click",I);function H(){const e=window.scrollY,n=R.offsetHeight,s=$.getBoundingClientRect().top+e;e>n?m.classList.remove("hidden"):m.classList.add("hidden"),e<s-window.innerHeight?p.classList.remove("hidden"):p.classList.add("hidden")}function N(){window.scrollTo({top:0,behavior:"smooth"})}function I(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
