import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Components/Header";

test("header works properly", () => {
    
    const { getByText } = render(<Header />);
    const h1 = getByText('Restaurant Finder');
    
    fireEvent.click(h1);
});

// my test isn't great but it's there, would like to do more testing if the app was more advanced and i had more time