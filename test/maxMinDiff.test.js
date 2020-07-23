const maxMinDiff=require("../lib/maxMinDiff.js")

describe("Minimum and maximum difference function",()=>{
    const L1=[3, 10, 5]
    const L2=[20, 7, 15,8]
    let res=[]
    res=maxMinDiff(L1,L2)
    const max=res[0]
    const min=res[1]
    it("works finding maximum",()=>{              
        expect(max).toEqual(17)
    })
    it("workfinding minimum",()=>{       
        expect(min).toEqual(2)
    })
    it ("throws exception when inputs are null",()=>{
        const L3=null        
        expect(()=>{
            maxMinDiff(L1,L3)
        }).toThrow("bad params")

    })
})