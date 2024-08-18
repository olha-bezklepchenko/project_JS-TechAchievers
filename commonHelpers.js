import{S as l,N as d,K as u,a as c,i as p}from"./assets/vendor-BSNYCHNc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a={body:document.body,reviewsList:document.querySelector(".reviews-list")};new l(".swiper",{modules:[d,u],direction:"horizontal",watchOverflow:!1,speed:700,spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});c.defaults.baseURL="https://portfolio-js.b.goit.study/api/reviews";async function f(){try{return(await c.get()).data}catch(r){throw console.log(r),r}}function m(r){return r.map(({_id:s,author:i,avatar_url:o,review:e})=>`
        <li class="swiper-slide reviews-list-item">
          <img
            class="reviews-item-img"
            src="${o}"
            alt="${i}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title section-subtitle">${i}</h3>
          <p class="reviews-item-text section-text">
           ${e}
          </p>
        </li>`).join("")}async function w(){try{const r=await f();a.reviewsList.insertAdjacentHTML("beforeend",m(r))}catch(r){console.log(r),p.error({message:"Sorry, the server is not responding!",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}),a.reviewsList.insertAdjacentHTML("beforeend",'<li class="item-message"><p>Not Found</p></li>')}}w();
//# sourceMappingURL=commonHelpers.js.map
