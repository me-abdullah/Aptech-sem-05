
import React from "react";
import Child2 from "./Child2";

function Child1({ username }) {
    return (
        <div>
            <h2>Child 1</h2>
            <Child2 username={username} />
        </div>
    );
}
export default Child1;