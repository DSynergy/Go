var $ = require('jquery');
var board = require('./board');

$(document).ready(function() {
    var $boardTable = $("#board");
    buildBoard(board, $boardTable);

    $('.intersection').click(function() {
        changePiece(this);
    })
});

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

function changePiece(it) {
    $it = $(it);
    $it.removeClass('intersection').addClass('black');
}
