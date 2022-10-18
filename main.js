const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

let btn = button.addEventListener('click', (e) => {
    btn = e.target.value
});

submit.addEventListener('submit', göster);

function göster() {

    if(btn == `${btn}`){
        document.querySelector('.thanks').style.display = 'block' 
        document.querySelector('#span').textContent = `${btn}`
        document.querySelector('.degis').style.display = 'none'
    }
}

göster()




