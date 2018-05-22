var mult = require("../akd_bigint.js");

describe("Multiplying two numbers",()=>{

    it("two positive integers..", ()=>{
        expect(mult("10","10")).toBe("100");
    });
});


