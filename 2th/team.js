const result = {
    code: 202,
    data: {
        id: 1,
        name: '박재성',
        phone: '01051984332'
    }
};

// 1) 반복되는 코드가 많아서 비효율적
console.log('id : ', result.data.id);
console.log('이름 : ', result.data.name);
console.log('전화번호 : ', result.data.phone);

console.log('---------------------------')


// 2) 비구조화 할당 활용
const { id, name, phone } = result.data;
// const id = result.data.id;
// const name = result.data.name;
// const phone = result.data.phone;

console.log('id : ', id);
console.log('이름 : ', name);
console.log('전화번호 : ', phone);

// /////// /////// /////// /////// /////// /////// /////// /////// /////

// 1) 
const printUserInfo = function ({ id, name, phone }) {
    console.log('id : ', id);
    console.log('이름 : ', name);
    console.log('전화번호 : ', phone);
};


const data = {
    id: 2,
    name: '재서이',
    phone: '01051984332'
}

printUserInfo(data)


// 2) 비구조화 할당 활용
const printUserInfo2 = function (data) {
    const id = data.id;
    const name = data.name;
    const phone = data.phone;

    console.log('id : ', id);
    console.log('이름 : ', name);
    console.log('전화번호 : ', phone);
};

// const printUserInfo2 = function (data) {
//     const { id, name, phone } = data;

//     console.log('id : ', id);
//     console.log('이름 : ', name);
//     console.log('전화번호 : ', phone);
// };

// const printUserInfo2 = function ({ id, name, phone }) {
//     console.log('id : ', id);
//     console.log('이름 : ', name);
//     console.log('전화번호 : ', phone);
// };


const data2 = {
    id: 2,
    name: '재서이',
    phone: '01051984332'
}

printUserInfo2(data2)