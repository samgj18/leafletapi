var latlngs = [];
var latlngs2nd = [];
var polvector=[];
var polvector2=[];
var items = [];
var latlng1 = [];
var latSeparado=[];
var lonSeparado=[];
var latSeparadoMarcador=[];
var lonSeparadoMarcador=[];
var fechaSeparado=[];
var latlngRectangulo =[];
var radioGlob = [];
var FechasDistanciaMenor=[];
var CoordenadasDistanciaMenor=[];
var RPMDistanciaMenor=[];
var VelocidadDistanciaMenor=[];
var FechaString = [];
var sw=1;
var swp =1;
var uidSeparado=[];
var CarIDList;
var VelocidadUid1;
var VelocidadUid2;
var RPMUid1;
var RPMUid2;
var AuxiliarVel=1;
var AuxiliarRPM=1;
var uid;
var rpmSeparado=[];
var velocidadSeparado=[];


var map = L.map('map', {drawControl: true,
  'center': [11.01963, -74.85163],
  'zoom': 12
});

var sidebar = L.control.sidebar('sidebar',{position: 'right'}).addTo(map);
var firefoxIcon = L.icon({
	iconUrl: 'http://joshuafrazier.info/images/firefox.svg',
	iconSize: [15, 15], // size of the icon
	});
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = L.marker(([0,0]), {icon: firefoxIcon}).addTo(map);
var marker2 = L.marker(([0,0]), {icon: firefoxIcon}).addTo(map);

