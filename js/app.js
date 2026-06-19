/**
 * App Logic — TypeScript Learning Platform
 * จัดการ Navigation, Mode Toggle, Content Loading
 */

// Unit data for sidebar navigation
const UNITS = [
  { id: 1, title: 'พื้นฐานการเขียนโปรแกรมและการเตรียมสภาพแวดล้อม', slides: 18 },
  { id: 2, title: 'การวิเคราะห์และออกแบบกระบวนการทำงาน', slides: 16 },
  { id: 3, title: 'ชนิดข้อมูล ตัวแปร และตัวดำเนินการ', slides: 20 },
  { id: 4, title: 'โครงสร้างการควบคุมการทำงานของโปรแกรม', slides: 20 },
  { id: 5, title: 'อาร์เรย์และฟังก์ชัน', slides: 20 },
  { id: 6, title: 'การเขียนโปรแกรมเชิงวัตถุ', slides: 20 },
  { id: 7, title: 'การทดสอบและแก้ไขโปรแกรม', slides: 18 },
  { id: 8, title: 'การพัฒนาโปรแกรมประยุกต์', slides: 18 },
  { id: 9, title: 'การนำเสนอผลงานและจรรยาบรรณวิชาชีพ', slides: 16 }
];

class App {
  constructor() {
    this.currentUnit = 1;
    this.currentMode = 'slide'; // 'slide' or 'reading'
    this.sidebarOpen = false;
  }

  /**
   * เริ่มต้นแอป
   */
  init() {
    // Get unit from URL
    const params = new URLSearchParams(window.location.search);
    const unitParam = params.get('unit');
    if (unitParam) {
      this.currentUnit = parseInt(unitParam);
    }

    // Load unit content
    this.loadUnit(this.currentUnit);

    // Setup event listeners
    this.setupEventListeners();
    this.updateTopbar();
    this.renderSidebar();
  }

  /**
   * โหลดเนื้อหาของหน่วยที่ระบุ
   */
  async loadUnit(unitNumber) {
    this.currentUnit = unitNumber;

    // Update URL
    const newUrl = `${window.location.pathname}?unit=${unitNumber}`;
    window.history.replaceState({}, '', newUrl);

    // Get unit data
    const unitData = this.getUnitData(unitNumber);
    if (!unitData) {
      console.error(`Unit ${unitNumber} not found`);
      return;
    }

    // Initialize slide engine
    slideEngine.init(unitData);

    // Generate reading content
    const readingBody = document.getElementById('readingBody');
    if (readingBody) {
      readingBody.innerHTML = slideEngine.generateReadingContent();
      // Highlight code in reading mode too
      if (typeof Prism !== 'undefined') {
        Prism.highlightAllUnder(readingBody);
      }
    }

    // Check if workshop exists for this unit
    const workshopData = this.getWorkshopData(unitNumber);
    const workshopModeBtn = document.getElementById('workshopModeBtn');
    
    if (workshopData) {
      if (workshopModeBtn) workshopModeBtn.style.display = '';
      
      // Generate workshop content
      const workshopBody = document.getElementById('workshopBody');
      const workshopUnitLabel = document.getElementById('workshopUnitLabel');
      const workshopTitle = document.getElementById('workshopTitle');
      const workshopDesc = document.getElementById('workshopDesc');
      
      if (workshopUnitLabel) workshopUnitLabel.textContent = `ใบงานหน่วยที่ ${unitNumber}`;
      if (workshopTitle) workshopTitle.textContent = workshopData.title;
      if (workshopDesc) workshopDesc.innerHTML = workshopData.description;
      
      if (workshopBody) {
        workshopBody.innerHTML = this.generateWorkshopContent(workshopData);
        if (typeof Prism !== 'undefined') {
          Prism.highlightAllUnder(workshopBody);
        }
      }
    } else {
      if (workshopModeBtn) workshopModeBtn.style.display = 'none';
      if (this.currentMode === 'workshop') {
        this.currentMode = 'slide';
      }
    }

    // Update header info
    this.updateTopbar();
    this.updateReadingHeader();

    // Set mode
    this.setMode(this.currentMode);
  }

  /**
   * ดึงข้อมูลสไลด์ของหน่วยที่ระบุ
   */
  getUnitData(unitNumber) {
    const unitModules = {
      1: typeof unit1Data !== 'undefined' ? unit1Data : null,
      2: typeof unit2Data !== 'undefined' ? unit2Data : null,
      3: typeof unit3Data !== 'undefined' ? unit3Data : null,
      4: typeof unit4Data !== 'undefined' ? unit4Data : null,
      5: typeof unit5Data !== 'undefined' ? unit5Data : null,
      6: typeof unit6Data !== 'undefined' ? unit6Data : null,
      7: typeof unit7Data !== 'undefined' ? unit7Data : null,
      8: typeof unit8Data !== 'undefined' ? unit8Data : null,
      9: typeof unit9Data !== 'undefined' ? unit9Data : null
    };
    return unitModules[unitNumber];
  }

