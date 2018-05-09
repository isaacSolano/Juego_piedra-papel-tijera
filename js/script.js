function aleatorio (){

	var numero = Math.random();


	if(numero < 0.33){
		opcionMaquina=0;
	}else{
		if( (numero > 0.33) && (numero < 0.66) ){
			opcionMaquina=1;
		}else{
			opcionMaquina=2;
		}
	}

	return opcionMaquina;

};


var elementoBotonPiedra = document.querySelector('#btnEleccion0');

	elementoBotonPiedra.addEventListener('click', jugarPiedra);

	function jugarPiedra() {

	var piedra = 0;
	var papel = 1;
	var tijera = 2;

	var opcionUsuario = piedra;
	var opcionMaquina = aleatorio();

	var elementoComentario = document.querySelector('#comentario');
	
		if (opcionMaquina == piedra){
			document.getElementById('comentario').innerHTML = 'Maquina elige piedra. Hay un empate';

			elementoComentario.classList.remove('gano');
			elementoComentario.classList.remove('perdio');
			elementoComentario.classList.add('empate');

		}else{
			if ( opcionMaquina == papel){
				document.getElementById('comentario').innerHTML = 'Maquina elige papel. Tu pierdes.';

				elementoComentario.classList.remove('gano');
				elementoComentario.classList.add('perdio');
				elementoComentario.classList.remove('empate');
			}else{
				document.getElementById('comentario').innerHTML = 'Maquina elige tijera. Tu ganas.';

				elementoComentario.classList.add('gano');
				elementoComentario.classList.remove('perdio');
				elementoComentario.classList.remove('empate');
			}
		}
		
	}


var elementoBotonPapel = document.querySelector('#btnEleccion1');

	elementoBotonPapel.addEventListener('click', jugarPapel);

function jugarPapel() {

	var piedra = 0;
	var papel = 1;
	var tijera = 2;

	var opcionUsuario = papel;
	var opcionMaquina = aleatorio();

	var elementoComentario = document.querySelector('#comentario');

	if (opcionMaquina == piedra){
		document.getElementById('comentario').innerHTML='Maquina elige piedra. Tu ganas';

		elementoComentario.classList.add('gano');
		elementoComentario.classList.remove('perdio');
		elementoComentario.classList.remove('empate');

	}else{
		if (opcionMaquina == papel){
			document.getElementById('comentario').innerHTML='Maquina elige papel. Hay un empate';

		elementoComentario.classList.remove('gano');
		elementoComentario.classList.remove('perdio');
		elementoComentario.classList.add('empate');
		}else{
			document.getElementById('comentario').innerHTML='Maquina elige tijera. Tu pierdes';

		elementoComentario.classList.remove('gano');
		elementoComentario.classList.add('perdio');
		elementoComentario.classList.remove('empate');
		}
	}
}

var elementoBotonTijera = document.querySelector('#btnEleccion2');

	elementoBotonTijera.addEventListener('click', jugarTijera);

function jugarTijera() {

	var piedra = 0;
	var papel = 1;
	var tijera = 2;

	var opcionUsuario = tijera;
	var opcionMaquina = aleatorio();

	var elementoComentario = document.querySelector('#comentario');

	if (opcionMaquina == piedra){
		document.getElementById('comentario').innerHTML='Maquina elige piedra. Tu pierdes';

		elementoComentario.classList.remove('gano');
		elementoComentario.classList.add('perdio');
		elementoComentario.classList.remove('empate');
	}else{
		if (opcionMaquina == papel){
			document.getElementById('comentario').innerHTML='Maquina elige papel. Tu ganas';

			elementoComentario.classList.add('gano');
			elementoComentario.classList.remove('perdio');
			elementoComentario.classList.remove('empate');
		}else{
			document.getElementById('comentario').innerHTML='Maquina elige tijera. Hay un empate';

			elementoComentario.classList.remove('gano');
			elementoComentario.classList.remove('perdio');
			elementoComentario.classList.add('empate');
		}
	}
}

