function eleccionDepartamento(idDeptSel){
     $("#dept-id option[value=0]").prop("disabled",true);
    var parametros = {
            "idDept" : idDeptSel,
            
        };
    $.ajax({
            data:  parametros,
            url:   'php/ajax.php',
            type:  'post',
            beforeSend: function () {
                    
            },
            success:  function (response) {
                    $("#tipo1").html(comprobar_elemento(response));
                    $("#tipo2").html("<option value='0'>-</option>");
                    $("#tipo3").html("<option value='0'>-</option>");
                    
            },
            complete : function(xhr, status) {
            
            }
    });

}
function eleccionTipo2(NombreTipo2){
    
    var parametros = {
            "NombreTipo2" : NombreTipo2,
            
        };
    $.ajax({
            data:  parametros,
            url:   'php/ajax.php',
            type:  'post',
            beforeSend: function () {
                    
            },
            success:  function (response) {
                    $("#tipo2").html(comprobar_elemento(response));
                    $("#tipo3").html("<option value='0'>-</option>");
            },
            complete : function(xhr, status) {
            
            }
    });

}
function eleccionTipo3(NombreTipo3){
    var parametros = {
            "NombreTipo3" : NombreTipo3,
            
        };
    $.ajax({
            data:  parametros,
            url:   'php/ajax.php',
            type:  'post',
            beforeSend: function () {
                    
            },
            success:  function (response) {
                    $("#tipo3").html(comprobar_elemento(response));
            },
            complete : function(xhr, status) {
            
            }
    });
}
function comprobar_elemento(response){
    if(response != 0){
        return "<option value='0'>--Seleccione uno--</option>"+response;
    }else{
        return "<option value='0'>No hay elementos</option>";
    }
}

/*$(document).ready( function(){
    $('select#dept-id').on('change',function(){
    var valor = $(this).val();
    alert(valor);
    });
});*/

