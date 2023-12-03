// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // *
console.log(yearNeptuneDiscovered); // **

// อันดับแรกให้ facts มี properties ข้างใน คือ numPlanets: 8 และ  yearNeptuneDiscovered: 1846
// ต่อมาให้ สร้างตัวแปร numPlanets และ yearNeptuneDiscovered จาก properties ของ facts
