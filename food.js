// addEventListener handle
  const searchBtn = document.getElementById('search-btn').addEventListener('click',function(event){
    const inputField = document.getElementById("input-field").value;
    document.getElementById("input-field").value = "";
    console.log(inputField);

            //  fetch create
              fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField}`)
            .then(res=>res.json())
            .then(data=>foodShow (data.meals))
    
     event.preventDefault();
 })

 const foodShow = foods=>{
    //  console.log(foods);
     for(const food of foods){
      const foodContainer = document.getElementById('food-container');
         const foodSet = document.createElement('div');
         foodSet.className = "food-card";
         const foodInfo = `
               <img class="img-fluid img-thumbnail" src = ${food.strMealThumb}>
               <h1> ${food.strMeal} </h1>
               <button class="btn btn-success" onclick = "foodLoadDetails('${food.idMeal}')">Food Details</button>
         
           `
           foodSet.innerHTML = foodInfo;
           foodContainer.appendChild(foodSet);
     }
 }

const foodLoadDetails = idMeal=>{
    // console.log("button clicked id is"+ idMeal);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res=>res.json())
    .then(data=>foodSetting(data))

}
const foodSetting= foodList=>{
     console.log(foodList);
 
  const foodItem = document.getElementById('food-item');
  foodItem.innerHTML=    `
  
         <img class="img-fluid img-thumbnail"src="${foodList.meals[0].strMealThumb}"
         
        <h6>   <i class="fas fa-check btn btn-success  w-0"></i> ${foodList.meals[0].strIngredient1}</h6>
         <h6>  <i class="fas fa-check btn btn-success w-0"></i> ${foodList.meals[0].strIngredient2}</h6>
         <h6>  <i class="fas fa-check btn btn-success w-0"></i> ${foodList.meals[0].strIngredient3}</h6>
         <h6>  <i class="fas fa-check btn btn-success w-0"></i> ${foodList.meals[0].strIngredient4}</h6>
         <h6>  <i class="fas fa-check btn btn-success w-0"></i> ${foodList.meals[0].strIngredient5}</h6>
         <h6>  <i class="fas fa-check btn btn-success w-0"></i> ${foodList.meals[0].strSource}</h6>
  
  `
}

