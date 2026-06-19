/**
 * หน่วยที่ 2: การวิเคราะห์และออกแบบกระบวนการทำงาน
 * วิชาการเขียนโปรแกรมคอมพิวเตอร์ (TypeScript) รหัสวิชา 31900-0002
 */
const unit2Data = [
  {
    type: 'title',
    icon: '📐',
    title: 'หน่วยที่ 2<br><span class="gradient-text">การวิเคราะห์และออกแบบ<br>กระบวนการทำงาน</span>',
    subtitle: 'Flowchart, Pseudocode และขั้นตอนวิธี (Algorithm)'
  },
  {
    type: 'content',
    title: '📋 จุดประสงค์การเรียนรู้',
    content: `
      <ol>
        <li>อธิบายขั้นตอนการพัฒนาโปรแกรม (SDLC) ได้</li>
        <li>วิเคราะห์ปัญหาและออกแบบขั้นตอนวิธี (Algorithm) ได้</li>
        <li>เขียนรหัสลำลอง (Pseudocode) ได้</li>
        <li>เขียนผังงาน (Flowchart) ได้</li>
        <li>ประยุกต์ใช้การออกแบบขั้นตอนวิธีกับการเขียนโปรแกรม TypeScript</li>
      </ol>
    `
  },
  {
    type: 'content',
    title: 'วงจรการพัฒนาโปรแกรม (SDLC)',
    icon: '🔄',
    content: `
      <p><strong>SDLC (Software Development Life Cycle)</strong> คือ กระบวนการในการพัฒนาซอฟต์แวร์อย่างเป็นระบบ</p>
      <table class="comparison-table">
        <tr><th>ขั้นตอน</th><th>คำอธิบาย</th><th>ผลลัพธ์</th></tr>
        <tr><td>1. วิเคราะห์ปัญหา</td><td>ทำความเข้าใจโจทย์ ระบุ Input/Output</td><td>เอกสาร Requirements</td></tr>
        <tr><td>2. ออกแบบ</td><td>วาง Flowchart, Pseudocode</td><td>แผนผังการทำงาน</td></tr>
        <tr><td>3. เขียนโปรแกรม</td><td>เขียนโค้ดตามที่ออกแบบไว้</td><td>Source Code</td></tr>
        <tr><td>4. ทดสอบ</td><td>ทดสอบว่าทำงานถูกต้องหรือไม่</td><td>Test Results</td></tr>
        <tr><td>5. ติดตั้งใช้งาน</td><td>นำโปรแกรมไปใช้งานจริง</td><td>ระบบที่พร้อมใช้งาน</td></tr>
        <tr><td>6. บำรุงรักษา</td><td>แก้ไข ปรับปรุง เพิ่มฟีเจอร์</td><td>เวอร์ชันอัปเดต</td></tr>
      </table>
    `
  },
  {
    type: 'content',
    title: 'ขั้นตอนวิธี (Algorithm)',
    icon: '🧮',
    content: `
      <p><strong>Algorithm (อัลกอริทึม)</strong> คือ ลำดับขั้นตอนที่ชัดเจนในการแก้ปัญหา</p>
      <p>คุณสมบัติของ Algorithm ที่ดี:</p>
      <ul>
        <li><strong>มีจุดเริ่มต้นและจุดสิ้นสุด</strong> (Finiteness) — ต้องจบได้</li>
        <li><strong>ชัดเจน</strong> (Definiteness) — แต่ละขั้นตอนไม่คลุมเครือ</li>
        <li><strong>รับ Input</strong> — มีข้อมูลนำเข้า 0 ตัวขึ้นไป</li>
        <li><strong>ให้ Output</strong> — มีผลลัพธ์อย่างน้อย 1 อย่าง</li>
        <li><strong>มีประสิทธิภาพ</strong> (Effectiveness) — ทำได้จริง</li>
      </ul>
      <div class="info-box info-box--info">
        <div class="info-box__title">💡 ตัวอย่างในชีวิตจริง</div>
        <div class="info-box__content">สูตรทำไข่เจียว: 1) ตอกไข่ → 2) ตีไข่ → 3) ใส่เครื่องปรุง → 4) ตั้งกระทะ → 5) เทไข่ลงทอด → 6) พลิกไข่ → 7) ตักใส่จาน</div>
      </div>
    `
  },
  {
    type: 'content',
    title: 'การวิเคราะห์ปัญหา (Problem Analysis)',
    content: `
      <p>ก่อนเขียนโปรแกรม ต้องวิเคราะห์ปัญหาด้วยหลัก <strong>IPO (Input-Process-Output)</strong></p>
      <table class="comparison-table">
        <tr><th>ส่วน</th><th>คำถาม</th><th>ตัวอย่าง: คำนวณพื้นที่สี่เหลี่ยม</th></tr>
        <tr><td><strong>Input</strong> (ข้อมูลเข้า)</td><td>ต้องการข้อมูลอะไรบ้าง?</td><td>กว้าง, ยาว</td></tr>
        <tr><td><strong>Process</strong> (ประมวลผล)</td><td>ต้องทำอะไรกับข้อมูล?</td><td>พื้นที่ = กว้าง × ยาว</td></tr>
        <tr><td><strong>Output</strong> (ผลลัพธ์)</td><td>ต้องการผลลัพธ์อะไร?</td><td>ค่าพื้นที่</td></tr>
      </table>
    `
  },
  {
    type: 'content',
    title: 'รหัสลำลอง (Pseudocode)',
    icon: '📝',
    content: `
      <p><strong>Pseudocode</strong> คือ การเขียนขั้นตอนวิธีด้วยภาษาที่ใกล้เคียงภาษามนุษย์ แต่มีโครงสร้างคล้ายภาษาโปรแกรม</p>
      <p><strong>ข้อดี:</strong></p>
      <ul>
        <li>เข้าใจง่าย ไม่ต้องรู้ภาษาโปรแกรมเฉพาะ</li>
        <li>ช่วยวางแผนก่อนเขียนโค้ดจริง</li>
        <li>สื่อสารกับทีมได้สะดวก</li>
      </ul>
      <div class="info-box info-box--tip">
        <div class="info-box__title">📏 หลักการเขียน Pseudocode</div>
        <div class="info-box__content">
          ใช้คำกริยาที่ชัดเจน เช่น READ, WRITE, COMPUTE, IF, WHILE, FOR<br>
          ย่อหน้า (Indent) เพื่อแสดงระดับ
        </div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'ตัวอย่าง Pseudocode: คำนวณเกรด',
    subtitle: 'เขียน Pseudocode ก่อน → แล้วค่อยแปลงเป็น TypeScript',
    code: `BEGIN
  READ คะแนนสอบ
  IF คะแนนสอบ >= 80 THEN
    WRITE "เกรด A"
  ELSE IF คะแนนสอบ >= 70 THEN
    WRITE "เกรด B"
  ELSE IF คะแนนสอบ >= 60 THEN
    WRITE "เกรด C"
  ELSE IF คะแนนสอบ >= 50 THEN
    WRITE "เกรด D"
  ELSE
    WRITE "เกรด F"
  END IF
END`,
    lang: 'plaintext'
  },
  {
    type: 'code',
    title: 'แปลง Pseudocode → TypeScript',
    subtitle: 'จาก Pseudocode เกรด แปลงเป็นโค้ด TypeScript',
    code: `function calculateGrade(score: number): string {
  if (score >= 80) {
    return "เกรด A";
  } else if (score >= 70) {
    return "เกรด B";
  } else if (score >= 60) {
    return "เกรด C";
  } else if (score >= 50) {
    return "เกรด D";
  } else {
    return "เกรด F";
  }
}

// ทดสอบ
console.log(calculateGrade(85));  // เกรด A
console.log(calculateGrade(72));  // เกรด B
console.log(calculateGrade(45));  // เกรด F`,
    lang: 'typescript',
    note: 'สังเกตว่าโครงสร้างของ Pseudocode และ TypeScript มีความคล้ายกันมาก'
  },
  {
    type: 'content',
    title: 'ผังงาน (Flowchart)',
    icon: '📊',
    content: `
      <p><strong>Flowchart</strong> คือ แผนภูมิที่ใช้สัญลักษณ์แสดงลำดับขั้นตอนการทำงาน</p>
      <table class="comparison-table">
        <tr><th>สัญลักษณ์</th><th>ชื่อ</th><th>หน้าที่</th></tr>
        <tr><td>⬭ (วงรี)</td><td>Terminal</td><td>จุดเริ่มต้น / จุดสิ้นสุด</td></tr>
        <tr><td>▭ (สี่เหลี่ยม)</td><td>Process</td><td>การประมวลผล / คำนวณ</td></tr>
        <tr><td>◇ (ข้าวหลามตัด)</td><td>Decision</td><td>การตัดสินใจ (เงื่อนไข)</td></tr>
        <tr><td>▱ (สี่เหลี่ยมด้านขนาน)</td><td>Input/Output</td><td>รับข้อมูลเข้า / แสดงผลลัพธ์</td></tr>
        <tr><td>→ (ลูกศร)</td><td>Flow Line</td><td>ทิศทางการทำงาน</td></tr>
        <tr><td>⬡ (วงกลม)</td><td>Connector</td><td>จุดเชื่อมต่อ</td></tr>
      </table>
    `
  },
  {
    type: 'content',
    title: 'ตัวอย่าง Flowchart: คำนวณพื้นที่สี่เหลี่ยม',
    content: `
      <div style="text-align:center; padding: 1rem; background: var(--bg-tertiary); border-radius: var(--radius-md); font-family: var(--font-code); font-size: 0.9rem; line-height: 2.2;">
        ⬭ เริ่มต้น<br>
        ↓<br>
        ▱ รับค่า กว้าง (width)<br>
        ↓<br>
        ▱ รับค่า ยาว (length)<br>
        ↓<br>
        ▭ area = width × length<br>
        ↓<br>
        ▱ แสดงผล area<br>
        ↓<br>
        ⬭ จบ
      </div>
      <div class="info-box info-box--tip">
        <div class="info-box__title">💡 เครื่องมือวาด Flowchart</div>
        <div class="info-box__content">
          แนะนำ: <strong>draw.io</strong> (ฟรี), <strong>Lucidchart</strong>, หรือ <strong>Mermaid.js</strong>
        </div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'แปลง Flowchart → TypeScript',
    subtitle: 'จาก Flowchart คำนวณพื้นที่ แปลงเป็นโค้ด TypeScript',
    code: `// คำนวณพื้นที่สี่เหลี่ยมผืนผ้า
function calculateArea(width: number, length: number): number {
  // Process: คำนวณพื้นที่
  const area: number = width * length;
  return area;
}

// Input
const width: number = 5;
const length: number = 10;

// Process + Output
const result: number = calculateArea(width, length);
console.log(\`กว้าง = \${width}\`);
console.log(\`ยาว = \${length}\`);
console.log(\`พื้นที่ = \${result} ตารางหน่วย\`);
// ผลลัพธ์: พื้นที่ = 50 ตารางหน่วย`,
    lang: 'typescript'
  },
  {
    type: 'content',
    title: 'รูปแบบโครงสร้างพื้นฐาน 3 แบบ',
    content: `
      <p>โปรแกรมทุกโปรแกรมประกอบด้วยโครงสร้างพื้นฐาน 3 แบบ:</p>
      <table class="comparison-table">
        <tr><th>โครงสร้าง</th><th>คำอธิบาย</th><th>คำสั่งใน TypeScript</th></tr>
        <tr>
          <td><strong>1. ลำดับ</strong> (Sequence)</td>
          <td>ทำงานทีละบรรทัด จากบนลงล่าง</td>
          <td>คำสั่งทั่วไป</td>
        </tr>
        <tr>
          <td><strong>2. ทางเลือก</strong> (Selection)</td>
          <td>เลือกทำตามเงื่อนไข</td>
          <td><code>if/else</code>, <code>switch</code></td>
        </tr>
        <tr>
          <td><strong>3. วนซ้ำ</strong> (Iteration)</td>
          <td>ทำซ้ำจนกว่าจะครบเงื่อนไข</td>
          <td><code>for</code>, <code>while</code></td>
        </tr>
      </table>
      <div class="info-box info-box--info">
        <div class="info-box__title">📖 หลักการสำคัญ</div>
        <div class="info-box__content">ทั้ง 3 โครงสร้างนี้สามารถ <strong>ซ้อนกัน (Nesting)</strong> ได้ เช่น มี loop ซ้อนใน if</div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'ตัวอย่าง: ตรวจสอบเลขคู่-เลขคี่',
    subtitle: 'การวิเคราะห์ → Pseudocode → TypeScript',
    code: `// Pseudocode:
// BEGIN
//   READ number
//   IF number MOD 2 = 0 THEN
//     WRITE "เลขคู่"
//   ELSE
//     WRITE "เลขคี่"
//   END IF
// END

// TypeScript:
function checkEvenOdd(num: number): string {
  if (num % 2 === 0) {
    return \`\${num} เป็นเลขคู่\`;
  } else {
    return \`\${num} เป็นเลขคี่\`;
  }
}

console.log(checkEvenOdd(10));  // 10 เป็นเลขคู่
console.log(checkEvenOdd(7));   // 7 เป็นเลขคี่`,
    lang: 'typescript'
  },
  {
    type: 'code',
    title: 'ตัวอย่าง: หาผลรวม 1 ถึง N',
    subtitle: 'ใช้โครงสร้างวนซ้ำ (Iteration)',
    code: `// Pseudocode:
// BEGIN
//   READ N
//   SET sum = 0
//   FOR i = 1 TO N
//     sum = sum + i
//   END FOR
//   WRITE sum
// END

// TypeScript:
function sumToN(n: number): number {
  let sum: number = 0;
  for (let i: number = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(\`ผลรวม 1-10 = \${sumToN(10)}\`);   // 55
console.log(\`ผลรวม 1-100 = \${sumToN(100)}\`);  // 5050`,
    lang: 'typescript'
  },
  {
    type: 'content',
    title: '📝 สรุปหน่วยที่ 2',
    icon: '✅',
    content: `
      <ul>
        <li><strong>SDLC</strong> คือ วงจรการพัฒนาซอฟต์แวร์ 6 ขั้นตอน</li>
        <li><strong>Algorithm</strong> คือ ลำดับขั้นตอนที่ชัดเจนในการแก้ปัญหา</li>
        <li><strong>IPO</strong> (Input-Process-Output) ช่วยวิเคราะห์ปัญหา</li>
        <li><strong>Pseudocode</strong> คือ การเขียนขั้นตอนด้วยภาษาใกล้เคียงมนุษย์</li>
        <li><strong>Flowchart</strong> คือ แผนภูมิแสดงขั้นตอนด้วยสัญลักษณ์</li>
        <li>โครงสร้างพื้นฐาน 3 แบบ: <strong>ลำดับ, ทางเลือก, วนซ้ำ</strong></li>
      </ul>
      <div class="info-box info-box--warning">
        <div class="info-box__title">📌 แบบฝึกหัด</div>
        <div class="info-box__content">
          1. วิเคราะห์ปัญหา "คำนวณค่า BMI" ด้วยหลัก IPO<br>
          2. เขียน Pseudocode สำหรับการตรวจสอบเกรดจากคะแนน<br>
          3. วาด Flowchart และแปลงเป็น TypeScript สำหรับโปรแกรมคำนวณค่าไฟฟ้า
        </div>
      </div>
    `
  }
];
