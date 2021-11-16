<?php

$connection = mysqli_connect('54.210.160.248', 'root', 'peladito06', 'DB_PGalpon');

if($connection->connect_error){
	die("ERROR").$connection->connect_error);
}
else
{
	echo "conexion exitosa";
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
}*/

?>
