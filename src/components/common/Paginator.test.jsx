import {create} from "react-test-renderer";
import ProfileStatus from "../Main/Profile/Guest/ProfileStatus";
import React from "react";
import Paginator from "./Paginator ";

describe("Paginator component test", () => {
    test("pages count is 11 but should be showed only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageCount={1} portionSize={10}/>);
        const root = component.root
        const span = root.findAllByType("span");
        expect(span.length).toBe(10);
    });
    test("if page count is more than 10 we should see button 'next", () => {
        const component = create(<Paginator totalItemsCount={11} pageCount={1} portionSize={10}/>);
        const root = component.root
        const button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });
});