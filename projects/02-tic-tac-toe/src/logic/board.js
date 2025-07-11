import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
    // Revisar si hay un ganador
    // Iterar sobre las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b]
            && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    // Si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // Revisar si el tablero está lleno
    return newBoard.every((square) => square !== null)
}