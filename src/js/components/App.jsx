import React, { useEffect, useState } from "react";

function App() {

    useEffect(() => {
        fetch('/attendees')
        .then((resp) => resp.json)
        .then((data) => {
            console.log(data)
        })
    })
  return <div>
    <h1>Project Client</h1>
    </div>
}

export default App;