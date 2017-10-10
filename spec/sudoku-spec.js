var Sudoku = require('./../js/sudoku.js').sudokuModule;

describe('Sudoku', function(){
  var newSudoku;

  beforeEach(function(){
    goodSudoku = new Sudoku();

    var sudoku_data = [
      [5,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2,3],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,3,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,9]
    ];
  });

  it('create a puzzle with user input', function() {
    expect(goodSudoku.createPuzzle(534678912672195348198342567859761423426853791713924856961537284287419635345286179)) .toEqual(sudoku_data)
  });
});
