<?php 
    require('obtener_datos.php');
    if (isset($_POST['idDept'])) {
        if ($valor = $_POST['idDept']) {
                echo obtener_tipo1($valor);
            }
    }
    if(isset($_POST['NombreTipo2'])) {
        if ($valor= $_POST['NombreTipo2']) {
                echo obtener_tipo2($valor);
            }
    }
    if(isset($_POST['NombreTipo3'])) {
        if ($valor= $_POST['NombreTipo3']) {
                echo obtener_tipo3($valor);
            }
    }
 ?>