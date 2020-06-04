import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Components/Header";

test("header works properly", () => {
    
    const { getByText } = render(<Header />);
    const h1 = getByText('Restaurant Finder');
    
    fireEvent.click(h1);
});