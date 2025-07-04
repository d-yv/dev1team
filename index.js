import{a as u,S as y,N as S,K as E}from"./assets/vendor-CA8sBi8U.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),r=document.querySelector("[data-menu]"),s=document.querySelectorAll(".mobile-menu-link");e.addEventListener("click",()=>{r.classList.add("open"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{o()}),s.forEach(n=>{n.addEventListener("click",()=>{o()})});function o(){r.classList.remove("open"),document.body.classList.remove("no-scroll")}document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(c){c.preventDefault();const g=document.querySelector(this.getAttribute("href"));g&&g.scrollIntoView({behavior:"smooth"})})})});u.defaults.baseURL="https://books-backend.p.goit.global";document.querySelector(".books-categories");const b=document.querySelector(".books-category"),l=document.querySelector(".books-list");document.querySelector(".books-load-more");const i=document.querySelector(".books-category-select");async function v(){try{const{data:e}=await u.get("/books/category-list");return e}catch(e){console.error("Error fetching categories:",e.message)}}function h(e){window.innerWidth>=1440?(b.insertAdjacentHTML("beforeend",w(e)),f()):(i.insertAdjacentHTML("beforeend",C(e)),f())}v().then(e=>{h(e)}).catch(e=>{console.log(e.message)});function w(e){const t='<li class="books-category-item" data-category-name="All categories">All categories</li>',r=e.map(s=>`
        <li class="books-category-item" data-category-name="${s.list_name}">${s.list_name}</li>
    `).join("");return t+r}function C(e){const t="<option selected>All categories</option>",r=e.map(s=>`
        <option value="${s.list_name}">${s.list_name}</option>
    `).join("");return t+r}window.addEventListener("resize",()=>{v().then(e=>{b.innerHTML="",i.innerHTML="",h(e)}).catch(e=>{console.log(e.message)})});async function L(e){try{const{data:t}=await u.get("/books/category",{params:{category:e}});return console.log("dataCateg: ",t),t}catch(t){console.log(e),console.error("Error fetching books by category:",t.message)}}function k(e){console.log("booksCategExport:",e),l.innerHTML="",e.map(t=>{console.log("book",t),l.insertAdjacentHTML("beforeend",$(t))})}function q(e){return console.log("arrAll: ",e),e.map(t=>`
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
    `).join("")}function $(e){return console.log("arrCateg: ",e),`
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
    `}function f(){document.querySelectorAll(".books-category-item").forEach(t=>{t.addEventListener("click",async()=>{const r=t.getAttribute("data-category-name"),s=await L(r);console.log("booksCateg",s),k(s)})})}i.addEventListener("change",async()=>{const e=i.options[i.selectedIndex].text,t=await L(e);k(t)});async function A(){try{const{data:e}=await u.get("/books/top-books");return console.log("data: ",e),e}catch(e){console.error("Error fetching top-books:",e.message)}}async function B(){const e=await A();l.innerHTML="",e.forEach(t=>{l.insertAdjacentHTML("beforeend",q(t.books))})}B();y.use([S,E]);function p(e){const t=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");e.isBeginning?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled")),e.isEnd?(r.disabled=!0,r.classList.add("disabled")):(r.disabled=!1,r.classList.remove("disabled"))}new y(".swiper",{slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(e){p(e)},slideChange(e){p(e)}}});const a={email:""},m="feedback-form-state",d=document.querySelector(".footer-form"),M=d.elements.email;d.addEventListener("input",e=>{e.target.name==="email"&&(a.email=e.target.value.trim()),localStorage.setItem(m,JSON.stringify(a))});document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(m);if(e){const t=JSON.parse(e);a.email=t.email||"",M.value=a.email}});d.addEventListener("submit",e=>{if(e.preventDefault(),a.email===""){alert("Fill please all fields.");return}console.log(a),localStorage.removeItem(m),a.email="",d.reset()});
//# sourceMappingURL=index.js.map
