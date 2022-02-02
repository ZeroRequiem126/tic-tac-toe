let turn = "×";

function clickHere(e) {
    if (turn == '○') {
        turn = '×';
        e.textContent = turn;
    } else {
        turn = '○';
        e.textContent = turn;
    } 
}