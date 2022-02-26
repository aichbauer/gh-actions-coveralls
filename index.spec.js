const add = require("./index");

describe("adding two number: a + b", () => {
  it("should succeed: 2 + 2 = 4", () => {
    const expectedResult = 4;

    const result = add(2, 2);

    expect(result).toBe(expectedResult);
  });
});
