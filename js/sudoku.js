function Sudoku() {
  this.puzzle = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
}

Sudoku.prototype.createPuzzle(puzzle) {
  arr = puzzle.toString().split('');

  this.puzzle.forEach(function(n) {
    for (var i = 0; i <= 8; i++) {
      n.push(arr[i]);
      if (i === 8) {
        arr.splice(0, 9);
      }
    }
  });

  Sudoku.prototype.rowChecker() {
    this.puzzle.forEach(function(n) {
      if (n.sort().join('') == '123456789') {
        return true;
      } else {
        return false;
      }
    })
  }

  Sudoku.prototype.columnChecker() {
    var test = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
    var i = 0;
    var j = 0;
    while (i <= 8) {
      while (j <= 8) {
        this.puzzle.forEach(function(n) {
          test[i].push(n[j]);
        })
        i += 1;
        j += 1;
      }
    }

    test.forEach(function(n) {
      if (n.sort().join('') == '123456789') {
        return true;
      } else {
        return false;
      }
    })
  }

exports.sudokuModule = Sudoku;

// (\/)_(;,,;)_(\/) woop woop woop
