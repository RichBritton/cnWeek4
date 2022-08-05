const app = require("../app.js")

test("returns 5 when passed 2 and 3", () =>
{
    expect(app.add(2,3)).toBe(5);
})



test("returns 5 when passed 2 and 3", () =>
{
    expect(app.myArray).toContain("x");
})