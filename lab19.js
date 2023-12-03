// จงเขียน Object destructuring โดยกำหนดให้
// - ตัวแปร name เก็บค่า name property
// - ตัวแปร age เก็บค่า years property
// - ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

let user = {
    name: 'Earth',
    years: 21,
    isAdmin: false,
   }
console.log(user);

console.log("=============== TEST ===============");

user.isAdmin="Admin"
console.log(user);