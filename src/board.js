module.exports = function Board() {
    this.EMPTY = 'empty';
    this.BLACK = 'black';
    this.WHITE = 'white';

    this.size = 0;

    this.currentPlayer = 'black';
    this.grid = [];

    this.setSize = function(size) {
        this.size = size;
    };

    this.makeGrid = function() {
        var m = [];
        for (var i = 0; i < this.size; i++) {
            m[i] = [];
            for (var j = 0; j < this.size; j++) {
                m[i][j] = this.EMPTY;
            }
        }
        this.grid = m;
    };

    this.update = function(x, y) {
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

    this.isValidMove = function(x, y) {
      return this.grid[x][y] == this.EMPTY;
    };
}
