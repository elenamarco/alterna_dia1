const {arraydiff}=require("../lib/arraydiff.js")//import function

describe("arraydiff function",()=>{
    console.log(arraydiff)
    const array1=[1,2,3,4]
    const array2=[1,2]
    function expectres(array1,array2,expectedres){
        const res= arraydiff(array1,array2)
        expect(res).toEqual(expectedres)

    }
    it ("works for simple case",()=>{
        expectres(array1,array2,[3,4])
    })
    it ("works for inverse case",()=>{
        expectres(array2,array1,[3,4])
    })
    it ("throws exception when inputs are null",()=>{
        const array3=null
        
        expect(()=>{
            arraydiff(array1,array3)
        }).toThrow("bad params")

    })
    it ("works when one array is empty",()=>{
        const array3=[]
        expectres(array3,array1,[1,2,3,4])
    })
})
//test("test arraydiff", fun)