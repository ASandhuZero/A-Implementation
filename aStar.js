var i = 0;
var j = 0;
var iMax = 4;
var jMax = 4;
var grid = new Array();

var start = [0,0];
var end = [3,3];

for(i = 0; i < iMax; i++){
  grid[i] = new Array();
  for(j = 0; j < jMax; j++){
    grid[i][j] = new Cell(null, null, null, null, null, [i,j], false, null);
  }
}
console.log(grid);

//attributes:
//hCost(int), gCost(int),fCost(int),
//parent(cell), neighbors(array of cells), xPos(int), yPos(int)
//isOpen(bool), isObstacle(bool)

function Cell(hCost, gCost, fCost, parent, neighbors, pos, isOpen, isObstacle) {
  this.hCost = hCost,
  this.gCost = gCost;
  this.fCost = fCost;
  this.cellParent = parent;
  this.neighbors = neighbors;
  this.pos = pos;
  this.isOpen = isOpen;
  this.isObstacle = isObstacle;
}
