var Board = function() {
    this.EMPTY = 'empty';
    this.BLACK = 'black';
    this.WHITE = 'white';

    this.size = 0;

    this.currentPlayer = 'black';
    this.grid = [];
}

Board.prototype.setSize = function(size) {
  this.size = size;
};

Board.prototype.makeGrid = function() {
  var m = [];
  for (var i = 0; i < this.size; i++) {
      m[i] = [];
      for (var j = 0; j < this.size; j++) {
          m[i][j] = this.EMPTY;
      }
  }
  this.grid = m;
};

Board.prototype.update = function(x, y) {
  if (!this.isValidMove(x, y)){
    return false
  }
  if (this.currentPlayer === this.BLACK) {
      this.grid[x][y] = this.BLACK;
      this.currentPlayer = this.WHITE;
      return true;
  } else {
      this.grid[x][y] = this.WHITE;
      this.currentPlayer = this.BLACK;
      return true;
  }
};

Board.prototype.isValidMove = function(x, y) {
  return this.grid[x][y] == this.EMPTY;
};

Board.prototype.hasLiberty = function(x,y) {

}

Board.prototype.neighbors = function(x,y) {
  return [[x, y - 1],
          [x + 1, y],
          [x, y + 1],
          [x - 1, y]];
}


module.exports = Board;
