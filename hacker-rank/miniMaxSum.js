/* 
-= Problema =-
Obtener la maxima y minima suma posible de la suma de 4 de los 5 numeros posibles de un array.

-= Planteamiento Solucion =-
Lo primero que se me ocurrio es realizar un doble loop pero esto tiene una dificultad de O(N^2) lo cual es muy costoso. Por lo que
para realizarlo en un solo loop tendriamos que gestionar el array de forma que siempre tomemos los 4 numeros posibles y excluyamos
el numero que no corresponde a la iteracion de la suma.

Para esto establecemos que siempre se van a sumar las mismas posiciones (En este caso del primer al cuarto elemento), asi no nos 
preocupamos de la gestion del propio indice. Luego agregamos al final el primer elemento para excluirlo de la siguiente suma y
el ultimo elemento lo agregamos en la primera posicion ya que no es incluyo en a ultima suma.

Por ultimo simplemente validamos si la suma actual es mayor o menor a los valores ya establecidos
 */

function miniMaxSum(arr) {
    let higher = 0;
    let lower = 0

    for (let i = 0; i < arr.length; i++) {
        const sum = arr[0] + arr[1] + arr[2] + arr[3];
        arr.push(arr[0]);
        arr.shift();

        if (i === 0) {
            higher = sum;
            lower = sum;
            continue;
        }

        if (sum > higher) {
            higher = sum;
            continue;
        }

        if (sum < lower) {
            lower = sum;
            continue
        }
    }

    return console.log(lower, higher);
}

const test1 = [1, 2, 3, 4, 5];
const test2 = [7, 69, 2, 221, 8974];

miniMaxSum(test1)