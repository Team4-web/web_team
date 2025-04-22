document.addEventListener('DOMContentLoaded', function() {
    // Pause animation
    const slider = document.querySelector('.banner .slider');
    if (slider) {
        slider.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        slider.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    const sliderItems = document.querySelectorAll('.slider .item');
    sliderItems.forEach(item => {
        item.addEventListener('click', function() {
            const exhibitionId = this.getAttribute('data-exhibition');
            if (exhibitionId) {
                showExhibitionModal(exhibitionId);
            }
        });
    });
});


function showExhibitionModal(exhibitionId) {
}