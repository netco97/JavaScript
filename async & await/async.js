// async & await
// clear style of using promise  :)

//1. async
/*async function fetchUser(){
    // do network request in 10 secs....

    return 'sangmin';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await

function delay(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

/* == 동기적인 코드를 쓰는것처럼 만들게되면 이해하기 쉽다.
function getBanana(){
    return delay(3000)
    .then(()=> 'banana');
}*/

/*function pickFruits(){
    return getApple()
    .then(apple=>{
        return getBanana()
        .then(banana=> `${apple} + ${banana}`);
    })
}

pickFruits().then(console.log);*/

/*async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);*/
class UserStorage{
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async loginUser(id, password){
        await this.delay(2000);
        if(
                (id===`sangmin` && password === '1234') 
            ){
                return id; 
            }
            else{
                throw 'not found'
            }
        }
    async getRoles(user){
            if(user=='sangmin'){
                return ({name : 'sangmin', role: 'admin'});
            }
            else{
               throw 'no access';
            }
        }
    }

const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your PassWord');

async function findUserRole() {
    const user = await userStorage.loginUser(id, password)
    const userInfo = await userStorage.getRoles(user);
    return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role!`);
}

findUserRole().then().catch(console.log);