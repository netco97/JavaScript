//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)
const dog = {
    name: 'mungmung',
    color: 'white',
    size: null,
    birthDate : new Date(),
    jump: () => {
        console.log(`${name} can jump`);
    },
};
/*const json = JSON.stringify(dog);
console.log(json);*/

const json = JSON.stringify(dog, (key,value)=>{
    console.log(`key : ${key}, value: ${value}`);
    return key === 'name' ? 'sangmin' : value;
})

console.log(json);


//2. JSON to Object
//parse(json)

const obj = JSON.parse(json);
console.log(obj);