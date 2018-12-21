import "mocha";
import { hello } from "../src/graphql/resolvers/hello.resolver";
import { expect } from "chai";

describe("Test hello endpoint", () => {
    it("responses hello", () => {
        expect(hello()).to.be.a("string");
        expect(hello("name")).to.be.a("string");
    });
});
