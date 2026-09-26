// CoreShift Landing Page Interactive Logic (Chuẩn xác 100% theo từng frame video mẫu)

function initAll() {
  initDynamicBadges();
  initCard4Slide();
  initArcCarousel();
  initTestimonials();
  initHero2AvatarMotion();
  initSmoothScroll();
  initTextBlurWipe();
  initScrollAnimations();
  initNavbarScrollEffect();
  initMobileMenu();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* ================= 1. DYNAMIC BADGES (Bento Grid Card 2 - Frame 05s & 06s) ================= */
function initDynamicBadges() {
  const container = document.getElementById('dynamicBadgeContainer');
  const icon = document.getElementById('badgeIcon');
  const text = document.getElementById('badgeText');

  if (!container || !icon || !text) return;

  container.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.35s ease';

  const badges = [
    {
      text: 'Access Real-Time Insights',
      iconHtml: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      iconClass: 'w-8 h-8 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center text-sm font-bold shadow-2xs'
    },
    {
      text: 'Make Data-Driven Decisions',
      iconHtml: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/><circle cx="12" cy="2" r="1.5"/></svg>',
      iconClass: 'w-8 h-8 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-sm font-bold shadow-2xs'
    },
    {
      text: 'Track Performance in Real Time',
      iconHtml: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',
      iconClass: 'w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-sm font-bold shadow-2xs'
    }
  ];

  let current = 0;
  setInterval(() => {
    // 3D Flip Out
    container.style.transform = 'perspective(500px) rotateX(-75deg) scale(0.92)';
    container.style.opacity = '0';

    setTimeout(() => {
      current = (current + 1) % badges.length;
      const b = badges[current];
      text.textContent = b.text;
      icon.innerHTML = b.iconHtml;
      icon.className = b.iconClass;

      // 3D Flip In
      container.style.transform = 'perspective(500px) rotateX(75deg) scale(0.92)';
      requestAnimationFrame(() => {
        container.style.transform = 'perspective(500px) rotateX(0deg) scale(1)';
        container.style.opacity = '1';
      });
    }, 200);
  }, 3400);
}

/* ================= 1.2 CARD 4 SLIDE (Bento Grid Card 4 - Frame 05s & 06s) ================= */
function initCard4Slide() {
  const training = document.getElementById('card4Training');
  const employees = document.getElementById('card4Employees');
  const track = document.getElementById('card4SlideTrack');
  if (!training || !employees || !track) return;

  let isFlipped = false;
  setInterval(() => {
    isFlipped = !isFlipped;
    
    // Tạo hiệu ứng trượt mượt mà (smooth slide switch)
    track.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
    track.style.opacity = '0.4';
    track.style.transform = isFlipped ? 'translateX(-12px)' : 'translateX(12px)';

    setTimeout(() => {
      if (isFlipped) {
        training.style.order = '2';
        employees.style.order = '1';
      } else {
        training.style.order = '1';
        employees.style.order = '2';
      }
      track.style.transform = isFlipped ? 'translateX(12px)' : 'translateX(-12px)';

      requestAnimationFrame(() => {
        track.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        track.style.opacity = '1';
        track.style.transform = 'translateX(0)';
      });
    }, 220);
  }, 4000);
}

/* ================= 2. 3D ARC CAROUSEL (Frame 08s & 10s y hệt ảnh user gửi) ================= */
function initArcCarousel() {
  const tiles = [
    document.getElementById('arcTile0'),
    document.getElementById('arcTile1'),
    document.getElementById('arcTile2'),
    document.getElementById('arcTile3'),
    document.getElementById('arcTile4')
  ];

  const appName = document.getElementById('activeAppName');
  const appDesc = document.getElementById('activeAppDesc');

  if (tiles.some(t => !t) || !appName || !appDesc) return;

  const appData = [
    { name: 'Microsoft Teams', desc: 'Collaboration & unified chat' },
    { name: 'Gmail', desc: 'Business email & communication' },
    { name: 'Loom', desc: 'Video feedback & communication' },
    { name: 'Google Meet', desc: 'Seamless video meetings' },
    { name: 'Microsoft Outlook', desc: 'Email & schedule management' },
  ];

  // Ban đầu Loom ở đỉnh giữa (Frame 08s)
  let currentIndex = 2;
  let arcAutoTimer = null;

  function updateArcPositions() {
    const width = window.innerWidth;
    const isLargeDesktop = width >= 1280;
    const isMediumDesktop = width >= 1024 && width < 1280;
    const isTablet = width >= 640 && width < 1024;

    // Phân bổ khoảng cách đều đặn (Equidistant Parabolic Arc Slots)
    let stepX1, stepX2, dropY1, dropY2, rot1, rot2, scale0, scale1, scale2;

    if (isLargeDesktop) {
      stepX1 = 182;   // Thẻ cận kề cách tâm 182px (khoảng cách hở ~40px rõ rệt)
      stepX2 = 356;   // Thẻ ngoài cùng cách tâm 356px (bước nhảy ~174px cực kỳ đồng đều)
      dropY1 = 22;    // Thẻ cận kề chúc xuống 22px
      dropY2 = 72;    // Thẻ ngoài cùng chúc xuống 72px
      rot1 = 8.5;     // Góc nghiêng ±8.5deg
      rot2 = 17;      // Góc nghiêng ±17deg
      scale0 = 1.05;  // Thẻ trung tâm
      scale1 = 0.94;  // Thẻ kề bên
      scale2 = 0.84;  // Thẻ ngoài cùng
    } else if (isMediumDesktop) {
      stepX1 = 160;   // Laptop / Desktop vừa
      stepX2 = 314;
      dropY1 = 20;
      dropY2 = 66;
      rot1 = 8.5;
      rot2 = 17;
      scale0 = 1.05;
      scale1 = 0.94;
      scale2 = 0.84;
    } else if (isTablet) {
      stepX1 = 122;   // Tablet
      stepX2 = 238;
      dropY1 = 16;
      dropY2 = 52;
      rot1 = 8;
      rot2 = 16;
      scale0 = 1.04;
      scale1 = 0.92;
      scale2 = 0.80;
    } else {
      // Mobile
      stepX1 = 82;
      stepX2 = 158;
      dropY1 = 12;
      dropY2 = 36;
      rot1 = 7;
      rot2 = 14;
      scale0 = 1.04;
      scale1 = 0.86;
      scale2 = 0.70;
    }

    tiles.forEach((tile, appIndex) => {
      let diff = (appIndex - currentIndex) % 5;
      if (diff < 0) diff += 5;
      let relIndex = diff > 2 ? diff - 5 : diff; // [-2, -1, 0, 1, 2]

      let posX = 0;
      let posY = 0;
      let rot = 0;
      let scale = 1;
      let zIndex = 10;
      let opacity = 1;

      const isDesktop = isLargeDesktop || isMediumDesktop;
      const baseTopY = isLargeDesktop ? -22 : (isMediumDesktop ? -20 : -16);

      if (relIndex === 0) {
        posX = 0;
        posY = baseTopY;
        rot = 0;
        scale = scale0;
        zIndex = 30;
        opacity = 1;
      } else if (Math.abs(relIndex) === 1) {
        posX = relIndex * stepX1;
        posY = baseTopY + dropY1;
        rot = relIndex * rot1;
        scale = scale1;
        zIndex = 25;
        opacity = 0.94;
      } else {
        posX = (relIndex > 0 ? 1 : -1) * stepX2;
        posY = baseTopY + dropY2;
        rot = (relIndex > 0 ? 1 : -1) * rot2;
        scale = scale2;
        zIndex = 10;
        opacity = isDesktop ? 0.68 : (isTablet ? 0.55 : 0.42);
      }

      tile.style.transform = `translate3d(calc(-50% + ${posX}px), calc(-50% + ${posY}px), 0) scale(${scale}) rotate(${rot}deg)`;
      tile.style.zIndex = zIndex;
      tile.style.opacity = opacity;
    });

    // Cập nhật tên và mô tả ứng dụng bằng crossfade mượt mà
    appName.style.transition = 'opacity 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.22s cubic-bezier(0.25, 0.1, 0.25, 1)';
    appDesc.style.transition = 'opacity 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.22s cubic-bezier(0.25, 0.1, 0.25, 1)';
    appName.style.opacity = '0';
    appDesc.style.opacity = '0';
    appName.style.transform = 'translateY(-3px)';
    appDesc.style.transform = 'translateY(3px)';

    setTimeout(() => {
      appName.textContent = appData[currentIndex]?.name || '';
      appDesc.textContent = appData[currentIndex]?.desc || '';
      appName.style.opacity = '1';
      appDesc.style.opacity = '1';
      appName.style.transform = 'translateY(0)';
      appDesc.style.transform = 'translateY(0)';
    }, 140);
  }

  // Khởi động vòng lặp tự động xoay (chu kỳ 2.0s theo đúng nhịp video)
  function startAutoRotate() {
    stopAutoRotate();
    arcAutoTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % appData.length;
      updateArcPositions();
    }, 2000);
  }

  function stopAutoRotate() {
    if (arcAutoTimer) {
      clearInterval(arcAutoTimer);
      arcAutoTimer = null;
    }
  }

  // Click vào bất kỳ icon nào trên vòng cung để đưa nó về tâm và tiếp tục chu kỳ xoay
  tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => {
      currentIndex = index;
      updateArcPositions();
      startAutoRotate();
    });
  });

  // Hiệu ứng tự động xoay liên tục không ngừng ngay cả khi người dùng hover vào logo
  window.addEventListener('resize', updateArcPositions);

  updateArcPositions();
  startAutoRotate();
}

