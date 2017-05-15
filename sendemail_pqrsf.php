<?php
$tipo =@trim(stripcslashes($_POST['tipo']));
$entidad =@trim(stripcslashes($_POST['entidad']));
$cedula =@trim(stripcslashes($_POST['cedula']));
$nombre =@trim(stripcslashes($_POST['nombre']));
$email =@trim(stripcslashes($_POST['email']));
$telefono =@trim(stripcslashes($_POST['telefono']));
$ciudad =@trim(stripcslashes($_POST['ciudad']));
$direccion =@trim(stripcslashes($_POST['direccion']));
$pqrsf =@trim(stripcslashes($_POST['pqrsf']));

$destino = "siau@saludsion.com.co";

$headers = 'From: '.$nombre.'<'.$email.'>'."\r\n" .
'Reply-To: '.$nombre.'<'.$email.'>' . "\r\n" .
'X-Mailer: PHP/' . phpversion();
$asunto = "PQRSF (" . $tipo . ")";

$mensaje = "Tipo: ". $tipo ."\r\nEntidad: " . $entidad . "\r\nCedula: " . $cedula . "\r\nNombre: " . $nombre . "\r\nTelefono: " . $telefono . "\r\nCiudad: " . $ciudad . "\r\nDirección: " . $direccion . "\r\nPQRSF: " . $pqrsf;

mail($destino, $asunto, $mensaje, $headers);
die;