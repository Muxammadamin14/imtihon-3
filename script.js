let select = document.querySelector(".noni");
select.addEventListener('change', () => {
    let nonni = document.querySelector(".non");
    nonni.innerHTML = `<p>noni: <br>${select.value}</p>`
})



const btn = document.getElementById("sm", 'sm', 'sm'),
    katta = document.querySelector('.kat');
const value = document.querySelector('.btn')
btn.onmousedown = function (evt) {
    btn.addEventListener(this.change, katta)
    evt.preventDefault();
    katta.innerHTML = `<p>kattaligi: <br> ${this.textContent} </p>`
};
const value2 = document.querySelector('.btn2')
value2.onmousedown = function (evt) {
    btn.addEventListener(this.change, katta)
    evt.preventDefault();
    katta.innerHTML = `<p>kattaligi: <br> ${this.textContent} </p>`
}

const value3 = document.querySelector('.btn3')
value3.onmousedown = function (evt) {
    btn.addEventListener(this.change, katta)
    evt.preventDefault();
    katta.innerHTML = `<p>kattaligi: <br> ${this.textContent}  </p>`
}




const input = document.querySelector("#tittle");
input.onchange = function (params) {
    let qoshib = document.querySelector('#ustida')
    qoshib.innerHTML = `<p>ustida: <br>${input.value}</p>`
}
const input1 = document.querySelector("#tittle1");
input1.onchange = function (params) {
    let qoshib1 = document.querySelector('#ustida')
    qoshib1.innerHTML = `<p>ustida: <br>${input1.value}</p>`
}
const input2 = document.querySelector("#tittle2");
input2.onchange = function (params) {
    let qoshib2 = document.querySelector('#ustida')
    qoshib2.innerHTML = `<p>ustida: <br>${input2.value}</p>`
}
const input3 = document.querySelector("#tittle3");
input3.onchange = function (params) {
    let qoshib3 = document.querySelector('#ustida')
    qoshib3.innerHTML = `<p>ustida: <br>${input3.value}</p>`
}
const input4 = document.querySelector("#tittle4");
input4.onchange = function (params) {
    let qoshib4 = document.querySelector('#ustida')
    qoshib4.innerHTML = `<p>ustida: <br>${input4.value}</p>`
}
const input5 = document.querySelector("#tittle5");
input5.onchange = function (params) {
    let qoshib5 = document.querySelector('#ustida')
    qoshib5.innerHTML = `<p>ustida: <br>${input5.value}</p>`
}
const add = document.querySelector('.add1'),
    add2 = document.querySelector('.add2');

add.onchange = function (params) {
    let addone = document.querySelector('#qoshish')
    addone.innerHTML = `<p>qoshimcha: <br>${add.value}</p>`
}
add2.onchange = function (params) {
    let addone2 = document.querySelector('#qoshish')
    addone2.innerHTML = `<p>qoshimcha: <br>${add2.value}</p>`
}

let button = document.querySelector('.btn__buyurtma');
let z = document.querySelector('.z-index2');

if (button === button) {
    button.onclick = function (params) {
        z.innerHTML = `<div class="z-index2 display-block">
    </div>`
        z.style.display = 'block';
        z.innerHTML = `<h1>BUYURTMANGIZ QABUL BOLDI</h1>`
    }

}




button.onmouseout = function (params) {
    z.style.display = 'none';
}