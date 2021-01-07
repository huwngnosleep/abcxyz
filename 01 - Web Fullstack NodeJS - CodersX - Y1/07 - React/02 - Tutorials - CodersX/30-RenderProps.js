// List.js
import { React, Component } from "react";

export default function ({data, render}) {
    return <div>{data.map(item => render(item))}</div>
}

// App.js
const data = ['A', 'B', 'C'];
<List data={data} render={(item) => <div>{item}</div>}/>