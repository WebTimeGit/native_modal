document.addEventListener("DOMContentLoaded", function () {

    let window = document.body;
    let modalItemBtn = document.querySelectorAll('[data-trigger-modal]');
    let modal = document.querySelectorAll('[data-modal]');
    let modal_content = document.querySelectorAll('.modal_content');
    let closeMode = document.querySelectorAll('[data-close]');
    let targetBtn;


    function openModal() {
        modalItemBtn.forEach(element => {
            element.addEventListener('click', function (e) {
                e.preventDefault();
                targetBtn = this.getAttribute('data-label-modal');
                modal.forEach(element => {
                    let modalId = element.id;
                    if (targetBtn === modalId) {
                        element.classList.add('active');
                        window.style.overflow = 'hidden';
                    }
                });
            })
        });
    }

    closeMode.forEach(element => {
        element.addEventListener('click', function () {
            modal.forEach(element => {
                element.classList.remove('active')
                window.style.overflow = 'initial';
            });
            if (element.getAttribute('data-trigger-modal')) {
                openModal();
            }
        })
    })

    for (let i = 0; i < modal.length; i++) {

        let elemAttr = modal_content[i].getAttribute('data-important');

        if (elemAttr === 'true') {
            document.addEventListener('mousedown', function (e) {
                let target = e.target;
                let currentModal = target === modal_content[i] || modal_content[i].contains(target);
                if (!currentModal) {
                    modal_content[i].style.transform = 'scale(.99)'
                }
            })
            document.addEventListener('mouseup', function () {
                modal_content[i].style.transform = 'scale(1)'
            })
        } else {
            document.addEventListener('click', function (e) {
                let target = e.target;
                let currentModal_content = target === modal_content[i] || modal_content[i].contains(target);
                let currentModalBtn = target === modalItemBtn[i];
                let currentModal = modal_content[i].parentElement;

                if (!currentModal_content && !currentModalBtn && currentModal.classList.contains('active')) {
                    currentModal.classList.remove('active');
                    window.style.overflow = 'initial'
                }
            })
        }

    }

    openModal();

});



