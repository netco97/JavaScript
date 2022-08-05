/*console.log('1');
setTimeout(()=>console.log('2'),1000);
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchrous callback
function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}

printWithDelay(()=>console.log('async callback'),2000);
*/

//complicated callback example

class UserStorage{
    login(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id===`sangmin` && password === '1234') 
            ){
                onSuccess(id); //callback
            }
            else{
                onError(new Error('not found')); //callback
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user=='sangmin'){
                onSuccess({name : 'sangmin', role: 'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your PassWord');
userStorage.login(
    id,
    password,
    (user)=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error=>{
                console.log(error);
            }
            );
    },
    (error)=>{console.log(error);
    }
);