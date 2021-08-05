'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img')
    const genreToChange = document.querySelector('.promo__genre');
    const gbImage = document.querySelector('.promo__bg');
    const oldFilmList = document.querySelector('.promo__interactive-list');
    
    const makeChanges = (arr, genre, image) => {
        arr.forEach(item => item.remove());
        genre.textContent = 'драма';
        image.style.backgroundImage = 'url("../img/bg.jpg")';
    }

    const drawFilmList = (films, parent) => {
        parent.innerHTML = '';
        films.sort().forEach((item, index) => {
            parent.innerHTML += `<li class="promo__interactive-item">${index + 1}. ${item}
        <div class="delete"></div>
    </li>`
        });

        document.querySelectorAll('.delete').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(index, 1);

                drawFilmList(films, parent);
            })
        })

    }

    drawFilmList(movieDB.movies, oldFilmList);
    makeChanges(adv, genreToChange, gbImage)

    const addNewFilm = (e) => {
        e.preventDefault();
        const input = document.querySelector('.adding__input');
        const checkbox = document.querySelector('[type="checkbox"]').checked;

        if (input.value) {
            if (input.value.length > 21) {
                movieDB.movies.push(input.value.slice(0, 10) + '...');
            } else {
                movieDB.movies.push(input.value);
            }
            checkbox ? console.log('Добавляем любимый фильм') : false;

            drawFilmList(movieDB.movies, oldFilmList);

            input.value = '';
        }
    }

    document.querySelector('.apply-btn').addEventListener('click', addNewFilm);

})