  /**
   * ดึงข้อมูลใบงานของหน่วยที่ระบุ
   */
  getWorkshopData(unitNumber) {
    const workshops = {
      1: typeof unit1Workshop !== 'undefined' ? unit1Workshop : null,
      2: typeof unit2Workshop !== 'undefined' ? unit2Workshop : null,
      3: typeof unit3Workshop !== 'undefined' ? unit3Workshop : null,
      4: typeof unit4Workshop !== 'undefined' ? unit4Workshop : null,
      5: typeof unit5Workshop !== 'undefined' ? unit5Workshop : null,
      6: typeof unit6Workshop !== 'undefined' ? unit6Workshop : null,
      7: typeof unit7Workshop !== 'undefined' ? unit7Workshop : null,
      8: typeof unit8Workshop !== 'undefined' ? unit8Workshop : null,
      9: typeof unit9Workshop !== 'undefined' ? unit9Workshop : null
    };
    return workshops[unitNumber];
  }

  /**
   * สลับโหมดแสดงผล
   */
  setMode(mode) {
    this.currentMode = mode;

    const slideContainer = document.getElementById('slideContainer');
    const slideNav = document.getElementById('slideNav');
    const readingContainer = document.getElementById('readingContainer');
    const workshopContainer = document.getElementById('workshopContainer');
    
    const slideModeBtn = document.getElementById('slideModeBtn');
    const readingModeBtn = document.getElementById('readingModeBtn');
    const workshopModeBtn = document.getElementById('workshopModeBtn');

    if (mode === 'slide') {
      document.body.classList.remove('reading-mode', 'workshop-mode');
      if (slideContainer) slideContainer.style.display = '';
      if (slideNav) slideNav.style.display = '';
      if (readingContainer) readingContainer.classList.remove('active');
      if (workshopContainer) workshopContainer.classList.remove('active');
      if (slideModeBtn) slideModeBtn.classList.add('active');
      if (readingModeBtn) readingModeBtn.classList.remove('active');
      if (workshopModeBtn) workshopModeBtn.classList.remove('active');
    } else if (mode === 'reading') {
      document.body.classList.add('reading-mode');
      document.body.classList.remove('workshop-mode');
      if (slideContainer) slideContainer.style.display = 'none';
      if (slideNav) slideNav.style.display = 'none';
      if (readingContainer) readingContainer.classList.add('active');
      if (workshopContainer) workshopContainer.classList.remove('active');
      if (slideModeBtn) slideModeBtn.classList.remove('active');
      if (readingModeBtn) readingModeBtn.classList.add('active');
      if (workshopModeBtn) workshopModeBtn.classList.remove('active');

      // Update progress based on scroll
      this.updateReadingProgress();
    } else if (mode === 'workshop') {
      document.body.classList.add('workshop-mode');
      document.body.classList.remove('reading-mode');
      if (slideContainer) slideContainer.style.display = 'none';
      if (slideNav) slideNav.style.display = 'none';
      if (readingContainer) readingContainer.classList.remove('active');
      if (workshopContainer) workshopContainer.classList.add('active');
      if (slideModeBtn) slideModeBtn.classList.remove('active');
      if (readingModeBtn) readingModeBtn.classList.remove('active');
      if (workshopModeBtn) workshopModeBtn.classList.add('active');
      
      const progressFill = document.getElementById('progressFill');
      if (progressFill) {
        progressFill.style.width = '100%';
      }
    }
  }

  /**
   * อัพเดท Topbar
   */
  updateTopbar() {
    const unitInfo = UNITS.find(u => u.id === this.currentUnit);
    if (!unitInfo) return;

    const unitLabel = document.getElementById('topbarUnitLabel');
    const unitTitle = document.getElementById('topbarUnitTitle');

    if (unitLabel) unitLabel.textContent = `หน่วยที่ ${unitInfo.id}`;
    if (unitTitle) unitTitle.textContent = unitInfo.title;
  }

  /**
   * อัพเดท Reading Header
   */
  updateReadingHeader() {
    const unitInfo = UNITS.find(u => u.id === this.currentUnit);
    if (!unitInfo) return;

    const readingUnitLabel = document.getElementById('readingUnitLabel');
    const readingTitle = document.getElementById('readingTitle');
    const readingDesc = document.getElementById('readingDesc');

    if (readingUnitLabel) readingUnitLabel.textContent = `หน่วยที่ ${unitInfo.id}`;
    if (readingTitle) readingTitle.textContent = unitInfo.title;

    // Get subtitle from first slide
    const unitData = this.getUnitData(this.currentUnit);
    if (unitData && unitData[0] && readingDesc) {
      readingDesc.textContent = unitData[0].subtitle || '';
    }
  }

  /**
   * อัพเดท Reading progress
   */
  updateReadingProgress() {
    const progressFill = document.getElementById('progressFill');
    if (!progressFill) return;

    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    progressFill.style.width = `${scrolled}%`;
  }

