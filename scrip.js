var hesap = 6;
var st = document.querySelector(`#st`);
var dk = document.querySelector(`#dk`);
var sy = document.querySelector(`#sy`);

setInterval(() => {
    var day = new Date();
    var saat = day.getHours() * 30;
    var dakika = day.getMinutes() * hesap;
    var saniye = day.getSeconds() * hesap;

    st.style.transform = `rotateZ(${(saat) + (dakika / 12)}deg)`;
    dk.style.transform = `rotateZ(${dakika}deg)`;
    sy.style.transform = `rotateZ(${saniye}deg)`;
})