import * as https from "../index"
import { assert } from "chai"

describe("get", () => {
    it("valid url", async () => {
        const result = await https.get(
            "https://raw.githubusercontent.com/ts-common/https/master/README.md"
        )
        assert.strictEqual(result.statusCode, 200)
    })
    it("invalid url", async () => {
        try {
            await https.get(
                "https://f3e0e5c3-e9d3-4ee8-984b-e9370293cf22"
            )
            assert.fail()
        } catch (e) {
        }
    }).timeout(3000)
})

describe("getBody", () => {
    it("valid url", async () => {
        const result = await https.getBody(
            "https://raw.githubusercontent.com/ts-common/https/74eccba0f099403728facecb658e08549121deb3/README.md"
        )
        assert.strictEqual(result, "# https\nHTTPS\n")
    })
})
