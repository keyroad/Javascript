$(document).ready(function(){
	
	function actualizarReloj(){
		var reloj = $("#reloj");
		var formato = $("#formato").val();
		tiempoActual = new Date();
		hora = tiempoActual.getHours();
		min = tiempoActual.getMinutes();
		seg = tiempoActual.getSeconds();

		if(min < 10)
			min = "0"+min;
		if(seg < 10)
			seg = "0"+seg;

		switch(formato){
			case "12":
				if(hora < 12)
					seg = seg + " AM";
				else
					seg = seg + " PM";
				hora = hora % 12;
				break;
		}
		if(hora < 10)
			hora = "0"+hora;
		valor_reloj = hora+" : "+min+" : "+seg;
		reloj.val(valor_reloj);
	}
	setInterval(actualizarReloj, 1000);
});