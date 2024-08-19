import{S as p,N as f,K as v,A as b,M as L,a as y,i as d}from"./assets/vendor-LYn0aN-S.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c={body:document.body,reviewsList:document.querySelector(".reviews-list"),scrollUp:document.querySelector(".scroll-up"),heroEl:document.querySelector(".hero")},S=document.querySelector(".js-dropdown-toggle"),u=document.querySelector(".js-dropdown-menu"),w=document.querySelectorAll(".js-header-menu-link");S.addEventListener("click",function(){u.classList.toggle("show")});w.forEach(o=>{o.addEventListener("click",function(){u.classList.remove("show")})});window.addEventListener("click",function(o){document.querySelector(".dropdown").contains(o.target)||u.classList.remove("show")});w.forEach(o=>{o.addEventListener("click",function(s){s.preventDefault();const r=this.getAttribute("href").substring(1),n=document.getElementById(r);window.scrollTo({top:n.offsetTop,behavior:"smooth"}),u.classList.remove("show")})});(()=>{const o=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".js-header-link"),e=()=>{const t=o.classList.contains("is-open");s.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const l=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};n.forEach(t=>t.addEventListener("click",e)),s.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new p(".swiper",{modules:[f,v],direction:"horizontal",loop:!0,keyboard:{enabled:!0,onlyInViewport:!1},ousewheel:{forceToAxis:!0},watchOverflow:!1,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-btn-next"}});new b(".accordion-container");document.addEventListener("DOMContentLoaded",()=>{new p(".project-swiper-container",{modules:[f,v],slidesPerView:1,spaceBetween:16,watchOverflow:!1,loop:!1,direction:"horizontal",speed:1e3,navigation:{nextEl:".swiper-project-right",prevEl:".swiper-project-left"},keyboard:{enabled:!0}})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".marquee"),s=new IntersectionObserver((r,n)=>{r.forEach(e=>{e.isIntersecting?(e.target.classList.add("active"),e.target.querySelectorAll(".marquee-line").forEach(l=>{l.style.animationPlayState="running"})):(e.target.classList.remove("active"),e.target.querySelectorAll(".marquee-line").forEach(l=>{l.style.animationPlayState="paused"}))})},{threshold:.1});o.forEach(r=>{s.observe(r)})});new p(".reviews-swiper",{modules:[f,v,L],direction:"horizontal",watchOverflow:!1,speed:700,spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});y.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";async function E(){try{return(await y.get()).data}catch(o){throw console.log(o),o}}function q(o){return o.map(({_id:s,author:r,avatar_url:n,review:e})=>`
        <li class="swiper-slide reviews-list-item">
          <img
            class="reviews-item-img"
            src="${n}"
            alt="${r}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title section-subtitle">${r}</h3>
          <p class="reviews-item-text section-text">
           ${e}
          </p>
        </li>`).join("")}async function k(){try{const o=await E();c.reviewsList.insertAdjacentHTML("beforeend",q(o))}catch(o){console.log(o),d.error({message:"Sorry, the server is not responding!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),c.reviewsList.insertAdjacentHTML("beforeend",'<li class="item-message"><p>Not Found</p></li>')}}k();const m=document.querySelector(".work-tgt-form"),h=document.querySelector("[data-modal]"),j=document.querySelector("[data-modal-close]"),M=document.querySelector("[data-send]"),i=m.querySelector('input[type="email"]'),a=i.nextElementSibling;function g(){i.value.length>0?i.validity.valid?(i.classList.add("valid"),i.classList.remove("invalid"),a.querySelector(".valid-feedback").style.display="block",a.querySelector(".invalid-feedback").style.display="none"):(i.classList.add("invalid"),i.classList.remove("valid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="block"):(i.classList.remove("valid","invalid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="none")}i.addEventListener("blur",function(){g()});M.addEventListener("click",async o=>{var e;if(o.preventDefault(),g(),!i.validity.valid){d.error({title:"Error",message:"Please enter a valid email address.",position:"topRight"});return}const s=new FormData(m),r=s.get("comment");if(!r.trim()){d.error({title:"Error",message:"Comment field cannot be empty.",position:"topRight"});return}const n={email:s.get("email"),comment:r};try{const t=await y.post("https://portfolio-js.b.goit.study/api/requests",JSON.stringify(n),{headers:{"Content-Type":"application/json"}});t.status>=200&&t.status<300&&(h.classList.remove("is-hidden"),m.reset(),i.classList.remove("valid","invalid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="none")}catch(t){throw console.error("Error fetching images:",t),console.error("Error details:",(e=t.response)==null?void 0:e.data),d.error({title:"Error",message:"Something went wrong. Please check your input and try again.",position:"topRight"}),t}});j.addEventListener("click",()=>{h.classList.add("is-hidden")});window.addEventListener("scroll",O);c.scrollUp.addEventListener("click",P);function O(){window.scrollY>c.heroEl.clientHeight?c.scrollUp.classList.remove("hidden"):c.scrollUp.classList.add("hidden")}function P(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
