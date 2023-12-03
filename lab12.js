// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses',
    'whiskers on kittens',
    'Bright copper kettles',
    'warm woolen mittens',
   ];
   console.log(raindrops); // *
   console.log(whiskers); // **
   console.log(aFewOfMyFavoriteThings); // **


//    กำหนดค่าให้กับตัวแปร aFewOfMyFavoriteThings ซึ่งจะเป็น array ที่เก็บค่าที่เหลือจาก array ตั้งแต่ตัวแปร raindrops และ whiskers ถูกกำหนดค่าไปแล้ว