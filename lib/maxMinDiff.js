function maxMinDiff(L1,L2){
    if (L1==null||L2==null){
        throw Error("bad params")
    }
    let res=[0,Math.abs(L1[0]-L2[0])]
    

    for(let i=0; i<L1.length; i++){
        for(let j=0; j<L2.length; j++){
            if (Math.abs(L1[i]-L2[j])>res[0]){
                res[0]=Math.abs(L1[i]-L2[j])
            }
            if(Math.abs(L1[i]-L2[j])<res[1]){
                res[1]=Math.abs(L1[i]-L2[j])
            }
        }
    }
    return res
}
module.exports= maxMinDiff       