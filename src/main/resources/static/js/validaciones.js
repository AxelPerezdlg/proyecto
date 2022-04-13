function comparaHoras(){

  
    const inicio = document.getElementById("horaInicial");
    const final = document.getElementById("horaUltima");

    const vInicio = inicio.value;
    const vFinal = final.value;
    const tIni = new Date();
    const pInicio = vInicio.split(":");
    tIni.setHours(pInicio[0], pInicio[1]);
    const tFin = new Date();
    const pFin = vFinal.split(":");
    tFin.setHours(pFin[0], pFin[1]);


    if (tFin.getTime() < tIni.getTime()) {

        new Toast({
            message: 'La hora final no debe ser Menor a la hora inicial',
            type: 'danger'
        });

    }else if (tFin.getTime() === tIni.getTime()) {

        new Toast({
            message: 'No puedes insertar las misma hora para la inicial y final',
            type: 'danger'
        });

    }else{
        var btn = document.getElementById("formRegistro")
        document.body.append(btn);
        btn.submit();
    }

}


function validaciones(){

    var fechaValidacion = $('#fechaDia').val();
    var hora = $('#selectHoras').val();
    var repeticiones = $('#repeticiones').val();
    var usuarios = $('#selectUsuarios').val();
    var ventanillas = $('#selectVentanilla').val();

    var fechaDia = new Date($('#fechaDia').val()+ " 00:00:00");
    var today = new Date();
    today.setHours(0,0,0,0);
   
   
   
   

    if(fechaValidacion === ""){
        new Toast({
            message: 'Por favor de agregar un dia para el horario',
            type: 'danger'
        });
    }else  if (fechaDia.getTime() < today.getTime()){
        new Toast({
            message: 'Por favor poner una fecha actual o futura',
            type: 'danger'
        });
    }else if(hora === ""){
        new Toast({
            message: 'Por favor de escoger una hora de atención para el horario',
            type: 'danger'
        });
    }else if(repeticiones === "" ){
        new Toast({
            message: 'Por favor ingrese un número de repeticiones',
            type: 'danger'
        });
    }else if(repeticiones < 0){
        new Toast({
            message: 'Solo se admiten numeros arriba de 0',
            type: 'danger'
        });
    }else if(usuarios === ""){
        new Toast({
            message: 'Por favor de escoger el usuario de atención para el horario',
            type: 'danger'
        });
    }else if(ventanillas === ""){
        new Toast({
            message: 'Por favor de escoger la ventanilla de atención para el horario',
            type: 'danger'
        });
    }else{
    
        var btn = document.getElementById("formRegistro")
        document.body.append(btn);
        btn.submit();
    }

   
}


