import{S as m,A as L,a as d,N as E,K as S}from"./assets/vendor-DLs3LGhZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),n=document.querySelector("[data-menu]"),s=document.querySelectorAll(".mobile-menu-link");e.addEventListener("click",()=>{n.classList.add("open"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{o()}),s.forEach(r=>{r.addEventListener("click",()=>{o()})});function o(){n.classList.remove("open"),document.body.classList.remove("no-scroll")}document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(c){c.preventDefault();const v=document.querySelector(this.getAttribute("href"));v&&v.scrollIntoView({behavior:"smooth"})})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".custom-prev"),t=document.querySelector(".custom-next"),n=new m(".hero-swiper",{slidesPerView:1,loop:!1,speed:600,navigation:!1,spaceBetween:0,allowTouchMove:!0,observer:!0,observeParents:!0,resizeObserver:!0,on:{init(o){s(o)},slideChange(o){s(o)}}});e.addEventListener("click",()=>{e.disabled||n.slidePrev()}),t.addEventListener("click",()=>{t.disabled||n.slideNext()});function s(o){e.disabled=o.isBeginning,t.disabled=o.isEnd}});new L(".accordion-container",{duration:400,showMultiple:!0});d.defaults.baseURL="https://books-backend.p.goit.global";document.querySelector(".books-categories");const f=document.querySelector(".books-category"),l=document.querySelector(".books-list");document.querySelector(".books-load-more");const g=document.querySelector(".books-category-select");async function h(){try{const{data:e}=await d.get("/books/category-list");return e}catch(e){console.error("Error fetching categories:",e.message)}}h().then(e=>{x(e)}).catch(e=>{console.log(e.message)});function x(e){window.innerWidth>=1440?(f.insertAdjacentHTML("beforeend",$(e)),b()):(g.insertAdjacentHTML("beforeend",B(e)),b())}function $(e){const t='<li class="books-category-item" data-category-name="All categories">All categories</li>',n=e.map(s=>`
        <li class="books-category-item" data-category-name="${s.list_name}">${s.list_name}</li>
    `).join("");return t+n}function B(e){const t='<option>Categories</option><option value="">All categories</option>',n=e.map(s=>`
        <option value="${s.list_name}">${s.list_name}</option>
    `).join("");return t+n}window.addEventListener("resize",()=>{h().then(e=>{f.innerHTML="",g.innerHTML="",x(e)}).catch(e=>{console.log(e.message)})});async function k(e){try{const{data:t}=await d.get("/books/category",{params:{category:e}});return t}catch(t){console.error("Error fetching books by category:",t.message)}}function w(e){l.innerHTML="",e.map(t=>{l.insertAdjacentHTML("beforeend",j(t))})}function q(e){return e.map(t=>`
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
    `).join("")}function j(e){return`
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
    `}function b(){document.querySelectorAll(".books-category-item").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-category-name"),s=await k(n);w(s)})})}g.addEventListener("change",async e=>{const t=e.target.value,n=await k(t);w(n)});async function C(){try{const{data:e}=await d.get("/books/top-books");return e}catch(e){console.error("Error fetching top-books:",e.message)}}async function M(){const e=await C();l.innerHTML="",e.forEach(t=>{l.insertAdjacentHTML("beforeend",q(t.books))})}M();const a=document.getElementById("modal"),T=document.querySelector(".close-button");l.addEventListener("click",async e=>{if(e.target.classList.contains("book-learn-more")){const t=e.target.getAttribute("data-id"),n=await A(t);I(n)}});async function A(e){try{return(await d.get(`/books/${e}`)).data}catch(t){console.error("Error fetching book by ID:",t.message)}}function I(e){console.log(e),a.querySelector(".modal-book-image").src=e.book_image,a.querySelector("h3").innerText=e.title,a.querySelector(".modal-author").innerText=e.author,a.querySelector(".book-card-price").innerText="$"+e.price;const t=document.querySelector(".book-details"),n=document.querySelector(".book-shipping"),s=document.querySelector(".book-returns");t.innerText=e.description,n.innerText=e.amazon_product_url,s.innerText=e.contributor,a.style.display="block"}T.addEventListener("click",()=>{a.style.display="none"});window.addEventListener("click",e=>{e.target===a&&(a.style.display="none")});m.use([E,S]);function y(e){const t=document.querySelector(".swiper-button-prev"),n=document.querySelector(".swiper-button-next");e.isBeginning?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled")),e.isEnd?(n.disabled=!0,n.classList.add("disabled")):(n.disabled=!1,n.classList.remove("disabled"))}new m(".swiper",{slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(e){y(e)},slideChange(e){y(e)}}});const P=[{title:"Cozy Book Club — “The Midnight Library”",type:"In-store",date:"June 5, 6:30 PM",desc:"Join us for an evening of tea, thoughtful conversation, and shared reflections as we dive into Matt Haig’s bestseller.",images:{mob1x:"../img/events/mobEvent1.jpg",mob2x:"../img/events/mobEvent1@2x.jpg",tab1x:"../img/events/tabletEvent1.jpg",tab2x:"../img/events/tabletEvent1@2x.jpg",desk1x:"../img/events/event1.jpg",desk2x:"../img/events/event1@2x.jpg"}},{title:"Book Cover Design Workshop",type:"Online",date:"June 12, 7:00 PM",desc:"A hands-on session for aspiring designers and curious readers. Learn what makes a cover stand out — from concept to print.",images:{mob1x:"../img/events/mobEvent2.jpg",mob2x:"../img/events/mobEvent2@2x.jpg",tab1x:"../img/events/tabletEvent2.jpg",tab2x:"../img/events/tabletEvent2@2x.jpg",desk1x:"../img/events/event2.jpg",desk2x:"../img/events/event2@2x.jpg"}},{title:"Children’s Story Hour",type:"In-store",date:"June 18, 11:00 AM",desc:"A magical morning of stories, games, and imagination for our youngest book lovers (ages 4–8).",images:{mob1x:"../img/events/mobEvent3.jpg",mob2x:"../img/events/mobEvent3@2x.jpg",tab1x:"../img/events/tabletEvent3.jpg",tab2x:"../img/events/tabletEvent3@2x.jpg",desk1x:"../img/events/event3.jpg",desk2x:"../img/events/event3@2x.jpg"}}],O=e=>`
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
  </li>`,_=document.querySelector(".events-swiper .swiper-wrapper");_.innerHTML=P.map(O).join("");new m(".events-swiper",{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});const i={email:""},p="feedback-form-state",u=document.querySelector(".footer-form"),D=u.elements.email;u.addEventListener("input",e=>{e.target.name==="email"&&(i.email=e.target.value.trim()),localStorage.setItem(p,JSON.stringify(i))});document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(p);if(e){const t=JSON.parse(e);i.email=t.email||"",D.value=i.email}});u.addEventListener("submit",e=>{if(e.preventDefault(),i.email===""){alert("Fill please all fields.");return}console.log(i),localStorage.removeItem(p),i.email="",u.reset()});
//# sourceMappingURL=index.js.map
