function superbowlWin(games) {
    const winningGame = games.find(win => {
        return win.result === "W"
    })
    return winningGame ? winningGame.year : undefined
}