// var numIslands = function (grid) {
//   var DFS = (i, j) => {
//     if (
//       i < 0 ||
//       i >= grid.length ||
//       j < 0 ||
//       j >= grid[i].length ||
//       grid[i][j] != "1"
//     )
//       return;

//     grid[i][j] = "0";
//     DFS(i - 1, j); // up
//     DFS(i + 1, j); // down
//     DFS(i, j - 1); // left
//     DFS(i, j + 1); // right
//   };
//   let r = grid.length;
//   let c = grid[0].length;
//   let resultCount = 0;
//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       if (grid[i][j] == "1") {
//         DFS(i, j);
//         resultCount++;
//       }
//     }
//   }
//   return resultCount;
// };


var numIslands = function(grid) {
    // let max = 0
 let count = 0
 let row = grid.length
 let col = grid[0].length
 // console.log(row)
 for(let i=0;i<row;i++){
     console.log(i)
     for(let c=0;c<col;c++){
      
         if(grid[i][c]==='1'){
            
             count++
             dfs(i,c,grid)
         }
     }
 }
 function dfs(i,c,grid){
  
     if(grid[i] === undefined|| grid[i][c] === undefined || grid[i][c]==='0') return 
     grid[i][c]='0'
     // count++
     // console.log(count)
    // max =  Math.Max(max,count)
     dfs(i+1,c,grid)
     dfs(i-1,c,grid)
     dfs(i,c+1,grid)
     dfs(i,c-1,grid)        

     
 }
 return count
};

console.log((numIslands(grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])))