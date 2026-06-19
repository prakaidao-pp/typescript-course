/**
 * หน่วยที่ 3: ชนิดข้อมูล ตัวแปร และตัวดำเนินการ
 * วิชาการเขียนโปรแกรมคอมพิวเตอร์ (TypeScript) รหัสวิชา 31900-0002
 */
const unit3Data = [
  {
    type: 'title',
    icon: '🔤',
    title: 'หน่วยที่ 3<br><span class="gradient-text">ชนิดข้อมูล ตัวแปร<br>และตัวดำเนินการ</span>',
    subtitle: 'Types, Variables, Operators ใน TypeScript'
  },
  {
    type: 'content',
    title: '📋 จุดประสงค์การเรียนรู้',
    content: `
      <ol>
        <li>อธิบายชนิดข้อมูลพื้นฐาน (Primitive Types) ใน TypeScript ได้</li>
        <li>ประกาศตัวแปรด้วย <code>let</code>, <code>const</code> พร้อมระบุ Type ได้</li>
        <li>ใช้งาน Type Annotation และ Type Inference ได้</li>
        <li>ใช้ตัวดำเนินการ (Operators) ต่างๆ ได้อย่างถูกต้อง</li>
        <li>แปลงชนิดข้อมูล (Type Conversion) ได้</li>
      </ol>
    `
  },
  {
    type: 'content',
    title: 'ชนิดข้อมูลพื้นฐาน (Primitive Types)',
    icon: '📦',
    content: `
      <table class="comparison-table">
        <tr><th>ชนิดข้อมูล</th><th>คำอธิบาย</th><th>ตัวอย่าง</th></tr>
        <tr><td><code>string</code></td><td>ข้อความ (ตัวอักษร)</td><td><code>"สวัสดี"</code>, <code>'Hello'</code></td></tr>
        <tr><td><code>number</code></td><td>ตัวเลข (จำนวนเต็มและทศนิยม)</td><td><code>42</code>, <code>3.14</code></td></tr>
        <tr><td><code>boolean</code></td><td>ค่าความจริง</td><td><code>true</code>, <code>false</code></td></tr>
        <tr><td><code>null</code></td><td>ค่าว่าง (ตั้งใจให้ว่าง)</td><td><code>null</code></td></tr>
        <tr><td><code>undefined</code></td><td>ยังไม่ได้กำหนดค่า</td><td><code>undefined</code></td></tr>
        <tr><td><code>bigint</code></td><td>ตัวเลขขนาดใหญ่มาก</td><td><code>9007199254740991n</code></td></tr>
        <tr><td><code>symbol</code></td><td>ค่าเฉพาะไม่ซ้ำกัน</td><td><code>Symbol("id")</code></td></tr>
      </table>
    `
  },
  {
    type: 'code',
    title: 'การประกาศตัวแปร (Variables)',
    subtitle: 'ใช้ let สำหรับค่าที่เปลี่ยนได้ และ const สำหรับค่าคงที่',
    code: `// let — ค่าเปลี่ยนแปลงได้
let studentName: string = "สมชาย";
let age: number = 20;
let isActive: boolean = true;

studentName = "สมหญิง";  // ✅ เปลี่ยนค่าได้
age = 21;                 // ✅ เปลี่ยนค่าได้

// const — ค่าคงที่ เปลี่ยนไม่ได้
const PI: number = 3.14159;
const SCHOOL_NAME: string = "วิทยาลัยเทคนิค";

// PI = 3.14;  // ❌ Error! ค่า const เปลี่ยนไม่ได้

// var — ไม่แนะนำให้ใช้ (แบบเก่า)
// var oldStyle = "ไม่ควรใช้";`,
    lang: 'typescript',
    note: '<code>let</code> ใช้เมื่อค่าจะเปลี่ยนได้ &nbsp;|&nbsp; <code>const</code> ใช้เมื่อค่าไม่เปลี่ยน &nbsp;|&nbsp; <strong>ห้ามใช้ <code>var</code></strong>'
  },
  {
    type: 'code',
    title: 'Type Annotation vs Type Inference',
    subtitle: 'TypeScript สามารถเดาชนิดข้อมูลได้อัตโนมัติ',
    code: `// Type Annotation — ระบุ Type เอง (ชัดเจน)
let name: string = "สมชาย";
let score: number = 85;
let passed: boolean = true;

// Type Inference — TS เดา Type ให้อัตโนมัติ
let name2 = "สมหญิง";    // TS รู้ว่าเป็น string
let score2 = 90;          // TS รู้ว่าเป็น number
let passed2 = false;      // TS รู้ว่าเป็น boolean

// ⚠️ เมื่อ TS เดา Type แล้ว จะเปลี่ยน Type ไม่ได้!
// name2 = 100;   // ❌ Error: Type 'number' is not assignable to type 'string'

// แนะนำ: ใช้ Type Annotation เมื่อ...
let data: string | number;   // ตัวแปรรับได้หลาย Type
let items: string[] = [];    // Array ว่าง (TS เดาไม่ได้)`,
    lang: 'typescript'
  },
  {
    type: 'content',
    title: 'ชนิดข้อมูลพิเศษใน TypeScript',
    content: `
      <table class="comparison-table">
        <tr><th>ชนิด</th><th>คำอธิบาย</th><th>ตัวอย่าง</th></tr>
        <tr><td><code>any</code></td><td>รับค่าได้ทุกชนิด (ไม่ตรวจ Type)</td><td><code>let x: any = "hello"; x = 42;</code></td></tr>
        <tr><td><code>unknown</code></td><td>รับค่าได้ทุกชนิด (ปลอดภัยกว่า any)</td><td><code>let x: unknown = "hello";</code></td></tr>
        <tr><td><code>void</code></td><td>ไม่มีค่าส่งกลับ (ใช้กับฟังก์ชัน)</td><td><code>function log(): void { }</code></td></tr>
        <tr><td><code>never</code></td><td>ไม่มีทางเกิดขึ้นได้</td><td><code>function error(): never { throw... }</code></td></tr>
        <tr><td><code>union</code></td><td>รับได้หลายชนิด</td><td><code>let id: string | number;</code></td></tr>
        <tr><td><code>literal</code></td><td>ค่าเฉพาะเจาะจง</td><td><code>let dir: "left" | "right";</code></td></tr>
      </table>
      <div class="info-box info-box--warning">
        <div class="info-box__title">⚠️ คำเตือน</div>
        <div class="info-box__content">หลีกเลี่ยงการใช้ <code>any</code> ให้มากที่สุด เพราะจะทำให้เสียประโยชน์ของ Type System</div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'ชนิดข้อมูล string — ข้อความ',
    subtitle: 'การใช้งาน string และ Template Literal',
    code: `// ประกาศ string ได้ 3 แบบ
let name: string = "สมชาย";          // Double quotes
let school: string = 'วิทยาลัยเทคนิค'; // Single quotes
let greeting: string = \`สวัสดี \${name}!\`; // Template literal

// Template Literal — แทรกตัวแปรใน string
let age: number = 20;
let info: string = \`ชื่อ: \${name}, อายุ: \${age} ปี\`;
console.log(info);
// ผลลัพธ์: ชื่อ: สมชาย, อายุ: 20 ปี

// String Methods (เมธอดที่ใช้บ่อย)
let text: string = "Hello TypeScript";
console.log(text.length);          // 16
console.log(text.toUpperCase());   // HELLO TYPESCRIPT
console.log(text.toLowerCase());   // hello typescript
console.log(text.includes("Type")); // true
console.log(text.indexOf("Type")); // 6
console.log(text.slice(0, 5));     // Hello
console.log(text.split(" "));     // ["Hello", "TypeScript"]`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'ชนิดข้อมูล number — ตัวเลข',
    subtitle: 'TypeScript รวม integer และ float ไว้ในชนิดเดียว',
    code: `// ตัวเลขจำนวนเต็ม (Integer)
let count: number = 42;
let negative: number = -10;

// ตัวเลขทศนิยม (Float)
let price: number = 99.50;
let pi: number = 3.14159;

// เลขฐานต่างๆ
let hex: number = 0xff;        // ฐาน 16 = 255
let binary: number = 0b1010;   // ฐาน 2 = 10
let octal: number = 0o777;     // ฐาน 8 = 511

// ค่าพิเศษ
let maxNum: number = Infinity;
let notANum: number = NaN;     // Not a Number

// Number Methods
console.log(price.toFixed(2));       // "99.50"
console.log(parseInt("42abc"));      // 42
console.log(parseFloat("3.14xyz")); // 3.14
console.log(Number.isInteger(42));   // true
console.log(Number.isNaN(NaN));      // true`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'ชนิดข้อมูล boolean — ค่าความจริง',
    subtitle: 'มีค่าได้แค่ true หรือ false',
    code: `// boolean — ค่าความจริง
let isStudent: boolean = true;
let hasGraduated: boolean = false;

// ได้จากการเปรียบเทียบ
let age: number = 20;
let isAdult: boolean = age >= 18;  // true
let isTeenager: boolean = age < 18; // false

console.log(isAdult);    // true
console.log(isTeenager); // false

// Truthy & Falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: ทุกอย่างที่ไม่ใช่ Falsy

if ("hello") {
  console.log("string ไม่ว่างเป็น truthy"); // จะถูกรัน
}

if (0) {
  console.log("จะไม่ถูกรัน"); // 0 เป็น falsy
}`,
    lang: 'typescript'
  },
  {
    type: 'content',
    title: 'ตัวดำเนินการ (Operators)',
    icon: '➕',
    content: `
      <table class="comparison-table">
        <tr><th>ประเภท</th><th>ตัวดำเนินการ</th><th>ตัวอย่าง</th></tr>
        <tr><td><strong>เลขคณิต</strong> (Arithmetic)</td><td><code>+ - * / % **</code></td><td><code>10 + 5</code>, <code>2 ** 3</code></td></tr>
        <tr><td><strong>กำหนดค่า</strong> (Assignment)</td><td><code>= += -= *= /=</code></td><td><code>x += 5</code> (เท่ากับ x = x + 5)</td></tr>
        <tr><td><strong>เปรียบเทียบ</strong> (Comparison)</td><td><code>== === != !== > < >= <=</code></td><td><code>x === 5</code></td></tr>
        <tr><td><strong>ตรรกะ</strong> (Logical)</td><td><code>&& || !</code></td><td><code>x > 0 && x < 10</code></td></tr>
        <tr><td><strong>เพิ่ม/ลด</strong> (Increment)</td><td><code>++ --</code></td><td><code>x++</code>, <code>--y</code></td></tr>
        <tr><td><strong>เงื่อนไข</strong> (Ternary)</td><td><code>? :</code></td><td><code>x > 0 ? "บวก" : "ลบ"</code></td></tr>
        <tr><td><strong>ชนิด</strong> (Type)</td><td><code>typeof as</code></td><td><code>typeof x</code></td></tr>
      </table>
    `
  },
  {
    type: 'code',
    title: 'ตัวดำเนินการเลขคณิต (Arithmetic)',
    code: `let a: number = 10;
let b: number = 3;

console.log(a + b);   // 13  (บวก)
console.log(a - b);   // 7   (ลบ)
console.log(a * b);   // 30  (คูณ)
console.log(a / b);   // 3.333... (หาร)
console.log(a % b);   // 1   (เศษจากการหาร - Modulo)
console.log(a ** b);  // 1000 (ยกกำลัง: 10^3)

// ลำดับความสำคัญ (Operator Precedence)
let result: number = 2 + 3 * 4;      // 14 (คูณก่อน)
let result2: number = (2 + 3) * 4;   // 20 (วงเล็บก่อน)

// String concatenation
let firstName: string = "สม";
let lastName: string = "ชาย";
let fullName: string = firstName + lastName; // "สมชาย"`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'ตัวดำเนินการเปรียบเทียบ & ตรรกะ',
    code: `// เปรียบเทียบ (Comparison)
console.log(5 === 5);    // true  (เท่ากัน - strict)
console.log(5 === "5");  // false (ต่าง type)
console.log(5 !== 3);    // true  (ไม่เท่ากัน)
console.log(10 > 5);     // true  (มากกว่า)
console.log(3 <= 3);     // true  (น้อยกว่าหรือเท่ากับ)

// ⚠️ ใช้ === แทน == เสมอ!
// == ไม่ตรวจ type: "5" == 5 → true (อันตราย!)
// === ตรวจ type: "5" === 5 → false (ปลอดภัย!)

// ตรรกะ (Logical)
let age: number = 20;
let hasID: boolean = true;

// AND (&&) — ทั้งสองต้อง true
console.log(age >= 18 && hasID);  // true

// OR (||) — อย่างใดอย่างหนึ่ง true
console.log(age >= 18 || hasID);  // true

// NOT (!) — กลับค่า
console.log(!hasID);              // false

// Ternary Operator (เงื่อนไขแบบย่อ)
let status: string = age >= 18 ? "ผู้ใหญ่" : "เด็ก";
console.log(status);  // "ผู้ใหญ่"`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'Union Types — รับค่าได้หลายชนิด',
    subtitle: 'ใช้เครื่องหมาย | เพื่อระบุชนิดข้อมูลหลายชนิด',
    code: `// Union Type — รับค่าได้มากกว่า 1 ชนิด
let id: string | number;
id = "ABC123";   // ✅ เป็น string ได้
id = 456;        // ✅ เป็น number ได้
// id = true;    // ❌ Error! boolean ไม่อยู่ใน union

// ใช้กับฟังก์ชัน
function printId(id: string | number): void {
  if (typeof id === "string") {
    // ใน block นี้ TS รู้ว่า id เป็น string
    console.log(\`ID (ข้อความ): \${id.toUpperCase()}\`);
  } else {
    // ใน block นี้ TS รู้ว่า id เป็น number
    console.log(\`ID (ตัวเลข): \${id.toFixed(0)}\`);
  }
}

printId("abc");  // ID (ข้อความ): ABC
printId(123);    // ID (ตัวเลข): 123

// Literal Types — ค่าเฉพาะเจาะจง
type Direction = "up" | "down" | "left" | "right";
let move: Direction = "up";    // ✅
// let move2: Direction = "diagonal"; // ❌ Error!`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'การแปลงชนิดข้อมูล (Type Conversion)',
    code: `// String → Number
let str: string = "42";
let num1: number = Number(str);        // 42
let num2: number = parseInt(str);      // 42
let num3: number = parseFloat("3.14"); // 3.14
let num4: number = +str;              // 42 (unary plus)

// Number → String
let num: number = 42;
let str1: string = String(num);        // "42"
let str2: string = num.toString();     // "42"
let str3: string = num.toFixed(2);     // "42.00"
let str4: string = \`\${num}\`;          // "42" (template literal)

// Boolean Conversion
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false

// Type Assertion (บอก TS ว่าเรารู้ type แน่ๆ)
let someValue: unknown = "Hello TypeScript";
let strLength: number = (someValue as string).length;
console.log(strLength); // 16`,
    lang: 'typescript'
  },
  {
    type: 'content',
    title: '📝 สรุปหน่วยที่ 3',
    icon: '✅',
    content: `
      <ul>
        <li>ชนิดข้อมูลพื้นฐาน: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code></li>
        <li>ใช้ <code>let</code> สำหรับค่าที่เปลี่ยนได้, <code>const</code> สำหรับค่าคงที่</li>
        <li><strong>Type Annotation</strong>: ระบุ Type เอง &nbsp;|&nbsp; <strong>Type Inference</strong>: TS เดาให้</li>
        <li>ตัวดำเนินการ: เลขคณิต, เปรียบเทียบ, ตรรกะ, กำหนดค่า</li>
        <li>ใช้ <code>===</code> แทน <code>==</code> เพื่อความปลอดภัย</li>
        <li><strong>Union Type</strong> (<code>|</code>) ใช้เมื่อตัวแปรรับค่าได้หลายชนิด</li>
      </ul>
      <div class="info-box info-box--warning">
        <div class="info-box__title">📌 แบบฝึกหัด</div>
        <div class="info-box__content">
          1. เขียนโปรแกรมรับชื่อ-อายุ แล้วแสดงผลว่าเป็น "เด็ก" หรือ "ผู้ใหญ่"<br>
          2. เขียนโปรแกรมคำนวณ BMI (BMI = น้ำหนัก / ส่วนสูง²)<br>
          3. เขียนโปรแกรมแปลงอุณหภูมิ °C เป็น °F (°F = °C × 9/5 + 32)
        </div>
      </div>
    `
  }
];
