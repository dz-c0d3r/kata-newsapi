import * as fromNews from "./news-ui.actions";

describe("setCountry", () => {
  it("should return an action", () => {
    expect(fromNews.setCountry({ value: "fr" }).type).toBe(
      "[News][UI] SET_Country"
    );
  });
});
