// // /* Задание на урок:

// // 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// // перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// // Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// // 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// // переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// // 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// // Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// // при помощи метода forEach вывести в консоль сообщения в таком виде:
// // "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// // 'use strict';

// // const personalMovieDB = {
// //     count: 0,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false,
// //     start: function() {
// //         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
// //         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// //             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// //         }
// //     },
// //     rememberMyFilms: function() {
// //         for (let i = 0; i < 2; i++) {
// //             const a = prompt('Один из последних просмотренных фильмов?', ''),
// //                   b = prompt('На сколько оцените его?', '');
        
// //             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //                 personalMovieDB.movies[a] = b;
// //                 console.log('done');
// //             } else {
// //                 console.log('error');
// //                 i--;
// //             }
// //         }
// //     },
// //     detectPersonalLevel: function() {
// //         if (personalMovieDB.count < 10) {
// //             console.log("Просмотрено довольно мало фильмов");
// //         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// //             console.log("Вы классический зритель");
// //         } else if (personalMovieDB.count >= 30) {
// //             console.log("Вы киноман");
// //         } else {
// //             console.log("Произошла ошибка");
// //         }
// //     },
// //     showMyDB: function(hidden) {
// //         if (!hidden) {
// //             console.log(personalMovieDB);
// //         }
// //     },
// //     toggleVisibleMyDB: function() {
// //         if (personalMovieDB.privat) {
// //             personalMovieDB.privat = false;
// //         } else {
// //             personalMovieDB.privat = true;
// //         }
// //     },
// //     writeYourGenres: function() {
// //         for (let i = 1; i <= 3; i++) {
// //             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

// //             if (genre === '' || genre == null) {
// //                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
// //                 i--;
// //             } else {
// //                 personalMovieDB.genres[i - 1] = genre;
// //             } 
            
// //             // Альтернативный вариант из урока
            
// //             // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

// //             // if (genres === '' || genres == null) {
// //             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
// //             //     i--;
// //             // } else {
// //             //     personalMovieDB.genres = genres.split(', ');
// //             //     personalMovieDB.genres.sort();
// //             // } 
// //         }

// //         personalMovieDB.genres.forEach((item, i) => {
// //             console.log(`Любимый жанр ${i + 1} - это ${item}`);
// //         });
// //     }
// // };

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *=x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2,1);
// pow(2,2);
// pow(2,3);
// console.log(pow(2,49));

let students = {
    js: [{
        name: 'John',
        progress:100
    },{
        name: 'Ivan',
        progress:60
    }],

    html: {
        basic: [{
            name:'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress:18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)){
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
            }
        }
    }

    }
    return total/students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;
        

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0,0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);