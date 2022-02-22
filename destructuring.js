const mySelf = {
    name:'Md Junayed',
    id: 156797,
    age: 18,
    skill: {
        student: 'Madrasah',
        developer: 'Ecmascript'
    }
}

// const {name, age, id, skill} = mySelf;
// console.log(name,id,age,skill);

const {student,developer} = mySelf.skill;
console.log(student,developer);

//            having error
// const {name,age,student,developer,} = mySelf.skill;
// console.log(name,age,student,developer);