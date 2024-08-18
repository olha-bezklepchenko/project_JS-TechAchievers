import{S as c,N as d,K as u,a as l,i as f}from"./assets/vendor-BSNYCHNc.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a={body:document.body,reviewsList:document.querySelector(".reviews-list")};document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".marquee"),o=new IntersectionObserver((s,n)=>{s.forEach(e=>{e.isIntersecting?(e.target.classList.add("active"),e.target.querySelectorAll(".marquee-line").forEach(i=>{i.style.animationPlayState="running"})):(e.target.classList.remove("active"),e.target.querySelectorAll(".marquee-line").forEach(i=>{i.style.animationPlayState="paused"}))})},{threshold:.1});r.forEach(s=>{o.observe(s)})});new c(".swiper",{modules:[d,u],direction:"horizontal",watchOverflow:!1,speed:700,spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});l.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";async function m(){try{return(await l.get()).data}catch(r){throw console.log(r),r}}function p(r){return r.map(({_id:o,author:s,avatar_url:n,review:e})=>`
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
           ${e}
          </p>
        </li>`).join("")}async function g(){try{const r=await m();a.reviewsList.insertAdjacentHTML("beforeend",p(r))}catch(r){console.log(r),f.error({message:"Sorry, the server is not responding!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),a.reviewsList.insertAdjacentHTML("beforeend",'<li class="item-message"><p>Not Found</p></li>')}}g();
//# sourceMappingURL=commonHelpers.js.map
