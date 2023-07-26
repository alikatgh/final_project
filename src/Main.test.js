import { reducer } from "./Main";

describe("reducer", () => {
  test("initializeTimes returns the initial state", () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    expect(reducer(state, {})).toEqual(state);
  });

  test("updateTimes returns the same state", () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    expect(reducer(state, { type: "UPDATE_TIMES" })).toEqual(state);
  });
});
