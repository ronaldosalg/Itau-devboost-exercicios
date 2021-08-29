const Injector = require("./Injector")
// @ponicode
describe("inject", () => {
    let inst

    beforeEach(() => {
        inst = new Injector.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.inject("kind", "html")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.inject("len", "new_chat_member")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.inject("kind", "venue")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.inject("*", "text/plain")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.inject("*", "new_chat_member")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.inject(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