/* ================= 3. TESTIMONIALS (Scroll-Driven Envelope to 3D Fan-out Animation) ================= */
function initTestimonials() {
  const cardSarah = document.getElementById('cardSarah');
  const cardJames = document.getElementById('cardJames');
  const prevBtn = document.getElementById('testiPrevBtn');
  const nextBtn = document.getElementById('testiNextBtn');
  const stage = document.getElementById('fanOutStage');
  const section = document.getElementById('testimonials');

  if (!cardSarah || !cardJames || !stage || !section) return;

  const cards = [cardSarah, cardJames];
  let currentIdx = 0;
  let testiTimer = null;
  let isTransitioning = false;
  let hasFannedOut = false;

  // Đảm bảo ban đầu luôn ở trạng thái Phong Bì Tím (Frame 11.6s & Ảnh 2)
  function resetToEnvelope() {
    stopTestiAutoRotate();
    hasFannedOut = false;
    currentIdx = 0;
    stage.classList.remove('is-fanout');

    cardSarah.classList.remove('is-left', 'is-right');
    cardSarah.classList.add('is-active');

    cardJames.classList.remove('is-left', 'is-active');
    cardJames.classList.add('is-right');
  }

  // Kích hoạt hiệu ứng mở phong bì bung xòe 3D Fan-out rồi chuyển cảnh
  function triggerFanOut() {
    if (hasFannedOut) return;
    hasFannedOut = true;
    stage.classList.add('is-fanout');

    // Sau khi mở ra trọn vẹn (khoảng 1.4s), tự động kích hoạt chuyển cảnh sang James Carter (chuẩn xác Video Frame 13.5s)
    setTimeout(() => {
      if (hasFannedOut && currentIdx === 0) {
        goToSlide(1, 'next');
      }
    }, 1400);

    startTestiAutoRotate();
  }

  // Chuyển slide giữa Sarah Mitchell và James Carter (Cross-Slide Frame 13.5s)
  function goToSlide(targetIdx, direction = 'next') {
    if (!hasFannedOut) {
      triggerFanOut();
      return;
    }
    if (targetIdx === currentIdx || isTransitioning) return;
    isTransitioning = true;

    const prevIdx = currentIdx;
    currentIdx = targetIdx;

    const leavingCard = cards[prevIdx];
    const enteringCard = cards[currentIdx];

    if (direction === 'next') {
      // Thẻ rời đi trượt sang trái và mờ dần
      leavingCard.classList.remove('is-active', 'is-right');
      leavingCard.classList.add('is-left');

      // Thẻ mới chuẩn bị ở bên phải
      enteringCard.style.transition = 'none';
      enteringCard.classList.remove('is-left', 'is-active');
      enteringCard.classList.add('is-right');
      void enteringCard.offsetWidth; // Force reflow
      enteringCard.style.transition = '';

      // Kích hoạt trượt mượt mà vào trung tâm
      requestAnimationFrame(() => {
        enteringCard.classList.remove('is-right');
        enteringCard.classList.add('is-active');
      });
    } else {
      // Thẻ rời đi trượt sang phải và mờ dần
      leavingCard.classList.remove('is-active', 'is-left');
      leavingCard.classList.add('is-right');

      // Thẻ mới chuẩn bị ở bên trái
      enteringCard.style.transition = 'none';
      enteringCard.classList.remove('is-right', 'is-active');
      enteringCard.classList.add('is-left');
      void enteringCard.offsetWidth; // Force reflow
      enteringCard.style.transition = '';

      // Kích hoạt trượt mượt mà vào trung tâm
      requestAnimationFrame(() => {
        enteringCard.classList.remove('is-left');
        enteringCard.classList.add('is-active');
      });
    }

    setTimeout(() => {
      isTransitioning = false;
    }, 750);
  }

  // Khởi động vòng lặp tự động chuyển slide mỗi 4.2s (chỉ khi ĐÃ BUNG XÒE)
  function startTestiAutoRotate() {
    stopTestiAutoRotate();
    if (!hasFannedOut) return;
    testiTimer = setInterval(() => {
      const nextIdx = (currentIdx + 1) % cards.length;
      goToSlide(nextIdx, 'next');
    }, 4200);
  }

  function stopTestiAutoRotate() {
    if (testiTimer) {
      clearInterval(testiTimer);
      testiTimer = null;
    }
  }

  // Xử lý sự kiện Cuộn chuột (Scroll-driven):
  // 1. Khi cuộn tới section: Hiện chiếc phong bì tím nguyên vẹn ở trung tâm màn hình.
  // 2. Khi người dùng kéo tiếp xuống: Mở bung xòe phong bì!
  // 3. Sau khi mở ra: Tự động chuyển cảnh sang James Carter (hoặc chuyển ngay khi lăn tiếp chuột)!
  // 4. Khi cuộn ngược lên lại: Khép lại phong bì tím nguyên vẹn!
  let lastScrollY = window.scrollY;

  function handleTestiScroll() {
    const stageRect = stage.getBoundingClientRect();
    const windowH = window.innerHeight;
    const stageCenterY = stageRect.top + stageRect.height / 2;
    const windowCenterY = windowH / 2;
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;
    const isScrollingUp = currentScrollY < lastScrollY;
    lastScrollY = currentScrollY;

    // Kiểm tra xem stage có đang hiển thị trong tầm nhìn không
    const isInView = stageRect.top < windowH * 0.85 && stageRect.bottom > windowH * 0.15;

    if (!isInView) {
      if (stageRect.bottom < 0 || stageRect.top > windowH) {
        if (hasFannedOut) resetToEnvelope();
      }
      return;
    }

    if (!hasFannedOut) {
      // Khi cuộn xuống và section/stage đã vào tầm nhìn đẹp
      if (isScrollingDown && (stageCenterY <= windowCenterY + 40 || stageRect.top <= 120)) {
        triggerFanOut();
      }
    } else {
      // Khi đã mở ra, nếu cuộn xuống tiếp thì chuyển cảnh sang James Carter
      if (isScrollingDown && currentIdx === 0 && stageCenterY <= windowCenterY - 40 && !isTransitioning) {
        goToSlide(1, 'next');
      } else if (isScrollingUp && stageCenterY >= windowCenterY + 80) {
        resetToEnvelope();
      }
    }
  }

  window.addEventListener('scroll', handleTestiScroll, { passive: true });

  // Lắng nghe sự kiện bánh xe chuột (Wheel) trực tiếp trên section:
  // Lăn chuột lần 1: Mở phong bì tím
  // Lăn chuột lần 2: Chuyển cảnh sang James Carter
  section.addEventListener('wheel', (e) => {
    const stageRect = stage.getBoundingClientRect();
    const windowH = window.innerHeight;
    const isInView = stageRect.top < windowH * 0.85 && stageRect.bottom > windowH * 0.15;

    if (!isInView) return;

    if (e.deltaY > 15) {
      if (!hasFannedOut) {
        triggerFanOut();
      } else if (currentIdx === 0 && !isTransitioning) {
        goToSlide(1, 'next');
      }
    } else if (e.deltaY < -15) {
      if (hasFannedOut) {
        if (currentIdx === 1 && !isTransitioning) {
          goToSlide(0, 'prev');
        } else if (currentIdx === 0 && stageRect.top > 40) {
          resetToEnvelope();
        }
      }
    }
  }, { passive: true });

  // Lắng nghe sự kiện vuốt Touch trên Mobile / Tablet
  let touchStartY = 0;
  section.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) touchStartY = e.touches[0].clientY;
  }, { passive: true });

  section.addEventListener('touchmove', (e) => {
    if (e.touches.length === 0) return;
    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY - touchY;
    const stageRect = stage.getBoundingClientRect();
    const windowH = window.innerHeight;
    const isInView = stageRect.top < windowH * 0.85 && stageRect.bottom > windowH * 0.15;

    if (!isInView) return;

    if (deltaY > 20) {
      if (!hasFannedOut) {
        triggerFanOut();
      } else if (currentIdx === 0 && !isTransitioning) {
        goToSlide(1, 'next');
      }
    } else if (deltaY < -20 && hasFannedOut) {
      if (currentIdx === 1 && !isTransitioning) {
        goToSlide(0, 'prev');
      } else if (currentIdx === 0 && stageRect.top > 40) {
        resetToEnvelope();
      }
    }
  }, { passive: true });

  // Sự kiện nút Previous
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!hasFannedOut) {
        triggerFanOut();
        return;
      }
      const prevIdx = (currentIdx - 1 + cards.length) % cards.length;
      goToSlide(prevIdx, 'prev');
      startTestiAutoRotate();
    });
  }

  // Sự kiện nút Next
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!hasFannedOut) {
        triggerFanOut();
        return;
      }
      const nextIdx = (currentIdx + 1) % cards.length;
      goToSlide(nextIdx, 'next');
      startTestiAutoRotate();
    });
  }

  // Cho phép click vào stage để kích hoạt bung xòe hoặc chuyển tiếp slide (bảo lưu text selection)
  stage.addEventListener('click', (e) => {
    // Nếu người dùng đang bôi đen văn bản để copy, không kích hoạt chuyển slide
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      return;
    }

    if (!hasFannedOut) {
      triggerFanOut();
    } else {
      const nextIdx = (currentIdx + 1) % cards.length;
      goToSlide(nextIdx, 'next');
      startTestiAutoRotate();
    }
  });

  // Ngăn chặn gián đoạn khi người dùng thả chuột sau khi bôi đen văn bản
  cards.forEach(card => {
    card.addEventListener('mouseup', (e) => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0) {
        e.stopPropagation();
      }
    });
  });

  stage.addEventListener('mouseenter', stopTestiAutoRotate);
  stage.addEventListener('mouseleave', () => {
    if (hasFannedOut) startTestiAutoRotate();
  });

  // Khởi tạo ban đầu ở trạng thái phong bì tím nguyên vẹn
  resetToEnvelope();
  handleTestiScroll();
}

