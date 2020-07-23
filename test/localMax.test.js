const localMax=require("../lib/localMax.js")

describe("Local maximums function",()=>{
    const L1 = [2, 3, 4, 4, 4, 4, 7, 3, 3, 3, 6, 2] 
    const res = localMax(L1)
    const posList = res[1]
    const maxList = res[0]

    it ("works finding local maximum values",()=>{       
        expect(maxList).toEqual([7,6])
    })
    it ("works finding positions",()=>{
        expect(posList).toEqual([6,10])
    })
    it ("works with repeated numbers",()=>{
        L2= [3, 3, 4, 4, 6, 6, 6, 1, 0]
        const res = localMax(L2)
        expect(res).toEqual([[6],[4]])
 
    })
})