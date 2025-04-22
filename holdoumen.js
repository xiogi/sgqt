document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuItems = [
        null, // 第一个菜单没有下拉
        { bg: 'img/ditu.png' }, // 公司简介
        { bg: 'img/ditu.png' }, // 产品中心
        { bg: 'img/ditu.png' }, // 新闻动态
        { bg: 'img/ditu.png' }  // 联系我们

    ];

    let currentOpenIndex = -1;

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const itemIndex = index + 1; // 因为第一个菜单是index 0

            // 如果点击的是已经打开的菜单，关闭它
            if (currentOpenIndex === itemIndex) {
                dropdownMenu.style.display = 'none';
                currentOpenIndex = -1;
                return;
            }

            // 设置下拉菜单的背景并显示
            const menuItem = menuItems[itemIndex];
            if (menuItem && menuItem.bg) {
                dropdownMenu.style.backgroundImage = `url(${menuItem.bg})`;
                dropdownMenu.style.display = 'block';
                currentOpenIndex = itemIndex;
            }
        });
    });

    // 点击页面其他区域关闭下拉菜单
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-link') && !e.target.closest('.nav-list')) {
            dropdownMenu.style.display = 'none';
            currentOpenIndex = -1;
        }
    });
});