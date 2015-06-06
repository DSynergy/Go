var Board = function() {
    this.EMPTY = 'empty';
    this.BLACK = 'black';
    this.WHITE = 'white';
    this.queue = [];

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
      this.setValue(x,y,this.BLACK);
      this.currentPlayer = this.WHITE;
      return true;
  } else {
      this.setValue(x,y,this.WHITE);
      this.currentPlayer = this.BLACK;
      return true;
  }
};

Board.prototype.isValidMove = function(x, y) {
  return this.get(x,y) == this.EMPTY;
};


Board.prototype.findGroup = function(x,y) {
  this.findGroupRecursively(x,y);
  return this.queue;
}

Board.prototype.isItemNotInQueue = function(array, item) {
  for (var i = 0; i < array.length; i++) {
      if (array[i][0] == item[0] && array[i][1] == item[1]) {
          return false;
      }
    }
  return true;
}

Board.prototype.findGroupRecursively = function(x,y) {
  var board = this
  board.queue.push([x,y]);
  var color = board.currentPlayer;
  var neighbors = board.neighbors(x,y);
  neighbors.forEach(function(neighborCoordinates) {
    if (board.isItemNotInQueue(board.queue, neighborCoordinates) && board.colorAt(neighborCoordinates) === color) {
      board.findGroup.apply(board, neighborCoordinates);
    }
  })
};

Board.prototype.neighbors = function(x,y) {
  var points =  [[x, y - 1],
                  [x + 1, y],
                  [x, y + 1],
                  [x - 1, y]]

  return points.filter(function(coords) {
    return coords[0] >= 0 && coords[1] >= 0 && coords[1] < this.size && coords[0] < this.size;
  }.bind(this));
}

Board.prototype.colorAt = function(coords) {
  return this.get.apply(this, coords);
};

Board.prototype.hasLiberty = function(x,y) {
  var color = this.get(x,y);
  if (this.neighborValues(x,y).indexOf("empty") > -1)
    return true;
  else if (this.neighborValues(x,y).indexOf(color) > -1) {
    "dustin"
    // this.hasLiberty(neighborValues(x,y)
    // where the color is the same and the coordiantes
    // have not been counted

  } else {
    return false;
  }
}

Board.prototype.get = function(x,y) {
  return this.grid[y][x];
}

Board.prototype.setValue = function(x,y,value) {
  this.grid[y][x] = value;
}

Board.prototype.neighborValues = function(x,y) {
  return this.neighbors(x,y).map(function(coords) {
    return this.get.apply(this, coords);
  }.bind(this));
};

Board.prototype.log = function() {
  var str = this.grid.map(function(r) {
    return r.map(function(s) {
      if(s == 'empty') {
        return "X"
      } else if (s == "white") {
        return "W"
      } else if (s == "black") {
        return "B"
      }
    }).join("");
  }).join("\n")
  console.log(str);
}

module.exports = Board;
