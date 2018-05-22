var mult = require("../akd_bigint.js");

describe("Multiplying two numbers",()=>{

    it("two single digit integers..", ()=>{
        expect(mult("2","2")).toBe("4");
    });

    it("two large integers..",()=>{
        expect(mult("2345678987654321","98765432123456789")).toBe("231671998838591676072245112635269");
    });

    it("one large, one small integer",()=>{
        expect(mult("2345678987654321","5")).toBe("11728394938271605");
    });
    
    it("two small floats..", ()=>{
        expect(mult("3.03","3.03")).toBe("9.1809");
    });

    it("two large floats...", ()=>{
        expect(mult("898967674545.121234345656","212143436565.989876765454")).toBe("190710091839738359022568.601697542009893475767824");
    });
});


