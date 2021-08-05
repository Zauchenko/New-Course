'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelectorAll('.promo__adv img').forEach(item => item.remove());
document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.backgroundImage = 'url("../img/bg.jpg")';

const oldFilmList = document.querySelector('.promo__interactive-list');
oldFilmList.innerHTML = '';

movieDB.movies.sort().forEach((item, index) => {
    oldFilmList.innerHTML += `<li class="promo__interactive-item">${index + 1}. ${item}
    <div class="delete"></div>
</li>`
});