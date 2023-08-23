// const postFn = (obj)=>{
//     fetch('http://localhost:4000/',{
//     method: 'POST',
//   body: JSON.stringify(obj),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// .then(res=>res.json())
// .then(console.log)
// }
const axios = require("axios")
const postFn = (obj) => {
    axios.post('http://localhost:4000/', obj)
        .then(res => console.log(res.data))
}

postFn({ title: 'foo' })






