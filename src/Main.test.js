import { reducer } from "./Main";

describe("reducer", () => {
  test("updateTimes updates the state correctly", () => {
    const initialState = {
      loading: true,
      times: [],
    };
    const newTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const newState = reducer(initialState, {
      type: "UPDATE_TIMES",
      payload: newTimes,
    });
    expect(newState).toEqual({
      loading: false,
      times: newTimes,
    });
  });
});
