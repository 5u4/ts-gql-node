import { expect } from "chai";
import "mocha";
import { hello } from "../src/services/hello.service";

describe("Test hello service", () => {
    it("should return string", () => {
        expect(hello()).to.be.a("string");
        expect(hello("name")).to.be.a("string");
    });
});
