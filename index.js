import{a as g,S as m,N as w,K as L}from"./assets/vendor-DT5qPb-V.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),s=document.querySelector("[data-menu]"),a=document.querySelectorAll(".mobile-menu-link");e.addEventListener("click",()=>{s.classList.add("open"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{o()}),a.forEach(n=>{n.addEventListener("click",()=>{o()})});function o(){s.classList.remove("open"),document.body.classList.remove("no-scroll")}document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(i){i.preventDefault();const p=document.querySelector(this.getAttribute("href"));p&&p.scrollIntoView({behavior:"smooth"})})})});g.defaults.baseURL="https://books-backend.p.goit.global";document.querySelector(".books-categories");const f=document.querySelector(".books-category"),l=document.querySelector(".books-list");document.querySelector(".books-load-more");const c=document.querySelector(".books-category-select");async function y(){try{const{data:e}=await g.get("/books/category-list");return e}catch(e){console.error("Error fetching categories:",e.message)}}function h(e){window.innerWidth>=1440?(f.insertAdjacentHTML("beforeend",E(e)),v()):(c.insertAdjacentHTML("beforeend",S(e)),v())}y().then(e=>{h(e)}).catch(e=>{console.log(e.message)});function E(e){const t='<li class="books-category-item" data-category-name="All categories">All categories</li>',s=e.map(a=>`
        <li class="books-category-item" data-category-name="${a.list_name}">${a.list_name}</li>
    `).join("");return t+s}function S(e){const t="<option selected>All categories</option>",s=e.map(a=>`
        <option value="${a.list_name}">${a.list_name}</option>
    `).join("");return t+s}window.addEventListener("resize",()=>{y().then(e=>{f.innerHTML="",c.innerHTML="",h(e)}).catch(e=>{console.log(e.message)})});async function x(e){try{const{data:t}=await g.get("/books/category",{params:{category:e}});return console.log("dataCateg: ",t),t}catch(t){console.log(e),console.error("Error fetching books by category:",t.message)}}function k(e){console.log("booksCategExport:",e),l.innerHTML="",e.map(t=>{console.log("book",t),l.insertAdjacentHTML("beforeend",j(t))})}function $(e){return console.log("arrAll: ",e),e.map(t=>`
        <li class="books-item">
            <img src="${t.book_image}" alt="${t.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${t.title}</h3>
                <p>${t.author}</p>
                </div>
                <div class="book-card-price">$${t.price}</div>
            </div>
            <button class="book-learn-more">Learn more</button>
        </li>
    `).join("")}function j(e){return console.log("arrCateg: ",e),`
        <li class="books-item">
            <img src="${e.book_image}" alt="${e.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${e.title}</h3>
                <p>${e.author}</p>
                </div>
                <div class="book-card-price">$${e.price}</div>
            </div>
            <button class="book-learn-more">Learn more</button>
        </li>
    `}function v(){document.querySelectorAll(".books-category-item").forEach(t=>{t.addEventListener("click",async()=>{const s=t.getAttribute("data-category-name"),a=await x(s);console.log("booksCateg",a),k(a)})})}c.addEventListener("change",async()=>{const e=c.options[c.selectedIndex].text,t=await x(e);k(t)});async function C(){try{const{data:e}=await g.get("/books/top-books");return console.log("data: ",e),e}catch(e){console.error("Error fetching top-books:",e.message)}}async function B(){const e=await C();l.innerHTML="",e.forEach(t=>{l.insertAdjacentHTML("beforeend",$(t.books))})}B();m.use([w,L]);function b(e){const t=document.querySelector(".swiper-button-prev"),s=document.querySelector(".swiper-button-next");e.isBeginning?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled")),e.isEnd?(s.disabled=!0,s.classList.add("disabled")):(s.disabled=!1,s.classList.remove("disabled"))}new m(".swiper",{slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(e){b(e)},slideChange(e){b(e)}}});const M=[{title:"Cozy Book Club — “The Midnight Library”",type:"In-store",date:"June 5, 6:30 PM",desc:"Join us for an evening of tea, thoughtful conversation, and shared reflections as we dive into Matt Haig’s bestseller.",images:{mob1x:"./img/events/mobEvent1.jpg",mob2x:"./img/events/mobEvent1@2x.jpg",tab1x:"./img/events/tabletEvent1.jpg",tab2x:"./img/events/tabletEvent1@2x.jpg",desk1x:"./img/events/event1.jpg",desk2x:"./img/events/event1@2x.jpg"}},{title:"Book Cover Design Workshop",type:"Online",date:"June 12, 7:00 PM",desc:"A hands-on session for aspiring designers and curious readers. Learn what makes a cover stand out — from concept to print.",images:{mob1x:"./img/events/mobEvent2.jpg",mob2x:"./img/events/mobEvent2@2x.jpg",tab1x:"./img/events/tabletEvent2.jpg",tab2x:"./img/events/tabletEvent2@2x.jpg",desk1x:"./img/events/event2.jpg",desk2x:"./img/events/event2@2x.jpg"}},{title:"Children’s Story Hour",type:"In-store",date:"June 18, 11:00 AM",desc:"A magical morning of stories, games, and imagination for our youngest book lovers (ages 4–8).",images:{mob1x:"./img/events/mobEvent3.jpg",mob2x:"./img/events/mobEvent3@2x.jpg",tab1x:"./img/events/tabletEvent3.jpg",tab2x:"./img/events/tabletEvent3@2x.jpg",desk1x:"./img/events/event3.jpg",desk2x:"./img/events/event3@2x.jpg"}}],A=e=>`
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
  </li>`,q=document.querySelector(".events-swiper .swiper-wrapper");q.innerHTML=M.map(A).join("");new m(".events-swiper",{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});const r={email:""},u="feedback-form-state",d=document.querySelector(".footer-form"),I=d.elements.email;d.addEventListener("input",e=>{e.target.name==="email"&&(r.email=e.target.value.trim()),localStorage.setItem(u,JSON.stringify(r))});document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(u);if(e){const t=JSON.parse(e);r.email=t.email||"",I.value=r.email}});d.addEventListener("submit",e=>{if(e.preventDefault(),r.email===""){alert("Fill please all fields.");return}console.log(r),localStorage.removeItem(u),r.email="",d.reset()});
//# sourceMappingURL=index.js.map
