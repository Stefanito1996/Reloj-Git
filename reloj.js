setInterval(() => {
     let reloj = document.getElementsByClassName ("reloj")[0];    //tomamos el elemento reloj en su posicion [0]
     let horaActual = new Date();                 // asignamos una varaible para obtener la fecha en la que estamos
     let hora = horaActual.getHours();            // variable para la hora y agregamos una condicion en la que:
          if (hora < 10) {                        // si el numero es menor a 10, agregamos un 0 para que sea doble el numero y no cuente de a uno.
          hora = ` 0${hora}`
          }

     let minutos = horaActual.getMinutes();       
          if (minutos < 10) {
           minutos = `0${minutos}`
           }

     let segundos = horaActual.getSeconds();
           if (segundos < 10) {
          segundos = `0${segundos}`
          }

     reloj.innerHTML = `${hora} : ${minutos} : ${segundos}`;
     
}, 1000);


