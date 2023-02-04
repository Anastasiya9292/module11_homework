import {getPercents} from "../index"

describe ("checking the correctness of the percentage calculation", () => {
  it("99 percent of 200 to equal 198", () => {
    const result = getPercents(99, 200)
    expect(result).toBe(198)
  })
  it("99 percent of 200 to equal 200", () => {
    const result = getPercents(99, 200)
    expect(result).toBe(200)
  })
  it("99 percent of 200 to equal string", () => {
    const result = getPercents(99, 200)
    expect(result).toBe("wrong")
  })
})

describe ("checking corner case", () => {
  it("0 percent of 200 to equal 0", () => {
    const result = getPercents(0, 200)
    expect(result).toBe(0)
  })
})