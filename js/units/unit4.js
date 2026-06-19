/**
 * หน่วยที่ 4: โครงสร้างการควบคุมการทำงานของโปรแกรม
 * วิชาการเขียนโปรแกรมคอมพิวเตอร์ (TypeScript) รหัสวิชา 31900-0002
 */
const unit4Data = [
  {
    type: 'title',
    icon: '🔀',
    title: 'หน่วยที่ 4<br><span class="gradient-text">โครงสร้างการควบคุม<br>การทำงานของโปรแกรม</span>',
    subtitle: 'if/else, switch, for, while, do-while'
  },
  {
    type: 'content',
    title: '📋 จุดประสงค์การเรียนรู้',
    content: `
      <ol>
        <li>ใช้คำสั่ง <code>if</code>, <code>else if</code>, <code>else</code> ในการตัดสินใจได้</li>
        <li>ใช้คำสั่ง <code>switch...case</code> ได้อย่างเหมาะสม</li>
        <li>ใช้คำสั่งวนซ้ำ <code>for</code>, <code>while</code>, <code>do...while</code> ได้</li>
        <li>ใช้คำสั่ง <code>break</code> และ <code>continue</code> ควบคุมการวนซ้ำได้</li>
        <li>เลือกโครงสร้างควบคุมที่เหมาะสมกับปัญหาได้</li>
      </ol>
    `
  },
  {
    type: 'code',
    title: 'คำสั่ง if — ทางเลือกเดียว',
    subtitle: 'ตรวจสอบเงื่อนไข ถ้าจริงจึงทำงาน',
    code: `// if — ทำเมื่อเงื่อนไขเป็นจริง
let score: number = 85;

if (score >= 80) {
  console.log("ยอดเยี่ยม! 🎉");
}

// if...else — ทำอย่างใดอย่างหนึ่ง
let age: number = 16;

if (age >= 18) {
  console.log("เป็นผู้ใหญ่ สามารถลงคะแนนเสียงได้");
} else {
  console.log("ยังเป็นเด็ก รอจนอายุ 18 ปี");
}
// ผลลัพธ์: ยังเป็นเด็ก รอจนอายุ 18 ปี`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'คำสั่ง if...else if...else — หลายทางเลือก',
    subtitle: 'ตรวจสอบเงื่อนไขหลายข้อตามลำดับ',
    code: `let score: number = 72;
let grade: string;

if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(\`คะแนน \${score} ได้เกรด \${grade}\`);
// ผลลัพธ์: คะแนน 72 ได้เกรด B

// Nested if (if ซ้อน if)
let temperature: number = 35;
let isRaining: boolean = false;

if (temperature > 30) {
  if (isRaining) {
    console.log("ร้อนและฝนตก ☀️🌧️");
  } else {
    console.log("ร้อนมาก อากาศแจ่มใส ☀️");
  }
}`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'Ternary Operator — เงื่อนไขแบบย่อ',
    subtitle: 'เหมาะกับเงื่อนไขง่ายๆ ที่มีแค่ 2 ทางเลือก',
    code: `// รูปแบบ: เงื่อนไข ? ค่าถ้าจริง : ค่าถ้าเท็จ

let age: number = 20;
let status: string = age >= 18 ? "ผู้ใหญ่" : "เด็ก";
console.log(status);  // "ผู้ใหญ่"

// ใช้กับการกำหนดค่า
let score: number = 85;
let result: string = score >= 50 ? "สอบผ่าน ✅" : "สอบไม่ผ่าน ❌";
console.log(result);  // "สอบผ่าน ✅"

// ซ้อนกัน (ไม่แนะนำถ้าซับซ้อน)
let grade: string = score >= 80 ? "A"
                   : score >= 70 ? "B"
                   : score >= 60 ? "C"
                   : "F";
console.log(\`เกรด: \${grade}\`);  // เกรด: A`,
    lang: 'typescript',
    note: 'Ternary เหมาะกับเงื่อนไขสั้นๆ ถ้าซับซ้อนควรใช้ <code>if/else</code> แทน'
  },
  {
    type: 'code',
    title: 'คำสั่ง switch...case',
    subtitle: 'เหมาะกับการเปรียบเทียบค่าที่เป็นไปได้หลายค่า',
    code: `let day: number = 3;
let dayName: string;

switch (day) {
  case 1:
    dayName = "วันจันทร์";
    break;
  case 2:
    dayName = "วันอังคาร";
    break;
  case 3:
    dayName = "วันพุธ";
    break;
  case 4:
    dayName = "วันพฤหัสบดี";
    break;
  case 5:
    dayName = "วันศุกร์";
    break;
  case 6:
  case 7:
    dayName = "วันหยุด 🎉";
    break;
  default:
    dayName = "ไม่ถูกต้อง";
}

console.log(dayName);  // วันพุธ`,
    lang: 'typescript',
    note: 'อย่าลืม <code>break</code> ทุก case! ถ้าไม่ใส่จะ "fall through" ไปทำ case ถัดไป'
  },
  {
    type: 'code',
    title: 'วนซ้ำ for — รู้จำนวนรอบ',
    subtitle: 'ใช้เมื่อรู้จำนวนครั้งที่ต้องวนซ้ำ',
    code: `// for loop พื้นฐาน
// for (เริ่มต้น; เงื่อนไข; เพิ่มค่า)
for (let i: number = 1; i <= 5; i++) {
  console.log(\`รอบที่ \${i}\`);
}
// รอบที่ 1, รอบที่ 2, ... รอบที่ 5

// นับถอยหลัง
for (let i: number = 10; i >= 1; i--) {
  console.log(i);
}
console.log("🚀 ปล่อยจรวด!");

// สูตรคูณ
let num: number = 7;
for (let i: number = 1; i <= 12; i++) {
  console.log(\`\${num} x \${i} = \${num * i}\`);
}

// Nested Loop — วนซ้ำซ้อนกัน (สร้างตาราง)
for (let row: number = 1; row <= 3; row++) {
  let line: string = "";
  for (let col: number = 1; col <= 3; col++) {
    line += \`(\${row},\${col}) \`;
  }
  console.log(line);
}
// (1,1) (1,2) (1,3)
// (2,1) (2,2) (2,3)
// (3,1) (3,2) (3,3)`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'วนซ้ำ while — ไม่รู้จำนวนรอบ',
    subtitle: 'ตรวจเงื่อนไขก่อนทำงาน ทำซ้ำจนเงื่อนไขเป็นเท็จ',
    code: `// while loop — ตรวจเงื่อนไขก่อน
let count: number = 1;

while (count <= 5) {
  console.log(\`นับ: \${count}\`);
  count++;
}

// ตัวอย่าง: หาผลรวมจนกว่าจะเกิน 100
let sum: number = 0;
let n: number = 1;

while (sum <= 100) {
  sum += n;
  n++;
}

console.log(\`ต้องบวกถึง \${n - 1} จึงจะเกิน 100\`);
console.log(\`ผลรวม = \${sum}\`);

// do...while — ทำงานอย่างน้อย 1 ครั้ง
let num: number = 10;

do {
  console.log(\`ค่า: \${num}\`);
  num--;
} while (num > 0);
// ทำงาน 10 ครั้ง (10, 9, 8, ..., 1)`,
    lang: 'typescript',
    note: '<code>while</code> อาจไม่ทำงานเลยถ้าเงื่อนไขเป็น false ตั้งแต่แรก แต่ <code>do...while</code> ทำอย่างน้อย 1 ครั้งเสมอ'
  },
  {
    type: 'code',
    title: 'for...of และ for...in',
    subtitle: 'วนซ้ำสำหรับ Array และ Object',
    code: `// for...of — วนค่าใน Array
let fruits: string[] = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

for (let fruit of fruits) {
  console.log(\`ผลไม้: \${fruit}\`);
}
// ผลไม้: แอปเปิ้ล
// ผลไม้: กล้วย
// ผลไม้: ส้ม

// for...in — วน key ของ Object
let student = {
  name: "สมชาย",
  age: 20,
  major: "IT"
};

for (let key in student) {
  console.log(\`\${key}: \${student[key as keyof typeof student]}\`);
}
// name: สมชาย
// age: 20
// major: IT

// forEach — method ของ Array
let scores: number[] = [85, 92, 78, 95, 88];

scores.forEach((score, index) => {
  console.log(\`คนที่ \${index + 1}: \${score} คะแนน\`);
});`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'break และ continue',
    subtitle: 'ควบคุมการทำงานภายใน loop',
    code: `// break — หยุดทำงาน loop ทันที
console.log("=== break ===");
for (let i: number = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("พบเลข 5 หยุดเลย!");
    break;  // ออกจาก loop
  }
  console.log(i);
}
// 1, 2, 3, 4, พบเลข 5 หยุดเลย!

// continue — ข้ามรอบปัจจุบัน ไปรอบถัดไป
console.log("=== continue ===");
for (let i: number = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // ข้ามเลขคู่
  }
  console.log(i);  // แสดงเฉพาะเลขคี่
}
// 1, 3, 5, 7, 9

// ตัวอย่าง: ค้นหาค่าใน Array
let names: string[] = ["สมชาย", "สมหญิง", "สมศรี", "สมศักดิ์"];
let search: string = "สมศรี";

for (let name of names) {
  if (name === search) {
    console.log(\`พบ "\${search}" แล้ว! ✅\`);
    break;
  }
}`,
    lang: 'typescript'
  },
  {
    type: 'split',
    title: 'เลือก Loop ไหนดี?',
    left: `
      <table class="comparison-table">
        <tr><th>Loop</th><th>เหมาะกับ</th></tr>
        <tr><td><code>for</code></td><td>รู้จำนวนรอบแน่นอน</td></tr>
        <tr><td><code>while</code></td><td>ไม่รู้จำนวนรอบ ตรวจเงื่อนไขก่อน</td></tr>
        <tr><td><code>do...while</code></td><td>ต้องทำอย่างน้อย 1 ครั้ง</td></tr>
        <tr><td><code>for...of</code></td><td>วนค่าใน Array</td></tr>
        <tr><td><code>for...in</code></td><td>วน key ใน Object</td></tr>
        <tr><td><code>.forEach()</code></td><td>วน Array พร้อม index</td></tr>
      </table>
    `,
    right: `
      <div class="info-box info-box--warning">
        <div class="info-box__title">⚠️ ระวัง Infinite Loop!</div>
        <div class="info-box__content">
          ถ้าเงื่อนไขเป็น true ตลอด loop จะวนไม่จบ!<br><br>
          <code>while (true) { ... }</code><br>
          ต้องมี <code>break</code> หรือเงื่อนไขหยุด
        </div>
      </div>
    `
  },
  {
    type: 'code',
    title: '🏋️ ตัวอย่างประยุกต์: ตรวจสอบเลขจำนวนเฉพาะ',
    subtitle: 'ใช้ทั้ง if และ for loop ร่วมกัน',
    code: `function isPrime(num: number): boolean {
  // เลขน้อยกว่า 2 ไม่ใช่จำนวนเฉพาะ
  if (num < 2) return false;

  // ตรวจสอบว่าหารลงตัวด้วยเลขใดไหม
  for (let i: number = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;  // หารลงตัว → ไม่ใช่จำนวนเฉพาะ
    }
  }
  return true;  // ไม่มีตัวใดหารลงตัว → เป็นจำนวนเฉพาะ
}

// แสดงจำนวนเฉพาะ 1-50
let primes: number[] = [];
for (let n: number = 1; n <= 50; n++) {
  if (isPrime(n)) {
    primes.push(n);
  }
}
console.log("จำนวนเฉพาะ 1-50:", primes.join(", "));
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47`,
    lang: 'typescript'
  },
  {
    type: 'content',
    title: '📝 สรุปหน่วยที่ 4',
    icon: '✅',
    content: `
      <ul>
        <li><code>if/else</code> — ตัดสินใจตามเงื่อนไข</li>
        <li><code>switch</code> — เปรียบเทียบค่าหลายกรณี (อย่าลืม <code>break</code>)</li>
        <li><code>for</code> — วนซ้ำเมื่อรู้จำนวนรอบ</li>
        <li><code>while</code> — วนซ้ำเมื่อไม่รู้จำนวนรอบ (ตรวจก่อนทำ)</li>
        <li><code>do...while</code> — ทำอย่างน้อย 1 ครั้ง (ทำก่อนตรวจ)</li>
        <li><code>break</code> — หยุด loop ทันที &nbsp;|&nbsp; <code>continue</code> — ข้ามรอบนั้น</li>
      </ul>
      <div class="info-box info-box--warning">
        <div class="info-box__title">📌 แบบฝึกหัด</div>
        <div class="info-box__content">
          1. เขียนโปรแกรม FizzBuzz (1-100): หาร 3 ลงตัว→"Fizz", หาร 5→"Buzz", ทั้งสอง→"FizzBuzz"<br>
          2. เขียนโปรแกรมแสดงสูตรคูณ 1-12 ด้วย Nested Loop<br>
          3. เขียนโปรแกรมหาค่า Factorial ของ N (N! = 1×2×3×...×N)
        </div>
      </div>
    `
  }
];
