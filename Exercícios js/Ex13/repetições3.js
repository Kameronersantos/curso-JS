function printarry(a) {
    var len = a.length, i = 0;
    if(len == 0){
        console.log('array vazio');
    } else {
        do{
            console.log(a[i]);
        } while(i++ <len);
    }

}
console.log(printarry('abcfdthhvv'))