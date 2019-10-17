const _ = require('lodash');

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades:[
    {
        subjectName: 'Name1',
        grades: [5,4,3,5,2],
        weight: 3
    },
    {
        subjectName: 'Name2',
        grades: [3,3.5,2],
        weight: 1
    },
    {
        subjectName: 'Name3',
        grades: [4,3,3.5],
        weight: 5
    }
    ]
}

const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

function wypisz(user){
    let a=0;
    let b=0;
    for (let i = 0; i < user.allGrades.length; i++){
        let userGrades = user.allGrades[i].grades;
        let userGradesWeight = user.allGrades[i].weight;
        let x = userGrades.length;
        a += _.sum(userGrades) * userGradesWeight;
        b += x * userGradesWeight;
    }

    console.log(a / b);
}

function getMails(collections) {

    /*const tab = [];
    for (let item of collections) {
        const re = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i
        const x = re.test(item);
        if (x == true) {
            tab.push(item);
        }
    }*/

    const re = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i
    const tab = collections.filter((item) => re.test(item)).sort();
    console.log(tab);

}



wypisz(user);
getMails(collections);