var Board = function() {
    this.EMPTY = 'empty';
    this.BLACK = 'black';
    this.WHITE = 'white';
    this.queue = [];
    this.capturedPieces = [];
    this.deadPieces = [];

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
  } else if (this.currentPlayer === this.BLACK) {
      this.setValue(x,y,this.BLACK);
      this.currentPlayer = this.WHITE;
  } else {
      this.setValue(x,y,this.WHITE);
      this.currentPlayer = this.BLACK;
  }
  this.removeNeighborsAround(x, y);
  this.queue = [];
  return true;
};

Board.prototype.removeNeighborsAround = function(x, y) {
  var board = this;
  var neighbors = board.neighbors(x, y).filter(function(neighbor){
    return board.get.apply(board, neighbor) != board.EMPTY
  });
  this.capturedPieces = [];
  neighbors.forEach(function(neighbor) {
    board.countLibertiesAt.apply(board, neighbor);
  });
  board.countLibertiesAt(x, y);
};

Board.prototype.isValidMove = function(x, y) {
  return this.get(x,y) == this.EMPTY;
};

Board.prototype.removeAt = function(group) {
  var board = this;
  group.forEach(function(stone) {
    board.deadPieces.push(board.get.apply(board, stone));
    var x = stone[0];
    var y = stone[1];
    board.setValue(x,y, "empty");
  })
};

Board.prototype.BlackPiecesCaptured = function() {
  var count = 0;
  for(var i = 0; i < this.deadPieces.length; ++i){
    if(this.deadPieces[i] == this.BLACK)
      count++
    }
    return count;
};

Board.prototype.WhitePiecesCaptured = function() {
  var count = 0;
  for(var i = 0; i < this.deadPieces.length; ++i){
    if(this.deadPieces[i] == this.WHITE)
      count++
    }
    return count;
};

Board.prototype.countLibertiesAt = function(x, y) {
  var board = this;
  this.queue = [];
  var group = board.findGroup(x, y);
  var groupLiberties = [];
  group.forEach(function(stone) {
    groupLiberties.push(board.hasLiberty.apply(board, stone));
      ;
  });

  var count = 0;
  for(var i = 0; i < groupLiberties.length; ++i){
    if(groupLiberties[i] == true)
      count++;
  }
  if (count == 0) {
    board.addGroupToCapturedPieces(board, group);
    board.removeAt(group);
  }

  return count;
};

Board.prototype.addGroupToCapturedPieces = function(board, group) {
  group.forEach(function(piece) {
    board.capturedPieces.push(piece);
  });
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
  var board = this;
  var queue = [];
  board.queue.push([x,y]);
  var color = board.get(x,y);
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
  if (this.neighborValues(x,y).indexOf("empty") > -1) {
    return true;
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
