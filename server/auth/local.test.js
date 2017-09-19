const localAuth = require('./local')
require('dotenv').config()

describe("auth : local", () => {
    describe("encodeToken()", () => {
        it('should return an encoded token', () => {
            const results = localAuth.encodeToken({ id: 1 })
            expect(typeof results).toBe('string')
        })
    })

    describe("decodeToken()", () => {
        it('should return a decoded payload', () => {
            const token = localAuth.encodeToken({ id: 1 })
            expect(typeof token).toBe('string')
            localAuth.decodeToken(token, (err, res) => {
                console.log(err)
                expect(err).toBe(null)
                expect(res.sub).toEqual(1)
            })
        })
    })
})