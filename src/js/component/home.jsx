import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	//  1. aqui lo que hago es convertir los numeros a texto con  el toString, porque lo recibo en numero y por ello lo paso a texto
	let numeros = props.segundos.toString();
	//2. si lo que busco es captar una posicion concreta del string, por ejemplo la unidad hago lo siguiente:
	// 2.1 para capturar solo la última posicion del numero pasado a string debo hacer:
	// numeros[numeros.lenght - 1] ; los numero en la ultima posicion del string numero me dará:
	//3. de esta manera construyo mi simple counter:
	return (
		<div>
			<h1 className="text-center mt-5">SIMPLE COUNTER WITH REACT</h1>
			
				<div className="reloj">
					<i class="far fa-clock"></i>
				</div>
				<div className="unidad">{numeros[numeros.length - 1]}</div>
				<div className="decenas">{numeros[numeros.length - 2]}</div>
				<div className="centenas">
					{numeros[numeros.length - 3]}
				</div>
				<div className="mil">{numeros[numeros.length - 4]}</div>
			
		</div>
	);
};

export default Home;
