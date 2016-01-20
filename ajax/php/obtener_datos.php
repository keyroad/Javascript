<?php
	require("conexion.php");
	$dept_id = mysqli_query($tickets, 'SELECT dept_id,dept_name FROM ost_department');
	function obtener_dept(){
		while (list($id,$nombre) = mysqli_fetch_row($GLOBALS['dept_id'])) {
				echo "<option value='".$id."'>".$nombre."</option>";
				
			}
		}
	function obtener_tipo1($id){
		$tipo_1 = mysqli_query($GLOBALS['tickets'], "SELECT DISTINCT tipo1 FROM ost_sedes WHERE dept_id=".$id);
		$lista_tipo1 = null;
		return sede_tipos($tipo_1,$lista_tipo1);
	}
	function obtener_tipo2($nombre){
		$tipo_2 = mysqli_query($GLOBALS['tickets'], "SELECT DISTINCT tipo2 FROM ost_sedes WHERE tipo1 ='".$nombre."'");
		$lista_tipo2 = null;
		return sede_tipos($tipo_2, $lista_tipo2);
	}
	function obtener_tipo3($nombre){
		$tipo_3 = mysqli_query($GLOBALS['tickets'], "SELECT DISTINCT tipo3 FROM ost_sedes WHERE tipo2 ='".$nombre."'");
		$lista_tipo3 = null;
		return sede_tipos($tipo_3, $lista_tipo3);
	}
	function sede_tipos($tipo, $lista){
		while (list($var) = mysqli_fetch_row($tipo)) {
			if(isset($var))
				$lista.="<option value='".$var."'>".$var."</option>";
		}
		return $lista;
	}
 ?>