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
   * สลับโหมดแสดงผล
   */
  setMode(mode) {
    this.currentMode = mode;

    const slideContainer = document.getElementById('slideContainer');
    const slideNav = document.getElementById('slideNav');
    const readingContainer = document.getElementById('readingContainer');
    const slideModeBtn = document.getElementById('slideModeBtn');
    const readingModeBtn = document.getElementById('readingModeBtn');

    if (mode === 'slide') {
      document.body.classList.remove('reading-mode');
      if (slideContainer) slideContainer.style.display = '';
      if (slideNav) slideNav.style.display = '';
      if (readingContainer) readingContainer.classList.remove('active');
      if (slideModeBtn) slideModeBtn.classList.add('active');
      if (readingModeBtn) readingModeBtn.classList.remove('active');
    } else {
      document.body.classList.add('reading-mode');
      if (slideContainer) slideContainer.style.display = 'none';
      if (slideNav) slideNav.style.display = 'none';
      if (readingContainer) readingContainer.classList.add('active');
      if (slideModeBtn) slideModeBtn.classList.remove('active');
      if (readingModeBtn) readingModeBtn.classList.add('active');

      // Update progress based on scroll
      this.updateReadingProgress();
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

    if (slideModeBtn) {
      slideModeBtn.addEventListener('click', () => this.setMode('slide'));
    }
    if (readingModeBtn) {
      readingModeBtn.addEventListener('click', () => this.setMode('reading'));
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
}

// Global instance
const app = new App();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
