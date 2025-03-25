// Lấy tất cả các liên kết điều hướng
const navLinks = document.querySelectorAll('nav a');

// Lặp qua từng liên kết và thêm sự kiện click để cuộn mượt đến section tương ứng
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

        const targetId = this.getAttribute('href'); // Lấy ID của section mục tiêu
        const targetElement = document.querySelector(targetId); // Tìm phần tử section

        if (targetElement) {
            // Cuộn mượt đến phần tử
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Đóng menu trên thiết bị di động (nếu cần)
            const navMenu = document.querySelector('nav ul');
            navMenu.classList.remove('open'); // Bạn cần thêm class 'open' cho menu khi nó được mở trên di động
        }
    });
});

// Thêm hiệu ứng active cho liên kết điều hướng khi cuộn qua các section
const sections = document.querySelectorAll('section');

function highlightNavLink() {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Ví dụ về một hiệu ứng đơn giản: Thay đổi tiêu đề trang sau một khoảng thời gian
setTimeout(() => {
    document.title = "Chào mừng đến với Portfolio của tôi!";
}, 5000);
