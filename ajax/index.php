<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Prueba Ajax</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/select2.css">
	<script src="js/jquery-2.1.0.js" ></script>
	<script src="js/jquery-ui.js" ></script>
	<script src="js/funciones.js" ></script>
	<script src="js/select2.js" ></script>
</head>
<body>
	<form action="" name="dept" >
		<select name="dept-id" id="dept-id" onchange="eleccionDepartamento($(this).val())">
			<option value="0">Seleciona departamento</option>
			<?php
				require("php/obtener_datos.php");
				obtener_dept();
	    	?>
		</select>
		<select name="tipo1" id="tipo1" onchange="eleccionTipo2($(this).val())">
			<option value="0">-</option>
		</select>
		<select name="tipo2" id="tipo2" onchange="eleccionTipo3($(this).val())">
			<option value="0">-</option>
		</select>
		<select name="tipo3" id="tipo3">
			<option value="0">-</option>
		</select>
	</form>
	<div class="styled-select">
	   <select>
	      <option>Here is the first option</option>
	      <option>The second option</option>
	   </select>
	</div>
</body>
</html>
