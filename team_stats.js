const team = {
  _players: [
    {firstName: 'Max', lastName: 'Smith', age: 25},
    {firstName: 'Alex', lastName: 'Jones', age: 21},
    {firstName: 'Matt', lastName: 'Black', age: 27}
  ],
  _games: [
    {opponent: 'Arsenal', teamPoints: 2, opponentPoints: 0},
    {opponent: 'Barcelona', teamPoints: 1, opponentPoints: 3},
    {opponent: 'West Ham', teamPoints: 5, opponentPoints: 1}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    return this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge});
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    return this._games.push({opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints});
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
