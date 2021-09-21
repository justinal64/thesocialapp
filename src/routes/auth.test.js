const auth = require("./auth")
// @ponicode
describe("auth.onSignIn", () => {
    test("0", () => {
        let callFunction = () => {
            auth.onSignIn()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("auth.isSignedIn", () => {
    test("0", () => {
        let callFunction = () => {
            auth.isSignedIn()
        }
    
        expect(callFunction).not.toThrow()
    })
})
