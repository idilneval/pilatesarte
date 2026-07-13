/* booking.js — Pilates Arte rezervasyon takvimi
   Only day picking: choosing a day on the calendar reveals a short contact
   form (name, phone, message) pre-filled with the chosen date. Submission is
   front-end only (no backend) — mirrors the newsletter form pattern. */
(function(){
  "use strict";
  var TR_MONTHS = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
  var TR_DAYS = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

  function $(id){ return document.getElementById(id); }
  var grid = $("bkGrid"); if(!grid) return;
  var monthLbl=$("bkMonth"), prevBtn=$("bkPrev"), nextBtn=$("bkNext"),
      dateLbl=$("bkDateLabel"), hint=$("bkHint"), form=$("bkForm"),
      msgField=$("bkMessage"), summary=$("bkSummary");

  function pad(n){ return n<10?"0"+n:""+n; }
  function todayMid(){ var d=new Date(); d.setHours(0,0,0,0); return d; }

  var today = todayMid();
  var state = { view:new Date(today.getFullYear(), today.getMonth(), 1), selDate:null };

  function sameDay(a,b){ return a&&b&&a.getTime()===b.getTime(); }
  function fmtDate(d){ return d.getDate()+" "+TR_MONTHS[d.getMonth()]+" "+TR_DAYS[d.getDay()]; }

  function renderCalendar(){
    monthLbl.textContent = TR_MONTHS[state.view.getMonth()] + " " + state.view.getFullYear();
    var firstOfMonth = new Date(state.view.getFullYear(), state.view.getMonth(), 1);
    var startCol = (firstOfMonth.getDay() + 6) % 7; // Monday-first
    var daysInMonth = new Date(state.view.getFullYear(), state.view.getMonth()+1, 0).getDate();
    var curMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    prevBtn.disabled = state.view <= curMonthStart;

    grid.innerHTML = "";
    for(var i=0;i<startCol;i++){
      var e=document.createElement("div"); e.className="cal__day is-empty"; grid.appendChild(e);
    }
    for(var d=1; d<=daysInMonth; d++){
      var date = new Date(state.view.getFullYear(), state.view.getMonth(), d);
      var btn = document.createElement("button");
      btn.type="button"; btn.className="cal__day"; btn.textContent=d;
      var isPast = date < today;
      if(sameDay(date, today)) btn.classList.add("is-today");
      if(isPast){ btn.disabled=true; }
      if(sameDay(date, state.selDate)) btn.classList.add("is-sel");
      (function(date){
        btn.addEventListener("click", function(){
          state.selDate = date; renderCalendar(); renderForm();
        });
      })(date);
      grid.appendChild(btn);
    }
  }

  function renderForm(){
    if(!state.selDate){
      dateLbl.textContent = "Bir gün seç";
      hint.style.display = "";
      form.style.display = "none";
      summary.innerHTML = "";
      return;
    }
    dateLbl.textContent = fmtDate(state.selDate);
    hint.style.display = "none";
    form.style.display = "";
    summary.innerHTML = "";
    msgField.value = fmtDate(state.selDate) + " için bilgi almak istiyorum.";
  }

  prevBtn.addEventListener("click", function(){ state.view=new Date(state.view.getFullYear(), state.view.getMonth()-1, 1); renderCalendar(); });
  nextBtn.addEventListener("click", function(){ state.view=new Date(state.view.getFullYear(), state.view.getMonth()+1, 1); renderCalendar(); });

  form.addEventListener("submit", function(ev){
    ev.preventDefault();
    if(!form.reportValidity()) return;
    summary.innerHTML = '<span class="booking__ok">✓ Mesajınız alındı —</span> en kısa sürede seni arayacağız.';
    form.reset();
    form.style.display = "none";
  });

  renderCalendar();
  renderForm();
})();
