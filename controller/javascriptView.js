function cadastrar(){
    $('.container-login').hide(200)
    $('.container-cadastro').show(200)
}
function voltar(){
    $('.container-login').show(200)
    $('.container-cadastro').hide(200)
}

$('#cadastro').on("click",function(e){
e.preventDefault();
cadastrar()
})
$('#voltar').on("click",function(e){
e.preventDefault();
voltar()
})
