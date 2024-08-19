import{e as S,b as q,S as p,N as f,K as v,A as w,M as k,a as y,i as d}from"./assets/vendor-CVat-jAs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const c={body:document.body,reviewsList:document.querySelector(".reviews-list"),scrollUp:document.querySelector(".scroll-up"),heroEl:document.querySelector(".hero")},E=document.querySelector(".js-dropdown-toggle"),u=document.querySelector(".js-dropdown-menu"),g=document.querySelectorAll(".js-header-menu-link");E.addEventListener("click",function(){u.classList.toggle("show")});g.forEach(e=>{e.addEventListener("click",function(){u.classList.remove("show")})});window.addEventListener("click",function(e){document.querySelector(".dropdown").contains(e.target)||u.classList.remove("show")});g.forEach(e=>{e.addEventListener("click",function(r){r.preventDefault();const s=this.getAttribute("href").substring(1),n=document.getElementById(s);window.scrollTo({top:n.offsetTop,behavior:"smooth"}),u.classList.remove("show")})});(()=>{const e=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".js-header-link"),t=()=>{const o=e.classList.contains("is-open");r.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),q[o?"enableBodyScroll":"disableBodyScroll"](document.body)};n.forEach(o=>o.addEventListener("click",t)),r.addEventListener("click",t),s.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),S(document.body))})})();new p(".swiper",{modules:[f,v],direction:"horizontal",loop:!0,keyboard:{enabled:!0,onlyInViewport:!1},ousewheel:{forceToAxis:!0},watchOverflow:!1,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-btn-next"}});new w(".accordion-container");document.addEventListener("DOMContentLoaded",()=>{new p(".project-swiper-container",{modules:[f,v],slidesPerView:1,spaceBetween:16,watchOverflow:!1,loop:!1,direction:"horizontal",speed:1e3,navigation:{nextEl:".swiper-project-right",prevEl:".swiper-project-left"},keyboard:{enabled:!0}})});new w(document.querySelector(".faq-list"),{duration:200,showMultiple:!0,elementClass:"faq-item",panelClass:"faq-panel",triggerClass:"faq-trigger",activeClass:"faq-active",onOpen:C,onClose:M});function h(e,r){const s=e.querySelector(".faq-btn-open");s&&(s.style.transform=`rotate(${r}deg)`)}function C(e){h(e,180)}function M(e){h(e,0)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".marquee"),r=new IntersectionObserver((s,n)=>{s.forEach(t=>{t.isIntersecting?(t.target.classList.add("active"),t.target.querySelectorAll(".marquee-line").forEach(l=>{l.style.animationPlayState="running"})):(t.target.classList.remove("active"),t.target.querySelectorAll(".marquee-line").forEach(l=>{l.style.animationPlayState="paused"}))})},{threshold:.1});e.forEach(s=>{r.observe(s)})});new p(".reviews-swiper",{modules:[f,v,k],direction:"horizontal",watchOverflow:!1,speed:700,spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});y.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";async function O(){try{return(await y.get()).data}catch(e){throw console.log(e),e}}function j(e){return e.map(({_id:r,author:s,avatar_url:n,review:t})=>`
        <li class="swiper-slide reviews-list-item">
          <img
            class="reviews-item-img"
            src="${n}"
            alt="${s}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title section-subtitle">${s}</h3>
          <p class="reviews-item-text section-text">
           ${t}
          </p>
        </li>`).join("")}async function A(){try{const e=await O();c.reviewsList.insertAdjacentHTML("beforeend",j(e))}catch(e){console.log(e),d.error({message:"Sorry, the server is not responding!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),c.reviewsList.insertAdjacentHTML("beforeend",'<li class="item-message"><p>Not Found</p></li>')}}A();const m=document.querySelector(".work-tgt-form"),b=document.querySelector("[data-modal]"),P=document.querySelector("[data-modal-close]"),x=document.querySelector("[data-send]"),i=m.querySelector('input[type="email"]'),a=i.nextElementSibling;function L(){i.value.length>0?i.validity.valid?(i.classList.add("valid"),i.classList.remove("invalid"),a.querySelector(".valid-feedback").style.display="block",a.querySelector(".invalid-feedback").style.display="none"):(i.classList.add("invalid"),i.classList.remove("valid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="block"):(i.classList.remove("valid","invalid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="none")}i.addEventListener("blur",function(){L()});x.addEventListener("click",async e=>{var t;if(e.preventDefault(),L(),!i.validity.valid){d.error({message:"Please enter a valid email address.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"});return}const r=new FormData(m),s=r.get("comment");if(!s.trim()){d.error({message:"Comments field cannot be empty.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"});return}const n={email:r.get("email"),comment:s};try{const o=await y.post("https://portfolio-js.b.goit.study/api/requests",JSON.stringify(n),{headers:{"Content-Type":"application/json"}});o.status>=200&&o.status<300&&(b.classList.remove("is-hidden"),m.reset(),i.classList.remove("valid","invalid"),a.querySelector(".valid-feedback").style.display="none",a.querySelector(".invalid-feedback").style.display="none")}catch(o){throw console.error("Error fetching images:",o),console.error("Error details:",(t=o.response)==null?void 0:t.data),d.error({title:"Error",message:"Something went wrong. Please check your input and try again.",position:"bottomRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),o}});P.addEventListener("click",()=>{b.classList.add("is-hidden")});window.addEventListener("scroll",B);c.scrollUp.addEventListener("click",V);function B(){window.scrollY>c.heroEl.clientHeight?c.scrollUp.classList.remove("hidden"):c.scrollUp.classList.add("hidden")}function V(){window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
