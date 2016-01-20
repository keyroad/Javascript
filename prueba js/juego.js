//Asegurate de que el usuario está listo para jugar.
confirm("¡Estoy listo para jugar!");
edad = prompt("¿Cuantos años tienes?");
if(edad < 13)
    console.log("Puedes jugar bajo tu propia responsabilidad");
else 
    console.log("¡Vamos a ello!");
console.log("Ves a Messi caminando por la calle Florida. Está disfrazado y vos sos la única persona que lo reconoce. A su lado camina un guardaespaldas con cara de pocos amigos. Caminás hacia él.");
console.log("Te acercás a Messi. El guardaespaldas te mira con odio.");
respuestaUsuario = prompt("¿Te animás a enfrentarte al guardaespaldas?");
if(respuestaUsuario == "Si")
    console.log("El guardaespaldas se ríe. ¡Solo te quería asustar! Claro que podés sacarte una foto con la pulga.¡Sonrían!");
else 
    console.log("¡Que lástima! No conseguiste una foto con Messi para subir a tu muro de Facebook.");
opinion = prompt("¿Como calificarias al juego?");
if (opinion > 8)
    console.log("Este es solo el primero de mis juegos. Si querés ver más, ¡no te desconectes!");
else
    console.log("¿Me maté haciendo este juego para que me des esa calificación?! ¡Es el colmo!");