import * as React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import Counter from "./counter";

// テスト実行後にDOMをunmount, cleanupします
afterEach(cleanup);

describe("Counter", () => {
  it("初期値は0である", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("result").textContent).toBe("0");
  });
  it('「+」ボタンを押すと１つカウントアップする', () => { 
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText("+"))
    expect(getByTestId("result").textContent).toBe("1");
  })
  it('「-」ボタンを押すと１つカウントダウンする', () => { 
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText("-"));
    expect(getByTestId("result").textContent).toBe("-1");
  })
});