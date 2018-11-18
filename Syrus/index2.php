<?php
$hostname_localhost="samuel.cweptlsnnz8c.us-east-1.rds.amazonaws.com";
$database_localhost="diseno";
$username_localhost="samgj18";
$password_localhost="241612Sa";

$conexion = mysqli_connect($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
		
$consulta="SELECT * FROM diseno2 WHERE id=(SELECT MAX(id) FROM diseno2)";
$resultado=mysqli_query($conexion,$consulta);
$registro = mysqli_fetch_array($resultado);
mysqli_close($conexion);

?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie-edge">
	<link rel="stylesheet" href="Estilos/Estilo2.css">
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
	<title>Syrus Desk</title>
	<script language="JavaScript" type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
    <link rel="stylesheet" href="Estilos/jquery.datetimepicker.min.css">
    <script src="js/jquery.datetimepicker.full.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.0/leaflet.draw.css" />   	
	<link rel="stylesheet" href="Estilos/leaflet-sidebar.css" />
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script src="js/moment.js"></script>
	<script src="js/moment.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.js"></script>
	<script src="js/chartjs-plugin-streaming.min.js"></script>
	<script src="js/chartjs-plugin-streaming.js"></script>
	
	



<body>
	<section class="Encuentra la posición de la ruta">
		
			<div class="contenedor">
				<h2 class="posicion">

					
					<div class="contenedor" id="mapa">
						<div id="sidebar" class="sidebar collapsed">
						    <!-- Nav tabs -->
						    <div class="sidebar-tabs" >
						        <ul role="tablist">
						            <li id="openTabla"><a href="#home" role="tab"><i class="fa fa-bars"></i></a></li>
						        </ul>
						    </div>

						    <!-- Tab panes -->
						    <div class="sidebar-content">
						        <div class="sidebar-pane" id="home">
						            <h1 class="sidebar-header">
						                Históricos Polilínea 
						                <span class="sidebar-close"><i class="fa fa-caret-left"></i></span>
						            </h1>
									Datos Históricos
						            <div class="side-bar-container" style="font-size: 1.5vw; margin:auto;">  
						            			     <div id="order_table_container" style="width: 50px;">  
						            			          <table class="table table-bordered"> 
						            			          	<thead> 
						            			               <tr>  
						            			                    <th width="5%">Fecha</th>  
						            			                    <th width="5%">Ubicación</th>  
						            			               </tr> 
															</thead>
															<tbody id="puntero" onclick="mouseOver()" onmouseout="mouseOut()"  title="Presione para más información"> 
															    <tr id="firstRow" >
															    </tr>
															</tbody>
						            			          </table>  
						            			     </div>  
						            			</div> 
						        </div>

						        <div class="sidebar-pane" id="profile">
						            <h1 class="sidebar-header">Profile<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
						        </div>
						    </div>
						</div>
						<div id="map" style="width:98.9vw; height:85vh;"></div>
						<script src="https://unpkg.com/leaflet@1.0.1/dist/leaflet.js"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.3/leaflet.draw.js"></script>
						<script type="text/javascript" src="http://www.liedman.net/leaflet-realtime/dist/leaflet-realtime.js"></script>
						<script src="https://rawgit.com/calvinmetcalf/leaflet-ajax/master/dist/leaflet.ajax.min.js"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
						<script src="https://cdn.jsdelivr.net/npm/@turf/turf@5/turf.min.js"></script>
						<script src="js/Leaflet.Control.Custom.js"></script>
						<script src="js/leaflet-sidebar.js"></script>
						<script type="text/javascript" src="js/script.js"></script>
					</div>
					<br>
					
					<div class="Datos1">
					
						<input type="text" placeholder="Datos" />
						<input type="text" placeholder="Fecha" id="Fecha" value="Fecha:" disabled />
						<input type="text" id="Latitud" placeholder="Latitud" value="Latitud:" disabled/>
						<input type="text" id="Longitud" placeholder="Longitud" value="Longitud:" disabled/>
						<input type="text" id="Longitud" placeholder="Velocidad" value="Velocidad:" disabled/>
						<input type="text" id="Longitud" placeholder="RPM" value="RPM:" disabled/>
			
					</div>
					<div class="Datos">
						<input type="text" placeholder="Auto 1" disabled />
						<input type="text" placeholder="Auto 1" id="FechaV1" value="<?=$registro[1]?>" disabled />
						<input type="text" name = "Auto 1" id="LatitudV1" placeholder="Latitud" value="<?=$registro[2]?>" disabled/>
						<input type="text" name="Auto 1" id="LongitudV1" placeholder="Longitud" value="<?=$registro[3]?>" disabled/>
						<input type="text" name="Auto 1" id="Velocidad1" placeholder="Velocidad" value="<?=$registro[4]?>" disabled/>
						<input type="text" name="Auto 1" id="Rpm1" placeholder="RPM" value="<?=$registro[5]?>" disabled/>
					</div>
					<div class="Datos">
						<input type="text" placeholder="Auto 2" disabled />
						<input type="text" placeholder="Auto 2" id="FechaV2" value="<?=$registro[1]?>" disabled />
						<input type="text" name = "Auto 2" id="LatitudV2" placeholder="Latitud" value="<?=$registro[2]?>" disabled/>
						<input type="text" name="Auto 2" id="LongitudV2" placeholder="Longitud" value="<?=$registro[3]?>" disabled/>
						<input type="text" name="Auto 2" id="Velocidad2" placeholder="Velocidad" value="<?=$registro[4]?>" disabled/>
						<input type="text" name="Auto 2" id="Rpm2" placeholder="RPM" value="<?=$registro[5]?>" disabled/>
					</div>
				</h2>
				
			</div>
		</section>
		<section class="datetime">
			<div class="container"> 

				 <h6 align="center">Click derecho para ubicación más cercana y circulo para búsqueda de ubicación por radio</h2>  
				 <br>
				 Auto 1
				 <canvas class="chart" id="myChart"></canvas>
				 <br>
				 Auto 2
				 <canvas class="chart" id="myChart2"></canvas>
				 
				 <h2 align="center">Seleccione una fecha</h2>  
			       
			     <div class="col-md-3">  
			          <input type="text" name="from_date" id="from_date" class="form-control" placeholder="From Date"/>  
			     </div>  
			     <div class="col-md-3">  
			          <input type="text" name="to_date" id="to_date" class="form-control" placeholder="To Date" />  
			     </div>  
			     <div class="col-md-4">  
				 <select id="list" onchange="getSelectedValue();" onclick="getSelectedValue();">
				 			<option value="10"></option>
  							<option id="All" value="0">All</option>
  							<option id="carro1" value="1">Carro 1</option>
  							<option id="carro2" value="2">Carro 2</option>
					</select>
				 <input type="button" name="filter" id="filter" value="Filtrar" class="btn btn-info" onclick="consultH();" /> 
					  <input type="button" name="geoJson" id="geoJSON" value="Mostrar Departamentos" class="btn btn-info" onclick="consultD();" /> 
					  
			     </div> <br>
			                 
			     <br />  
			     <div id="order_table">  
			          <table class="table table-bordered">  
			               <tr>  
			                    <th width="5%">ID</th>  
			                    <th width="30%">Fecha</th>  
			                    <th width="12%">Latitud</th>  
			                    <th width="12%">Longitud</th>
								<th width="12%">Velocidad</th>
								<th width="12%">RPM</th>
			               </tr>  
			          <?php  
			          while($row = mysqli_fetch_array($resultado))  
			          {  
			          ?>  
			               <tr>  
			                    <td><?php echo $row["id"]; ?></td>  
			                    <td><?php echo $row["fecha"]; ?></td>  
			                    <td><?php echo $row["latitud"]; ?></td>  
			                    <td><?php echo $row["longitud"]; ?></td>
								<td><?php echo $row["velocidad"]; ?></td>
								<td><?php echo $row["rpm"]; ?></td>
			               </tr>  
			          <?php  
			          }  
			          ?>  
			          </table>  
			     </div>  
			</div> 
		</section>
</body>
</html>