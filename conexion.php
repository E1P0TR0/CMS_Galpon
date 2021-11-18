<?php

$connection = new mysqli('localhost', 'root', '1234', 'DB_PGalpon');

/*
if($connection->connect_error){
	die("ERROR" . $connection->connect_error);
}
	echo "conexion exitosa";
 */



if(isset($_POST['pedir'])){
	$name = $_POST['name'];
        $numero = $_POST['Numero'];
	$direccion = $_POST['direccion'];
	$pedido = '';
	if(isset($_POST['pedido'])) {
                $pedido = implode(', ' , $_POST['pedido']);
        }
	$consult = "INSERT INTO Pedidos (Nombre, Numero, Direccion, Pedido)
					VALUES('$name','$numero','$direccion','$pedido')";
	$result = mysqli_query($connection, $consult);
	if($result){
		echo '<h2>Información de pedido :</h2><br>'.
			'<h3>Cliente   :  '.$name .'</h3><br>'.
			'<h3>Número    :  '.$numero.'</h3><br>'.
		        '<h3>Pedido    :  '.$pedido.'</h3><br>'.
		        '<h3>Dirección :  '.$direccion.'</h3><br>'; 
	}
	else {
		echo 'Hubo un error en su compra, intentelo de nuevo por favor, gracias';
	}
	echo 'Volver a página principal : <a href="index.html"> Volver</a>';
}

/*
insert($connection);

function insert($connection){
	$name = $_POST['name'];
	$numero = $_POST['Numero'];
	$direccion = $_POST['direccion'];
	$pedido = '';
	if(isset($_POST['pedido'])) { 
		$pedido = implode(', ' , $_POST['pedido']);
	}

	$consult = "INSERT INTO Pedidos(Nombre, Numero, Direccion, Pedido) 
			VALUES('$name','$numero','$direccion','$pedido')";
	mysqli_query($connection, $consult);
	mysqli_close($connection);
}
*/
?>
