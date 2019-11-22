// Our implemenation
function add(a, b) {
return a + b
}

function subtract(a,b) {
    return a - b
}

function divide(a,b) {
    return a / b
}


function multiply(a,b) {
    return a*b 
}

// Our test
describe("Calculator",function(){
    it("The function should add 2 numbers",function() {

    expect(add(5,6)).toBe(11);
    });
    it ("The function should add 3 numbers",function(){

        expect (add(20,20)).toBe(40);
    })
    it("The function should subtract 2 numbers", function(){
        expect(subtract(8,7)).toBe(1);
    })
    it("The function should be able to divide 2 numbers", function(){
        expect (divide(9,3)).toBe(3);
    })
    it("The function should be able to multiply 2 numbers", function(){
            expect (multiply(2,4)).toBe(8);
    })  
});
