      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */
let btn = document.getElementById("btn_mayusculas").addEventListener("click",convertir)

function convertir(e){
  e.preventDefault()
  let valores = document.getElementById('txt_may').value
  console.log(valores)
  const arreglo = valores.split(",");
  for(var i=0; i<arreglo.length; i++){
    arreglo[i] = arreglo[i].toLowerCase();
  }
  console.log(arreglo)
  document.getElementById("txt_may").value = arreglo
}
      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */

let boton = document.getElementById("btn_añoshumano").addEventListener("click",calculateDogAge)
let edad = document.getElementById("edad_humano").value
console.log(parseInt(edad, 10))


function calculateDogAge(e, edad){
  e.preventDefault()
  const parsed = parseInt(edad, 10)
  console.log(typeof parsed)
  const perro = parsed * 7
  document.getElementById("edad_perro").value = perro

}
  
      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */

function Pokemon(nombre, especie, ataque, defensa){
  this.nombre=nombre; 
  this.especie=especie;
  this.ataque=ataque;
  this.defensa=defensa;

}
var pk1 = new Pokemon('pikachu', 'bicho', '500', '200');
var pk2 = new Pokemon('plant', 'hada', '100', '200');
