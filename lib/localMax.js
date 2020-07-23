function localMax(L1){
    const maxList = []
    const posList = []
    for(let i=1; i<(L1.length-1); i++){
        if(L1[i-1] < L1[i] && L1[i]>L1[i+1]){
            maxList.push(L1[i])
            posList.push(i)
        }
        if(L1[i-1] < L1[i] && L1[i] == L1[i+1]) {
            firstPos = i         
            while(L1[i] == L1[i+1]){
                i++
            }
            if (L1[i] > L1[i+1]){
                maxList.push(L1[i])
                posList.push(firstPos)
            }
        }
    }
    finalList = [maxList, posList]
    return finalList
}

module.exports=localMax