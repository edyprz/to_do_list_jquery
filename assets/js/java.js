/* --esto es jquery--
$("h1").click(function(){
    $(this).css("color","red");
    $(this).css("text-decoration","line-through");
});

$(this).css({
    color: "gray",
    text-decoration: "line-through"
});*/

//click funciona solo con elementos existentes y on con elementos que podrian existir


//alterna la clase con cada click
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});


//borra el elemento de la lista
$("ul").on("click","span",function(event){
    //al elemento padre lo esconde y espera 500ms
    $(this).parent().fadeOut(500,function(){
        //elimina el li
        $(this).remove();
    });
    event.stopPropagation();
});

//cada que hay pulsacion de tecla en el input desencadena un evento
$("input[type='text']").keypress(function(event){
    //si el evento es la tecla 13(enter)
    if(event.which === 13){
        //se guarda en una variable lo que habia en el input
        var todoText = $(this).val();
        //limpiamos el input
        $(this).val("");
        //a ul se le adjunta otro li 
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + todoText +"</li>")
    }
});

$(".fa-plus").click(function(){
    //al hacer click en el icono esconde el input
    $("input[type='text']").fadeToggle();
});