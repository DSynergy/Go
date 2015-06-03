var board = require("../src/board");
var expect = require('chai').expect;

describe('The Board', function() {
    beforeEach(function() {
        board.setSize(19);
        board.makeGrid();
    });

    afterEach(function() {
        board.currentPlayer = 'black';
    })

    it('should exist', function() {
        expect(board).to.be.ok;
    });

    it('should be 19x19', function() {
        expect(board.size).to.eql(19);
    });

    it('should should have 19 rows', function() {
        expect(board.grid.length).to.eql(19);
        expect(board.grid[0].length).to.eql(19);
    });

    it('should initialize with empty markers', function() {
        var empty = board.EMPTY;
        board.grid.forEach(function(row) {
            row.forEach(function(inter) {
                expect(inter).to.eql(empty);
            })
        })
    });

    it('should update an intersection', function() {
        var black = board.BLACK;
        board.update(0,0);
        expect(board.grid[0][0]).to.be.eql(black);
    });

    it('should update to white on second move', function() {
        var black = board.BLACK;
        var white = board.WHITE;
        board.update(0,0);
        board.update(1,1);
        board.update(2,2);
        expect(board.grid[0][0]).to.be.eql(black);
        expect(board.grid[1][1]).to.be.eql(white);
        expect(board.grid[2][2]).to.be.eql(black);
    });

    it('cant play on top of another already played intersection', function() {
        var black = board.BLACK;
        var white = board.WHITE;
        expect(board.currentPlayer).to.be.eql(black);
        var validMove = board.update(2,2);
        var invalidMove = board.update(2,2);
        expect(board.grid[2][2]).to.be.eql(black);
        expect(validMove).to.be.eql(true);
        expect(invalidMove).to.be.eql(false);
        expect(board.currentPlayer).to.be.eql(white);
    });

    it('cant suicide', function() {
    });

    it('cant repeat the same board state', function() {
    });
});