  /**
   * สร้าง Sidebar
   */
  renderSidebar() {
    const unitList = document.getElementById('sidebarUnitList');
    if (!unitList) return;

    unitList.innerHTML = UNITS.map(unit => `
      <li class="sidebar__unit-item">
        <a href="?unit=${unit.id}" 
           class="sidebar__unit-link ${unit.id === this.currentUnit ? 'active' : ''}"
           onclick="app.switchUnit(${unit.id}); return false;">
          <span class="sidebar__unit-num">${unit.id}</span>
          <span class="sidebar__unit-name">${unit.title}</span>
        </a>
      </li>
    `).join('');
  }

  /**
   * เปลี่ยนหน่วย
   */
  switchUnit(unitNumber) {
    this.loadUnit(unitNumber);
    this.closeSidebar();
    this.renderSidebar();
    window.scrollTo(0, 0);
  }

  /**
   * เปิด Sidebar
   */
  openSidebar() {
    this.sidebarOpen = true;
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('open');
  }

  /**
   * ปิด Sidebar
   */
  closeSidebar() {
    this.sidebarOpen = false;
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  /**
   * Toggle Sidebar
   */
  toggleSidebar() {
    if (this.sidebarOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }

  /**
   * ตั้งค่า Event Listeners
   */
  setupEventListeners() {
    // Mode toggle
    const slideModeBtn = document.getElementById('slideModeBtn');
    const readingModeBtn = document.getElementById('readingModeBtn');
    const workshopModeBtn = document.getElementById('workshopModeBtn');

    if (slideModeBtn) {
      slideModeBtn.addEventListener('click', () => this.setMode('slide'));
    }
    if (readingModeBtn) {
      readingModeBtn.addEventListener('click', () => this.setMode('reading'));
    }
    if (workshopModeBtn) {
      workshopModeBtn.addEventListener('click', () => this.setMode('workshop'));
    }

    // Slide nav
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => slideEngine.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => slideEngine.next());

    // Sidebar
    const menuBtn = document.getElementById('menuBtn');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (menuBtn) menuBtn.addEventListener('click', () => this.toggleSidebar());
    if (sidebarClose) sidebarClose.addEventListener('click', () => this.closeSidebar());
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', () => this.closeSidebar());

    // Fullscreen
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => slideEngine.toggleFullscreen());
    }

    // Scroll progress for reading mode
    window.addEventListener('scroll', () => {
      if (this.currentMode === 'reading') {
        this.updateReadingProgress();
      }
    });

    // Handle next/prev unit
    document.addEventListener('keydown', (e) => {
      if (e.key === 'n' && e.altKey) {
        e.preventDefault();
        if (this.currentUnit < 9) {
          this.switchUnit(this.currentUnit + 1);
        }
      }
      if (e.key === 'p' && e.altKey) {
        e.preventDefault();
        if (this.currentUnit > 1) {
          this.switchUnit(this.currentUnit - 1);
        }
      }
    });
  }

  /**
   * สร้าง HTML สำหรับใบงาน Workshop
   */
  generateWorkshopContent(workshopData) {
    let html = '';
    
    // Add file name box
    html += `
      <div class="info-box info-box--info" style="margin-bottom: var(--space-xl);">
        <div class="info-box__title">📁 คำชี้แจงการตั้งชื่อไฟล์ส่งงาน</div>
        <div class="info-box__content">
          ให้นักเรียนเขียนโค้ดและบันทึกไฟล์เป็นชื่อ <strong style="color: var(--ts-yellow); font-family: var(--font-code); font-size: 1.15rem; padding: 2px 8px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid rgba(255,214,0,0.2);">${workshopData.fileName}</strong> 
          แล้วส่งงานตามที่อาจารย์กำหนด
        </div>
      </div>
    `;
    
    // Add tasks
    workshopData.tasks.forEach((task, idx) => {
      html += `
        <div class="workshop-card" style="margin-bottom: var(--space-lg); background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: var(--space-xl); position: relative; overflow: hidden; backdrop-filter: blur(12px);">
          <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--gradient-primary);"></div>
          <h3 style="font-size: 1.15rem; font-weight: 600; margin-bottom: var(--space-md); color: var(--ts-blue-light); display: flex; align-items: center; gap: var(--space-sm);">
            <span style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: rgba(49, 120, 198, 0.15); font-size: 0.9rem; color: var(--ts-blue-light); border: 1px solid rgba(49, 120, 198, 0.3);">${idx + 1}</span>
            ${task.title}
          </h3>
          <div style="font-size: 0.98rem; line-height: 1.8; color: var(--text-primary); margin-bottom: var(--space-md);">${task.instruction}</div>
          ${task.hint ? `
            <div class="info-box info-box--tip" style="margin-top: var(--space-md); margin-bottom: 0;">
              <div class="info-box__title">💡 คำแนะนำ (Hint)</div>
              <div class="info-box__content">${task.hint}</div>
            </div>
          ` : ''}
        </div>
      `;
    });
    
    return html;
  }
}

// Global instance
const app = new App();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
