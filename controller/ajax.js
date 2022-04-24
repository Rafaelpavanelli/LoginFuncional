$.ajax({
    url:'',
    data:{
        name: u_name,email: u_email,usuario: u_usuario,senha: u_senha
    },
    method: 'POST',
    dataType:'json',
}).done(function(result){
    console.log(result);
})