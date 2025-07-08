// 모바일 메뉴 토글
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 부드러운 스크롤링
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // 모바일 메뉴가 열려있으면 닫기
            navMenu.classList.remove('active');
        }
    });
});

// 스크롤 시 헤더 그림자 효과
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 1px 0 #e8ecef';
    }
});

// 논문 더보기 기능
document.getElementById('view-more-publications').addEventListener('click', function() {
    const additionalPublications = document.getElementById('additional-publications');
    const viewMoreBtn = document.getElementById('view-more-publications');
    
    if (additionalPublications.style.display === 'none') {
        additionalPublications.style.display = 'block';
        viewMoreBtn.textContent = '접기';
    } else {
        additionalPublications.style.display = 'none';
        viewMoreBtn.textContent = '더보기';
    }
});

// 아코디언 기능
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');
    
    // 모든 아코디언 아이템 닫기
    const allHeaders = document.querySelectorAll('.accordion-header');
    const allContents = document.querySelectorAll('.accordion-content');
    
    allHeaders.forEach(h => h.classList.remove('active'));
    allContents.forEach(c => c.classList.remove('active'));
    
    // 선택된 아이템이 닫혀있었다면 열기
    if (!isActive) {
        header.classList.add('active');
        content.classList.add('active');
    }
}

// 갤러리 기능
const galleryImages = [
    'images/hos_1.jpeg',
    'images/hos_2.jpeg',
    'images/hos_3.jpeg',
    'images/hos_4.jpeg',
    'images/hos_5.jpeg'
];

const galleryCurrentImage = document.getElementById('gallery-current-image');
const galleryPrevBtn = document.getElementById('gallery-prev');
const galleryNextBtn = document.getElementById('gallery-next');
let currentImageIndex = 0;

function updateGalleryImage() {
    // 페이드 아웃 효과
    galleryCurrentImage.style.opacity = 0;
    
    setTimeout(() => {
        galleryCurrentImage.src = galleryImages[currentImageIndex];
        // 페이드 인 효과
        galleryCurrentImage.style.opacity = 1;
    }, 300);
}

galleryPrevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryImage();
});

galleryNextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateGalleryImage();
});

// 트랜지션을 위한 초기 불투명도 설정
galleryCurrentImage.style.opacity = 1;

// 다음 지도 초기화
new daum.roughmap.Lander({
    "timestamp": "1747934320193",
    "key": "2o536",
    "mapWidth": "640",
    "mapHeight": "360"
}).render();