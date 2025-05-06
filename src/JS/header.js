
  const header = document.querySelector('header');
  const landing = document.querySelector('.landing');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const mobileSearchContainer = document.getElementById('mobileSearchContainer');
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = menuBtn.querySelector('i');

  function setLandingHeight() {
    const headerHeight = header.offsetHeight;
    landing.style.minHeight = `calc(100vh - ${headerHeight}px)`;
  }

  window.addEventListener('load', setLandingHeight);
  window.addEventListener('resize', setLandingHeight);

  // Mobile Search Toggle
  mobileSearchBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // منع إغلاق البحث عند النقر على الزر
    mobileSearchContainer.classList.toggle('hidden');
  });

  // Menu Toggle
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // منع الإغلاق عند الضغط على زر المنيو
    mobileNav.classList.toggle('hidden');
    // تغيير الأيقونة
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
  });

  // إغلاق البحث أو المنيو إذا تم الضغط خارجهم
  document.addEventListener('click', (e) => {
    // إذا كان البحث ظاهر وتم الضغط خارج زر البحث والحقل
    if (!mobileSearchContainer.classList.contains('hidden') &&
        !mobileSearchContainer.contains(e.target) &&
        !mobileSearchBtn.contains(e.target)) {
      mobileSearchContainer.classList.add('hidden');
    }

    // إذا كانت القائمة ظاهرة وتم الضغط خارجها وخارج زر القائمة
    if (!mobileNav.classList.contains('hidden') &&
        !mobileNav.contains(e.target) &&
        !menuBtn.contains(e.target)) {
      mobileNav.classList.add('hidden');
      // إعادة الأيقونة إلى bars
      menuIcon.classList.add('fa-bars');
      menuIcon.classList.remove('fa-xmark');
    }
  });

