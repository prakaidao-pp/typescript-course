/**
 * หน่วยที่ 5: อาร์เรย์และฟังก์ชัน (Arrays and Functions)
 * วิชาการเขียนโปรแกรมคอมพิวเตอร์ (TypeScript) รหัสวิชา 31900-0002
 */
const unit5Data = [
  {
    type: 'title',
    icon: '📦',
    title: 'หน่วยที่ 5<br><span class="gradient-text">Array & Function</span>',
    subtitle: 'เรียนรู้การเก็บข้อมูลหลายชิ้นใน Array และการสร้าง Function เพื่อนำโค้ดมาใช้ซ้ำ — สำหรับผู้ไม่มีพื้นฐานเลย'
  },
  {
    type: 'split',
    title: 'ทำไมต้องมี Array?',
    left: `
      <p>ลองนึกภาพว่าเราต้องเก็บชื่อนักเรียน 5 คน ถ้าไม่มี Array เราต้องประกาศตัวแปรแยกกัน 5 ตัว:</p>
      <div class="code-block">
        <pre><code class="language-typescript">let student1 = "สมชาย"
let student2 = "สมหญิง"
let student3 = "สมศักดิ์"
let student4 = "สมปอง"
let student5 = "สมฤดี"
// 😱 แล้วถ้ามี 100 คน ต้องเขียน 100 บรรทัด!</code></pre>
      </div>
    `,
    right: `
      <div class="info-box info-box--tip">
        <div class="info-box__title">💡 Array แก้ปัญหานี้!</div>
        <div class="info-box__content">
          เราสามารถเก็บนักเรียนทุกคนในตัวแปรเดียว แล้ววนซ้ำหาหรือจัดการข้อมูลได้ง่ายมาก
        </div>
      </div>
      <div class="code-block" style="margin-top: var(--space-md);">
        <pre><code class="language-typescript">let students: string[] = ["สมชาย", "สมหญิง", "สมศักดิ์", "สมปอง", "สมฤดี"]
// ✅ เก็บทั้งหมดในบรรทัดเดียว!</code></pre>
      </div>
    `
  },
  {
    type: 'content',
    title: 'Array คืออะไร',
    icon: '🗃️',
    content: `
      <p>Array คือ <strong style="color:var(--ts-blue-light)">ตู้ลิ้นชัก</strong> ที่มีหลายช่อง แต่ละช่องเก็บข้อมูล 1 ชิ้น โดยแต่ละช่องจะมี <strong style="color:var(--ts-blue-light)">หมายเลข (index)</strong> กำกับไว้ เริ่มนับจาก <code>0</code></p>
      <table class="comparison-table" style="margin: var(--space-md) 0;">
        <thead>
          <tr>
            <th>Index</th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="color:var(--text-secondary);font-size:13px">ค่า</td>
            <td>"สมชาย"</td>
            <td>"สมหญิง"</td>
            <td>"สมศักดิ์"</td>
            <td>"สมปอง"</td>
            <td>"สมฤดี"</td>
          </tr>
        </tbody>
      </table>
      <div class="info-box info-box--tip">
        <div class="info-box__title">🔑 จำไว้!</div>
        <div class="info-box__content">
          Index เริ่มต้นที่ <code>0</code> เสมอ ไม่ใช่ 1<br>
          ฉะนั้น สมาชิกคนแรกอยู่ที่ <code>index 0</code>, คนที่สองอยู่ที่ <code>index 1</code>
        </div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'การประกาศ Array',
    subtitle: 'รูปแบบพื้นฐานและการประกาศ Array ว่างเปล่า',
    code: `// รูปแบบ: let ชื่อตัวแปร: ชนิดข้อมูล[] = [...]

let fruits: string[] = ["แอปเปิ้ล", "กล้วย", "มะม่วง"];
let scores: number[] = [90, 85, 72, 95];
let flags:  boolean[] = [true, false, true];

// Array ว่างเปล่า (เตรียมไว้ก่อน)
let cart: string[] = [];   // ตะกร้าสินค้าว่าง รอเพิ่มทีหลัง`,
    lang: 'typescript',
    note: 'อ่านแบบง่าย: <code>string[]</code> คือ "Array ของ string" — วงเล็บก้ามปู <code>[]</code> บอกว่าเป็น Array'
  },
  {
    type: 'code',
    title: 'การเข้าถึงและแก้ไขสมาชิก',
    subtitle: 'ใช้เครื่องหมายวงเล็บเหลี่ยม [index] ในการอ้างอิงตำแหน่ง',
    code: `let colors: string[] = ["แดง", "เขียว", "น้ำเงิน"];

console.log(colors[0]);  // "แดง"   ← ตัวแรก
console.log(colors[1]);  // "เขียว" ← ตัวที่สอง
console.log(colors[2]);  // "น้ำเงิน" ← ตัวที่สาม

// อยากรู้ว่ามีสมาชิกกี่ตัว?
console.log(colors.length);  // 3

// แก้ไขค่าใน Array
colors[1] = "เหลือง";   // เปลี่ยน "เขียว" เป็น "เหลือง"
console.log(colors);    // ["แดง", "เหลือง", "น้ำเงิน"]`,
    lang: 'typescript',
    note: '<strong>ระวัง Index เกิน!</strong> ถ้าเรียก <code>colors[5]</code> ในขณะที่มีแค่ 3 สมาชิก จะได้ <code>undefined</code> — ไม่มี error แต่ค่าจะว่าง'
  },
  {
    type: 'code',
    title: 'Tuple',
    subtitle: 'Array พิเศษที่กำหนดชนิดข้อมูลแต่ละช่องได้แน่นอน',
    code: `// Array ธรรมดา — ทุกช่องต้องเป็น string
let arr: string[] = ["สมชาย", "20"];

// Tuple — ช่องที่ 1 เป็น string, ช่องที่ 2 เป็น number
let person: [string, number] = ["สมชาย", 20];

console.log(person[0]);  // "สมชาย"
console.log(person[1]);  // 20

// ตัวอย่างการใช้งาน Tuple
let coordinate: [number, number] = [13.7563, 100.5018];  // lat, lng ของกรุงเทพ
let product:    [string, number, boolean] = ["กาแฟ", 65, true];  // ชื่อ, ราคา, มีสินค้า`,
    lang: 'typescript',
    note: '<strong>Array vs Tuple:</strong> Array ทุกช่องเป็นชนิดเดียวกัน เช่น <code>number[]</code> ส่วน Tuple แต่ละช่องเป็นคนละชนิดได้ เช่น <code>[string, number, boolean]</code>'
  },
  {
    type: 'code',
    title: 'เมธอดจัดการ Array: push() และ pop()',
    subtitle: 'การเพิ่มและลบข้อมูลที่ท้ายสุดของ Array',
    code: `// push() — เพิ่มสมาชิกท้าย Array
let cart: string[] = ["ขนมปัง", "นม"];

cart.push("ไข่");
console.log(cart);   // ["ขนมปัง", "นม", "ไข่"]

cart.push("กาแฟ");
console.log(cart);   // ["ขนมปัง", "นม", "ไข่", "กาแฟ"]

// pop() — ลบสมาชิกตัวสุดท้ายออก
let stack: string[] = ["A", "B", "C"];

let removed = stack.pop();
console.log(removed);  // "C"  ← ค่าที่ถูกเอาออก
console.log(stack);    // ["A", "B"]`,
    lang: 'typescript',
    note: 'เปรียบกับกระเป๋า: <code>push()</code> = ยัดของเข้ากระเป๋า, <code>pop()</code> = หยิบของออกจากกระเป๋า (หยิบชิ้นสุดท้ายออกมาเสมอ)'
  },
  {
    type: 'code',
    title: 'เมธอดจัดการ Array: map()',
    subtitle: 'การแปลงทุกสมาชิกใน Array เพื่อสร้างเป็น Array ใหม่ที่มีจำนวนสมาชิกเท่าเดิม',
    code: `let prices: number[] = [100, 200, 300];

// บวก VAT 7% ทุกราคา
let withVat = prices.map(price => price * 1.07);

console.log(withVat);   // [107, 214, 321]
console.log(prices);    // [100, 200, 300]  ← ของเดิมยังอยู่!

// ตัวอย่างเพิ่มเติม: เพิ่มคำทักทายหน้าชื่อทุกคน
let names: string[] = ["สมชาย", "สมหญิง", "สมศักดิ์"];
let greetings = names.map(name => \`สวัสดี, \${name}!\`);

console.log(greetings); // ["สวัสดี, สมชาย!", "สวัสดี, สมหญิง!", "สวัสดี, สมศักดิ์!"]`,
    lang: 'typescript',
    note: '<code>map()</code> จะไม่เปลี่ยนข้อมูลใน Array ดั้งเดิม แต่จะส่งออกเป็น Array ใหม่ที่ผ่านการแปลงแล้ว'
  },
  {
    type: 'code',
    title: 'เมธอดจัดการ Array: filter()',
    subtitle: 'การกรองสมาชิกที่ผ่านเงื่อนไขออกมาเป็น Array ใหม่',
    code: `let scores: number[] = [45, 78, 92, 55, 88, 30];

// กรองเฉพาะคนที่ผ่าน (>= 60)
let passed = scores.filter(score => score >= 60);

console.log(passed);    // [78, 92, 88]
console.log(scores);    // [45, 78, 92, 55, 88, 30]  ← ของเดิมไม่เปลี่ยน

// filter กับ string: กรองเฉพาะที่ขึ้นต้นด้วย "ก"
let fruits: string[] = ["แอปเปิ้ล", "กล้วย", "กีวี", "แคนตาลูป"];
let gFruits = fruits.filter(f => f.startsWith("ก"));
console.log(gFruits);   // ["กล้วย", "กีวี", "แคนตาลูป"]`,
    lang: 'typescript',
    note: 'ฟังก์ชันใน <code>filter()</code> จะต้องคืนค่ากลับเป็น Boolean (true คือเก็บไว้ / false คือคัดทิ้ง)'
  },
  {
    type: 'content',
    title: 'สรุปการจัดการ Array',
    content: `
      <div class="method-grid">
        <div class="method-card">
          <div class="method-name">.push()</div>
          <div class="method-desc">เพิ่มสมาชิกท้าย Array</div>
        </div>
        <div class="method-card">
          <div class="method-name">.pop()</div>
          <div class="method-desc">ลบสมาชิกตัวสุดท้าย</div>
        </div>
        <div class="method-card">
          <div class="method-name">.map()</div>
          <div class="method-desc">แปลงทุกสมาชิก → Array ใหม่</div>
        </div>
        <div class="method-card">
          <div class="method-name">.filter()</div>
          <div class="method-desc">กรองสมาชิกตามเงื่อนไข</div>
        </div>
        <div class="method-card">
          <div class="method-name">.length</div>
          <div class="method-desc">ดูจำนวนสมาชิก</div>
        </div>
        <div class="method-card">
          <div class="method-name">[index]</div>
          <div class="method-desc">ดึงค่าตาม index</div>
        </div>
      </div>
      <div class="code-block" style="margin-top: var(--space-lg);">
        <pre><code class="language-typescript">let nums: number[] = [3, 1, 4, 1, 5];
nums.push(9);                              // [3, 1, 4, 1, 5, 9]
nums.pop();                               // [3, 1, 4, 1, 5]
let doubled = nums.map(n => n * 2);       // [6, 2, 8, 2, 10]
let big     = nums.filter(n => n > 3);   // [4, 5]</code></pre>
      </div>
    `
  },
  {
    type: 'content',
    title: 'Function คืออะไร',
    icon: '⚙️',
    content: `
      <p>Function คือ <strong style="color:var(--ts-yellow)">สูตรที่เก็บไว้</strong> — เขียนครั้งเดียว เรียกใช้ได้กี่ครั้งก็ได้</p>
      <p>ลองนึกภาพ <strong>เครื่องชงกาแฟ</strong>: เราตั้งโปรแกรมไว้ แล้วแค่กดปุ่ม — เครื่องจะทำทุกขั้นตอนให้เอง</p>
      <div class="info-box info-box--info" style="margin-top: var(--space-md);">
        <div class="info-box__title">ทำไมต้องใช้ Function?</div>
        <div class="info-box__content">
          <ul>
            <li>ไม่ต้องเขียนโค้ดซ้ำหลายครั้ง</li>
            <li>แก้ไขที่เดียว ใช้งานได้ทุกที่</li>
            <li>โค้ดอ่านง่าย เข้าใจได้ทันที</li>
            <li>แบ่งงานเป็นชิ้นเล็กๆ จัดการง่าย</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'การสร้าง Function',
    subtitle: 'โครงสร้างการเขียนฟังก์ชันและการเรียกใช้เบื้องต้น',
    code: `// Function ง่ายที่สุด — ไม่มี parameter, ไม่ return
function sayHello() {
  console.log("สวัสดีครับ!");
}

sayHello();   // เรียกใช้
sayHello();   // เรียกซ้ำได้`,
    lang: 'typescript',
    note: 'โครงสร้างพื้นฐาน: <code>function ชื่อFunction(parameter) { // โค้ดที่ต้องการรัน }</code>'
  },
  {
    type: 'code',
    title: 'Parameter (พารามิเตอร์)',
    subtitle: 'การรับข้อมูลเข้าของฟังก์ชัน และ Default Parameter',
    code: `// มี 1 parameter
function greet(name: string) {
  console.log(\`สวัสดี, \${name}!\`);
}
greet("มานะ");    // "สวัสดี, มานะ!"

// มี 2 parameters
function add(a: number, b: number) {
  console.log(a + b);
}
add(10, 5);      // 15

// Parameter ค่าเริ่มต้น (Default Parameter)
function greetDefault(name: string = "แขกผู้มาเยือน") {
  console.log(\`สวัสดี, \${name}!\`);
}
greetDefault("สมชาย");  // "สวัสดี, สมชาย!"
greetDefault();          // "สวัสดี, แขกผู้มาเยือน!"`,
    lang: 'typescript',
    note: 'Parameter คือช่องรับข้อมูลเข้าฟังก์ชัน เปรียบเหมือนช่องใส่วัตถุดิบในเครื่องทำอาหาร'
  },
  {
    type: 'code',
    title: 'Return Type',
    subtitle: 'การคืนค่าผลลัพธ์จากฟังก์ชัน',
    code: `function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20);
console.log(result);   // 30

// ตัวอย่างหลายรูปแบบ
function isAdult(age: number): boolean {
  return age >= 18;
}

function fullName(first: string, last: string): string {
  return \`\${first} \${last}\`;
}

console.log(isAdult(20));             // true
console.log(fullName("สมชาย", "ใจดี")); // "สมชาย ใจดี"`,
    lang: 'typescript',
    note: 'ถ้า Function แค่ทำงาน ไม่ส่งค่ากลับ ให้ระบุชนิดส่งคืนเป็น <code>void</code>'
  },
  {
    type: 'code',
    title: 'Arrow Function',
    subtitle: 'การเขียนฟังก์ชันด้วยเครื่องหมายลูกศร =>',
    code: `// 1. Function ธรรมดา
function square1(n: number): number {
  return n * n;
}

// 2. Arrow Function
const square2 = (n: number): number => {
  return n * n;
};

// 3. Arrow สั้นที่สุด (Shorthand)
const square3 = (n: number): number => n * n;

console.log(square3(5));   // 25`,
    lang: 'typescript',
    note: 'ไวยากรณ์สมัยใหม่ที่เขียนสั้นลง นิยมอย่างมากใน TypeScript/ES6'
  },
  {
    type: 'code',
    title: 'Shorthand Arrow Function',
    subtitle: 'รูปแบบการย่อฟังก์ชันลูกศรแบบต่างๆ',
    code: `// 1 parameter
const double = (n: number) => n * 2;

// ไม่มี parameter — ใส่วงเล็บว่าง
const hi = () => console.log("สวัสดี");

// หลาย parameters — ต้องมีวงเล็บ
const multiply = (a: number, b: number) => a * b;

// return หลายบรรทัด — ต้องมีปีกกา {} และคำสั่ง return
const gradeMsg = (score: number) => {
  if (score >= 80) return "ดีมาก";
  if (score >= 60) return "ผ่าน";
  return "ไม่ผ่าน";
};`,
    lang: 'typescript',
    note: 'หากในฟังก์ชันมีโค้ดเพียงบรรทัดเดียวที่ทำการ return สามารถตัดปีกกาและคำสั่ง return ออกได้'
  },
  {
    type: 'code',
    title: 'Array + Function',
    subtitle: 'การทำงานร่วมกันอย่างมีพลังของ Array และ Function',
    code: `let scores: number[] = [45, 78, 92, 55, 88];

// Function ตรวจว่าผ่านหรือไม่
const isPassed = (score: number) => score >= 60;

// Function แปลงคะแนนเป็นเกรด
const toGrade = (score: number): string => {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
};

// นำมาใช้งานร่วมกัน
let passed = scores.filter(isPassed);         // [78, 92, 88]
let grades = scores.map(toGrade);             // ["F","B","A","F","A"]

console.log("ผ่าน:", passed);
console.log("เกรด:", grades);`,
    lang: 'typescript',
    note: 'การส่งผ่าน Function เข้าไปประมวลผลข้อมูลใน Array Methods ช่วยให้โค้ดสะอาดและสั้นลงมาก'
  },
  {
    type: 'code',
    title: 'โปรเจกต์จริง #1: ระบบรายชื่อนักเรียน',
    subtitle: 'ระบบจัดการรายชื่อ ค้นหา และเฉลี่ยเกรดนักเรียน',
    code: `type Student = {
  id:    number;
  name:  string;
  score: number;
}

let students: Student[] = [
  { id: 1, name: "สมชาย",  score: 85 },
  { id: 2, name: "สมหญิง", score: 72 },
  { id: 3, name: "สมศักดิ์",score: 58 },
  { id: 4, name: "สมปอง",  score: 91 },
];

// เพิ่มนักเรียนใหม่
function addStudent(name: string, score: number): void {
  const newStudent: Student = {
    id: students.length + 1,
    name,
    score
  };
  students.push(newStudent);
  console.log(\`เพิ่ม \${name} สำเร็จ!\`);
}

// แปลงคะแนนเป็นเกรด
const getGrade = (score: number): string => {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
};

// แสดงนักเรียนทั้งหมด
function showAll(): void {
  students.map(s => {
    console.log(\`\${s.id}. \${s.name} — คะแนน: \${s.score} เกรด: \${getGrade(s.score)}\`);
  });
}

// หาเฉลี่ยคะแนน
function getAverage(): number {
  const total = students.map(s => s.score).reduce((a, b) => a + b, 0);
  return total / students.length;
}

addStudent("สมฤดี", 76);
showAll();
console.log("คะแนนเฉลี่ย:", getAverage());`,
    lang: 'typescript',
    note: 'ตัวอย่างของการรวมชนิดข้อมูล Object, Array และ Function เข้าด้วยกันในการทำระบบจริง'
  },
  {
    type: 'code',
    title: 'โปรเจกต์จริง #2: ระบบร้านค้า',
    subtitle: 'จำลองระบบตะกร้าสินค้าและการคำนวณราคารวม',
    code: `type Product = {
  id:    number;
  name:  string;
  price: number;
  stock: number;
}

type CartItem = {
  productId: number;
  qty:       number;
}

let products: Product[] = [
  { id: 1, name: "กาแฟ",      price: 65,  stock: 50 },
  { id: 2, name: "ชาเขียว",   price: 55,  stock: 30 },
  { id: 3, name: "ขนมปัง",    price: 35,  stock: 20 },
  { id: 4, name: "น้ำส้มคั้น", price: 80,  stock: 15 },
];

let cart: CartItem[] = [];

const findProduct = (id: number) => products.find(p => p.id === id);

// เพิ่มลงตะกร้า
function addToCart(productId: number, qty: number): void {
  const product = findProduct(productId);
  if (!product || product.stock < qty) return;
  cart.push({ productId, qty });
}

// คำนวณราคารวม
function getTotal(): number {
  return cart.map(item => {
    const product = findProduct(item.productId);
    return (product?.price ?? 0) * item.qty;
  }).reduce((a, b) => a + b, 0);
}

addToCart(1, 2);
addToCart(3, 1);
console.log("ราคารวมทั้งสิ้น:", getTotal());`,
    lang: 'typescript',
    note: 'การใช้ <code>find()</code>, <code>map()</code> และ <code>reduce()</code> ช่วยย่นระยะเวลาเขียนโค้ดสำหรับระบบการเงิน'
  },
  {
    type: 'content',
    title: 'สรุปภาพรวมหน่วยที่ 5',
    icon: '🏆',
    content: `
      <div class="summary-grid">
        <div class="summary-item">
          <div class="s-title">Array[]</div>
          <div class="s-body">เก็บข้อมูลหลายชิ้นในตัวแปรเดียว เข้าถึงด้วย index ที่เริ่มจาก 0</div>
        </div>
        <div class="summary-item">
          <div class="s-title">Tuple</div>
          <div class="s-body">Array พิเศษที่กำหนดชนิดข้อมูลแต่ละช่องได้แน่นอน</div>
        </div>
        <div class="summary-item">
          <div class="s-title">push / pop</div>
          <div class="s-body">เพิ่มหรือลบสมาชิกจากท้าย Array</div>
        </div>
        <div class="summary-item">
          <div class="s-title">map / filter</div>
          <div class="s-body">แปลงข้อมูลทุกตัว หรือกรองข้อมูลตามเงื่อนไข</div>
        </div>
        <div class="summary-item">
          <div class="s-title">Function</div>
          <div class="s-body">ห่อโค้ดไว้ใช้ซ้ำ รับ parameter และ return ค่ากลับได้</div>
        </div>
        <div class="summary-item">
          <div class="s-title">Arrow Function</div>
          <div class="s-body">เขียน Function แบบสั้นกระชับ ด้วยสัญลักษณ์ =&gt;</div>
        </div>
      </div>
      <div class="card tip" style="margin-top: 20px;">
        <div class="tip-icon">🎯</div>
        <div class="tip-body">
          <strong>เคล็ดลับสู่ความเชี่ยวชาญ:</strong><br>
          ลองนำ Array + Function มาสร้างโปรเจกต์เล็กๆ ของตัวเอง เช่น รายการสิ่งที่ต้องทำ, แคลคูเลเตอร์เกรด, หรือระบบจองตั๋ว — การฝึกทำจริงคือวิธีเรียนที่ดีที่สุด
        </div>
      </div>
    `
  }
];

