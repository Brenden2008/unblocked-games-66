var game = document.getElementById("iframe");
function openFullscreen() {
  if (game.requestFullscreen) {
    game.requestFullscreen();
  } else if (game.webkitRequestFullscreen) { /* Safari */
    game.webkitRequestFullscreen();
  } else if (game.msRequestFullscreen) { /* IE11 */
    game.msRequestFullscreen();
  }
}


function search_games() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('games');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}






