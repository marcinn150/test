//const _ = import('lodash');
import _ from 'lodash';

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

function wypisz(user){
    let i,x;
    let tab = [];
    let a=0;
    let b=0;
    for(i=0;i<user.allGrades.length;i++){
        x.user.allGrades[i].grades;
        tab[i] = (user.allGrades[i].grades);
        a += _.sum(user.allGrades[i].grades)*x;
        b += user.allGrades[i].grades.length * x;
    }

    console.log(a/b);
}

wypisz(user);