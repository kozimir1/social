import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status in props should be in the state", () => {
        const component = create(<ProfileStatus status="Hellob"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hellob");
    });
    test("after render <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Hellob"/>);
        const root = component.root
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after render <input> should`t be displayed", () => {
        const component = create(<ProfileStatus status="Hellob"/>);
        const root = component.root
        // const input = instance.findByType("input");
        expect(() => {
            root.findByType("input")
        }).toThrow();
    });
    test("after render <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="Hellob"/>);
        const root = component.root
        const span = root.findByType("span");
        expect(span.children[1]).toBe("Hellob");
    });
    test("input should be displayed in edit mode instead span", () => {
        const component = create(<ProfileStatus status="Hellob"/>);
        const root = component.root
        const span = root.findByType("span");
        span.props.onDoubleClick()
        const input = root.findByType("input");
        expect(input.props.value).toBe("Hellob");
    });
    test("callback should be called", () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatus status="Hellob" setStatusThunk={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditeMode()
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});