/* ================= 4. SMOOTH SCROLL ================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ================= 4b. TEXT BLUR WIPE REVEAL (Horizontal Staggered Blur Reveal - Frame 11.0s) ================= */
function initTextBlurWipe() {
  const wipeElements = document.querySelectorAll('.text-blur-wipe');

  wipeElements.forEach((el) => {
    if (el.dataset.wipeInitialized) return;
    el.dataset.wipeInitialized = 'true';

    // Đánh dấu khối cha scroll-blur-reveal để tránh bị blur kép toàn container
    const parentContainer = el.closest('.scroll-blur-reveal');
    if (parentContainer) {
      parentContainer.classList.add('has-text-wipe');
    }

    // Lưu text gốc cho Screen Reader & SEO
    const originalText = el.textContent.trim();
    if (!el.getAttribute('aria-label')) {
      el.setAttribute('aria-label', originalText);
    }

    // Phân tách text thành các từ và từng ký tự
    const childNodes = Array.from(el.childNodes);
    const fragment = document.createDocumentFragment();
    let globalCharIndex = 0;

    childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        // Tách từ theo khoảng trắng, giữ lại khoảng trắng
        const parts = text.split(/(\s+)/);
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            // Khoảng trắng giữa các từ
            const spaceSpan = document.createElement('span');
            spaceSpan.className = 'reveal-space';
            spaceSpan.innerHTML = '&nbsp;';
            fragment.appendChild(spaceSpan);
          } else {
            // Từ (Word): gói vào .reveal-word để không bao giờ bị rớt dòng giữa chữ
            const wordSpan = document.createElement('span');
            wordSpan.className = 'reveal-word';
            for (let i = 0; i < part.length; i++) {
              const charSpan = document.createElement('span');
              charSpan.className = 'reveal-char';
              charSpan.style.setProperty('--char-idx', globalCharIndex);
              charSpan.textContent = part[i];
              wordSpan.appendChild(charSpan);
              globalCharIndex++;
            }
            fragment.appendChild(wordSpan);
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName.toLowerCase() === 'br') {
          fragment.appendChild(document.createElement('br'));
        } else {
          fragment.appendChild(node.cloneNode(true));
        }
      }
    });

    el.innerHTML = '';
    el.appendChild(fragment);
  });
}

