import{S as m,A as B,a as d,N as q,K as j}from"./assets/vendor-DLs3LGhZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),o=document.querySelector("[data-menu]"),r=document.querySelectorAll(".mobile-menu-link");e.addEventListener("click",()=>{o.classList.add("open"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{n()}),r.forEach(s=>{s.addEventListener("click",()=>{n()})});function n(){o.classList.remove("open"),document.body.classList.remove("no-scroll")}document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",function(c){c.preventDefault();const y=document.querySelector(this.getAttribute("href"));y&&y.scrollIntoView({behavior:"smooth"})})})});const g=document.querySelector(".custom-prev"),p=document.querySelector(".custom-next"),k=new m(".swiper",{loop:!1,speed:600,navigation:!1,on:{init(e){f(e)},slideChange(e){f(e)}}});g.addEventListener("click",()=>{g.disabled||k.slidePrev()});p.addEventListener("click",()=>{p.disabled||k.slideNext()});function f(e){g.disabled=e.isBeginning,p.disabled=e.isEnd}new B(".accordion-container",{duration:400,showMultiple:!0});d.defaults.baseURL="https://books-backend.p.goit.global";document.querySelector(".books-categories");const w=document.querySelector(".books-category"),l=document.querySelector(".books-list");document.querySelector(".books-load-more");const v=document.querySelector(".books-category-select");async function L(){try{const{data:e}=await d.get("/books/category-list");return e}catch(e){console.error("Error fetching categories:",e.message)}}L().then(e=>{E(e)}).catch(e=>{console.log(e.message)});function E(e){window.innerWidth>=1440?(w.insertAdjacentHTML("beforeend",C(e)),h()):(v.insertAdjacentHTML("beforeend",M(e)),h())}function C(e){const t='<li class="books-category-item" data-category-name="All categories">All categories</li>',o=e.map(r=>`
        <li class="books-category-item" data-category-name="${r.list_name}">${r.list_name}</li>
    `).join("");return t+o}function M(e){const t='<option>Categories</option><option value="">All categories</option>',o=e.map(r=>`
        <option value="${r.list_name}">${r.list_name}</option>
    `).join("");return t+o}window.addEventListener("resize",()=>{L().then(e=>{w.innerHTML="",v.innerHTML="",E(e)}).catch(e=>{console.log(e.message)})});async function S(e){try{const{data:t}=await d.get("/books/category",{params:{category:e}});return t}catch(t){console.error("Error fetching books by category:",t.message)}}function $(e){l.innerHTML="",e.map(t=>{l.insertAdjacentHTML("beforeend",T(t))})}function A(e){return e.map(t=>`
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
    `).join("")}function T(e){return`
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
    `}function h(){document.querySelectorAll(".books-category-item").forEach(t=>{t.addEventListener("click",async()=>{const o=t.getAttribute("data-category-name"),r=await S(o);$(r)})})}v.addEventListener("change",async e=>{const t=e.target.value,o=await S(t);$(o)});async function I(){try{const{data:e}=await d.get("/books/top-books");return e}catch(e){console.error("Error fetching top-books:",e.message)}}async function _(){const e=await I();l.innerHTML="",e.forEach(t=>{l.insertAdjacentHTML("beforeend",A(t.books))})}_();const i=document.getElementById("modal"),P=document.querySelector(".close-button");l.addEventListener("click",async e=>{if(e.target.classList.contains("book-learn-more")){const t=e.target.getAttribute("data-id"),o=await O(t);D(o)}});async function O(e){try{return(await d.get(`/books/${e}`)).data}catch(t){console.error("Error fetching book by ID:",t.message)}}function D(e){console.log(e),i.querySelector(".modal-book-image").src=e.book_image,i.querySelector("h3").innerText=e.title,i.querySelector(".modal-author").innerText=e.author,i.querySelector(".book-card-price").innerText="$"+e.price;const t=document.querySelector(".book-details"),o=document.querySelector(".book-shipping"),r=document.querySelector(".book-returns");t.innerText=e.description,o.innerText=e.amazon_product_url,r.innerText=e.contributor,i.style.display="block"}P.addEventListener("click",()=>{i.style.display="none"});window.addEventListener("click",e=>{e.target===i&&(i.style.display="none")});m.use([q,j]);function x(e){const t=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");e.isBeginning?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled")),e.isEnd?(o.disabled=!0,o.classList.add("disabled")):(o.disabled=!1,o.classList.remove("disabled"))}new m(".swiper",{slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(e){x(e)},slideChange(e){x(e)}}});const H=[{title:"Cozy Book Club — “The Midnight Library”",type:"In-store",date:"June 5, 6:30 PM",desc:"Join us for an evening of tea, thoughtful conversation, and shared reflections as we dive into Matt Haig’s bestseller.",images:{mob1x:"../img/events/mobEvent1.jpg",mob2x:"../img/events/mobEvent1@2x.jpg",tab1x:"../img/events/tabletEvent1.jpg",tab2x:"../img/events/tabletEvent1@2x.jpg",desk1x:"../img/events/event1.jpg",desk2x:"../img/events/event1@2x.jpg"}},{title:"Book Cover Design Workshop",type:"Online",date:"June 12, 7:00 PM",desc:"A hands-on session for aspiring designers and curious readers. Learn what makes a cover stand out — from concept to print.",images:{mob1x:"../img/events/mobEvent2.jpg",mob2x:"../img/events/mobEvent2@2x.jpg",tab1x:"../img/events/tabletEvent2.jpg",tab2x:"../img/events/tabletEvent2@2x.jpg",desk1x:"../img/events/event2.jpg",desk2x:"../img/events/event2@2x.jpg"}},{title:"Children’s Story Hour",type:"In-store",date:"June 18, 11:00 AM",desc:"A magical morning of stories, games, and imagination for our youngest book lovers (ages 4–8).",images:{mob1x:"../img/events/mobEvent3.jpg",mob2x:"../img/events/mobEvent3@2x.jpg",tab1x:"../img/events/tabletEvent3.jpg",tab2x:"../img/events/tabletEvent3@2x.jpg",desk1x:"../img/events/event3.jpg",desk2x:"../img/events/event3@2x.jpg"}}],N=e=>`
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
  </li>`,V=document.querySelector(".events-swiper .swiper-wrapper");V.innerHTML=H.map(N).join("");new m(".events-swiper",{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});const a={email:""},b="feedback-form-state",u=document.querySelector(".footer-form"),J=u.elements.email;u.addEventListener("input",e=>{e.target.name==="email"&&(a.email=e.target.value.trim()),localStorage.setItem(b,JSON.stringify(a))});document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(b);if(e){const t=JSON.parse(e);a.email=t.email||"",J.value=a.email}});u.addEventListener("submit",e=>{if(e.preventDefault(),a.email===""){alert("Fill please all fields.");return}console.log(a),localStorage.removeItem(b),a.email="",u.reset()});
//# sourceMappingURL=index.js.map