var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#95a5a6",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions1 = {
    radius: 5,
    fillColor: "#f1c40f",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions2 = {
    radius: 3,
    fillColor: "#2c3e50",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions4 = {
    radius: 3,
    fillColor: "#2c3a50",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
function getSelectedValue(){
	CarIDList=document.getElementById("list").value;
}


setInterval(function(){ 
	var fecha_2 = document.getElementById("FechaV2");
	var latitud_2 = document.getElementById("LatitudV2");
	var longitud_2 = document.getElementById("LongitudV2");
	var velocidad_2 = document.getElementById("Velocidad2");
	var rpm_2 = document.getElementById("Rpm2");



$.post("js/consulta3.php"),
$.post("js/consulta4.php",
	{
		id: 1
	},
function(data1, status){
		if (data1!="") {
			fecha_2.value = data1;	
		}
});
$.post("js/consulta4.php",
{
	id: 4
},
function(data4, status){

	if (data4!="") {
		VelocidadUid2= data4;
		velocidad_2.value =VelocidadUid1;
	}
});
$.post("js/consulta4.php",
{
	id: 5
},
function(data5, status){
		if (data5!="") {
			RPMUid2=data5;
			rpm_2.value = RPMUid1;
						
		}
});
$.post("js/consulta4.php",
{
	id: 2
},
function(data2, status){
	if (data2!="") {
		latitud_2.value = data2;
		console.log(latitud_2.value);
	}
});
$.post("js/consulta4.php",
{
	id: 3
},
function(data3, status){
	if (data3!="") {
		longitud_2.value = data3;
		console.log(longitud_2.value);
	}
});
if(swp==0){
latlngs2nd.push ([parseFloat(latitud_2.value),parseFloat(longitud_2.value)]);
L.polyline(latlngs2nd, {color: 'green',weight: 1, smoothFactor: 1}).addTo(map);

var newLatLng = new L.LatLng(latitud_2.value, longitud_2.value);
marker.setLatLng(newLatLng); 
}
}, 3000);


setInterval(function(){ 
	var fecha_1 = document.getElementById("FechaV1");
	var latitud_1 = document.getElementById("LatitudV1");
	var longitud_1 = document.getElementById("LongitudV1");
	var velocidad_1 = document.getElementById("Velocidad1");
	var rpm_1 = document.getElementById("Rpm1");
	
	
	$.post("js/consulta.php"),
	$.post("js/consulta2.php",
	{
		id: 6
	},
	function(data6, status){
		
		if (data6!="") {
			uid = data6;		
		}
	});
	$.post("js/consulta2.php",
		{
			id: 1
		},
	function(data1, status){
			if (data1!="") {

				fecha_1.value = data1;	
			}
	});
	$.post("js/consulta2.php",
	{
		id: 4
	},
	function(data4, status){
	
		if (data4!="") {
			VelocidadUid1= data4;
			velocidad_1.value =VelocidadUid1;
		}
	});
	$.post("js/consulta2.php",
	{
		id: 5
	},
	function(data5, status){
			if (data5!="") {
				RPMUid1=data5;
				rpm_1.value = RPMUid1;
							
			}
	});
	$.post("js/consulta2.php",
	{
		id: 2
	},
	function(data2, status){
		if (data2!="") {
			latitud_1.value = data2;
			console.log(latitud_1.value);
		}
	});
	$.post("js/consulta2.php",
	{
		id: 3
	},
	function(data3, status){
		if (data3!="") {
			longitud_1.value = data3;
			console.log(longitud_1.value);
		}
	});
	if(swp==0){
	latlngs.push ([parseFloat(latitud_1.value),parseFloat(longitud_1.value)]);
	
	L.polyline(latlngs, {color: 'blue',weight: 1, smoothFactor: 1}).addTo(map);
	var newLatLng = new L.LatLng(latitud_1.value, longitud_1.value);
	marker2.setLatLng(newLatLng); 
	}
	
	swp=0

}, 3000);





$('#startdatetime-from').datetimepicker({
language: 'en',
format: 'yyyy-MM-dd hh:mm'
});
$(function(){  
	$("#from_date").datetimepicker();  
	$("#to_date").datetimepicker();  
	});  


map.on('contextmenu', function(e) {
		var lat1 = e.latlng.lat;
   		var lon1 = e.latlng.lng;
   		var marcador = new L.Marker(e.latlng,{
   			draggable: true,
   			riseOnHover: true
   		}).addTo(map)
   		  .bindPopup(lat1+","+lon1).openPopup();
   		  if(swp==0){
   		  	recorridoParaDistancias(lat1,lon1);
   		  }	
	});


var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);



map.on(L.Draw.Event.CREATED, function (e) {
	var layer = e.layer;
    var tipo = e.layerType;
    if (tipo === 'marker') {
    	swal("¡Intenta presionando el mapa!");
    }
    else if (tipo === 'circle') {

        var theCenterPt = layer.getLatLng();
        var centro = [theCenterPt.lng,theCenterPt.lat]; 
        var centroLat = theCenterPt.lat; 
        var centroLon = theCenterPt.lng;
        console.log(centroLat);
        console.log(centroLon);
        var radio = layer.getRadius();
        radioGlob=[];
        radioGlob.push(radio);
        console.log(radio);
        editableLayers.addLayer(layer);
        if(swp==0){
        	recorridoParaDistancias(centroLat,centroLon);
        }	  
        
    }else if (tipo === 'circlemarker') {
    	swal("Lo sentimos, seguimos trabajando en esto :(");
    }else if (tipo === 'rectangle'){
    	editableLayers.addLayer(layer);
    	latlngRectangulo.push(layer.getLatLngs());
    }
});


function ColumnasCoordenadas(){
  for (var i = 0; i < CoordenadasDistanciaMenor.length; i++) {
  	var k = CoordenadasDistanciaMenor[i];
  	var h = FechasDistanciaMenor[i];
  	var sw_1 = 0;
  	if(sw_1 == 0){
  		var row = $("<tr>");
  		row.append($("<td>"+k+"</td>"))
  		.append($("<td>"+h+"</td>"))
  		$("#order_table_container tbody").append(row);
  		sw_1 = 1;
  	}
  }
 }


function consultD(){
 var geojsonLayer = L.geoJson.ajax('Colombia.geo.json', {
   onEachFeature: function(data, layer) {
     items.push(layer);
     layer.bindPopup('<h3>' + data.properties.park + '</h3>');
   }
 });
 geojsonLayer.addTo(map);
}
function mouseOver() {
    document.getElementById("puntero").style.color = "red";
    for (var i = 0; i < lonSeparadoMarcador.length; i++) {
    var marcadorMouseOver = new L.circleMarker([parseFloat(latSeparadoMarcador[i]), parseFloat(lonSeparadoMarcador[i])],geojsonMarkerOptions2,{
       			riseOnHover: true
       		}).addTo(map).bindPopup("Latitud:"+ latSeparadoMarcador[i]+","+"Longitud:"+ lonSeparadoMarcador[i]+" "+ FechasDistanciaMenor[i]+" RPM:"+rpmSeparado[i]+" Velocidad:"+velocidadSeparado[i]);
    		marcadorMouseOver.on('mouseover', function (e) {
                this.openPopup();
            });
            marcadorMouseOver.on('mouseout', function (e) {
                this.closePopup();
            });
    }
}


function mouseOut() {
    document.getElementById("puntero").style.color = "black";
}
function consultH(){  
	var from_date = $('#from_date').val();  
	var to_date = $('#to_date').val(); 
	var comparacion = (from_date > to_date);
if(CarIDList==0 || CarIDList==1 || CarIDList==2){
		if(comparacion)  
		{  
			swal("La fecha "+from_date+" debe ser menor a "+to_date+ ". Por favor digite nuevamente");
		}  
		else if (from_date != '' && to_date != '') {
			$.ajax({  
				url:"php/filter.php",  
			    method:"POST",  
			    data:{from_date:from_date, to_date:to_date, opcion:0},  
			    success:function(data)  
			    {  
			    	$('#order_table').html(data);  
			    }
			});

			$.ajax({  
				url:"php/filter.php",  
			    method:"POST",  
			    data:{from_date:from_date, to_date:to_date, opcion:1},  
			    success:function(data)  
			    {  
							
							var dat=JSON.parse(data);
							var cont=0;
							var len=dat.length;
							while(cont<len){		
								latSeparado.push(parseFloat(dat[cont]["latitud"]));
								lonSeparado.push(parseFloat(dat[cont]["longitud"]));
								fechaSeparado.push(dat[cont]["fecha"]);
								uidSeparado.push(dat[cont]["uid"]);
								rpmSeparado.push(dat[cont]["rpm"]);
								velocidadSeparado.push(dat[cont]["velocidad"]);
								cont ++;
								swp =1;
							}
							if(CarIDList==0){
							for (var i = 0; i < uidSeparado.length; i++) {
								swp =1;
								if(uidSeparado[i]==1){
									polvector.push ([latSeparado[i],lonSeparado[i]]);
									L.polyline(polvector, {color: 'green',weight: 1, smoothFactor: 1}).addTo(map);

								}
								if(uidSeparado[i]==2){
									polvector2.push ([latSeparado[i],lonSeparado[i]]);
									L.polyline(polvector2, {color: 'blue',weight: 1, smoothFactor: 1}).addTo(map);
								}
							}
						}else if(CarIDList==1){
							for (var i = 0; i < uidSeparado.length; i++) {
								swp =1;
								if(uidSeparado[i]==1){
									polvector.push ([latSeparado[i],lonSeparado[i]]);
									L.polyline(polvector, {color: 'green',weight: 1, smoothFactor: 1}).addTo(map);
								}
							}
						}else if(CarIDList==2){
							for (var i = 0; i < uidSeparado.length; i++) {
							swp =1;
							if(uidSeparado[i]==2){
								polvector2.push ([latSeparado[i],lonSeparado[i]]);
								L.polyline(polvector2, {color: 'blue',weight: 1, smoothFactor: 1}).addTo(map);
								}
							}
						}
						swp =0;
							  	


			    			
			    }
			});

			}else 
				{  
					swal("Seleccione una fecha");  
				} 
		}else if(CarIDList==10 || from_date === '' ){
			swal("Por favor seleccione un vehículo");
		}
	};  

function recorridoParaDistancias(latitudAux,longitudAux) {
  var latAux=parseFloat(latitudAux);
  var lonAux=parseFloat(longitudAux);
  var distancia=[];
  CoordenadasDistanciaMenor =[];
  FechasDistanciaMenor =[];
  RPMDistanciaMenor=[];
  VelocidadDistanciaMenor=[];
  latSeparadoMarcador=[];
  lonSeparadoMarcador=[];
  for (var i = 0; i < latSeparado.length; i++) {
    distancia.push(calcularDistancia(latAux,lonAux,latSeparado[i],lonSeparado[i]));
    if (distancia[i]<radioGlob) {
    		latSeparadoMarcador.push(latSeparado[i]);
    		lonSeparadoMarcador.push(lonSeparado[i]);
    		CoordenadasDistanciaMenor.push([latSeparado[i],lonSeparado[i]]);
			FechasDistanciaMenor.push(fechaSeparado[i]);
			RPMDistanciaMenor.push(rpmSeparado[i]);
			VelocidadDistanciaMenor.push(velocidadSeparado[i]);
    }
  }
ColumnasCoordenadas();
var distanciaMenor=Math.min(...distancia);
function distanciaMinima (element) {
  return element == distanciaMenor;
}
  var distanciaMenor=distancia.findIndex(distanciaMinima);
  var longitudMenorFinal=lonSeparado[distanciaMenor];
  var latitudMenorFinal=latSeparado[distanciaMenor];
  for (var i = 0; i < latSeparado.length; i++) {
    if (latitudMenorFinal == latSeparado[i] && longitudMenorFinal==lonSeparado[i]) {
    	c = i;
    }
  }
  var marcador = new L.circleMarker([latitudMenorFinal, longitudMenorFinal],geojsonMarkerOptions1,{
   			draggable: true,
   			riseOnHover: true
   		}).addTo(map).bindPopup("Latitud:"+ latitudMenorFinal+","+"Longitud:"+ longitudMenorFinal+" Fecha:"+fechaSeparado[c]+" RPM:"+rpmSeparado[c]+ " Velocidad:"+velocidadSeparado[c]).openPopup();
}

function calcularDistancia(lat1,lon1,lat2,lon2){
var R = 6371e3; 
var phi1 = ToRadian(lat1);
var phi2 = ToRadian(lat2);
var phi = ToRadian(lat2-lat1);
var lambda = ToRadian(lon2-lon1);
var a = Math.sin(phi/2) * Math.sin(phi/2) +
        Math.cos(phi1) * Math.cos(phi2) *
        Math.sin(lambda/2) * Math.sin(lambda/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
var d = R * c;
return d;
}
function ToRadian(deg) {
    return deg * Math.PI / 180;
};

window.onload = function() {
	var ctx = document.getElementById('myChart').getContext('2d');
	new Chart(ctx, {
		type: 'line',
		data: {
			datasets: [{
				label: 'Velocidad',
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderDash: [8, 4],
				yAxisID: 'y1'
			}, {
				label: 'RPM',
				borderColor: 'rgb(54, 162, 235)',
				backgroundColor: 'rgba(54, 162, 235, 0.5)',
				borderDash: [8, 4],
				yAxisID: 'y2'
			}],
		},
		
		options: {
			responsive:true,
			scales: {
				xAxes: [{
					type: 'realtime',
					realtime: {
						duration: 30000,
						delay:1000,
						onRefresh: function(chart) {
						if(AuxiliarRPM==1)	{
						chart.data.datasets.slice(0,1).forEach(function(dataset) {
						dataset.data.push({
							  x: Date.now(),
							  y:VelocidadUid1
							});
						  });
						}
						if(AuxiliarVel==1){
							chart.data.datasets.slice(1).forEach(function(dataset) {
								dataset.data.push({
									x: Date.now(),
									y:RPMUid1
								});
							});
						} 
					}
					}
				  }],
				yAxes: [{
					id: 'y1',
					type: 'linear',
					position: 'left',
					scaleLabel: {
						display: true,
						labelString: 'Velocidad(Km/h)'
					}
				}, {
					id: 'y2',
					type: 'linear',
					position: 'right',
					scaleLabel: {
						display: true,
						labelString: 'RPM(rev/m)'
					}
				}]
			}
		}
	});
	var ctx2 = document.getElementById('myChart2').getContext('2d');
	new Chart(ctx2, {
		type: 'line',
		data: {
			datasets: [{
				label: 'Velocidad',
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderDash: [8, 4],
				yAxisID: 'y3'
			}, {
				label: 'RPM',
				borderColor: 'rgb(54, 162, 235)',
				backgroundColor: 'rgba(54, 162, 235, 0.5)',
				borderDash: [8, 4],
				yAxisID: 'y4'
			}],
		},
		
		options: {
			responsive:true,
			scales: {
				xAxes: [{
					type: 'realtime',
					realtime: {
						duration: 30000,
						delay:1000,
						onRefresh: function(chart) {
						if(AuxiliarRPM==1)	{
						chart.data.datasets.slice(0,1).forEach(function(dataset) {
						dataset.data.push({
							  x: Date.now(),
							  y:VelocidadUid2
							});
						  });
						}
						if(AuxiliarVel==1){
							chart.data.datasets.slice(1).forEach(function(dataset) {
								dataset.data.push({
									x: Date.now(),
									y:RPMUid2
								});
							});
						} 
					}
					}
				  }],
				yAxes: [{
					id: 'y3',
					type: 'linear',
					position: 'left',
					scaleLabel: {
						display: true,
						labelString: 'Velocidad(Km/h)'
					}
				}, {
					id: 'y4',
					type: 'linear',
					position: 'right',
					scaleLabel: {
						display: true,
						labelString: 'RPM(rev/m)'
					}
				}]
			}
		}
	});
}