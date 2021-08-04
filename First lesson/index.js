const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', ''),
                b = prompt('На сколько оцените его', '');

            if (a != null && a != '' && a.length < 50 && b != null && b != '') {
                this.movies[a] = b;
            } else {
                alert('Ошибка');
                i--;
            }
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (genre === '' || genre === null) {
                console.log('Не ввели данные');
                i--;
            } else {
                this.genres.push(genre);
            }
        }
        this.genres.forEach((item, index) => console.log(`"Любимый жанр #${index + 1} - это ${item}"`));
    },
    detectPersonalLevel: function () {
        if (this.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (this.privat != true) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        this.privat ? this.privat = false : this.privat = true;
    }
}

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();