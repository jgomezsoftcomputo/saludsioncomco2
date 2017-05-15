<?php
$destino    = @trim(stripslashes($_POST['destino']));
$nombre    = @trim(stripslashes($_POST['nombre']));
$email    = @trim(stripslashes($_POST['email']));
$telefono    = @trim(stripslashes($_POST['telefono']));
$mensaje    = @trim(stripslashes($_POST['mensaje']));
$asunto    = @trim(stripslashes($_POST['asunto']));
$headers = 'From: '.$nombre.'<'.$email.'>'."\r\n" .
'Reply-To: '.$nombre.'<'.$email.'>' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

$mensaje_format = "Nombre: ".$nombre."\r\nTeléfono: ".$telefono."\r\nMensaje:\r\n".$mensaje;
mail($destino, $asunto, $mensaje_format, $headers);
die;