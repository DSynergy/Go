var Board = require("../src/board");
var expect = require('chai').expect;
var board = new Board();

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
        expect(board.get(0,0)).to.be.eql(black);
    });

    it('should update to white on second move', function() {
        var black = board.BLACK;
        var white = board.WHITE;
        board.update(0,0);
        board.update(1,1);
        board.update(2,2);
        expect(board.get(0,0)).to.be.eql(black);
        expect(board.get(1,1)).to.be.eql(white);
        expect(board.get(2,2)).to.be.eql(black);
    });

    it('cant play on top of another already played intersection', function() {
        var black = board.BLACK;
        var white = board.WHITE;
        expect(board.currentPlayer).to.be.eql(black);
        var validMove = board.update(2,2);
        var invalidMove = board.update(2,2);
        expect(board.get(2,2)).to.be.eql(black);
        expect(validMove).to.be.eql(true);
        expect(invalidMove).to.be.eql(false);
        expect(board.currentPlayer).to.be.eql(white);
    });

    it('cant suicide', function() {
    });

    it('cant repeat the same board state', function() {
    });

    xit('identifies liberty of an int', function() {
      board.update(1,1);
      expect(board.liberties(1,1)).to.be.eql(4);
      board.update(10,10);
      board.update(1,2);
      expect(board.liberties(1,1)).to.be.eql(6);
      expect(board.liberties(1,2)).to.be.eql(6);
    });

    it('determines if an intersection has liberty', function() {
      board.update(1,1);
      board.log();
      expect(board.hasLiberty(1,1)).to.be.eql(true);
      board.update(10,10);
      board.update(1,2);
      expect(board.hasLiberty(1,1)).to.be.eql(true);
      expect(board.hasLiberty(1,2)).to.be.eql(true);
    });

    it("finds neighbors of coord", function() {
      expect(board.neighbors(1,1)).to.be.eql([[1,0],[2,1],[1,2],[0,1]]);
    });

    it("finds neighbor values at coord", function() {
      expect(board.neighborValues(1,1)).to.be.eql(["empty", "empty", "empty", "empty"]);
    });

    it("finds neighbors at edges", function() {
      expect(board.neighbors(0,0)).to.be.eql([[1,0],[0,1]]);
    });

    xit('tracks narrowing liberty', function() {
      moveSeq = [[0,1],[1,1],[1,0],[10,10],[1,2],[6,6]];
      moveSeq.forEach(function(coords) {
        board.update.apply(board, coords);
      });
      expect(board.hasLiberty(1,1)).to.be.ok;
      board.update(2,1);
      expect(board.hasLiberty(1,1)).not.to.be.ok;
    });

    xit('tracks narrowing liberty', function() {
      moveSeq = [[0,1]//b
                //  [1,1],//w
                //  [1,0],//b
                //  [2,1],//w
                //  [0,2],//b
                //  [1,2],//w
                //  [2,2],//b
                //  [8,8],//w
                //  [1,3]//b
                 ];
      moveSeq.forEach(function(coords) {
        board.update.apply(board, coords);
      });

      board.log();
      // expect(board.hasLiberty(1,1)).to.be.ok;
      // board.update(2,1);
      // expect(board.hasLiberty(1,1)).not.to.be.ok;
    });

    //XBX
    //BWB
    //BWB
    //XXX
    //

    //XBX
    //BWB
    //XBX
    //
    xit('captures a surrounded piece', function() {
      moveSeq = [[0,1],[1,1],[1,0],[10,10],[1,2],[6,6],[2,1]];
      moveSeq.forEach(function(coords) {
        board.update.apply(board, coords);
      });
      expect(board.get(1,1)).to.be.eql("empty")
    });
});
