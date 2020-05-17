function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        dscrBtn = document.querySelectorAll('.description-btn');
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    dscrBtn.forEach(function(item) {
        item.addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';   
        });
    });
}

module.exports = modal;