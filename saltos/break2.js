let a = [5,7,9 ,8]
for(var i = 0 ; i < a.length; i++ ){
    if(a[i] == 2) break ; 
        
    
}
var matrix = 5;
var sum = 0, success = false;

compute_sum: if (matrix) {
    for(var x = 0; x < matrix.length; x++) {
        var row = matrix[x];
        if(!row) break compute_sum;
        for(var y = 0; y < row.length; y++) {
            var cell = row[y]
            if(isNaN(cell)) break compute_sum;
            sum+=cell;
        }
    }
    success = true;
   
}
