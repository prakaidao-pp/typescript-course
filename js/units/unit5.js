/**
 * หน่วยที่ 5: อาร์เรย์และฟังก์ชัน (Arrays and Functions)
 * วิชาการเขียนโปรแกรมคอมพิวเตอร์ (TypeScript) รหัสวิชา 31900-0002
 */
const unit5Data = [
  {
    type: 'title',
    icon: '📦',
    title: 'หน่วยที่ 5<br><span class="gradient-text">อาร์เรย์และฟังก์ชัน<br>(Arrays & Functions)</span>',
    subtitle: 'การเก็บข้อมูลแบบกลุ่มและการจัดระเบียบชุดคำสั่งเพื่อทำงานร่วมกัน'
  },
  {
    type: 'content',
    title: '📋 จุดประสงค์การเรียนรู้',
    content: `
      <ol>
        <li>อธิบายความจำเป็นและความหมายของ Array และ Tuple ได้</li>
        <li>ประกาศตัวแปรและเข้าถึงสมาชิกของ Array และ Tuple ได้ถูกต้อง</li>
        <li>ใช้งานเมธอดจัดการ Array พื้นฐาน (push, pop, map, filter) ได้อย่างถูกต้อง</li>
        <li>อธิบายความจำเป็น รูปแบบโครงสร้าง และการสร้างฟังก์ชันได้</li>
        <li>กำหนด Parameters และระบุ Return Type ของฟังก์ชันได้ถูกต้อง</li>
        <li>เขียนฟังก์ชันในรูปแบบ Arrow Function และแบบย่อได้</li>
        <li>เขียนโปรแกรมประยุกต์ใช้งาน Array ร่วมกับ Function ในสถานการณ์จริงได้</li>
      </ol>
    `
  },
  {
    type: 'split',
    title: '🤔 ทำไมต้องมี Array?',
    left: `
      <p>สมมติว่าต้องการเก็บคะแนนของนักเรียน 5 คน ถ้าเขียนโปรแกรมทั่วไปเราต้องประกาศ 5 ตัวแปร:</p>
      <div class="code-block">
        <pre><code class="language-typescript">let score1: number = 85;
let score2: number = 90;
let score3: number = 78;
let score4: number = 92;
let score5: number = 88;

// ถ้ามีนักเรียน 100 คน? 😱
// ต้องประกาศ score1 ถึง score100!
// คำนวณหาผลรวมหรือคะแนนเฉลี่ยยากมาก</code></pre>
      </div>
    `,
    right: `
      <p><strong>ปัญหาในการทำซ้ำหรือคำนวณ:</strong></p>
      <ul>
        <li>โค้ดจะยาวและยากต่อการแก้ไข</li>
        <li>ไม่สามารถนำข้อมูลมารันด้วยลูป (Loop) ได้ง่ายๆ</li>
        <li>การประมวลผลข้อมูลร่วมกัน เช่น หาค่าเฉลี่ย จะยุ่งยากมาก</li>
      </ul>
      <div class="info-box info-box--tip">
        <div class="info-box__title">💡 ทางออก</div>
        <div class="info-box__content">ใช้ <strong>Array (อาร์เรย์)</strong> เพื่อยุบตัวแปรทั้งหมดมารวมกันเป็นตัวแปรเดียว</div>
      </div>
    `
  },
  {
    type: 'content',
    title: '📦 Array คืออะไร?',
    icon: '📊',
    content: `
      <p><strong>Array (อาร์เรย์ / แถวลำดับ)</strong> คือ ตัวแปรชนิดโครงสร้างที่ใช้สำหรับเก็บกลุ่มข้อมูลที่เป็น <strong>ชนิดเดียวกัน</strong> ไว้ในตัวแปรตัวเดียว</p>
      <ul>
        <li>เปรียบเสมือน <strong>"ตู้คอนเทนเนอร์"</strong> ที่มีกล่องย่อยเรียงต่อกันเป็นแถว</li>
        <li>แต่ละช่องข้อมูลจะมี <strong>"ดัชนี (Index)"</strong> ประจำตัวเพื่อใช้อ้างอิงตำแหน่ง</li>
        <li><strong>ดัชนีจะเริ่มต้นที่ 0 เสมอ</strong> ช่องที่สองคือ 1 ช่องที่สามคือ 2 ไปเรื่อยๆ</li>
      </ul>
      <div class="info-box info-box--info">
        <div class="info-box__title">📝 โครงสร้างหน่วยความจำของ Array</div>
        <div class="info-box__content" style="font-family: var(--font-code); text-align: center;">
          [ index 0 ] ➔ "แอปเปิ้ล"<br>
          [ index 1 ] ➔ "กล้วย"<br>
          [ index 2 ] ➔ "ส้ม"<br>
          (ความยาว / length = 3)
        </div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'การประกาศ Array ใน TypeScript',
    subtitle: 'การกำหนดชนิดข้อมูลของอาร์เรย์ทำได้ 2 รูปแบบ',
    code: `// รูปแบบที่ 1: ใช้เครื่องหมาย Type[] (แนะนำและนิยมมากที่สุด)
let scores: number[] = [85, 90, 78, 92, 88];
let names: string[] = ["สมชาย", "สมหญิง", "สมศรี"];

// รูปแบบที่ 2: ใช้รูปแบบ Generic Array (Array<Type>)
let fruits: Array<string> = ["Apple", "Banana", "Orange"];
let statusFlags: Array<boolean> = [true, false, true];

// การสร้าง Array ว่างเปล่า
let emptyArray: number[] = []; // หรือ new Array<number>()
emptyArray.push(10); // เพิ่มข้อมูลในภายหลัง

console.log("คะแนน:", scores);
console.log("รายชื่อ:", names);`,
    lang: 'typescript',
    note: 'TypeScript จะบังคับว่าค่าภายใน Array จะต้องตรงตาม Type ที่กำหนดไว้เท่านั้น ไม่สามารถนำข้อมูลต่างชนิดมาใส่ปนกันได้'
  },
  {
    type: 'code',
    title: 'การเข้าถึงสมาชิกและการแก้ไขค่า',
    subtitle: 'ใช้เครื่องหมายวงเล็บเหลี่ยม [index] ในการอ้างอิงตำแหน่ง',
    code: `let colors: string[] = ["แดง", "เขียว", "น้ำเงิน"];

// 1. การเข้าถึงสมาชิกเพื่ออ่านค่า (Index เริ่มที่ 0)
console.log(colors[0]); // "แดง"
console.log(colors[2]); // "น้ำเงิน"
console.log(colors[5]); // undefined (ไม่มีข้อมูลช่องนี้)

// 2. การแก้ไขค่าสมาชิกในช่องที่ระบุ
colors[1] = "เหลือง"; 
console.log(colors); // ["แดง", "เหลือง", "น้ำเงิน"]

// 3. การตรวจสอบขนาดความยาวของ Array
console.log("จำนวนสีทั้งหมด:", colors.length); // 3

// 4. การดึงสมาชิกตัวสุดท้ายของ Array
let lastColor = colors[colors.length - 1];
console.log("สีสุดท้าย:", lastColor); // "น้ำเงิน"`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'Tuple ใน TypeScript',
    subtitle: 'อาร์เรย์โครงสร้างพิเศษที่ระบุชนิดข้อมูลแต่ละตำแหน่งได้',
    code: `// การประกาศ Tuple กำหนดขนาดและชนิดข้อมูลในแต่ละตำแหน่งคงที่
let student: [string, number, boolean];

// กำหนดค่าให้ตรงตำแหน่งและชนิดข้อมูลที่ประกาศไว้
student = ["สมศักดิ์", 20, true]; // [ชื่อ, อายุ, ผ่านเกณฑ์หรือไม่]

// อ่านข้อมูล
console.log("ชื่อ:", student[0]); // "สมศักดิ์" (Type: string)
console.log("อายุ:", student[1]); // 20 (Type: number)

// ข้อควรระวัง: สลับชนิดข้อมูลหรือสลับตำแหน่งไม่ได้!
// student = [20, "สมศักดิ์", true]; // ❌ Error! ชนิดข้อมูลไม่ตรงตามลำดับตำแหน่ง

// ตัวอย่างงานจริง: การเก็บพิกัดแผนที่ (Latitude, Longitude)
const coordinate: [number, number] = [13.7563, 100.5018];`,
    lang: 'typescript',
    note: 'Tuple เหมาะสำหรับการรวบรวมข้อมูลต่างชนิดที่มีจำนวนจำกัดและมีรูปแบบที่แน่นอน'
  },
  {
    type: 'code',
    title: 'เมธอดจัดการ Array: push() และ pop()',
    subtitle: 'การเพิ่มและลบข้อมูลที่ท้ายสุดของอาร์เรย์',
    code: `let playlist: string[] = ["เพลงที่ 1", "เพลงที่ 2"];

// 1. push() — นำสมาชิกใหม่ไปต่อท้ายสุดของ Array
playlist.push("เพลงที่ 3");
playlist.push("เพลงที่ 4");
console.log("หลัง push:", playlist); 
// ผลลัพธ์: ["เพลงที่ 1", "เพลงที่ 2", "เพลงที่ 3", "เพลงที่ 4"]

// 2. pop() — ดึงสมาชิกตัวสุดท้ายออกจาก Array และคืนค่านั้นมา
let removedTrack = playlist.pop();
console.log("เพลงที่ถูกเอาออก:", removedTrack); // "เพลงที่ 4"
console.log("หลัง pop:", playlist); 
// ผลลัพธ์: ["เพลงที่ 1", "เพลงที่ 2", "เพลงที่ 3"]`,
    lang: 'typescript',
    note: 'ทั่งสองเมธอดนี้จะทำการแก้ไข Array ดั้งเดิม (Mutate) โดยตรง'
  },
  {
    type: 'code',
    title: 'เมธอดจัดการ Array: map()',
    subtitle: 'การแปลงข้อมูลจาก Array เดิมเพื่อสร้างเป็น Array ใหม่',
    code: `let numbers: number[] = [1, 2, 3, 4, 5];

// ใช้ map() เพื่อคำนวณเลขยกกำลังสองของทุกสมาชิก
let squared: number[] = numbers.map(function(num) {
  return num * num;
});
console.log("เดิม:", numbers);  // [1, 2, 3, 4, 5]
console.log("ใหม่:", squared);  // [1, 4, 9, 16, 25]

// แปลงรูปแบบข้อมูล เช่น แปลงตัวเลขเป็นข้อความบาทไทย
let prices: number[] = [100, 250, 499];
let formattedPrices: string[] = prices.map(price => \`\${price} บาท\`);
console.log(formattedPrices); // ["100 บาท", "250 บาท", "499 บาท"]`,
    lang: 'typescript',
    note: 'เมธอด <code>map()</code> จะไม่ไปยุ่งหรือเปลี่ยนแปลงข้อมูลใน Array ดั้งเดิม แต่จะส่งออกเป็น Array ใหม่ที่ผ่านการแปลงผลแล้ว'
  },
  {
    type: 'code',
    title: 'เมธอดจัดการ Array: filter()',
    subtitle: 'คัดกรองเฉพาะสมาชิกที่ตรงตามเงื่อนไขที่กำหนด',
    code: `let scores: number[] = [45, 78, 92, 50, 64, 38];

// คัดเฉพาะคะแนนที่สอบผ่าน (ตั้งแต่ 50 คะแนนขึ้นไป)
let passedScores: number[] = scores.filter(function(score) {
  return score >= 50;
});
console.log("ผ่าน:", passedScores); // [78, 92, 50, 64]

// คัดเฉพาะคำที่มีความยาวตัวอักษรมากกว่า 5 ตัวขึ้นไป
let words: string[] = ["cat", "elephant", "dog", "giraffe"];
let longWords: string[] = words.filter(word => word.length > 5);
console.log("คำศัพท์ยาว:", longWords); // ["elephant", "giraffe"]`,
    lang: 'typescript',
    note: 'ฟังก์ชันใน <code>filter()</code> จะต้องคืนค่ากลับเป็น Boolean (true คือเก็บไว้ / false คือตัดทิ้ง)'
  },
  {
    type: 'content',
    title: '📋 สรุปการจัดการ Array ที่พบบ่อย',
    icon: '💡',
    content: `
      <table class="comparison-table">
        <tr>
          <th>คำสั่ง/เมธอด</th>
          <th>หน้าที่</th>
          <th>ส่งผลต่ออาร์เรย์เดิมหรือไม่</th>
        </tr>
        <tr>
          <td><code>push(x)</code></td>
          <td>เพิ่มข้อมูล <code>x</code> ต่อท้ายอาร์เรย์</td>
          <td><strong>แก้ไขอาร์เรย์เดิม</strong> (Mutated)</td>
        </tr>
        <tr>
          <td><code>pop()</code></td>
          <td>ดึงข้อมูลตัวสุดท้ายสุดออก</td>
          <td><strong>แก้ไขอาร์เรย์เดิม</strong> (Mutated)</td>
        </tr>
        <tr>
          <td><code>shift()</code></td>
          <td>ดึงข้อมูลตัวแรกสุดด้านหน้าออก</td>
          <td><strong>แก้ไขอาร์เรย์เดิม</strong> (Mutated)</td>
        </tr>
        <tr>
          <td><code>unshift(x)</code></td>
          <td>เพิ่มข้อมูล <code>x</code> เข้าที่หน้าสุดของอาร์เรย์</td>
          <td><strong>แก้ไขอาร์เรย์เดิม</strong> (Mutated)</td>
        </tr>
        <tr>
          <td><code>map()</code></td>
          <td>แปลงสมาชิกทุกตัวเป็นค่าใหม่</td>
          <td>สร้างอาร์เรย์ขึ้นมาใหม่</td>
        </tr>
        <tr>
          <td><code>filter()</code></td>
          <td>กรองเฉพาะข้อมูลที่ผ่านเงื่อนไข</td>
          <td>สร้างอาร์เรย์ขึ้นมาใหม่</td>
        </tr>
      </table>
    `
  },
  {
    type: 'content',
    title: '⚙️ Function คืออะไร?',
    icon: '⚡',
    content: `
      <p><strong>Function (ฟังก์ชัน / ฟังก์ชันการทำงาน)</strong> คือ ชุดคำสั่งที่ถูกรวมเข้าไว้ด้วยกันและตั้งชื่อเอาไว้ เพื่อให้เรียกใช้งานซ้ำๆ ได้โดยไม่ต้องเขียนโค้ดเดิมซ้ำใหม่</p>
      <ul>
        <li>เปรียบเสมือน <strong>"เครื่องจักรในโรงงาน"</strong>: ป้อนวัตถุดิบ (Input) ➔ ผ่านขั้นตอนแปรรูป ➔ ส่งสินค้าสำเร็จรูปออกมา (Output)</li>
        <li>ช่วยให้โปรแกรมมีความเป็นระเบียบ แบ่งสัดส่วนหน้าที่ชัดเจน (Modularity)</li>
        <li>ง่ายต่อการดีบัก ตรวจสอบข้อผิดพลาด และซ่อมบำรุงในอนาคต</li>
      </ul>
      <div class="info-box info-box--info">
        <div class="info-box__title">📌 องค์ประกอบสำคัญของฟังก์ชัน</div>
        <div class="info-box__content">
          1. <strong>Function Name</strong>: ชื่อของฟังก์ชันสำหรับใช้เรียกงาน<br>
          2. <strong>Parameters (Input)</strong>: ค่าที่ส่งเข้ามาประมวลผล (มีหรือไม่มีก็ได้)<br>
          3. <strong>Body</strong>: โค้ดคำสั่งต่างๆ ที่ดำเนินการขั้นตอนภายใน<br>
          4. <strong>Return Type (Output)</strong>: ชนิดข้อมูลของผลลัพธ์ที่จะตอบกลับ (มีหรือไม่มีก็ได้)
        </div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'การสร้าง Function ใน TypeScript',
    subtitle: 'การประกาศฟังก์ชันพื้นฐานและวิธีเรียกใช้งาน',
    code: `// การประกาศฟังก์ชัน (Function Declaration)
// function ชื่อฟังก์ชัน(พารามิเตอร์: ชนิดข้อมูล): ชนิดผลลัพธ์
function displayGreeting(): void {
  console.log("ยินดีต้อนรับเข้าสู่วิชา TypeScript! 👋");
}

// การเรียกใช้งานฟังก์ชัน (Function Invocation)
displayGreeting(); // พิมพ์ "ยินดีต้อนรับเข้าสู่วิชา TypeScript! 👋"

// ฟังก์ชันที่มีการส่งผ่านค่า (Parameters) และส่งค่ากลับ (Return Value)
function calculateArea(width: number, height: number): number {
  let area: number = width * height;
  return area; // คืนค่าตัวเลขผลลัพธ์กลับไป
}

// รับค่าผลลัพธ์กลับมาเก็บไว้ในตัวแปร
let myRoomArea: number = calculateArea(4, 5);
console.log("พื้นที่ห้อง:", myRoomArea, "ตร.ม."); // 20 ตร.ม.`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'เจาะลึก Parameter ของฟังก์ชัน',
    subtitle: 'การใช้ Optional Parameter (?) และ Default Parameter',
    code: `// 1. Optional Parameter (?) — พารามิเตอร์เสริมที่จะส่งหรือไม่ส่งก็ได้
function showProfile(name: string, age?: number): string {
  if (age) {
    return \`ชื่อ: \${name}, อายุ: \${age} ปี\`;
  }
  return \`ชื่อ: \${name} (ไม่ระบุอายุ)\`;
}
console.log(showProfile("สมชาย", 25)); // "ชื่อ: สมชาย, อายุ: 25 ปี"
console.log(showProfile("สมหญิง"));     // "ชื่อ: สมหญิง (ไม่ระบุอายุ)"

// 2. Default Parameter — กำหนดค่าเริ่มต้นอัตโนมัติหากไม่มีการส่งค่ามา
function registerUser(username: string, role: string = "Student"): void {
  console.log(\`บัญชีผู้ใช้: \${username} [ตำแหน่ง: \${role}]\`);
}
registerUser("prakaidao");          // บัญชีผู้ใช้: prakaidao [ตำแหน่ง: Student]
registerUser("admin_pp", "Teacher"); // บัญชีผู้ใช้: admin_pp [ตำแหน่ง: Teacher]`,
    lang: 'typescript',
    note: 'หมายเหตุ: พารามิเตอร์ที่เป็นแบบทางเลือก (Optional) จะต้องประกาศไว้หลังสุดเสมอ'
  },
  {
    type: 'code',
    title: 'ทำความเข้าใจ Return Type',
    subtitle: 'การบอกว่าฟังก์ชันจะส่งผลลัพธ์เป็นชนิดใดกลับไป',
    code: `// 1. คืนค่าเป็นตัวเลข (number)
function sum(a: number, b: number): number {
  return a + b;
}

// 2. คืนค่าเป็นตัวอักษรข้อความ (string)
function uppercaseText(txt: string): string {
  return txt.toUpperCase();
}

// 3. คืนค่าเป็นจริง/เท็จ (boolean)
function isAdult(age: number): boolean {
  return age >= 18;
}

// 4. ไม่คืนค่าใดๆ กลับเลย (void)
function logWarning(msg: string): void {
  console.warn("⚠️ แจ้งเตือน:", msg);
  // ไม่ต้องใช้คำสั่ง return
}

let checkPass: boolean = isAdult(15); // false`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'Arrow Function — ฟังก์ชันลูกศร',
    subtitle: 'ไวยากรณ์ฟังก์ชันสมัยใหม่ที่เขียนกระชับขึ้น',
    code: `// 1. ฟังก์ชันแบบปกติ (Regular Function)
const multiplyNormal = function (x: number, y: number): number {
  return x * y;
};

// 2. ฟังก์ชันแบบ Arrow (ใช้ => แทนคีย์เวิร์ด function)
const multiplyArrow = (x: number, y: number): number => {
  return x * y;
};

// วิธีเรียกใช้งานใช้งานได้เหมือนกัน
console.log(multiplyNormal(5, 4)); // 20
console.log(multiplyArrow(5, 4));  // 20

// ตัวอย่าง Arrow Function ไม่มีพารามิเตอร์
const sayHello = (): void => console.log("สวัสดีครับ");
sayHello();`,
    lang: 'typescript',
    note: 'นิยมใช้มากในการทำงานร่วมกับ Array Methods และ React framework'
  },
  {
    type: 'code',
    title: 'Function แบบย่อ (Shorthand Arrow)',
    subtitle: 'ลดรูปวงเล็บปีกกาและ return หากมีคำสั่งบรรทัดเดียว',
    code: `// หากในตัวฟังก์ชันมีเพียงแค่คำสั่งส่งกลับค่าบรรทัดเดียว 
// สามารถลบเครื่องหมายปีกกา {} และคีย์เวิร์ด return ออกได้เลย

// แบบเต็ม
const add = (a: number, b: number): number => {
  return a + b;
};

// แบบย่อ (Shorthand)
const addShort = (a: number, b: number): number => a + b;

console.log(addShort(10, 20)); // 30

// ตัวอย่างประยุกต์ร่วมกับเงื่อนไขย่อ (Ternary Operator)
const checkStatus = (score: number): string => score >= 50 ? "ผ่าน" : "ตก";
console.log(checkStatus(72)); // "ผ่าน"`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'การใช้งาน Array ร่วมกับ Function',
    subtitle: 'การส่งผ่านอาร์เรย์เข้าไปจัดการและรับกลับจากฟังก์ชัน',
    code: `// ฟังก์ชันหาค่าเฉลี่ยจากอาร์เรย์ของตัวเลข
function getAverage(numbersList: number[]): number {
  if (numbersList.length === 0) return 0;
  
  let total = 0;
  for (let num of numbersList) {
    total += num;
  }
  return total / numbersList.length;
}

let classScores: number[] = [80, 75, 90, 85];
let averageResult: number = getAverage(classScores);
console.log("คะแนนเฉลี่ยในห้องเรียน:", averageResult); // 82.5

// ฟังก์ชันหาชื่อที่ยาวที่สุดในอาร์เรย์
const getLongestName = (names: string[]): string => {
  return names.reduce((longest, current) => 
    current.length > longest.length ? current : longest, ""
  );
};
console.log(getLongestName(["สมศรี", "วิทยา", "ประไพดาว"])); // "ประไพดาว"`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'ตัวอย่างงานจริง: ระบบรายชื่อนักเรียน',
    subtitle: 'การสร้างฟังก์ชันจัดการอาร์เรย์เก็บข้อมูลนักเรียน',
    code: `// ระบบจำลองฐานข้อมูลรายชื่อนักเรียนด้วย Array ของ Object
interface Student {
  id: number;
  name: string;
  major: string;
}

let studentsDatabase: Student[] = [
  { id: 101, name: "กฤษณะ", major: "IT" },
  { id: 102, name: "นารีรัตน์", major: "IT" }
];

// ฟังก์ชันเพิ่มนักเรียนใหม่
function addStudent(id: number, name: string, major: string): void {
  studentsDatabase.push({ id, name, major });
  console.log(\`✅ เพิ่ม \${name} เข้าระบบเรียบร้อย\`);
}

// ฟังก์ชันค้นหานักเรียนตามแผนกสาขาวิชา
const getStudentsByMajor = (majorName: string): Student[] => {
  return studentsDatabase.filter(std => std.major === majorName);
};

// ทดสอบระบบ
addStudent(103, "วิชาญ", "BC");
addStudent(104, "ชลิตา", "IT");

console.log("นักเรียนสาขา IT ทั้งหมด:", getStudentsByMajor("IT"));`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'ตัวอย่างงานจริง: ระบบร้านค้าและราคารวม',
    subtitle: 'การวิเคราะห์และคำนวณราคาสินค้ารวมภาษีในระบบขายของ',
    code: `interface CartItem {
  productName: string;
  price: number;
  quantity: number;
}

let shoppingCart: CartItem[] = [
  { productName: "เม้าส์ไร้สาย", price: 350, quantity: 2 },
  { productName: "คีย์บอร์ดกลไก", price: 1200, quantity: 1 },
  { productName: "แผ่นรองเม้าส์ขนาดใหญ่", price: 150, quantity: 3 }
];

// ฟังก์ชันคำนวณราคาสุทธิรวมในตะกร้าสินค้า
const calculateCartTotal = (cart: CartItem[]): number => {
  let subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  // คำนวณภาษีมูลค่าเพิ่ม 7% (VAT)
  let vat = subtotal * 0.07;
  return subtotal + vat;
};

let grandTotal: number = calculateCartTotal(shoppingCart);
console.log(\`ราคารวมทั้งสิ้น (รวม VAT 7%): \${grandTotal.toFixed(2)} บาท\`);
// ผลรวมย่อย: 700 + 1200 + 450 = 2350 บาท
// ราคารวม VAT: 2350 + 164.5 = 2514.50 บาท`,
    lang: 'typescript'
  },
  {
    type: 'content',
    title: '📝 สรุปหน่วยที่ 5',
    icon: '✅',
    content: `
      <ul>
        <li><strong>Array</strong> — เก็บข้อมูลชุดเป็นลำดับ อ้างอิง index เริ่มต้นที่ 0 ดึงความยาวด้วย <code>.length</code></li>
        <li><strong>Tuple</strong> — อาร์เรย์ชนิดข้อมูลแบบคงที่และระบุตำแหน่งของ Type ไว้เฉพาะเจาะจง</li>
        <li><strong>เมธอดหลัก</strong> — <code>push</code> เพิ่มท้าย, <code>pop</code> ดึงท้ายออก, <code>map</code> แปลงอาร์เรย์, <code>filter</code> กรองข้อมูล</li>
        <li><strong>Function</strong> — การรวมกลุ่มโค้ดให้รันซ้ำได้ มีพารามิเตอร์ พารามิเตอร์เริ่มต้น และการกำหนดชนิดส่งกลับ (Return Type)</li>
        <li><strong>Arrow Function</strong> — การใช้สัญลักษณ์ <code>=></code> เพื่อความกระชับในการเขียนฟังก์ชัน</li>
      </ul>
      <div class="info-box info-box--warning">
        <div class="info-box__title">📌 แบบฝึกหัดหน่วยที่ 5</div>
        <div class="info-box__content">
          1. เขียนฟังก์ชันรับอาร์เรย์ตัวเลข แล้วคืนค่าตัวเลขที่มีค่ามากที่สุดในกลุ่มกลับมา (Max Value)<br>
          2. เขียนโปรแกรมระบบจัดการสต็อกหนังสือ โดยสร้างฟังก์ชัน <code>addBook</code>, <code>searchBookByAuthor</code> ค้นหา และแสดงรายการทั้งหมด<br>
          3. ใช้ <code>filter()</code> และ <code>map()</code> เพื่อกรองคะแนนนักเรียนที่ผ่าน (>= 50) และบวกคะแนนพิเศษให้ทุกคนเพิ่มคนละ 5 คะแนน
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

