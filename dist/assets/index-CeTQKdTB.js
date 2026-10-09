(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={logo:`/assets/15781.svg`,edit:`/assets/6bd99.svg`,divider:`/assets/82e35.svg`,shield:`/assets/5159c.svg`,check:`/assets/d5c47.svg`,star:`/assets/f11d9.svg`,leftLaurel:`/assets/c50c3.svg`,rightLaurel:`/assets/d4399.svg`,zerodhaLaurel:`/assets/eefd6.svg`,zerodha:`/assets/6eefa.svg`},t=[{title:`Health Insurance`,description:`Covers your medical bills if you are hospitalized.`},{title:`Term Insurance`,description:`Your family gets 1 Crore or more in the event of your passing.`},{title:`I need both`,description:`Protect your health and your family’s financial future.`},{title:`I’m not sure`,description:`An advisor will help you understand your options.`}],n=document.querySelector(`#app`),r={step:0,choice:`Health Insurance`,booking:null,customSchedule:!1,scheduleError:``,details:{name:``,email:``,phone:``},attemptedDetails:!1};function i(){return new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Kolkata`,year:`numeric`,month:`2-digit`,day:`2-digit`}).format(new Date)}function a(e,t){let n=new Date(`${e}T12:00:00`);return n.setDate(n.getDate()+t),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}`}function o(e){return`${Math.floor(e/60)%12||12}:${String(e%60).padStart(2,`0`)} ${e<720?`am`:`pm`}`}function s(e){return`${new Date(`${e.date}T12:00:00`).toLocaleDateString(`en-IN`,{weekday:`short`,day:`numeric`,month:`short`})} · ${o(e.minutes)}`}function c(e){return Array.from({length:18},(e,t)=>600+t*30).filter(t=>new Date(`${e}T${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}:00+05:30`).getTime()>Date.now()+18e5)}function l(){let e=i(),t=c(e);return t.length?{date:e,minutes:t[0]}:{date:a(e,1),minutes:600}}function u(e){return String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function d(t=!1){return`
    <header class="app-header">
      ${t?`<button class="header-edit" type="button" data-action="back"><span aria-hidden="true">‹</span>Back</button>`:``}
      <img alt="Ditto" class="logo" height="41" src="${e.logo}" width="90" />
    </header>
  `}function f(e){return`
    <div aria-label="Step ${e} of 4" aria-valuemax="4" aria-valuemin="1" aria-valuenow="${e}" class="progress" role="progressbar">
      <span style="width: ${e*25}%"></span>
    </div>
  `}function p(e,t=`button`){return`<button class="primary-button" type="${t}">${e}</button>`}function m(){return`
    <div class="screen welcome">
      ${d()}
      <main class="welcome-main">
        <section>
          <h1>Insurance advice without the sales pressure.</h1>
          <p class="lead">Talk to an IRDAI certified advisor who explains it in your native language.</p>
        </section>
        <div class="badges">
          <span>30 min consultation</span>
          <span>Zero Cost</span>
          <span>Zero Spam</span>
        </div>
        <div class="trust-row">
          <div class="trust-item">
            <div class="laurel-rating">
              <img alt="" class="laurel left" src="${e.leftLaurel}" />
              <span>4.9</span>
              <img alt="" class="rating-star" src="${e.star}" />
              <img alt="" class="laurel right" src="${e.rightLaurel}" />
            </div>
            <p>30K+ Ratings on google</p>
          </div>
          <div class="trust-item">
            <div class="zerodha-mark">
              <img alt="" class="zerodha-laurel" src="${e.zerodhaLaurel}" />
              <img alt="Zerodha" class="zerodha-logo" src="${e.zerodha}" />
            </div>
            <p>Backed by zerodha</p>
          </div>
        </div>
      </main>
      <div class="welcome-actions">
        <button class="primary-button" data-action="start" type="button">Get free insurance advice</button>
        <button class="secondary-button" data-action="start" type="button">Book a free call now</button>
      </div>
    </div>
  `}function h(){return`
    <div class="screen">
      ${d(!0)}
      <main class="flow-main">
        ${f(1)}
        <section class="intro">
          <h1>What do you need help with ?</h1>
          <p class="lead">Start with one simple choice and we&apos;ll take you to the most effective insurance according to your needs</p>
        </section>
        <div class="choice-list">
          ${t.map(e=>`
                <button class="choice-card" data-choice="${u(e.title)}" type="button">
                  <strong>${e.title}</strong>
                  <span>${e.description}</span>
                </button>
              `).join(``)}
        </div>
      </main>
    </div>
  `}function g(){let e=l(),t={date:a(i(),1),minutes:600},n=[{value:`earliest`,title:s(e),booking:e,quickest:!0},...e.date===t.date&&e.minutes===t.minutes?[]:[{value:`tomorrow`,title:s(t),booking:t,quickest:!1}],{value:`custom`,title:`Choose another time`,booking:null,quickest:!1}],u=r.choice===`I’m not sure`?`your insurance needs`:r.choice===`I need both`?`health and term insurance`:r.choice.toLowerCase(),p=c(r.booking.date),m=i(),h=a(m,30);return`
    <div class="screen">
      ${d(!0)}
      <main class="flow-main has-sticky-actions">
        ${f(2)}
        <section class="intro schedule-intro">
          <h1>Choose a time that works for you</h1>
          <p class="lead">A free 30-minute call about ${u}. All times are in India Standard Time (IST).</p>
        </section>
        <div class="schedule-list">
          ${n.map(e=>{let t=e.booking?!r.customSchedule&&r.booking.date===e.booking.date&&r.booking.minutes===e.booking.minutes:r.customSchedule;return`
                <button aria-pressed="${t}" class="schedule-card${t?` selected`:``}" data-schedule="${e.value}" type="button">
                  <span>
                    ${e.quickest?`<small>Free consultation</small>`:``}
                    <strong>${e.title}</strong>
                  </span>
                  ${e.quickest?`<em>Quickest</em>`:``}
                </button>
              `}).join(``)}
        </div>
        ${r.customSchedule?`
              <section aria-label="Choose date and time" class="time-picker">
                <label for="booking-date">Choose a date</label>
                <input id="booking-date" type="date" value="${r.booking.date}" min="${m}" max="${h}" />
                <p>Available start times · IST</p>
                <div class="time-grid">
                  ${p.map(e=>`
                        <button aria-pressed="${r.booking.minutes===e}" class="${r.booking.minutes===e?`active`:``}" data-time="${e}" type="button">${o(e)}</button>
                      `).join(``)}
                </div>
                ${p.length?``:`<p role="status">No more slots today. Please choose another date.</p>`}
              </section>
            `:``}
        <p class="schedule-note">Selected: ${r.booking.minutes>=0?s(r.booking):`Choose an available time`}</p>
        ${r.scheduleError?`<p class="field-error" role="alert">${r.scheduleError}</p>`:``}
      </main>
      <div class="sticky-actions">
        <button class="primary-button" data-action="confirm-booking" type="button">Confirm Schedule</button>
        <div class="or-divider"><span></span>OR<span></span></div>
        <button class="whatsapp-button" data-action="whatsapp" type="button">Chat on WhatsApp Instead</button>
      </div>
    </div>
  `}function _(){let t=r.details.name.trim().length>1,n=/^\S+@\S+\.\S+$/.test(r.details.email),i=/^(?:\+91[\s-]?)?[6-9]\d{9}$/.test(r.details.phone.replace(/[\s-]/g,``)),a=t&&n&&i,o=[t?``:`Enter your name (at least 2 characters).`,n?``:`Enter a valid email address.`,i?``:`Enter a valid 10-digit Indian mobile number, optionally with +91.`].filter(Boolean).join(` `);return`
    <div class="screen">
      ${d(!0)}
      <main class="flow-main details-main">
        ${f(3)}
        <h1 class="details-title">Almost Done</h1>
        <div class="summary-card">
          <div>
            <small>Our advisor will call you</small>
            <strong>${u(s(r.booking).replace(` · `,`  ·  `))}</strong>
          </div>
          <img alt="" class="vertical-divider" src="${e.divider}" />
          <button data-action="back" type="button"><img alt="" height="20" src="${e.edit}" width="20" />Edit</button>
        </div>
        <form class="details-form" novalidate>
          <p>Please fill below details</p>
          <label class="${r.attemptedDetails&&!t?`invalid`:``}">
            <span>Name*</span>
            <input aria-invalid="${r.attemptedDetails&&!t}" autocomplete="name" name="name" placeholder="Name*" value="${u(r.details.name)}" />
          </label>
          <label class="${r.attemptedDetails&&!n?`invalid`:``}">
            <span>Email*</span>
            <input aria-invalid="${r.attemptedDetails&&!n}" autocomplete="email" name="email" placeholder="Email*" type="email" value="${u(r.details.email)}" />
          </label>
          <label class="${r.attemptedDetails&&!i?`invalid`:``}">
            <span>Phone Number*</span>
            <input aria-invalid="${r.attemptedDetails&&!i}" autocomplete="tel" inputmode="tel" name="phone" placeholder="Phone Number*" value="${u(r.details.phone)}" />
          </label>
          ${r.attemptedDetails&&!a?`<p class="field-error" role="alert">${o}</p>`:``}
          <div class="privacy-note">
            <img alt="" height="29" src="${e.shield}" width="27" />
            <span>We promise a strictly spam-free service. We will not call you unless you ask us to do so.</span>
          </div>
          <div class="form-action">${p(`Confirm Schedule`,`submit`)}</div>
        </form>
      </main>
    </div>
  `}function v(){let t=r.details.name.trim().split(` `)[0]||`Omkar`,n=r.choice===`I need both`?`Health & Term Insurance`:r.choice===`I’m not sure`?`Insurance advice`:r.choice;return`
    <div class="screen">
      ${d(!0)}
      <main class="flow-main confirmation-main">
        ${f(4)}
        <img alt="" class="success-check" src="${e.check}" />
        <h1>Booking Confirmed</h1>
        <div class="booking-card">
          <strong>${n}</strong>
          <div><span>${s(r.booking)} – ${o(r.booking.minutes+30)} IST</span></div>
          <p>A free 30-minute consultation to discuss your insurance needs with a Ditto advisor.</p>
        </div>
        <div class="thank-you">
          <p>Thank you ${u(t)}, for booking a call with us.<br />This is a prototype booking. No call or email has been scheduled.</p>
          <p>In the meantime you can also have a look at</p>
        </div>
        <div class="confirmation-actions">
          <button data-action="calendar" type="button">Add to calendar</button>
          <button data-action="restart" type="button">Back to home</button>
        </div>
      </main>
    </div>
  `}function y(){let e=[m,h,g,_,v],t=document.createElement(`div`);t.className=`transition-stage`,t.innerHTML=e[r.step](),n.replaceChildren(t)}function b(e){r.step=e,y()}function x(){let e=new Date(`${r.booking.date}T${String(Math.floor(r.booking.minutes/60)).padStart(2,`0`)}:${String(r.booking.minutes%60).padStart(2,`0`)}:00+05:30`),t=e=>e.toISOString().replace(/[-:]/g,``).replace(/\.\d{3}/,``),n=[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Ditto Prototype//EN`,`BEGIN:VEVENT`,`UID:${typeof crypto.randomUUID==`function`?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`}@ditto-prototype`,`DTSTAMP:${t(new Date)}`,`DTSTART:${t(e)}`,`DTEND:${t(new Date(e.getTime()+18e5))}`,`SUMMARY:Ditto consultation (prototype)`,`DESCRIPTION:Demo only. No advisor call has been scheduled.`,`END:VEVENT`,`END:VCALENDAR`].join(`\r
`),i=URL.createObjectURL(new Blob([n],{type:`text/calendar`})),a=document.createElement(`a`);a.href=i,a.download=`ditto-consultation.ics`,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}n.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(t){if(t.dataset.choice)r.choice=t.dataset.choice,r.customSchedule=!1,r.scheduleError=``,b(2);else if(t.dataset.schedule)r.scheduleError=``,r.customSchedule=t.dataset.schedule===`custom`,t.dataset.schedule===`earliest`&&(r.booking=l()),t.dataset.schedule===`tomorrow`&&(r.booking={date:a(i(),1),minutes:600}),y();else if(t.dataset.time)r.booking.minutes=Number(t.dataset.time),r.scheduleError=``,y();else switch(t.dataset.action){case`start`:b(1);break;case`back`:b(Math.max(0,r.step-1));break;case`confirm-booking`:c(r.booking.date).includes(r.booking.minutes)?(r.attemptedDetails=!1,b(3)):(r.customSchedule=!0,r.scheduleError=`That time is no longer available. Please choose a new slot.`,y());break;case`whatsapp`:window.open(`https://wa.me/?text=${encodeURIComponent(`Hi, I'd like free advice about ${r.choice.toLowerCase()}.`)}`,`_blank`,`noopener,noreferrer`);break;case`calendar`:x();break;case`restart`:r.details={name:``,email:``,phone:``},r.choice=`Health Insurance`,r.booking=l(),r.customSchedule=!1,r.attemptedDetails=!1,b(0)}}}),n.addEventListener(`input`,e=>{let t=e.target;t.name in r.details&&(r.details[t.name]=t.value)}),n.addEventListener(`change`,e=>{if(e.target.id!==`booking-date`)return;let t=e.target.value;t<i()||t>a(i(),30)||(r.booking={date:t,minutes:c(t)[0]??-1},r.scheduleError=``,y())}),n.addEventListener(`submit`,e=>{if(!e.target.matches(`.details-form`))return;e.preventDefault(),r.attemptedDetails=!0;let t=r.details.name.trim().length>1,n=/^\S+@\S+\.\S+$/.test(r.details.email),i=/^(?:\+91[\s-]?)?[6-9]\d{9}$/.test(r.details.phone.replace(/[\s-]/g,``));t&&n&&i?b(4):y()}),r.booking=l(),y();