// ข้อมูลใบงาน Workshop ท้ายหน่วยเรียน
const unit5Workshop = {
  title: 'ใบงานท้ายบทที่ 5: การประยุกต์ใช้งานอาร์เรย์และฟังก์ชัน',
  fileName: 'workshop5.ts',
  description: 'ให้นักเรียนฝึกเขียนโปรแกรมด้วยภาษา TypeScript ตามโจทย์แต่ละข้อ โดยเขียนโค้ดทุกข้อรวมไว้ในไฟล์เดียว ตั้งชื่อไฟล์ส่งงานว่า <code class="filename">workshop5.ts</code>',
  tasks: [
    {
      title: 'ข้อที่ 1: จัดการรายชื่อเพื่อน',
      difficulty: '⭐ ง่าย',
      objective: 'ฝึกใช้ Array เบื้องต้น — สร้าง, เพิ่ม (<code>push</code>), ลบ (<code>pop</code>) ข้อมูล',
      instruction: `
        <div class="workshop-steps">
          <div class="workshop-step">
            <span class="workshop-step__num">1</span>
            <span>สร้างตัวแปร <code>friends</code> เป็น Array ของ string เก็บชื่อเพื่อน <strong>5 คน</strong></span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">2</span>
            <span>ใช้ <code>push()</code> เพิ่มชื่อเพื่อนอีก <strong>1 คน</strong> เข้าไปท้าย Array</span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">3</span>
            <span>แสดงผล Array ทางคอนโซลด้วย <code>console.log()</code></span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">4</span>
            <span>ใช้ <code>pop()</code> ลบชื่อเพื่อนคนสุดท้ายออก</span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">5</span>
            <span>แสดงผล Array อีกครั้งหลังจากลบ</span>
          </div>
        </div>
      `,
      starterCode: `// ข้อที่ 1: จัดการรายชื่อเพื่อน
// --- เขียนโค้ดต่อจากตรงนี้ ---

// 1. สร้าง Array เก็บชื่อเพื่อน 5 คน
let friends: string[] = ["ชื่อ1", "ชื่อ2", "ชื่อ3", "ชื่อ4", "ชื่อ5"];

// 2. เพิ่มเพื่อนอีก 1 คน
// (เขียนคำสั่ง push ตรงนี้)

// 3. แสดงผล Array
console.log("หลังเพิ่ม:", friends);

// 4. ลบเพื่อนคนสุดท้ายออก
// (เขียนคำสั่ง pop ตรงนี้)

// 5. แสดงผล Array หลังลบ
console.log("หลังลบ:", friends);`,
      expectedOutput: `หลังเพิ่ม: ["ชื่อ1", "ชื่อ2", "ชื่อ3", "ชื่อ4", "ชื่อ5", "ชื่อ6"]
หลังลบ: ["ชื่อ1", "ชื่อ2", "ชื่อ3", "ชื่อ4", "ชื่อ5"]`,
      hint: 'เปลี่ยน "ชื่อ1", "ชื่อ2" ... เป็นชื่อจริงของเพื่อนในห้องได้เลย'
    },
    {
      title: 'ข้อที่ 2: สร้างฟังก์ชันคำนวณ',
      difficulty: '⭐⭐ ปานกลาง',
      objective: 'ฝึกสร้าง Function ทั้งแบบปกติและ Arrow Function พร้อมกำหนด Type',
      instruction: `
        <div class="workshop-steps">
          <div class="workshop-step">
            <span class="workshop-step__num">1</span>
            <span>สร้าง <strong>ฟังก์ชันปกติ</strong> ชื่อ <code>add</code> ที่รับตัวเลข 2 ตัว แล้ว<strong>คืนค่าผลบวก</strong>กลับมา</span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">2</span>
            <span>สร้าง <strong>Arrow Function</strong> ชื่อ <code>calcArea</code> ที่รับค่า <code>width</code> กับ <code>height</code> แล้ว<strong>คืนค่าพื้นที่</strong> (กว้าง × สูง)</span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">3</span>
            <span>เรียกใช้ทั้ง 2 ฟังก์ชัน แล้วแสดงผลลัพธ์ทางคอนโซล</span>
          </div>
        </div>
      `,
      starterCode: `// ข้อที่ 2: สร้างฟังก์ชันคำนวณ
// --- เขียนโค้ดต่อจากตรงนี้ ---

// 1. ฟังก์ชันปกติ: บวกเลข 2 จำนวน
function add(a: number, b: number): number {
  // เขียน return ค่าผลบวกตรงนี้
}

// 2. Arrow Function: คำนวณพื้นที่สี่เหลี่ยม
const calcArea = (width: number, height: number): number => {
  // เขียน return ค่าพื้นที่ตรงนี้
};

// 3. ทดสอบเรียกใช้งาน
console.log("ผลบวก 10 + 20 =", add(10, 20));
console.log("พื้นที่ 5 x 8 =", calcArea(5, 8), "ตร.หน่วย");`,
      expectedOutput: `ผลบวก 10 + 20 = 30
พื้นที่ 5 x 8 = 40 ตร.หน่วย`,
      hint: 'ใส่ <code>: number</code> หลังวงเล็บพารามิเตอร์ เพื่อบอก TypeScript ว่าฟังก์ชันจะคืนค่าตัวเลข'
    },
    {
      title: 'ข้อที่ 3: คัดกรองและปรับคะแนน',
      difficulty: '⭐⭐⭐ ท้าทาย',
      objective: 'ฝึกใช้ <code>filter()</code> คัดกรองข้อมูล และ <code>map()</code> แปลงข้อมูลใน Array',
      instruction: `
        <div class="workshop-steps">
          <div class="workshop-step">
            <span class="workshop-step__num">1</span>
            <span>สร้าง Array <code>allScores</code> เก็บคะแนน: <code>[35, 45, 50, 65, 80, 90]</code></span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">2</span>
            <span>ใช้ <code>filter()</code> คัดเฉพาะคะแนนที่ <strong>≥ 50</strong> เก็บในตัวแปร <code>passedScores</code></span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">3</span>
            <span>แสดงผลคะแนนที่ผ่านทางคอนโซล</span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">4</span>
            <span>สร้าง Array <code>bonusScores</code> จากคะแนนชุด <code>[50, 60, 70, 80]</code> โดยใช้ <code>map()</code> <strong>บวกเพิ่มคนละ 5 คะแนน</strong></span>
          </div>
          <div class="workshop-step">
            <span class="workshop-step__num">5</span>
            <span>แสดงผลคะแนนหลังบวกเพิ่มทางคอนโซล</span>
          </div>
        </div>
      `,
      starterCode: `// ข้อที่ 3: คัดกรองและปรับคะแนน
// --- เขียนโค้ดต่อจากตรงนี้ ---

// 1. สร้าง Array คะแนนทั้งหมด
let allScores: number[] = [35, 45, 50, 65, 80, 90];

// 2. ใช้ filter() คัดเฉพาะคะแนน >= 50
let passedScores: number[] = allScores.filter(/* เขียนเงื่อนไขตรงนี้ */);

// 3. แสดงผลคะแนนที่ผ่าน
console.log("คะแนนที่ผ่าน:", passedScores);

// 4. ใช้ map() บวกเพิ่มคนละ 5 คะแนน
let originalScores: number[] = [50, 60, 70, 80];
let bonusScores: number[] = originalScores.map(/* เขียนการบวกตรงนี้ */);

// 5. แสดงผลคะแนนหลังบวกเพิ่ม
console.log("คะแนนหลังบวกเพิ่ม:", bonusScores);`,
      expectedOutput: `คะแนนที่ผ่าน: [50, 65, 80, 90]
คะแนนหลังบวกเพิ่ม: [55, 65, 75, 85]`,
      hint: 'เขียน Arrow Function สั้นๆ ในวงเล็บได้เลย เช่น <code>filter(score => score >= 50)</code> หรือ <code>map(score => score + 5)</code>'
    }
  ]
};