/* ================= 5. SCROLL ANIMATIONS (Text Blur Reveal & Scroll Entrance) ================= */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.scroll-blur-reveal, .scroll-fade-up, .scroll-scale-up, .text-blur-wipe');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Kích hoạt luôn các thẻ con text-blur-wipe nếu có
        const childWipes = entry.target.querySelectorAll('.text-blur-wipe');
        childWipes.forEach(w => w.classList.add('is-revealed'));
      } else {
        // Nếu phần tử nằm dưới đáy màn hình khi cuộn ngược lên trên, cho phép reset để xem lại chuyển động
        if (entry.boundingClientRect.top > window.innerHeight) {
          entry.target.classList.remove('is-revealed');
          const childWipes = entry.target.querySelectorAll('.text-blur-wipe');
          childWipes.forEach(w => w.classList.remove('is-revealed'));
        }
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    // Chỉ kích hoạt sẵn nếu phần tử nằm ở nửa trên của viewport ban đầu
    if (rect.top >= 0 && rect.bottom <= window.innerHeight * 0.75) {
      el.classList.add('is-revealed');
      const childWipes = el.querySelectorAll('.text-blur-wipe');
      childWipes.forEach(w => w.classList.add('is-revealed'));
    } else {
      el.classList.remove('is-revealed');
    }
    observer.observe(el);
  });

  // Listener scroll phụ trợ đảm bảo phản hồi tức thời 60fps khi người dùng cuộn
  window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0) {
        if (!el.classList.contains('is-revealed')) {
          el.classList.add('is-revealed');
          el.querySelectorAll('.text-blur-wipe').forEach(w => w.classList.add('is-revealed'));
        }
      } else if (rect.top > window.innerHeight) {
        if (el.classList.contains('is-revealed')) {
          el.classList.remove('is-revealed');
          el.querySelectorAll('.text-blur-wipe').forEach(w => w.classList.remove('is-revealed'));
        }
      }
    });
  }, { passive: true });
}

