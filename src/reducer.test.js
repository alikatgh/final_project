import { reducer } from "./Main";

describe("reducer", () => {
  it("should handle FETCH_TIMES", () => {
    const state = {
      loading: false,
      times: [],
    };
    const action = {
      type: "FETCH_TIMES",
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: true,
      times: [],
    });
  });

  it("should handle UPDATE_TIMES", () => {
    const state = {
      loading: true,
      times: [],
    };
    const newTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const action = {
      type: "UPDATE_TIMES",
      payload: newTimes,
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      times: newTimes,
    });
  });
});
