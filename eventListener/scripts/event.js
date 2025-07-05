document.getElementById('btn-update-title')
    .addEventListener('click', function () {

        // console.log('btn clicked');

        const pageTitle = document.getElementById('main-title');

        pageTitle.innerText = 'update page title text';
    })


document.getElementById('login-btn')
    .addEventListener('click', function () {

        const userInfo = document.getElementById('user-info');

        userInfo.innerText = 'User logged in';
    })

// handle input text

document.getElementById('update-btn')
    .addEventListener('click', function () {

        const inputName = document.getElementById('input-name');
        const name = inputName.value;

        const paraName = document.getElementById('paraName');

        paraName.innerText = name;

    })