/* ================= 6. NAVBAR SCROLL EFFECT ================= */
function initNavbarScrollEffect() {
  const navContainer = document.querySelector('header > div');
  if (!navContainer) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navContainer.classList.add('shadow-xl', 'border-slate-300/80', 'bg-white/95');
      navContainer.classList.remove('shadow-md');
    } else {
      navContainer.classList.remove('shadow-xl', 'border-slate-300/80');
      navContainer.classList.add('shadow-md');
    }
  }, { passive: true });
}

/* ================= 7. HERO 2 DUAL ORBITING WHEELS MOTION (Bánh xe xoay tròn đối xứng 60fps) ================= */
function initHero2AvatarMotion() {
  const hero2Section = document.getElementById('hero2Card');
  if (!hero2Section) return;

  const leftAvatars = hero2Section.querySelectorAll('.hero2-avatar-left');
  const rightAvatars = hero2Section.querySelectorAll('.hero2-avatar-right');
  if (!leftAvatars.length || !rightAvatars.length) return;

  // Công thức Fourier khép kín chuẩn xác qua 4 điểm then chốt:
  // P0 (ngoài trên): 3.8%, 20.0%
  // P1 (trong trên): 16.5%, 30.0%
  // P2 (trong dưới): 16.5%, 56.0%
  // P3 (ngoài dưới): 3.8%, 68.0%
  function getOrbitCoords(theta) {
    const x = 10.15 - 6.35 * Math.cos(theta) + 6.35 * Math.sin(theta);
    const y = 43.5 - 18.0 * Math.cos(theta) - 19.0 * Math.sin(theta) - 5.5 * Math.cos(2 * theta);
    return { x, y };
  }

  let currentAngle = 0; // Góc xoay ban đầu
  const baseSpeed = 0.005; // Tốc độ tự xoay thong thả (~20s một vòng chu kỳ)
  let scrollVelocity = 0; // Gia tốc theo nhịp cuộn chuột
  let isVisible = false; // Chỉ chạy RAF khi section nằm trong viewport
  let rafId = null;

  // Quản lý Visibility bằng IntersectionObserver để tiết kiệm 100% tài nguyên CPU khi ngoài viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        lastTime = performance.now();
        if (!rafId) rafId = requestAnimationFrame(render);
      } else {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    });
  }, { threshold: 0.1 });
  observer.observe(hero2Section);

  // Quản lý Scroll Boost: tăng tốc nhẹ theo nhịp cuộn chuột của người dùng
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const deltaY = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    if (isVisible && Math.abs(deltaY) > 0.5) {
      scrollVelocity += deltaY * 0.0003;
      // Giới hạn vận tốc xoay tối đa
      scrollVelocity = Math.max(-0.035, Math.min(0.035, scrollVelocity));
    }
  }, { passive: true });

  let lastTime = performance.now();

  function render(now) {
    if (!isVisible) {
      rafId = null;
      return;
    }

    const dt = Math.min((now - lastTime) / 16.67, 2.0); // Chuẩn hóa thời gian theo 60fps
    lastTime = now;

    // Giảm dần vận tốc cuộn chuột (damping)
    scrollVelocity *= Math.pow(0.92, dt);

    // Tốc độ xoay liên tục không ngừng ngay cả khi hover
    const speed = baseSpeed + scrollVelocity;
    currentAngle += speed * dt;

    // Nếu màn hình nhỏ (mobile < 640px), không áp dụng xoay tròn để bảo toàn layout
    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      allAvatars.forEach(el => {
        el.style.left = '';
        el.style.top = '';
        el.style.right = '';
        el.style.opacity = '';
        el.style.zIndex = '';
        const cardInner = el.querySelector('.hero2-avatar-card');
        if (cardInner) cardInner.style.transform = '';
      });
    } else {
      // Cập nhật cụm bên trái (Left Wheel) - 4 avatar
      leftAvatars.forEach(el => {
        const idx = parseInt(el.dataset.index || '0', 10);
        // 4 avatar phân bố đều 90 độ (PI/2)
        const angle = currentAngle + idx * (Math.PI / 2);
        const pos = getOrbitCoords(angle);

        el.style.left = `${pos.x.toFixed(2)}%`;
        el.style.top = `${pos.y.toFixed(2)}%`;
        el.style.right = 'auto';

        // Chiều sâu thị giác: ngoài cùng phóng to nhẹ scale(1.02), trong cùng scale(0.96)
        const depthFactor = Math.max(0, Math.min(1, (pos.x - 1.2) / 18.0)); // 0 ở ngoài, 1 ở trong
        const scale = 1.02 - depthFactor * 0.06;
        const opacity = 1.0 - depthFactor * 0.05;
        const zIndex = depthFactor < 0.5 ? 30 : 20;

        el.style.zIndex = zIndex;
        el.style.opacity = opacity.toFixed(2);
        const cardInner = el.querySelector('.hero2-avatar-card');
        if (cardInner && !el.matches(':hover')) {
          cardInner.style.transform = `scale(${scale.toFixed(3)})`;
        }
      });

      // Cập nhật cụm bên phải (Right Wheel) - 4 avatar đối xứng gương
      rightAvatars.forEach(el => {
        const idx = parseInt(el.dataset.index || '0', 10);
        const angle = currentAngle + idx * (Math.PI / 2);
        const pos = getOrbitCoords(angle);

        el.style.right = `${pos.x.toFixed(2)}%`;
        el.style.top = `${pos.y.toFixed(2)}%`;
        el.style.left = 'auto';

        const depthFactor = Math.max(0, Math.min(1, (pos.x - 1.2) / 18.0));
        const scale = 1.02 - depthFactor * 0.06;
        const opacity = 1.0 - depthFactor * 0.05;
        const zIndex = depthFactor < 0.5 ? 30 : 20;

        el.style.zIndex = zIndex;
        el.style.opacity = opacity.toFixed(2);
        const cardInner = el.querySelector('.hero2-avatar-card');
        if (cardInner && !el.matches(':hover')) {
          cardInner.style.transform = `scale(${scale.toFixed(3)})`;
        }
      });
    }

    rafId = requestAnimationFrame(render);
  }
}

