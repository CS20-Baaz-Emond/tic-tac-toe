// Tic Tac Toe by: Barret and Baaz

let board = ["", "", "", "", "", "", "", "", ""]
let player = "X"
let value = 0
const check = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

for (let i = 0; i < 9; i++) {
        document.getElementById(`${i + 1}`).addEventListener("click", funca)

        function funca() {
            if (board[i] == "") {
                if (player == "X") {
                    document.getElementById(`${i + 1}`).style.backgroundImage = `url(img/x.svg)`
                    document.getElementById(`${i + 1}`).style.marginTop = "-7.5px"
                    document.getElementById(`${i + 1}`).style.backgroundPositionY = "0px"
                    board[i] = player
                    value++
                    checkWin(player)
                    player = "O"
                } else if (player == "O") {
                    document.getElementById(`${i + 1}`).style.backgroundImage = `url(img/o.svg)`
                    document.getElementById(`${ i + 1}`).style.marginTop = "0px"
                    document.getElementById(`${i + 1}`).style.backgroundPositionY = "0px"
                    board[i] = player
                    value++
                    checkWin(player)
                    player = "X"
                }
            }
        }
}

function checkWin(player) {
    let win = false
    for (let i = 0; i < check.length; i++) {
        const checkValue = check[i]
        let a = board[checkValue[0]]
        let b = board[checkValue[1]]
        let c = board[checkValue[2]]

        if (a == b && b == c && a !== "") {
            win = true
        }
    }

    if (win) {
        alert(player + " Wins!")
        location.reload()
    } else if (value == 9) {
        alert("Draw")
        location.reload()
    }
}