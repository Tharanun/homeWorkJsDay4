// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
console.log(first); // *
console.log(second); // **
console.log(third); // ***

// first จะมีค่าเป็น 'Maya' เพราะว่าเราได้ระบุตัวแปรแรกให้กับค่าแรกของ array นั้น 
// second จะมีค่าเป็น 'Marisa' เนื่องจากเราได้ระบุตัวแปรที่สองให้กับค่าที่สองของ array 
// third จะมีค่าเป็น 'Chi' เพราะว่าเราได้ระบุตัวแปรที่สามให้กับค่าที่สามของ array