/* ================= 8. RESPONSIVE MOBILE MENU INTERACTION ================= */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const panel = document.getElementById('mobileMenuPanel');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!btn || !panel || !backdrop) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    btn.classList.add('is-active');
    btn.setAttribute('aria-expanded', 'true');
    
    // Hiện panel và backdrop
    panel.classList.remove('hidden');
    backdrop.classList.remove('hidden');

    requestAnimationFrame(() => {
      panel.classList.remove('opacity-0', '-translate-y-2');
      panel.classList.add('opacity-100', 'translate-y-0');
      
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
    });
  }

  function closeMenu() {
    isOpen = false;
    btn.classList.remove('is-active');
    btn.setAttribute('aria-expanded', 'false');

    panel.classList.remove('opacity-100', 'translate-y-0');
    panel.classList.add('opacity-0', '-translate-y-2');

    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');

    setTimeout(() => {
      if (!isOpen) {
        panel.classList.add('hidden');
        backdrop.classList.add('hidden');
      }
    }, 280);
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  backdrop.addEventListener('click', () => {
    closeMenu();
  });

  // Đóng khi click vào bất kỳ liên kết nào trong mobile menu
  const mobileLinks = panel.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Đóng khi ấn phím Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
    }
  });

  // Tự động đóng nếu resize lên Desktop >= 768px
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isOpen) {
      closeMenu();
    }
  });
}



