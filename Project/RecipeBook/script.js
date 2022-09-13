console.log("Recipe book project")
let data = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Your Recipe Title</h5>
  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`
function makeFood(recipe){
   let recipeId =  document.getElementById('recipe')
    console.log(recipe)
    switch (recipe){
        case 'tea':
            recipeId.innerHTML = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Your Tea</h5>
              <h6 class="card-subtitle mb-2 text-muted">Making Tea</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
            </div>`
            break;
        case 'coffee':
            recipeId.innerHTML = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Your Cofee</h5>
              <h6 class="card-subtitle mb-2 text-muted">Making Tea</h6>
              <p class="card-text">
            <ul>
            <li> Take Coffe</li>  
            </ul>
            .</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
            </div>`
            break;

        default:
            recipeId.innerHTML ="We Don't give diet foods sleect others"
    }
}