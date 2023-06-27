import dominatorFinder from "./What-dominates-your-array";

test("check if there is a number dominating the array", () => {
  expect(dominatorFinder([3,4,3,2,3,1,3,3])).toBe(3);
});


test("there is no number dominating the array", () => {
  expect(dominatorFinder([1,1,1,2,2,2])).toBe(-1);
});
