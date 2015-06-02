module.exports = {
    EMPTY: 0,
    BLACK: 1,
    WHITE: 2,

    size: 0,

    currentPlayer: 1,

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
        if (this.currentPlayer === this.BLACK) {
            this.grid[x][y] = this.BLACK;
            this.currentPlayer = this.WHITE;
        } else {
            this.grid[x][y] = this.WHITE;
            this.currentPlayer = this.BLACK;
        }
    }
}
