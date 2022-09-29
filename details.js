
var param=new URLSearchParams(location.search);
var recipeId=param.get("id");
var httpRequest=new XMLHttpRequest();
var recipeImg=document.getElementById("recipeImg");
var recipeDetials={};

var ingredients=[];


getrecipeDetails();
function  getrecipeDetails() {
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange",function(){
        if(httpRequest.readyState==4&&httpRequest.status==200){
            recipeDetials=JSON.parse(httpRequest.response).recipe;
            recipeImg.src=recipeDetials.image_url;
            ingredients=recipeDetials.ingredients;
            displayIngredients();
            
        }
    })
    
}

function displayIngredients() {
    var ingredientsCartona=``;
    for(var i=0;i<ingredients.length;i++){
        ingredientsCartona +=`<li>${ingredients[i]}</li>`
    }
    document.getElementById("ingredientUl").innerHTML=ingredientsCartona;
}