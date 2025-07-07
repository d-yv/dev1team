import{S as v,a as u,A as O,N as P,K as D,P as H,i as V}from"./assets/vendor-iKaUpIhi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),o=document.querySelector("[data-menu]"),a=document.querySelectorAll(".mobile-menu-link");e.addEventListener("click",()=>{o.classList.add("open"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{s()}),a.forEach(n=>{n.addEventListener("click",()=>{s()})});function s(){o.classList.remove("open"),document.body.classList.remove("no-scroll")}document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(i){i.preventDefault();const m=document.querySelector(this.getAttribute("href"));m&&m.scrollIntoView({behavior:"smooth"})})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".custom-prev"),t=document.querySelector(".custom-next"),o=new v(".hero-swiper",{loop:!1,speed:600,slidesPerView:1,navigation:!1,on:{init:s,slideChange:s}});function a(n,i){n&&n.addEventListener("click",m=>{i(m),n.blur()})}a(e,()=>o.slidePrev()),a(t,()=>o.slideNext());function s(n){e.disabled=n.isBeginning,t.disabled=n.isEnd,e.classList.remove("active"),t.classList.remove("active"),n.isBeginning?e.classList.add("active"):n.isEnd&&t.classList.add("active")}});const r=document.getElementById("modal"),j=document.querySelector(".close-button"),z=document.querySelector(".books-list"),d=r.querySelector("#quantity"),K=r.querySelector("#increase"),R=r.querySelector("#decrease");z.addEventListener("click",async e=>{if(e.target.classList.contains("book-learn-more")){const t=e.target.getAttribute("data-id"),o=await W(t);o&&F(o)}});j.addEventListener("click",()=>{r.style.display="none"});window.addEventListener("click",e=>{e.target===r&&(r.style.display="none")});K.addEventListener("click",()=>{d.value=parseInt(d.value)+1});R.addEventListener("click",()=>{const e=parseInt(d.value);e>1&&(d.value=e-1)});async function W(e){try{return(await u.get(`/books/${e}`)).data}catch(t){return console.error("Ошибка при получении книги:",t.message),null}}function F(e){r.querySelector(".modal-book-image").src=e.book_image||"./img/placeholder.jpg",r.querySelector("h3").innerText=e.title||"No title",r.querySelector(".modal-author").innerText=e.author||"Unknown author",r.querySelector(".book-card-price").innerText=e.price?`$${e.price}`:"N/A",G(e),d.value=1,r.style.display="block"}function G(e){const t=r.querySelector(".accordion-list");t.innerHTML=`
    <div class="accordion-container">
      <div class="ac accordion-item">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger">Details</button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text book-details">${e.description||"No details"}</p>
        </div>
      </div>
      <div class="ac accordion-item">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger">Shipping</button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text book-shipping">${e.amazon_product_url||"Shipping info not available"}</p>
        </div>
      </div>
      <div class="ac accordion-item">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger">Returns</button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text book-returns">${e.contributor||"No return policy info"}</p>
        </div>
      </div>
    </div>
  `,new O(".accordion-container",{duration:400,showMultiple:!0})}u.defaults.baseURL="https://books-backend.p.goit.global";document.querySelector(".books-categories");const B=document.querySelector(".books-category"),g=document.querySelector(".books-list");document.querySelector(".books-load-more");const L=document.querySelector(".books-category-select");async function q(){try{const{data:e}=await u.get("/books/category-list"),t={list_name:"All categories"};return console.log("allCategoriesOption ",t),[t,...e]}catch(e){return console.error("Помилка при отриманні категорій:",e.message),[{list_name:"All categories"}]}}q().then(e=>{console.log("allCategoriesOptionB: ",e),$(e)}).catch(e=>{console.log(e.message)});function $(e){window.innerWidth>=1440?(B.insertAdjacentHTML("beforeend",J(e)),w()):(L.insertAdjacentHTML("beforeend",U(e)),w())}function J(e){const t='<li class="books-category-item" data-category-name="All categories">All categories</li>',o=e.map(a=>`
        <li class="books-category-item" data-category-name="${a.list_name}">${a.list_name}</li>
    `).join("");return t+o}function U(e){const t='<option>Categories</option><option value="">All categories</option>',o=e.map(a=>`
        <option value="${a.list_name}">${a.list_name}</option>
    `).join("");return t+o}window.addEventListener("resize",()=>{q().then(e=>{B.innerHTML="",L.innerHTML="",$(e)}).catch(e=>{console.log(e.message)})});async function C(e){try{const{data:t}=await u.get("/books/category",{params:{category:e}});return t}catch(t){console.error("Error fetching books by category:",t.message)}}function A(e){g.innerHTML="",e.map(t=>{g.insertAdjacentHTML("beforeend",Q(t))})}function Y(e){return e.map(t=>`
        <li class="books-item" data-id="${t._id}">
            <img src="${t.book_image}" alt="${t.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${t.title}</h3>
                <p>${t.author}</p>
                </div>
                <div class="book-card-price">$${parseInt(t.price,10)}</div>
            </div>
            <button class="book-learn-more" data-id="${t._id}">Learn more</button>
        </li>
    `).join("")}function Q(e){return`
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
    `}function w(){document.querySelectorAll(".books-category-item").forEach(t=>{t.addEventListener("click",async()=>{const o=t.getAttribute("data-category-name"),a=await C(o);A(a)})})}L.addEventListener("change",async e=>{const t=e.target.value,o=await C(t);A(o)});async function X(){try{const{data:e}=await u.get("/books/top-books");return console.log("data: ",e),e}catch(e){console.error("Error fetching top-books:",e.message)}}async function Z(){const e=await X();g.innerHTML="",e.forEach(t=>{g.insertAdjacentHTML("beforeend",Y(t.books))})}Z();v.use([P,D,H]);function E(e){const t=document.querySelector(".feedbacks-button-prev"),o=document.querySelector(".feedbacks-button-next");e.isBeginning?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled")),e.isEnd?(o.disabled=!0,o.classList.add("disabled")):(o.disabled=!1,o.classList.remove("disabled"))}new v(".feedbacks-swiper",{slidesPerView:1,slidesPerGroup:1,spaceBetween:24,loop:!1,navigation:{nextEl:".feedbacks-button-next",prevEl:".feedbacks-button-prev"},pagination:{el:".feedbacks-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(e){E(e)},slideChange(e){E(e)}}});let l,S,y,M,I=!1;function x(e){if(!I&&!ee()){setTimeout(()=>x(e),30);return}M.textContent=e,l.classList.remove("events-modal--hidden"),document.body.style.overflow="hidden"}function p(){l.classList.add("events-modal--hidden"),document.body.style.overflow=""}function ee(){return l=document.getElementById("events-modal-backdrop"),l?(S=document.getElementById("events-modal-close"),y=document.getElementById("events-modal-form"),M=document.getElementById("events-modal-event-name"),S.addEventListener("click",p),l.addEventListener("click",e=>e.target===l&&p()),document.addEventListener("keydown",e=>e.key==="Escape"&&p()),y.addEventListener("submit",e=>{e.preventDefault(),alert("Thank you for registering!"),y.reset(),p()}),I=!0,!0):!1}const te=document.querySelector(".events-swiper .swiper-wrapper"),T=document.querySelector(".events-btn-prev"),N=document.querySelector(".events-btn-next"),b=new v(".events-swiper",{slidesPerView:1,spaceBetween:5,pagination:{el:".event-swiper-pagination",clickable:!0},navigation:{nextEl:N,prevEl:T},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});function _(e){T.disabled=e.isBeginning,N.disabled=e.isEnd}_(b);b.on("slideChange",()=>_(b));te.addEventListener("click",e=>{const t=e.target.closest(".event-register");t&&(console.log(t.dataset.title),x(t.dataset.title))});function oe(e,t){const o={title:t,titleColor:e,position:"bottomRight"};return V.show(o)}const c={email:""},k="feedback-form-state",f=document.querySelector(".footer-form"),ne=f.elements.email;f.addEventListener("input",e=>{e.target.name==="email"&&(c.email=e.target.value.trim()),localStorage.setItem(k,JSON.stringify(c))});document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(k);if(e){const t=JSON.parse(e);c.email=t.email||"",ne.value=c.email}});f.addEventListener("submit",e=>{if(e.preventDefault(),c.email===""){alert("Fill please all fields.");return}console.log(c),oe("green","Message sent successfully!"),localStorage.removeItem(k),c.email="",f.reset()});const h=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>300?h.classList.add("show"):h.classList.remove("show")});h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
