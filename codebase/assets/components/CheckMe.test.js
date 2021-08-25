/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import CheckMe from "./CheckMe";

test("renders an h1", () => {
   const { getByText } = render(<CheckMe />);
   const h1  = getByText(/Hello/);
   expect(h1).toHaveTextContent("Hello");
});