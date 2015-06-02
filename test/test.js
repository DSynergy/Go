var board = require("../src/board");
var expect = require('chai').expect;

describe('The Board', function() {
    beforeEach(function() {
        board.setSize(19);
        board.makeGrid();
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

});
