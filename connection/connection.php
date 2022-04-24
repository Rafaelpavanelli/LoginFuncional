<?php


try{
    $pdo=new PDO("mysql:dbname=login_projeto;host=3306","root","")
}catch(PDOException $e){
    echo"ERRO: ".$e->getMessage();
}