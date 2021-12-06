window.addEventListener('DOMContentLoaded', () => {
    const $tabs = document.querySelectorAll('.header-slider__click');
    const $tabsContent = document.querySelectorAll('.header-slider__item');
    const $tabsParent = document.querySelector('.header-slider__numbers');
    const $arrows = document.querySelectorAll('.header-slider__arrow');


    function hideTabContent() {
        $tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        $tabs.forEach(item => {
            item.style.opacity = '0.5';
        });
    }

    function showTabContent(i = 0) {
        $tabsContent[i].style.display = 'block';
        $tabs[i].style.opacity = '1';
    }

    hideTabContent();
    showTabContent();

    $tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('header-slider__click')) {
            $tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});