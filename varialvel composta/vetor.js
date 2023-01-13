let num = [5,6,7]

num.push(2)
num.length
num.sort()
console.log(num)
console.log(`o vetor tem  ${num.length} elementos`)
console.log(`o valor do vetor 3 é ${num[2]}`)
console.log(`o vetor mais alto é o ${num[3]}`)

for(let pos =0; pos<num.length;pos ++) {
    console.log(num[pos])
}
