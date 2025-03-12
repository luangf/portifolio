function open() {
    document.getElementById('transition').classList.remove('closed');
}

function addHovered(parent) {
    parent.classList.add('hovered');
}
function remHovered(parent) {
    parent.classList.remove('hovered');
}
window.onload = function () {
    setTimeout(function () {
        open();
        // I know that i should avoid using .style instead of the classlist
        // i used a .style here becouse it will be done only once and it will stay like this after
        document.querySelector('.text-bar').style.color = 'var(--text-color)';
    }, 300);

    document.querySelectorAll('.project img').forEach(img => {
        let timer;
        let parent = img.closest('div[id]');
        if (!parent) return;

        img.addEventListener('click', function () {
            addHovered(parent);
        });

        img.addEventListener('mouseenter', function () {

            timer = setTimeout(function () {
                addHovered(parent);
            }, 800);
        });


        parent.addEventListener('mouseleave', function () {
            clearTimeout(timer);
            setTimeout(function () {
                remHovered(parent);
            }, 150);
        });
    });
};

window.addEventListener('scroll', function () {
    let textBar = document.querySelector('.text-bar');
    let bar = document.querySelector('.diagonal');
    if (window.scrollY > 470) {
        textBar.classList.add('scroll');
        bar.classList.add('scroll');
        bar.style.border = '1px solid silver';
    } else {
        textBar.classList.remove('scroll');
        bar.classList.remove('scroll');
        bar.style.border = 'transparent';
    }
    if (window.scrollY > 350) {
        let img = document.querySelector('.intro-img');
        let intro = document.querySelector('.introduction');
        intro.style.color = 'var(--text-color)';
        intro.style.transform = 'translateY(0%)';
        img.style.transform = 'translateX(0%)';
        img.style.opacity = '1';
    }
});

function openMore(btn) {
    let filter = document.createElement('div');
    let newWindow = document.createElement('div');
    let section = document.getElementById('projects');

    section.insertAdjacentElement('afterbegin', newWindow);
    newWindow.classList.add('more');
    section.insertAdjacentElement('afterbegin', filter);
    filter.classList.add('filter');
};