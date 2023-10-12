// console.log("Hello World!")
// alert("Notifikasi")
// prompt("Pinjam seratus")

// var  Promnet = "Coding is easy"
// console.log(Promnet)
// var Promnet = "Coding not easy"
// console.log(Promnet)

// let  Promnet = "Coding is easy"
// console.log(Promnet)
// Promnet = "Coding not easy"
// console.log(Promnet)

// const  Promnet = "Coding is easy"
// console.log(Promnet)
// Promnet = "Coding not easy"
// console.log(Promnet)

// let totalPoin = prompt("Masukan poin anda")
//     if(totalPoin > 100) {
//         document.write("<h1>Congratulation</h1>");
//     }
//     else {
//         document.write("<h1>Thank You</h1>");
//     }

// let x = 6;
// let y = 3;

// console.log(x<10 && y>1);
// console.log(x<10 && y<1);
// console.log(x==5 || y==5);
// console.log(x==6 || y==5);
// console.log(!(x==y));

// document.writeln(x<10 && y>1);
// document.writeln(x<10 && y<1);
// document.writeln(x==5 || y==5);
// document.writeln(x==6 || y==5);
// document.writeln(!(x==y));

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function() {
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

function addItem() {
    let value = inputBx.value.trim();
    if (value !== "") {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<span>${value}</span><i></i>`;

        listItem.addEventListener("click", function(){
            this.classList.toggle('done');
            updateTextDecoration(this);
        });

        listItem.querySelector("i").addEventListener("click", function(){
            listItem.remove();
        });

        list.appendChild(listItem);
        inputBx.value = "";
    }
}

function updateTextDecoration(item) {
    let textElement = item.querySelector('span');
    if (item.classList.contains('done')) {
        textElement.style.textDecoration = 'line-through';
    } else {
        textElement.style.textDecoration = 'none';
    }
}

inputBx.addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        addItem();
    }
});