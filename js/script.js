// API
// RESTful API

document.getElementById("get_data").addEventListener("click", loadJokes);

function loadJokes(e) {
    const xhr = new XMLHttpRequest();
    const number = document.getElementById("numberOfJokes").value;

    xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = () => {
        document.getElementById("output").innerHTML = "<h3>Loading...</h3>";
    }

    xhr.onload = function () {
        if(this.status === 200) {
            const data = JSON.parse(this.response);
            const jokes = data.value;
            let output = "<ol>";
            jokes.forEach(element => output += `<li>${element.joke}</li>`);
            output += "</ol>";
            document.getElementById("output").innerHTML = output;
        }
    };

    xhr.send();
}