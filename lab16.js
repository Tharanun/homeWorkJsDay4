// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function getUserData({ firstName, favoriteColor = 'green' }) {
 return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({firstName: 'Alejandro', favoriteColor: 'purple'}));
console.log(getUserData({ firstName: 'Melissa' }));
console.log(getUserData({}));

// function นี้มีค่า default ของ parameter favoriteColor คือ 'green'
// ถ้าเราเรียกใช้ โดยไม่ส่งค่าให้ favoriteColor จะมีค่าเป็น 'green'
// แต่ถ้าเรียกใช้ โดยไม่ส่งค่าให้ firstName ที่ไม่ได้กำหนดค่า default ให้ parameter จะกลายเป็น undefined