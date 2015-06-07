var $ = require('jquery');
var Board = require('./board');

$(document).ready(function() {
  var board = new Board();
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
      updateBoardAtPoints(board.capturedPieces);
    } else {
      alert("WRONG MOVE PAL");
    }
  })

  function changeToEmpty(piece) {
    var x = piece[0];
    var y = piece[1];
    console.log("y=" + y);
    console.log("x=" + x);
    $("td[id='"+x+","+y+"']").removeClass().addClass('intersection');
  }

  function updateBoardAtPoints(pieces) {
    pieces.forEach(function(piece) {
      changeToEmpty(piece);
    });
  }


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
    spot.removeClass('intersection').addClass(color);
    board.update(x, y);
  }


});
