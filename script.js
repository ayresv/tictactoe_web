console.log("oi");
var player = null;
var selected_player = document.getElementById('current-player');

changePlayer('x');

function chooseField(id) {
    var square = document.getElementById(id);
    square.innerHTML = player;
    square.style.color = '#000';

}

function changePlayer(value) {
    player = value;
    selected_player.innerHTML = player;
}
