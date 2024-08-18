import{S as m,N as p,K as f,A as b,M as L,a as y,i as c}from"./assets/vendor-Bx6tf6Qx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const v={body:document.body,reviewsList:document.querySelector(".reviews-list")},S=document.querySelector(".js-dropdown-toggle"),d=document.querySelector(".js-dropdown-menu"),w=document.querySelectorAll(".js-header-menu-link");S.addEventListener("click",function(){d.classList.toggle("show")});w.forEach(o=>{o.addEventListener("click",function(){d.classList.remove("show")})});window.addEventListener("click",function(o){document.querySelector(".dropdown").contains(o.target)||d.classList.remove("show")});w.forEach(o=>{o.addEventListener("click",function(s){s.preventDefault();const r=this.getAttribute("href").substring(1),n=document.getElementById(r);window.scrollTo({top:n.offsetTop,behavior:"smooth"}),d.classList.remove("show")})});(()=>{const o=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".js-header-link"),e=()=>{const t=o.classList.contains("is-open");s.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const a=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[a](document.body)};n.forEach(t=>t.addEventListener("click",e)),s.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new m(".swiper",{modules:[p,f],direction:"horizontal",loop:!0,keyboard:{enabled:!0,onlyInViewport:!1},ousewheel:{forceToAxis:!0},watchOverflow:!1,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-btn-next"}});new b(".accordion-container");document.addEventListener("DOMContentLoaded",()=>{new m(".project-swiper-container",{modules:[p,f],slidesPerView:1,spaceBetween:16,watchOverflow:!1,loop:!1,direction:"horizontal",speed:1e3,navigation:{nextEl:".swiper-project-right",prevEl:".swiper-project-left"},keyboard:{enabled:!0}})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".marquee"),s=new IntersectionObserver((r,n)=>{r.forEach(e=>{e.isIntersecting?(e.target.classList.add("active"),e.target.querySelectorAll(".marquee-line").forEach(a=>{a.style.animationPlayState="running"})):(e.target.classList.remove("active"),e.target.querySelectorAll(".marquee-line").forEach(a=>{a.style.animationPlayState="paused"}))})},{threshold:.1});o.forEach(r=>{s.observe(r)})});new m(".swiper",{modules:[p,f,L],direction:"horizontal",watchOverflow:!1,speed:700,spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});y.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";async function E(){try{return(await y.get()).data}catch(o){throw console.log(o),o}}function k(o){return o.map(({_id:s,author:r,avatar_url:n,review:e})=>`
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
        </li>`).join("")}async function q(){try{const o=await E();v.reviewsList.insertAdjacentHTML("beforeend",k(o))}catch(o){console.log(o),c.error({message:"Sorry, the server is not responding!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),v.reviewsList.insertAdjacentHTML("beforeend",'<li class="item-message"><p>Not Found</p></li>')}}q();const u=document.querySelector(".work-tgt-form"),g=document.querySelector("[data-modal]"),j=document.querySelector("[data-modal-close]"),M=document.querySelector("[data-send]"),i=u.querySelector('input[type="email"]'),l=i.nextElementSibling;function h(){i.value.length>0?i.validity.valid?(i.classList.add("valid"),i.classList.remove("invalid"),l.querySelector(".valid-feedback").style.display="block",l.querySelector(".invalid-feedback").style.display="none"):(i.classList.add("invalid"),i.classList.remove("valid"),l.querySelector(".valid-feedback").style.display="none",l.querySelector(".invalid-feedback").style.display="block"):(i.classList.remove("valid","invalid"),l.querySelector(".valid-feedback").style.display="none",l.querySelector(".invalid-feedback").style.display="none")}i.addEventListener("blur",function(){h()});M.addEventListener("click",async o=>{var e;if(o.preventDefault(),h(),!i.validity.valid){c.error({title:"Error",message:"Please enter a valid email address.",position:"topRight"});return}const s=new FormData(u),r=s.get("comment");if(!r.trim()){c.error({title:"Error",message:"Comment field cannot be empty.",position:"topRight"});return}const n={email:s.get("email"),comment:r};try{const t=await y.post("https://portfolio-js.b.goit.study/api/requests",JSON.stringify(n),{headers:{"Content-Type":"application/json"}});t.status>=200&&t.status<300&&(g.classList.remove("is-hidden"),u.reset(),i.classList.remove("valid","invalid"),l.querySelector(".valid-feedback").style.display="none",l.querySelector(".invalid-feedback").style.display="none")}catch(t){throw console.error("Error fetching images:",t),console.error("Error details:",(e=t.response)==null?void 0:e.data),c.error({title:"Error",message:"Something went wrong. Please check your input and try again.",position:"topRight"}),t}});j.addEventListener("click",()=>{g.classList.add("is-hidden")});
//# sourceMappingURL=commonHelpers.js.map
