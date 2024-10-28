const game = document.getElementById('game');
const item = document.querySelectorAll ('.item')
const pin = [document.getElementById('p1Score'), document.getElementById('p2Score')]
const players = ['X', '0'];
const Winners = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
let schetchick = true;

function checkWinner (data, player){
    let playerResults = [];
    for (i=0; i<data.length; i++){
        playerResults.push(data[i].innerText == player);
    }
    for (item of Winners){
        let Switch  = true;
        for (let i=0; i<item.length; i++){
            if (!playerRusults[item[i]-1]){
                Switch = false;
                break;
            }
        }
        if (Switch){
            return item;
        }
    }
}

game.addEventListener('click', function(event){
        if(event.target.classList[0] == 'item' && event.target.innerText == '' ){
            event.target.innerText = players[schetchick ? 0 : 1]
            schetchick=!schetchick
        }
        else if (event.target. == 'restart'){
            for (item of game){
                console.log(1)
            event.target.innerText == ''
        }}
})
