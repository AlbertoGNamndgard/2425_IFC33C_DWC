const cartas = [
    '2_of_clubs.png', '3_of_clubs.png', '4_of_clubs.png', '5_of_clubs.png', '6_of_clubs.png', '7_of_clubs.png', '8_of_clubs.png', '9_of_clubs.png', '10_of_clubs.png', 'jack_of_clubs.png', 'queen_of_clubs.png', 'king_of_clubs.png', 'ace_of_clubs.png', // Tréboles
    '2_of_diamonds.png', '3_of_diamonds.png', '4_of_diamonds.png', '5_of_diamonds.png', '6_of_diamonds.png', '7_of_diamonds.png', '8_of_diamonds.png', '9_of_diamonds.png', '10_of_diamonds.png', 'jack_of_diamonds.png', 'queen_of_diamonds.png', 'king_of_diamonds.png', 'ace_of_diamonds.png', // Diamantes
    '2_of_hearts.png', '3_of_hearts.png', '4_of_hearts.png', '5_of_hearts.png', '6_of_hearts.png', '7_of_hearts.png', '8_of_hearts.png', '9_of_hearts.png', '10_of_hearts.png', 'jack_of_hearts.png', 'queen_of_hearts.png', 'king_of_hearts.png', 'ace_of_hearts.png', // Corazones
    '2_of_spades.png', '3_of_spades.png', '4_of_spades.png', '5_of_spades.png', '6_of_spades.png', '7_of_spades.png', '8_of_spades.png', '9_of_spades.png', '10_of_spades.png', 'jack_of_spades.png', 'queen_of_spades.png', 'king_of_spades.png', 'ace_of_spades.png'  // Picas
];

function Jugar(cartas) {
    let contenedor = document.getElementById("contenedor"); 
    contenedor.innerHTML = ''; 
    let muestras = [];
    let valores = []; 

    while (muestras.length < 5) {
        let indiceAleatorio = Math.floor(Math.random() * cartas.length);
        let cartaSeleccionada = cartas[indiceAleatorio];
        let valorCarta = cartaSeleccionada.split('_')[0]; 

        if (!muestras.includes(cartaSeleccionada)) {
            muestras.push(cartaSeleccionada);
            valores.push(valorCarta); 

            let imgElement = document.createElement('img');
            imgElement.src = `cards/${cartaSeleccionada}`;  
            imgElement.alt = cartaSeleccionada;
            imgElement.style.width = "150px";  
            imgElement.style.margin = "10px";  

            contenedor.appendChild(imgElement);
        }
    }

    let pareja = false;
    for (let i = 0; i < valores.length; i++) {
        for (let j = i + 1; j < valores.length; j++) {
            if (valores[i] === valores[j]) {
                pareja = true;
                break;
            }
        }
    }

    if (pareja) {
        let mensaje = document.createElement('p');
        mensaje.textContent = "Enhorabuena, tienes una pareja!";
        contenedor.appendChild(mensaje);
    }
}

window.onload = () => Jugar(cartas);
