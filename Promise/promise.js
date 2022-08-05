// Promise is a Javascript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer
/*
//1. Producer
const promise = new Promise((resolve, reject)=> {
    console.log('doing something...');
    setTimeout(()=>{
        resolve('sangmin');
        //reject(new Error('no network'));
    },2000);
});

// 2. Consumer: then, catch, finally

promise.
    then((value)=>{
    console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    })


//3. Promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(num-1),1000);
    })
})
.then(num => console.log(num));
*/
//4. callback에서 응용

class UserStorage{
    loginUser(id, password){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(
                (id===`sangmin` && password === '1234') 
            ){
                resolve(id); //callback
            }
            else{
                reject(new Error('not found')); //callback
            }
        },2000);
    });
    }
    getRoles(user){
        return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if(user=='sangmin'){
                resolve({name : 'sangmin', role: 'admin'});
            }
            else{
                reject(new Error('no access'));
            }
        },1000);
    });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your PassWord');

userStorage.loginUser(id,password)
.then(user => userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);