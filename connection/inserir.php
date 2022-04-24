<?php 
$name=$_POST['name'];
$usuario=$_POST['usuario'];
$email=$_POST['email'];
$senha=$_POST['senha'];

$pdo=new PDO('mysql:localhost=localhost;dbname=bd','root','')
$stmt=$pdo->prepare('INSERT ')