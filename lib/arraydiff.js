function arraydiff(array1,array2){
    if(array1==null||array2==null){
        throw Error("bad params")
    }
    const res=[...orderArrayDiff(array1,array2),...orderArrayDiff(array2,array1)]
    return res
}

function orderArrayDiff(array1,array2){
    const res=[]
    for(let i=0; i<array1.length;i++){
        if(inArray(array1[i],array2)===false){//=== para comprobar tipos bool
            res.push(array1[i])
        }
    }
    return res
}

function inArray(needle, haystack){
    let found=false
    for(let i=0; i<haystack.length;i++){
        if(haystack[i]==needle){ 
            found=true
            break
        }

    }

    return found

}
module.exports={arraydiff,inArray}

//multiple exports diccionario/obj