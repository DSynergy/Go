var $ = require('jquery');
var getBoard = require('./board');

$(document).ready(function() {
  var board = getBoard();
  var $boardTable = $("#board");
  buildBoard(board, $boardTable);

  $('.intersection').click(function() {
    var $spot = $(this);
    var coordinates = $spot.attr('id').split(',').map(function(value) {
      return parseInt(value);
    });
    var x = coordinates[0];
    var y = coordinates[1];
    if (board.isValidMove(x, y)) {
      changePiece($spot, x, y);
    } else {
      alert("WRONG MOVE PAL");
    }
  })

  function buildBoard(board, table) {
    board.setSize(19);
    board.makeGrid();
    board.grid.forEach(function(row, i) {
      table.append($('<tr id="row_' + i + '">' + makeRow(row, i) + '</tr>'))
    })
  }

  function makeRow(row, rowIndex) {
    rowHTML = "";
    row.forEach(function(inter, i) {
      rowHTML += '<td class="intersection" id="'+ rowIndex + "," + i + '"></td>'
    })
    return rowHTML;
  }

  function changePiece(spot, x, y) {
    var color = board.currentPlayer;
    spot.switchClass('intersection', color);
    board.update(x, y);
  }

});
