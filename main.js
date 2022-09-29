var httpRequest=new XMLHttpRequest();
var recipts=[];
var links=document.getElementsByClassName("nav-link");



getRecipts("pizza")
for(var i=0 ; i<links.length ; i++){
    links[i].addEventListener("click",function (e) {
        var currentMeal=e.target.text;
        console.log(currentMeal)
        getRecipts(currentMeal);
        
    })
}


function getRecipts(meal){
httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
httpRequest.send();
httpRequest.addEventListener("readystatechange",function(){
    if(httpRequest.readyState==4&&httpRequest.status==200)
    {
        recipts=JSON.parse(httpRequest.response).recipes;
        // console.log(recipts);
        displayrecipts();
    }
})
}


function displayrecipts(){
    var reciptsContainer='';
    for(var i=0 ; i<recipts.length ; i++){
        reciptsContainer+=
        `
        <div class="col-md-3 my-4">
        <div>
          <img class="w-100" style="height:250px" src="${recipts[i].image_url}">
          <h5 class="mt-3" >${recipts[i].title}</h5>
          <button class="btn btn-primary">
          <a class="text-white" href="${recipts[i].source_url}">Source</a>
          </button>
          <button class="btn btn-warning">
          <a class="text-white" href="details.html?id=${recipts[i].recipe_id}">details</a>
          </button>
        </div>
        </div>
        `
    }

    document.getElementById("allMeals").innerHTML=reciptsContainer;

}