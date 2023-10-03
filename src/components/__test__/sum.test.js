import { sum } from "../sum"

test("sum function should calculate the sum of two numbers.", () => {
    const res = sum(4,5)
    //assertion

    expect(res).toBe(9)
})