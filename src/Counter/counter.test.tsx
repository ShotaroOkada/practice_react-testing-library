import * as React from "react";
import { render, cleanup } from "react-testing-library";

import Counter from "./counter";

// テスト実行後にDOMをunmount, cleanupします
afterEach(cleanup);

describe("Counter", () => {
  it("初期値は0である", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("result").textContent).toBe("0");
  });
  it('「+」ボタンを押すと１つカウントアップする', () => { })
  it('「-」ボタンを押すと１つカウントダウンする', () => { })
});