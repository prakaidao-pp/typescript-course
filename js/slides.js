/**
 * Slide Engine — TypeScript Learning Platform
 * ระบบควบคุมสไลด์สำหรับโหมด Presentation
 */

class SlideEngine {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 0;
    this.slides = [];
    this.slideContainer = null;
    this.isAnimating = false;
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  /**
   * เริ่มต้นระบบสไลด์
   * @param {Array} slideData - ข้อมูลสไลด์จาก unit module
   */
  init(slideData) {
    this.slides = slideData;
    this.totalSlides = slideData.length;
    this.currentSlide = 0;
    this.slideContainer = document.getElementById('slideContainer');

    this.render();
    this.bindKeyboard();
    this.bindTouch();
    this.updateUI();
  }

  /**
   * Render สไลด์ทั้งหมดเข้า DOM
   */
  render() {
    if (!this.slideContainer) return;

    this.slideContainer.innerHTML = this.slides
      .map((slide, index) => this.createSlideHTML(slide, index))
      .join('');

    // Highlight code
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }

    // Show first slide
    const firstSlide = this.slideContainer.querySelector('.slide');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }

  /**
   * สร้าง HTML สำหรับแต่ละสไลด์
   */
  createSlideHTML(slide, index) {
    const typeClass = slide.type ? `slide--${slide.type}` : 'slide--content';
    const activeClass = index === 0 ? 'active' : '';

    let content = '';

    switch (slide.type) {
      case 'title':
        content = this.createTitleSlide(slide);
        break;
      case 'split':
        content = this.createSplitSlide(slide);
        break;
      case 'code':
        content = this.createCodeSlide(slide);
        break;
      default:
        content = this.createContentSlide(slide);
        break;
    }

    return `<div class="slide ${typeClass}" data-index="${index}">${content}</div>`;
  }

  createTitleSlide(slide) {
    return `
      ${slide.icon ? `<div class="slide__icon">${slide.icon}</div>` : ''}
      <h1 class="slide__title">${slide.title}</h1>
      ${slide.subtitle ? `<p class="slide__subtitle">${slide.subtitle}</p>` : ''}
      ${slide.content ? `<div class="slide__content">${slide.content}</div>` : ''}
    `;
  }

  createContentSlide(slide) {
    return `
      ${slide.icon ? `<div class="slide__icon">${slide.icon}</div>` : ''}
      <h2 class="slide__title">${slide.title}</h2>
      ${slide.subtitle ? `<p class="slide__subtitle">${slide.subtitle}</p>` : ''}
      <div class="slide__content">${slide.content || ''}</div>
    `;
  }

  createCodeSlide(slide) {
    return `
      <h2 class="slide__title">${slide.title}</h2>
      ${slide.subtitle ? `<p class="slide__subtitle">${slide.subtitle}</p>` : ''}
      ${slide.content ? `<div class="slide__content">${slide.content}</div>` : ''}
      ${slide.code ? this.createCodeBlock(slide.code, slide.lang || 'typescript') : ''}
      ${slide.note ? `<div class="info-box info-box--tip"><div class="info-box__title">💡 หมายเหตุ</div><div class="info-box__content">${slide.note}</div></div>` : ''}
    `;
  }

  createSplitSlide(slide) {
    return `
      <div class="slide__left">
        <h2 class="slide__title">${slide.title}</h2>
        <div class="slide__content">${slide.left || ''}</div>
      </div>
      <div class="slide__right">
        ${slide.right || ''}
        ${slide.code ? this.createCodeBlock(slide.code, slide.lang || 'typescript') : ''}
      </div>
    `;
  }

  /**
   * สร้าง Code Block HTML
   */
  createCodeBlock(code, lang) {
    const escapedCode = this.escapeHTML(code);
    return `
      <div class="code-block">
        <div class="code-block__header">
          <div class="code-block__dots">
            <span class="code-block__dot"></span>
            <span class="code-block__dot"></span>
            <span class="code-block__dot"></span>
          </div>
          <span class="code-block__lang">${lang}</span>
          <button class="code-block__copy" onclick="slideEngine.copyCode(this)" title="คัดลอกโค้ด">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            คัดลอก
          </button>
        </div>
        <pre><code class="language-${lang}">${escapedCode}</code></pre>
      </div>
    `;
  }

  escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * Copy code to clipboard
   */
  copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
      button.classList.add('copied');
      button.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        คัดลอกแล้ว!
      `;
      setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          คัดลอก
        `;
      }, 2000);
    });
  }

  /**
   * ไปสไลด์ถัดไป
   */
  next() {
    if (this.currentSlide < this.totalSlides - 1 && !this.isAnimating) {
      this.goToSlide(this.currentSlide + 1, 'next');
    }
  }

  /**
   * ไปสไลด์ก่อนหน้า
   */
  prev() {
    if (this.currentSlide > 0 && !this.isAnimating) {
      this.goToSlide(this.currentSlide - 1, 'prev');
    }
  }

  /**
   * ไปยังสไลด์ที่ระบุ
   */
  goToSlide(index, direction = 'next') {
    if (index < 0 || index >= this.totalSlides || this.isAnimating) return;

    this.isAnimating = true;
    const allSlides = this.slideContainer.querySelectorAll('.slide');
    const currentEl = allSlides[this.currentSlide];
    const nextEl = allSlides[index];

    // Exit animation
    currentEl.classList.remove('active');
    currentEl.classList.add(direction === 'next' ? 'exit-left' : 'exit-right');

    // Setup entry position
    nextEl.style.transition = 'none';
    nextEl.classList.remove('exit-left', 'exit-right');

    // Force reflow
    void nextEl.offsetWidth;

    // Enter animation
    nextEl.style.transition = '';
    nextEl.classList.add('active');

    this.currentSlide = index;
    this.updateUI();

    setTimeout(() => {
      currentEl.classList.remove('exit-left', 'exit-right');
      this.isAnimating = false;
    }, 500);
  }

  /**
   * อัพเดท UI elements
   */
  updateUI() {
    // Update counter
    const counter = document.getElementById('slideCounter');
    if (counter) {
      counter.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
    }

    const topbarCounter = document.getElementById('topbarSlideCounter');
    if (topbarCounter) {
      topbarCounter.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
    }

    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
      const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
      progressFill.style.width = `${progress}%`;
    }

    // Update nav buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.disabled = this.currentSlide === 0;
    if (nextBtn) nextBtn.disabled = this.currentSlide === this.totalSlides - 1;

    // Re-highlight code on new slide
    if (typeof Prism !== 'undefined') {
      const activeSlide = this.slideContainer.querySelector('.slide.active');
      if (activeSlide) {
        Prism.highlightAllUnder(activeSlide);
      }
    }
  }

  /**
   * Keyboard navigation
   */
  bindKeyboard() {
    document.addEventListener('keydown', (e) => {
      // Only handle in slide mode
      if (document.body.classList.contains('reading-mode')) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          this.next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          this.prev();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(0, 'prev');
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides - 1, 'next');
          break;
        case 'f':
        case 'F':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            this.toggleFullscreen();
          }
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
            document.body.classList.remove('fullscreen');
          }
          break;
      }
    });
  }

  /**
   * Touch/Swipe support
   */
  bindTouch() {
    if (!this.slideContainer) return;

    this.slideContainer.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.slideContainer.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      const diff = this.touchStartX - this.touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });
  }

  /**
   * Toggle fullscreen
   */
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.body.classList.add('fullscreen');
    } else {
      document.exitFullscreen();
      document.body.classList.remove('fullscreen');
    }
  }

  /**
   * Generate reading mode content from slides
   */
  generateReadingContent() {
    let html = '';
    let sectionIndex = 0;

    this.slides.forEach((slide, i) => {
      if (slide.type === 'title' && i === 0) {
        // Skip — handled by reading header
        return;
      }

      sectionIndex++;
      html += `<div class="reading-section" id="section-${sectionIndex}">`;
      html += `<h2 class="reading-section__title">${slide.title}</h2>`;
      html += '<div class="reading-content">';

      if (slide.subtitle) {
        html += `<p class="text-muted">${slide.subtitle}</p>`;
      }

      if (slide.content) {
        html += slide.content;
      }

      if (slide.left) {
        html += slide.left;
      }

      if (slide.right) {
        html += slide.right;
      }

      if (slide.code) {
        html += this.createCodeBlock(slide.code, slide.lang || 'typescript');
      }

      if (slide.note) {
        html += `<div class="info-box info-box--tip"><div class="info-box__title">💡 หมายเหตุ</div><div class="info-box__content">${slide.note}</div></div>`;
      }

      html += '</div></div>';
    });

    return html;
  }

  /**
   * Destroy slide engine
   */
  destroy() {
    if (this.slideContainer) {
      this.slideContainer.innerHTML = '';
    }
    this.slides = [];
    this.currentSlide = 0;
    this.totalSlides = 0;
  }
}

// Global instance
const slideEngine = new SlideEngine();
