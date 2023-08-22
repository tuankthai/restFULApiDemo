
const obj = { name: "bob", id: 333 }

fetch("http://localhost:8080/pool",
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(res => res.json())
    .then(console.log)

    