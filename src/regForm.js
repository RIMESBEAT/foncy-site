let toggleBtn = document.querySelector('.toggle__btn')
let pswrd = document.querySelector('#pswrd')

    toggleBtn.addEventListener('click', () => {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text')
        toggleBtn.classList.add('hide')
    } else {
        pswrd.setAttribute('type', 'password')
        toggleBtn.classList.remove('hide')

    }
    })

