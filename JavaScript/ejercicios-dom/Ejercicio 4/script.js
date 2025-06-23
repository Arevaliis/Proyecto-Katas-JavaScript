/*
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click
*/

const boton = document.getElementById("btnToClick");
boton.addEventListener("click", function(event){
    console.log(event)
})

/*
1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
*/
const valorInput = document.querySelectorAll("input");

for (const valor of valorInput) {
        valor.addEventListener("focus", function(event){
        console.log(event.target.value);
    })
}

/*
1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/

const inputs = document.querySelectorAll("input");

for (const input of inputs) {
    input.addEventListener("input", function(){
        console.log(input.value);
    });
}