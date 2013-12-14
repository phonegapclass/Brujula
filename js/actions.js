//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(function(){
	document.addEventListener("deviceready",function(){
		//Acelerómetro
		/*var watchAC = null;
		$('#acelerometro .individual li').tap(function(){
			if($(this).index()==0){
				if(watchAC == null){
					watchAC = navigator.accelerometer.watchAcceleration(function(acc){
						$('#acelerometro h2').html('Aceleración<br>'+
						'X: '+acc.x+'<br>'+
						'Y: '+acc.y+'<br>'+
						'Z: '+acc.z);
					},function(){
						alert('Error al Iniciar');
					},{frequency: 500});
				}
			}else{
				if(watchAC != null){
					navigator.accelerometer.clearWatch(watchAC);
					watchAC = null;
					$('#acelerometro h2').html('Detenido');
				}
			}
		});
		
		//Brújula
		var watchBR = null;
		$('#brujula .individual li').tap(function(){
			if($(this).index()==0){
				if(watchBR == null){
					watchBR = navigator.compass.watchHeading(function(head){
						$('#brujula h2').html('Grados<br>'+head.magneticHeading);
					},function(){
						alert('Error al Iniciar');
					},{frequency: 500});
				}
			}else{
				if(watchBR != null){
					navigator.compass.clearWatch(watchBR);
					watchBR = null;
					$('#brujula h2').html('Detenido');
				}
			}
		});*/
        var watchBR = null;
        $('#brujula ul.individual li').tap(function(){
            if($(this).index() == 0){
                watchBR = navigator.compass.watchHeading(function(h){
                    $('#brujula .scroll h2').text(h.magneticHeading);
                },function(err){
                    alert(err.code);
                },{frequency:500});
            }else{
                if(watchBR){
                    navigator.compass.clearWatch(watchBR);
                    watchBR = null;
                    $('#brujula .scroll h2').text('Detenido');
                }
            }
        });
	},false);
});