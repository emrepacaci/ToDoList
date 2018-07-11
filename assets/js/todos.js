//Check off specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();

	});

	event.stopPropagation();
});

$("input[type ='text']").keypress(function(event){
   if(event.which == 13) {
   	//grabbing a new toDo list from input 
   	var ToDoText = $(this).val()
   	$(this).val(" ")
   	//create a new il add to ul
   	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + ToDoText + "</li>")

   }
})

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
})