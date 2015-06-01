var expect = chai.expect;

describe('Test the board', function(){
  it('exists', function() {
    var board = $('#board');
    expect(board.exists()).to.be.ok;
  });
});
