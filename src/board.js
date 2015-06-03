module.exports = {
    EMPTY: 'none',
    BLACK: 'black',
    WHITE: 'white',

    size: 0,

    currentPlayer: 'black',
    
    setSize: function(size) {
        this.size = size;
    },

    grid: [],

    makeGrid: function() {
        var m = [];
        for (var i = 0; i < this.size; i++) {
            m[i] = [];
            for (var j = 0; j < this.size; j++) {
                m[i][j] = this.EMPTY;
            }
        }
        this.grid = m;
    },

    update: function(x, y) {
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
    },

    isValidMove: function(x, y) {
      return this.grid[x][y] == this.EMPTY;
    }
}
