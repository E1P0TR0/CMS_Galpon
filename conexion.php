<?php

$connection = mysqli_connect('localhost', 'root', 'peladito06', 'DB_PolleríaGalpon') or die(mysql_error($mysqli));

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

?>
