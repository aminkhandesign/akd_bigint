var {mult, div, minus, add} = require("../akd_bigint.js");

describe("Multiplying two numbers",()=>{
    console.log("MULTIPLICATION")
    it("two single digit integers..", ()=>{
        expect(mult("2","2")).toBe("4");
    });

    it("3.5 sqr..",()=>{
        expect(mult("3.5","3.5")).toBe("12.25");
    });

    it("one large, one small integer",()=>{
        expect(mult("2000","5")).toBe("10000");
    });
    
    it("two small floats..", ()=>{
        expect(mult("10.01","10.01")).toBe("100.2001"); //failed
    });

    it("1.3 sqr..", ()=>{
        expect(mult("1.3","1.3")).toBe("1.69"); //failed
    });

    it("10.909 sqr..", ()=>{
        expect(mult("10.909","10.909")).toBe("119.006281"); //failed
    });

    it("100.003 sqr..", ()=>{
        expect(mult("100.003","100.003")).toBe("10000.600009"); //failed
    });

    it("1234.5678 x 5678.4321", ()=>{
        expect(mult("1234.5678","5678.4321")).toBe("7010409.42514638"); //failed
    });

    it("two large floats...", ()=>{
        expect(mult("898967674545.121234345656","212143436565.989876765454")).toBe("190710091839738359022568.601697542009893475767824");
    });                                                                            

    it(" ONE MINUS SIGN two small numbers..",()=>{
        expect(mult("-35","25")).toBe("-875");
    });

    it(" TWO MINUS SIGN two small numbers..",()=>{
        expect(mult("-35","-25")).toBe("875");
    });




 });



describe("DIVISION",()=>{

    console.log("DIVISION")

    it("TWO LARGE INTEGERS", ()=>{
        expect(div(20,"989898121212767676","874874874874874874")).toEqual("1.13147393946402163536");
    });

    it("LARGE INTEGERS REVERSED", ()=>{
        expect(div(20,"874874874874874874","989898121212767676")).toEqual(".88380294509805436364651");
    });

    it("TWO SMALL INTEGERS", ()=>{
        expect(div(10,"10","1")).toEqual("10");
    });

    it("TWO SMALL INTEGERS REVERSED", ()=>{
        expect(div(10,"1","10")).toEqual(".1");
    });

    it("INTEGERS WITH ZEROS IN DIGITS", ()=>{
        expect(div(10,"1202020205","101")).toEqual("11901190.1485");
    });

    it("INTEGERS WITH ZEROS IN DIGITS REVERSED", ()=>{
        expect(div(10,"101","1202020205")).toEqual(".0000000840252098757");
    });

    it("PRODUCING MINUS NUMBERS", ()=>{
        expect(div(10,"101","-1202020205")).toEqual("-.0000000840252098757");
    });

});


