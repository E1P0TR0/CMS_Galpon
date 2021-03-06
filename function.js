
window.onload = init;

function init() {
    console.log("Page is loaded ;)");

    let b = document.querySelector(".w3-button"); 

    console.log(b);

        b.addEventListener('click', function(evt){
            console.log("The button clicked was: "+ evt.button);
        })
    
       
}

let images = [{ src: 'pictures/cuarto_pollo_galpon.jpg',
                description: 'Una sutil combinacion de sabores clásicos es la clave de nuestras comidas, hechas simplemente para usted. ',
                descriptionTittle: '1/4 de pollo : '
                },{
                src: 'pictures/pollo_galpon.jpg',
                description: 'Exquisito pollo con papas. Nuestra especialidad de la casa hará explotar su paladar en una bomba de sabores.',
                descriptionTittle: 'Pollo a la brasa : '
                },{
                src:'pictures/salchipapa_galpon.jpg',
                description: 'Para que la historia sea maravillosa es necesario probar la salchipapa más deliciosa',
                descriptionTittle: 'Salchipapa clásica : '}
            ],
     arrow = [{
                src : "pictures/arrow_l.svg",
                hoverSrc : "pictures/arrow_l-grey.svg"
              },{
                  src : "pictures/arrow_r.svg",
                  hoverSrc: "pictures/arrow_r-grey.svg"
                }];             

                console.log(images);

text = document.getElementById("img_description"),
img = document.getElementById("lag");
var beginSlide = 0;
var i = 0;

function slideNovedades(){
    if(i >= images.length || i < 0){
    i = beginSlide;
 } 
    var tittle = images[i].descriptionTittle
    lag.src = images[i].src;
    text.innerHTML = "<b> <em>" + tittle + " </em></b>" + images[i].description;
    i++;
}

slideNovedades();


//implementation of slide widget ;)


//changestars

/*var goldenstar = "pictures/goldenstar-ico.png";
var oldstar = "pictures/blackstar-ico.jpg";
var blackstar = document.getElementById("blackstar");

blackstar.addEventListener('mouseover', function(){
          blackstar.src= goldenstar;
          blackstar.style.cursor= 'pointer';
        });

blackstar.addEventListener('mouseout', function(){
  blackstar.src = oldstar;
});*/

// Change the img src for a new one with a grey arrow

document.getElementById("arrow_l").addEventListener('mouseover', function(evt) {
    this.src = arrow[0].hoverSrc;
    this.style.cursor = 'pointer';
});

document.getElementById("arrow_r").addEventListener('mouseover', function(evt) {
    this.src = arrow[1].hoverSrc;
    this.style.cursor = 'pointer';
});

//puts defaulta image source

document.getElementById("arrow_l").addEventListener('mouseout', function(evt) {
    this.src = arrow[0].src;
});

document.getElementById("arrow_r").addEventListener('mouseout', function(evt) {
    this.src = arrow[1].src;
});

document.getElementById("arrow_l").addEventListener('click', function(evt) {
    slideNovedades();
});

document.getElementById("arrow_r").addEventListener('click', function(evt) {
    slideNovedades();
});


window.onkeydown = escape;

function escape(evt){
    console.log("key pressed:" + evt.keyCode);
    
    if(evt.keyCode === 27) {
        document.getElementById('menu').style.display= 'none';
        document.getElementById('contact').style.display='none'
    }
}

// required checkbox-list
function handleData()
{
	var form_data = new FormData(document.querySelector("form"));
	    
	if(!form_data.has("pedido[]"))
	{
		document.getElementById("chk_option_error").style.visibility = "visible";
	          return false;
	}
	else
	{
	        document.getElementById("chk_option_error").style.visibility = "hidden";
	          return true;
	}
}

function actualizarValor(estaChequeado, valor) {

   // Variables.
   var suma_actual = 0;
   var campo_resultado = document.getElementById('txtValor');
   valor = parseInt(valor);
   // Obtener la suma que pueda tener el campo 'txtValor'.
   try {
        if (campo_resultado != null) {
               if (isNaN(campo_resultado.value)) {
                          campo_resultado.value = 0;
                          }
                 suma_actual = parseInt(campo_resultado.value);
        }
        } catch (ex) {
             alert('No existe el campo de la suma.');
         }
      // Determinar que: si el check está seleccionado "checked"
     // entonces, agregue el valor a la variable "suma_actual";
    // de lo contrario, le resta el valor del check a "suma_actual".
     if (estaChequeado == true) {
            suma_actual = suma_actual + valor;
        } else {
          suma_actual = suma_actual - valor;
         }
    // Colocar el resultado de las operaciones anteriores de vuelta
    // al campo "txtValor".
       campo_resultado.value = suma_actual;
}
