//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let contador = 0;
setInterval(function () {
	//aqui hago que cada un segundo me diga hola, soy natiwai
	console.log(contador);
	ReactDOM.render(
		<Home segundos={contador} />, // en este caso el props de HOMe van a ser los segundos.
		document.querySelector("#app")
        
	);
    contador += 1;
}, 500); //quiero que cada segundo que pase quiero renderizar el DOM, por lo tanto debo colocar ReactDOM dentro de la función setInterval.
//para que mi HOME me renderice el contador necesito utilizar los "props" que en este caso estamos hablando de segundos
//render your react application
