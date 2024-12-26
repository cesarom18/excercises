/* 
-= Problema =-
Dado un fecha en string con el formato AM/PM, retornar string de fecha con el formato militar (24 horas)

-= Planteamiento Solucion =-
Dentro del string o la hora en si solamente no cambia los primeros dos digitos todo lo demas se mantiene, por lo que
solamente podemos considerar ese numero y si es AM o PM para saber la conversion exacta. Se sabe que:
    1.- AM contiene desde 12 -> 01.
    2.- PM contiene desde 01 -> 12.

Con esto nos damos cuenta que solamente vamos a considerar si la fecha es AM o PM, pero ahora la pregunta es como asignamos
esa hora al formato militar de 24 horas. Para esto se me ocurre es realizar el mismo proceso y establecer un rango:
    1.- Para AM contendra desde 00 (Las 12 PM) -> 12 (Las 12 AM)
    2.- Para PM contendra desde 13 (Las 01 PM) -> 23 (Las 11 PM)

Osea que para AM no hay problema, solamente se debe gestionar para PM que en este caso simplemente podemos tomar desde 12
hacia adelante. Suponiendo que nos dan las 4 PM significa que son 4 unidades adelante de las 12 (16:00) o en el caso de ser
las 12 PM simplemente retornamos 0.
 */

function timeConversion(s) {
    let hour = Number(s.substring(0, 2));
    const type = s.substring(8, 10);
    const minSeg = s.substring(2, 8);

    if (type === "AM") {
        if (hour === 12) return "00" + minSeg;

        if (hour > 9) return hour + minSeg;

        return `0${hour}` + minSeg;
    }

    if (hour !== 12) hour += 12;

    return hour + minSeg;
}

const test1 = "06:05:45AM";

timeConversion(test1);