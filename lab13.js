    // ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

    let numbers = [10, 20, 30];
    [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
    console.log(numbers); // *

    // นำ ข้อมูล number[2] แทนค่า number[1]
    // และ
    // นำ ข้อมูล number[1] แทนค่า number[2]
