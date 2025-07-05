import{A as L,a as d,S as u,N as E,K as S}from"./assets/vendor-BHt94jcg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),o=document.querySelector("[data-menu]"),r=document.querySelectorAll(".mobile-menu-link");e.addEventListener("click",()=>{o.classList.add("open"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{n()}),r.forEach(s=>{s.addEventListener("click",()=>{n()})});function n(){o.classList.remove("open"),document.body.classList.remove("no-scroll")}document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",function(c){c.preventDefault();const v=document.querySelector(this.getAttribute("href"));v&&v.scrollIntoView({behavior:"smooth"})})})});new L(".accordion-container",{duration:400,showMultiple:!0});d.defaults.baseURL="https://books-backend.p.goit.global";document.querySelector(".books-categories");const f=document.querySelector(".books-category"),l=document.querySelector(".books-list");document.querySelector(".books-load-more");const g=document.querySelector(".books-category-select");async function h(){try{const{data:e}=await d.get("/books/category-list");return e}catch(e){console.error("Error fetching categories:",e.message)}}h().then(e=>{x(e)}).catch(e=>{console.log(e.message)});function x(e){window.innerWidth>=1440?(f.insertAdjacentHTML("beforeend",$(e)),b()):(g.insertAdjacentHTML("beforeend",j(e)),b())}function $(e){const t='<li class="books-category-item" data-category-name="All categories">All categories</li>',o=e.map(r=>`
        <li class="books-category-item" data-category-name="${r.list_name}">${r.list_name}</li>
    `).join("");return t+o}function j(e){const t='<option>Categories</option><option value="">All categories</option>',o=e.map(r=>`
        <option value="${r.list_name}">${r.list_name}</option>
    `).join("");return t+o}window.addEventListener("resize",()=>{h().then(e=>{f.innerHTML="",g.innerHTML="",x(e)}).catch(e=>{console.log(e.message)})});async function k(e){try{const{data:t}=await d.get("/books/category",{params:{category:e}});return t}catch(t){console.error("Error fetching books by category:",t.message)}}function w(e){l.innerHTML="",e.map(t=>{l.insertAdjacentHTML("beforeend",B(t))})}function q(e){return e.map(t=>`
        <li class="books-item" data-id="${t._id}">
            <img src="${t.book_image}" alt="${t.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${t.title}</h3>
                <p>${t.author}</p>
                </div>
                <div class="book-card-price">$${t.price}</div>
            </div>
            <button class="book-learn-more" data-id="${t._id}">Learn more</button>
        </li>
    `).join("")}function B(e){return`
        <li class="books-item" data-id="${e._id}">
            <img src="${e.book_image}" alt="${e.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${e.title}</h3>
                <p>${e.author}</p>
                </div>
                <div class="book-card-price">$${e.price}</div>
            </div>
            <button class="book-learn-more" data-id="${e._id}">Learn more</button>
        </li>
    `}function b(){document.querySelectorAll(".books-category-item").forEach(t=>{t.addEventListener("click",async()=>{const o=t.getAttribute("data-category-name"),r=await k(o);w(r)})})}g.addEventListener("change",async e=>{const t=e.target.value,o=await k(t);w(o)});async function C(){try{const{data:e}=await d.get("/books/top-books");return e}catch(e){console.error("Error fetching top-books:",e.message)}}async function M(){const e=await C();l.innerHTML="",e.forEach(t=>{l.insertAdjacentHTML("beforeend",q(t.books))})}M();const a=document.getElementById("modal"),A=document.querySelector(".close-button");l.addEventListener("click",async e=>{if(e.target.classList.contains("book-learn-more")){const t=e.target.getAttribute("data-id"),o=await T(t);I(o)}});async function T(e){try{return(await d.get(`/books/${e}`)).data}catch(t){console.error("Error fetching book by ID:",t.message)}}function I(e){console.log(e),a.querySelector(".modal-book-image").src=e.book_image,a.querySelector("h3").innerText=e.title,a.querySelector(".modal-author").innerText=e.author,a.querySelector(".book-card-price").innerText="$"+e.price;const t=document.querySelector(".book-details"),o=document.querySelector(".book-shipping"),r=document.querySelector(".book-returns");t.innerText=e.description,o.innerText=e.amazon_product_url,r.innerText=e.contributor,a.style.display="block"}A.addEventListener("click",()=>{a.style.display="none"});window.addEventListener("click",e=>{e.target===a&&(a.style.display="none")});u.use([E,S]);function y(e){const t=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");e.isBeginning?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled")),e.isEnd?(o.disabled=!0,o.classList.add("disabled")):(o.disabled=!1,o.classList.remove("disabled"))}new u(".swiper",{slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(e){y(e)},slideChange(e){y(e)}}});const _=[{title:"Cozy Book Club — “The Midnight Library”",type:"In-store",date:"June 5, 6:30 PM",desc:"Join us for an evening of tea, thoughtful conversation, and shared reflections as we dive into Matt Haig’s bestseller.",images:{mob1x:"../img/events/mobEvent1.jpg",mob2x:"../img/events/mobEvent1@2x.jpg",tab1x:"../img/events/tabletEvent1.jpg",tab2x:"../img/events/tabletEvent1@2x.jpg",desk1x:"../img/events/event1.jpg",desk2x:"../img/events/event1@2x.jpg"}},{title:"Book Cover Design Workshop",type:"Online",date:"June 12, 7:00 PM",desc:"A hands-on session for aspiring designers and curious readers. Learn what makes a cover stand out — from concept to print.",images:{mob1x:"../img/events/mobEvent2.jpg",mob2x:"../img/events/mobEvent2@2x.jpg",tab1x:"../img/events/tabletEvent2.jpg",tab2x:"../img/events/tabletEvent2@2x.jpg",desk1x:"../img/events/event2.jpg",desk2x:"../img/events/event2@2x.jpg"}},{title:"Children’s Story Hour",type:"In-store",date:"June 18, 11:00 AM",desc:"A magical morning of stories, games, and imagination for our youngest book lovers (ages 4–8).",images:{mob1x:"../img/events/mobEvent3.jpg",mob2x:"../img/events/mobEvent3@2x.jpg",tab1x:"../img/events/tabletEvent3.jpg",tab2x:"../img/events/tabletEvent3@2x.jpg",desk1x:"../img/events/event3.jpg",desk2x:"../img/events/event3@2x.jpg"}}],O=e=>`
  <li class="swiper-slide event-card">
    <picture>
      <source srcset="${e.images.mob2x} 2x, ${e.images.mob1x} 1x" media="(max-width: 767px)">
      <source srcset="${e.images.tab2x} 2x, ${e.images.tab1x} 1x" media="(min-width: 768px) and (max-width: 1439px)">
      <img class="event-img" src="${e.images.desk1x}" srcset="${e.images.desk2x} 2x" alt="${e.title}">
    </picture>

    <div class="event-text-content">
      <h3 class="event-name">${e.title}</h3>
      <p class="event-meta">${e.type} | ${e.date}</p>
      <p class="event-desc">${e.desc}</p>
    </div>

    <button type="button" class="event-register" data-title="${e.title}">
      Register
      <svg class="event-arrow" width="24" height="24">
        <use href="../img/sprite.svg#chevron-right"></use>
      </svg>
    </button>
  </li>`,P=document.querySelector(".events-swiper .swiper-wrapper");P.innerHTML=_.map(O).join("");new u(".events-swiper",{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});const i={email:""},p="feedback-form-state",m=document.querySelector(".footer-form"),D=m.elements.email;m.addEventListener("input",e=>{e.target.name==="email"&&(i.email=e.target.value.trim()),localStorage.setItem(p,JSON.stringify(i))});document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(p);if(e){const t=JSON.parse(e);i.email=t.email||"",D.value=i.email}});m.addEventListener("submit",e=>{if(e.preventDefault(),i.email===""){alert("Fill please all fields.");return}console.log(i),localStorage.removeItem(p),i.email="",m.reset()});
//# sourceMappingURL=index.js.map
