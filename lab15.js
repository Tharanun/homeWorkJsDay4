// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
   };
   let { numPlanets, ...discoveryYears } = planetFacts;
   console.log(numPlanets);
   console.log(discoveryYears); // *
   
//    อันดับแรกกำหนด object ให้ตัวแปร planetFacts คือ  numPlanets: 8, yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659
// แล้วสร้างตัวแปร numPlanets ให้เก็บค่า แรกของ planetFacts
// ส่วย ...discoveryYears คือเก็บค่าตัวแปรที่เหลือของ planetFacts