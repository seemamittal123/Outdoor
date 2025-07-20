let demo = document.getElementsByClassName('menu');
let check = 0;
let icon = document.getElementsByClassName('show-btn');
function addList() {
    if (check == 0) {
        demo[0].setAttribute('class', 'menu show');
        icon[0].innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        check = 1;
    }
    else {
        demo[0].setAttribute('class', 'menu');
        icon[0].innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
        check = 0;
    }
}
function task() {
    let name = document.getElementById('input-box1').value;
    let email = document.getElementById('input-box2').value;
    let v1 = document.getElementById('requerd-box1');
    let v2 = document.getElementById('requerd-box2');
    if (name.length == 0) {
        v1.innerText = 'This field is required';
        v1.setAttribute('class', 'design');
    }
    else {
        v1.innerText = '';
        v1.removeAttribute('class');
    }
    if (email.length == 0) {
        v2.innerText = 'This field is required';
        v2.setAttribute('class', 'design');
    }
    else {
        v2.removeAttribute('class');
        v2.innerText = '';
    }

}