//Asegurate de que el usuario est� listo para jugar.
confirm("�Estoy listo para jugar!");
edad = prompt("�Cuantos a�os tienes?");
if(edad < 13)
    console.log("Puedes jugar bajo tu propia responsabilidad");
else 
    console.log("�Vamos a ello!");
console.log("Ves a Messi caminando por la calle Florida. Est� disfrazado y vos sos la �nica persona que lo reconoce. A su lado camina un guardaespaldas con cara de pocos amigos. Camin�s hacia �l.");
console.log("Te acerc�s a Messi. El guardaespaldas te mira con odio.");
respuestaUsuario = prompt("�Te anim�s a enfrentarte al guardaespaldas?");
if(respuestaUsuario == "Si")
    console.log("El guardaespaldas se r�e. �Solo te quer�a asustar! Claro que pod�s sacarte una foto con la pulga.�Sonr�an!");
else 
    console.log("�Que l�stima! No conseguiste una foto con Messi para subir a tu muro de Facebook.");
opinion = prompt("�Como calificarias al juego?");
if (opinion > 8)
    console.log("Este es solo el primero de mis juegos. Si quer�s ver m�s, �no te desconectes!");
else
    console.log("�Me mat� haciendo este juego para que me des esa calificaci�n?! �Es el colmo!");