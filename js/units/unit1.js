/**
 * หน่วยที่ 1: พื้นฐานการเขียนโปรแกรมและการเตรียมสภาพแวดล้อม
 * วิชาการเขียนโปรแกรมคอมพิวเตอร์ (TypeScript) รหัสวิชา 31900-0002
 */
const unit1Data = [
  {
    type: 'title',
    icon: '🚀',
    title: 'หน่วยที่ 1<br><span class="gradient-text">พื้นฐานการเขียนโปรแกรม<br>และการเตรียมสภาพแวดล้อม</span>',
    subtitle: 'รู้จัก TypeScript และเตรียมเครื่องมือสำหรับการพัฒนา'
  },
  {
    type: 'content',
    title: '📋 จุดประสงค์การเรียนรู้',
    content: `
      <ol>
        <li>อธิบายความหมายและความสำคัญของการเขียนโปรแกรมคอมพิวเตอร์ได้</li>
        <li>อธิบายความแตกต่างระหว่าง TypeScript กับ JavaScript ได้</li>
        <li>ติดตั้ง Node.js, TypeScript และ Visual Studio Code ได้</li>
        <li>เขียนโปรแกรม TypeScript อย่างง่ายและคอมไพล์ได้</li>
        <li>ใช้งาน Terminal/Command Line เบื้องต้นได้</li>
      </ol>
    `
  },
  {
    type: 'content',
    title: 'โปรแกรมคอมพิวเตอร์คืออะไร?',
    icon: '💡',
    content: `
      <p><strong>โปรแกรมคอมพิวเตอร์ (Computer Program)</strong> คือ ชุดคำสั่งที่เขียนขึ้นเพื่อสั่งให้คอมพิวเตอร์ทำงานตามที่ต้องการ</p>
      <ul>
        <li>เปรียบเสมือน <strong>"สูตรอาหาร"</strong> ที่บอกขั้นตอนทำอาหารทีละขั้น</li>
        <li>คอมพิวเตอร์จะทำตามคำสั่ง <strong>ทีละบรรทัด</strong> จากบนลงล่าง</li>
        <li>ใช้ <strong>ภาษาโปรแกรม (Programming Language)</strong> ในการเขียน</li>
      </ul>
      <div class="info-box info-box--info">
        <div class="info-box__title">📖 คำศัพท์</div>
        <div class="info-box__content">
          <strong>Programming</strong> = การเขียนโปรแกรม &nbsp;|&nbsp;
          <strong>Source Code</strong> = รหัสต้นฉบับ &nbsp;|&nbsp;
          <strong>Compiler</strong> = ตัวแปลภาษา
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: 'ประเภทของภาษาโปรแกรม',
    content: `
      <table class="comparison-table">
        <tr>
          <th>ประเภท</th>
          <th>ลักษณะ</th>
          <th>ตัวอย่าง</th>
        </tr>
        <tr>
          <td><strong>ภาษาระดับต่ำ</strong> (Low-Level)</td>
          <td>ใกล้เคียงภาษาเครื่อง ทำงานเร็ว เข้าใจยาก</td>
          <td>Assembly, Machine Code</td>
        </tr>
        <tr>
          <td><strong>ภาษาระดับกลาง</strong> (Mid-Level)</td>
          <td>สมดุลระหว่างประสิทธิภาพและความง่าย</td>
          <td>C, C++, Rust</td>
        </tr>
        <tr>
          <td><strong>ภาษาระดับสูง</strong> (High-Level)</td>
          <td>ใกล้เคียงภาษามนุษย์ เข้าใจง่าย พัฒนาเร็ว</td>
          <td>Python, JavaScript, <strong>TypeScript</strong></td>
        </tr>
      </table>
      <div class="info-box info-box--tip">
        <div class="info-box__title">💡 จุดสำคัญ</div>
        <div class="info-box__content">TypeScript เป็นภาษาระดับสูงที่พัฒนาต่อยอดจาก JavaScript โดย Microsoft</div>
      </div>
    `
  },
  {
    type: 'content',
    title: 'TypeScript คืออะไร?',
    icon: '🔷',
    content: `
      <p><strong>TypeScript</strong> คือ ภาษาโปรแกรมที่พัฒนาโดย <strong>Microsoft</strong> ในปี 2012</p>
      <ul>
        <li>เป็น <strong>Superset ของ JavaScript</strong> — โค้ด JavaScript ทุกตัวเป็น TypeScript ที่ถูกต้อง</li>
        <li>เพิ่มระบบ <strong>Type System</strong> (ระบบชนิดข้อมูล) เข้ามา</li>
        <li>ช่วยตรวจจับ <strong>ข้อผิดพลาดตั้งแต่ขั้นตอนเขียนโค้ด</strong> ก่อนรันโปรแกรม</li>
        <li>คอมไพล์เป็น JavaScript ก่อนนำไปรัน</li>
      </ul>
      <div class="info-box info-box--info">
        <div class="info-box__title">🔄 กระบวนการ</div>
        <div class="info-box__content">
          เขียนโค้ด <code>.ts</code> → คอมไพล์ (tsc) → ได้ไฟล์ <code>.js</code> → รันบน Browser/Node.js
        </div>
      </div>
    `
  },
  {
    type: 'split',
    title: 'TypeScript vs JavaScript',
    left: `
      <table class="comparison-table">
        <tr>
          <th>คุณสมบัติ</th>
          <th>JavaScript</th>
          <th>TypeScript</th>
        </tr>
        <tr>
          <td>Type System</td>
          <td>Dynamic (ไม่ระบุชนิด)</td>
          <td><strong>Static (ระบุชนิดได้)</strong></td>
        </tr>
        <tr>
          <td>ตรวจข้อผิดพลาด</td>
          <td>ตอนรัน (Runtime)</td>
          <td><strong>ตอนเขียน (Compile-time)</strong></td>
        </tr>
        <tr>
          <td>IDE Support</td>
          <td>พื้นฐาน</td>
          <td><strong>ยอดเยี่ยม (Autocomplete)</strong></td>
        </tr>
        <tr>
          <td>เหมาะกับ</td>
          <td>โปรเจกต์เล็ก</td>
          <td><strong>โปรเจกต์ทุกขนาด</strong></td>
        </tr>
        <tr>
          <td>พัฒนาโดย</td>
          <td>Netscape → ECMA</td>
          <td><strong>Microsoft</strong></td>
        </tr>
      </table>
    `,
    right: `
      <div class="info-box info-box--tip">
        <div class="info-box__title">💡 ทำไมต้องเรียน TypeScript?</div>
        <div class="info-box__content">
          <ul>
            <li>เป็นที่ต้องการสูงในตลาดแรงงาน</li>
            <li>ใช้ในบริษัทใหญ่ เช่น Google, Meta, Microsoft</li>
            <li>ช่วยให้เขียนโค้ดผิดพลาดน้อยลง</li>
            <li>รองรับ OOP อย่างเต็มรูปแบบ</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: 'เครื่องมือที่ต้องติดตั้ง',
    icon: '🛠️',
    content: `
      <table class="comparison-table">
        <tr>
          <th>ลำดับ</th>
          <th>เครื่องมือ</th>
          <th>หน้าที่</th>
          <th>ดาวน์โหลด</th>
        </tr>
        <tr>
          <td>1</td>
          <td><strong>Node.js</strong></td>
          <td>Runtime สำหรับรัน JavaScript/TypeScript</td>
          <td>nodejs.org</td>
        </tr>
        <tr>
          <td>2</td>
          <td><strong>TypeScript</strong></td>
          <td>ตัวแปลภาษา TypeScript → JavaScript</td>
          <td>ติดตั้งผ่าน npm</td>
        </tr>
        <tr>
          <td>3</td>
          <td><strong>Visual Studio Code</strong></td>
          <td>โปรแกรมแก้ไขโค้ด (Code Editor)</td>
          <td>code.visualstudio.com</td>
        </tr>
        <tr>
          <td>4</td>
          <td><strong>Git</strong> (เสริม)</td>
          <td>ระบบควบคุมเวอร์ชัน</td>
          <td>git-scm.com</td>
        </tr>
      </table>
    `
  },
  {
    type: 'code',
    title: 'ขั้นตอนที่ 1: ติดตั้ง Node.js',
    subtitle: 'ดาวน์โหลดจาก nodejs.org แล้วตรวจสอบการติดตั้ง',
    code: `# ตรวจสอบเวอร์ชัน Node.js
node --version
# ผลลัพธ์: v20.x.x

# ตรวจสอบ npm (Node Package Manager)
npm --version
# ผลลัพธ์: 10.x.x`,
    lang: 'bash',
    note: 'แนะนำให้ติดตั้งเวอร์ชัน LTS (Long Term Support) เพื่อความเสถียร'
  },
  {
    type: 'code',
    title: 'ขั้นตอนที่ 2: ติดตั้ง TypeScript',
    subtitle: 'ใช้ npm ติดตั้ง TypeScript แบบ Global',
    code: `# ติดตั้ง TypeScript แบบ Global
npm install -g typescript

# ตรวจสอบเวอร์ชัน TypeScript
tsc --version
# ผลลัพธ์: Version 5.x.x

# ติดตั้ง ts-node (รัน TypeScript โดยตรง)
npm install -g ts-node`,
    lang: 'bash',
    note: 'คำสั่ง <code>-g</code> หมายถึง Global คือติดตั้งให้ใช้ได้ทั้งเครื่อง'
  },
  {
    type: 'content',
    title: 'ขั้นตอนที่ 3: ตั้งค่า Visual Studio Code',
    icon: '⚙️',
    content: `
      <p>ส่วนขยาย (Extensions) ที่แนะนำสำหรับการเขียน TypeScript:</p>
      <ul>
        <li>🔷 <strong>TypeScript Hero</strong> — จัดการ import อัตโนมัติ</li>
        <li>🎨 <strong>Prettier</strong> — จัดรูปแบบโค้ดอัตโนมัติ</li>
        <li>🔍 <strong>ESLint</strong> — ตรวจสอบคุณภาพโค้ด</li>
        <li>🖥️ <strong>Code Runner</strong> — รันโค้ดได้จากใน VS Code</li>
        <li>📝 <strong>Error Lens</strong> — แสดง Error แบบ Inline</li>
        <li>🌈 <strong>Material Icon Theme</strong> — ไอคอนไฟล์สวยงาม</li>
      </ul>
      <div class="info-box info-box--tip">
        <div class="info-box__title">💡 วิธีติดตั้ง Extension</div>
        <div class="info-box__content">กด <code>Ctrl + Shift + X</code> แล้วค้นหาชื่อ Extension ที่ต้องการ</div>
      </div>
    `
  },
  {
    type: 'code',
    title: 'สร้างโปรเจกต์ TypeScript แรก',
    subtitle: 'สร้างโฟลเดอร์โปรเจกต์และเริ่มต้นการตั้งค่า',
    code: `# สร้างโฟลเดอร์โปรเจกต์
mkdir my-first-ts-project
cd my-first-ts-project

# สร้างไฟล์ tsconfig.json (ตั้งค่า TypeScript)
tsc --init

# สร้างไฟล์ TypeScript แรก
# สร้างไฟล์ชื่อ hello.ts`,
    lang: 'bash',
    note: 'คำสั่ง <code>tsc --init</code> จะสร้างไฟล์ <code>tsconfig.json</code> ที่ใช้กำหนดค่าการคอมไพล์'
  },
  {
    type: 'code',
    title: '🎉 Hello, TypeScript!',
    subtitle: 'โปรแกรมแรกของเรา — สร้างไฟล์ hello.ts',
    code: `// hello.ts — โปรแกรม TypeScript แรกของเรา

// ประกาศตัวแปรพร้อมระบุชนิดข้อมูล
let message: string = "สวัสดี TypeScript!";
let year: number = 2026;
let isLearning: boolean = true;

// แสดงผลลัพธ์
console.log(message);
console.log("ปีที่เรียน:", year);
console.log("กำลังเรียนอยู่:", isLearning);

// ฟังก์ชันง่ายๆ
function greet(name: string): string {
  return \`สวัสดีครับ คุณ\${name} ยินดีต้อนรับสู่ TypeScript!\`;
}

console.log(greet("นักเรียน"));`,
    lang: 'typescript',
    note: 'สังเกตว่า TypeScript ต้องระบุ <strong>ชนิดข้อมูล</strong> (Type) ไว้หลังชื่อตัวแปร เช่น <code>: string</code>, <code>: number</code>'
  },
  {
    type: 'code',
    title: 'คอมไพล์และรันโปรแกรม',
    subtitle: 'แปลง TypeScript เป็น JavaScript แล้วรัน',
    code: `# วิธีที่ 1: คอมไพล์แล้วรัน
tsc hello.ts          # คอมไพล์ → ได้ไฟล์ hello.js
node hello.js         # รันไฟล์ JavaScript

# วิธีที่ 2: ใช้ ts-node (รันโดยตรง)
ts-node hello.ts      # คอมไพล์ + รัน ในคำสั่งเดียว

# ผลลัพธ์:
# สวัสดี TypeScript!
# ปีที่เรียน: 2026
# กำลังเรียนอยู่: true
# สวัสดีครับ คุณนักเรียน ยินดีต้อนรับสู่ TypeScript!`,
    lang: 'bash'
  },
  {
    type: 'split',
    title: 'ข้อดีของ Type System',
    left: `
      <p>Type System ช่วยตรวจจับข้อผิดพลาด <strong>ก่อนรันโปรแกรม</strong></p>
      <div class="info-box info-box--danger">
        <div class="info-box__title">❌ JavaScript — ไม่แจ้ง Error</div>
        <div class="info-box__content">
          <code>let price = "100";</code><br>
          <code>let total = price * 2; // NaN!</code><br>
          รู้ว่าผิดตอนรันแล้วเท่านั้น
        </div>
      </div>
      <div class="info-box info-box--tip">
        <div class="info-box__title">✅ TypeScript — แจ้ง Error ทันที</div>
        <div class="info-box__content">
          <code>let price: number = 100;</code><br>
          <code>price = "100"; // ❌ Error!</code><br>
          VS Code จะขีดเส้นแดงให้เห็นทันที
        </div>
      </div>
    `,
    right: `
      <div class="info-box info-box--info">
        <div class="info-box__title">📊 สถิติ</div>
        <div class="info-box__content">
          จากการสำรวจพบว่า TypeScript ช่วยลดบัคในโค้ดได้ถึง <strong>15-20%</strong> เมื่อเทียบกับ JavaScript ล้วน
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: 'คำสั่ง Terminal ที่ใช้บ่อย',
    content: `
      <table class="comparison-table">
        <tr>
          <th>คำสั่ง</th>
          <th>หน้าที่</th>
          <th>ตัวอย่าง</th>
        </tr>
        <tr>
          <td><code>cd</code></td>
          <td>เปลี่ยนไดเรกทอรี</td>
          <td><code>cd my-project</code></td>
        </tr>
        <tr>
          <td><code>mkdir</code></td>
          <td>สร้างโฟลเดอร์</td>
          <td><code>mkdir src</code></td>
        </tr>
        <tr>
          <td><code>dir</code> / <code>ls</code></td>
          <td>แสดงรายการไฟล์</td>
          <td><code>dir</code> (Windows) / <code>ls</code> (Mac/Linux)</td>
        </tr>
        <tr>
          <td><code>tsc</code></td>
          <td>คอมไพล์ TypeScript</td>
          <td><code>tsc app.ts</code></td>
        </tr>
        <tr>
          <td><code>node</code></td>
          <td>รัน JavaScript</td>
          <td><code>node app.js</code></td>
        </tr>
        <tr>
          <td><code>ts-node</code></td>
          <td>รัน TypeScript โดยตรง</td>
          <td><code>ts-node app.ts</code></td>
        </tr>
        <tr>
          <td><code>npm install</code></td>
          <td>ติดตั้งแพ็คเกจ</td>
          <td><code>npm install typescript</code></td>
        </tr>
      </table>
    `
  },
  {
    type: 'code',
    title: 'ไฟล์ tsconfig.json',
    subtitle: 'ไฟล์ตั้งค่าสำคัญสำหรับโปรเจกต์ TypeScript',
    code: `{
  "compilerOptions": {
    "target": "ES2020",          // เวอร์ชัน JS ที่จะ compile ออกมา
    "module": "commonjs",        // ระบบ module ที่ใช้
    "strict": true,              // เปิดการตรวจสอบแบบเข้มงวด
    "esModuleInterop": true,     // รองรับการ import แบบ ES Module
    "outDir": "./dist",          // โฟลเดอร์เก็บไฟล์ JS ที่คอมไพล์แล้ว
    "rootDir": "./src",          // โฟลเดอร์ source code
    "sourceMap": true            // สร้าง source map สำหรับ debug
  },
  "include": ["src/**/*"],       // ไฟล์ที่จะคอมไพล์
  "exclude": ["node_modules"]    // ไฟล์ที่ไม่ต้องคอมไพล์
}`,
    lang: 'json',
    note: 'ไฟล์นี้จะถูกสร้างอัตโนมัติเมื่อรัน <code>tsc --init</code> สามารถแก้ไขได้ตามต้องการ'
  },
  {
    type: 'content',
    title: '📝 สรุปหน่วยที่ 1',
    icon: '✅',
    content: `
      <ul>
        <li><strong>โปรแกรมคอมพิวเตอร์</strong> คือ ชุดคำสั่งที่สั่งให้คอมพิวเตอร์ทำงาน</li>
        <li><strong>TypeScript</strong> คือ ภาษาที่ต่อยอดจาก JavaScript โดยเพิ่มระบบ Type System</li>
        <li>ข้อดีหลัก: ตรวจจับ Error ได้ตั้งแต่ตอนเขียนโค้ด</li>
        <li>เครื่องมือจำเป็น: <strong>Node.js + TypeScript + VS Code</strong></li>
        <li>คอมไพล์ด้วย <code>tsc</code> หรือรันตรงด้วย <code>ts-node</code></li>
      </ul>
      <div class="info-box info-box--warning">
        <div class="info-box__title">📌 แบบฝึกหัด</div>
        <div class="info-box__content">
          1. ติดตั้ง Node.js, TypeScript และ VS Code บนเครื่องของตนเอง<br>
          2. สร้างโปรเจกต์ TypeScript ใหม่ด้วย <code>tsc --init</code><br>
          3. เขียนโปรแกรมแสดงข้อมูลส่วนตัว (ชื่อ, อายุ, สาขาวิชา) ด้วย TypeScript
        </div>
      </div>
    `
  }
];
