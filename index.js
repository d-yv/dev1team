import{S as f,i as L,a as d,A as O,N as D,K as H,P as V}from"./assets/vendor-iKaUpIhi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),o=document.querySelector("[data-menu]"),r=document.querySelectorAll(".mobile-menu-link");e.addEventListener("click",()=>{o.classList.add("open"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{s()}),r.forEach(n=>{n.addEventListener("click",()=>{s()})});function s(){o.classList.remove("open"),document.body.classList.remove("no-scroll")}document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(i){i.preventDefault();const u=document.querySelector(this.getAttribute("href"));u&&u.scrollIntoView({behavior:"smooth"})})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".custom-prev"),t=document.querySelector(".custom-next"),o=new f(".hero-swiper",{loop:!1,speed:600,slidesPerView:1,navigation:!1,on:{init:s,slideChange:s}});function r(n,i){n&&n.addEventListener("click",u=>{i(u),n.blur()})}r(e,()=>o.slidePrev()),r(t,()=>o.slideNext());function s(n){e.disabled=n.isBeginning,t.disabled=n.isEnd,e.classList.remove("active"),t.classList.remove("active"),n.isBeginning?e.classList.add("active"):n.isEnd&&t.classList.add("active")}});const a=document.getElementById("modal"),j=document.querySelector(".close-button"),R=document.querySelector(".books-list"),l=a.querySelector("#quantity"),z=a.querySelector("#increase"),W=a.querySelector("#decrease"),K=a.querySelector(".book-add-to-card"),F=a.querySelector(".book-buy-now");R.addEventListener("click",async e=>{if(e.target.classList.contains("book-learn-more")){const t=e.target.getAttribute("data-id"),o=await U(t);o&&Y(o)}});j.addEventListener("click",()=>{a.style.display="none",document.body.classList.remove("no-scroll")});window.addEventListener("click",e=>{e.target===a&&(a.style.display="none",document.body.classList.remove("no-scroll"))});z.addEventListener("click",()=>{l.value=parseInt(l.value)+1});W.addEventListener("click",()=>{const e=parseInt(l.value);e>1&&(l.value=e-1)});K.addEventListener("click",()=>{const e=parseInt(l.value);L.info({title:"Added to cart",message:`${e} book(s) successfully added to your cart.`,position:"topRight"})});F.addEventListener("click",()=>{L.success({title:"Thank you!",message:"Your purchase was successful.",position:"topRight"})});async function U(e){try{return(await d.get(`/books/${e}`)).data}catch(t){return console.error("Error getting a book:",t.message),null}}function Y(e){document.body.classList.add("no-scroll"),a.querySelector(".modal-book-image").src=e.book_image||"./img/placeholder.jpg",a.querySelector("h3").innerText=e.title||"No title",a.querySelector(".modal-author").innerText=e.author||"Unknown author",a.querySelector(".book-card-price").innerText=e.price?`$${e.price}`:"N/A",G(e),l.value=1,a.style.display="flex"}function G(e){const t=a.querySelector(".accordion-list");t.innerHTML=`
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
  `,new O(".accordion-container",{duration:400,showMultiple:!0})}d.defaults.baseURL="https://books-backend.p.goit.global";document.querySelector(".books-categories");const q=document.querySelector(".books-category"),g=document.querySelector(".books-list");document.querySelector(".books-load-more");const w=document.querySelector(".books-category-select");async function $(){try{const{data:e}=await d.get("/books/category-list"),t={list_name:"All categories"};return console.log("allCategoriesOption ",t),[t,...e]}catch(e){return console.error("Помилка при отриманні категорій:",e.message),[{list_name:"All categories"}]}}$().then(e=>{console.log("allCategoriesOptionB: ",e),C(e)}).catch(e=>{console.log(e.message)});function C(e){window.innerWidth>=1440?(q.insertAdjacentHTML("beforeend",J(e)),E()):(w.insertAdjacentHTML("beforeend",Q(e)),E())}function J(e){const t='<li class="books-category-item" data-category-name="All categories">All categories</li>',o=e.map(r=>`
        <li class="books-category-item" data-category-name="${r.list_name}">${r.list_name}</li>
    `).join("");return t+o}function Q(e){const t='<option>Categories</option><option value="">All categories</option>',o=e.map(r=>`
        <option value="${r.list_name}">${r.list_name}</option>
    `).join("");return t+o}window.addEventListener("resize",()=>{$().then(e=>{q.innerHTML="",w.innerHTML="",C(e)}).catch(e=>{console.log(e.message)})});async function A(e){try{const{data:t}=await d.get("/books/category",{params:{category:e}});return t}catch(t){console.error("Error fetching books by category:",t.message)}}function M(e){g.innerHTML="",e.map(t=>{g.insertAdjacentHTML("beforeend",Z(t))})}function X(e){return e.map(t=>`
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
    `).join("")}function Z(e){return`
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
    `}function E(){document.querySelectorAll(".books-category-item").forEach(t=>{t.addEventListener("click",async()=>{const o=t.getAttribute("data-category-name"),r=await A(o);M(r)})})}w.addEventListener("change",async e=>{const t=e.target.value,o=await A(t);M(o)});async function ee(){try{const{data:e}=await d.get("/books/top-books");return console.log("data: ",e),e}catch(e){console.error("Error fetching top-books:",e.message)}}async function te(){const e=await ee();g.innerHTML="",e.forEach(t=>{g.insertAdjacentHTML("beforeend",X(t.books))})}te();f.use([D,H,V]);function B(e){const t=document.querySelector(".feedbacks-button-prev"),o=document.querySelector(".feedbacks-button-next");t.blur(),o.blur(),e.isBeginning?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled")),e.isEnd?(o.disabled=!0,o.classList.add("disabled")):(o.disabled=!1,o.classList.remove("disabled"))}new f(".feedbacks-swiper",{slidesPerView:1,slidesPerGroup:1,spaceBetween:24,loop:!1,navigation:{nextEl:".feedbacks-button-next",prevEl:".feedbacks-button-prev"},pagination:{el:".feedbacks-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(e){B(e)},slideChange(e){B(e)}}});function b(e,t){const o={title:t,titleColor:e,position:"bottomRight"};return L.show(o)}let c,S,v,x,T=!1;function I(e){if(!T&&!oe()){setTimeout(()=>I(e),30);return}x.textContent=e,c.classList.remove("visually-hidden"),document.body.style.overflow="hidden"}function m(){c.classList.add("visually-hidden"),document.body.style.overflow=""}function oe(){return c=document.getElementById("events-modal-backdrop"),c?(S=document.getElementById("events-modal-close"),v=document.getElementById("events-modal-form"),x=document.getElementById("events-modal-event-name"),S.addEventListener("click",m),c.addEventListener("click",e=>e.target===c&&m()),document.addEventListener("keydown",e=>e.key==="Escape"&&m()),v.addEventListener("submit",e=>{e.preventDefault(),b(green,"Thank you for registering!"),v.reset(),m()}),T=!0,!0):!1}const ne=document.querySelector(".events-swiper .swiper-wrapper"),N=document.querySelector(".events-btn-prev"),P=document.querySelector(".events-btn-next"),h=new f(".events-swiper",{slidesPerView:1,spaceBetween:5,pagination:{el:".event-swiper-pagination",clickable:!0},navigation:{nextEl:P,prevEl:N},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});function _(e){N.disabled=e.isBeginning,P.disabled=e.isEnd}_(h);h.on("slideChange",()=>_(h));ne.addEventListener("click",e=>{const t=e.target.closest(".event-register");t&&I(t.dataset.title)});const p={email:""},y=document.querySelector(".footer-form");y.elements.email;y.addEventListener("input",e=>{e.target.name==="email"&&(p.email=e.target.value.trim())});y.addEventListener("submit",e=>{if(e.preventDefault(),p.email===""){b("red","Fill please all fields.");return}console.log(p),b("green","Message sent successfully!"),p.email="",y.reset()});const k=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>300?k.classList.add("show"):k.classList.remove("show")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
