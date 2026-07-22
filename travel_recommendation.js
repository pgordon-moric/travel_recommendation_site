const addSearchButton = document.getElementById("btnSearch");
const addResetButton = document.getElementById("btnReset");

const results = []; //store search results

function searchDestinations(){
    const input = document.getElementById("recs").value.toLowerCase();
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = '';
    console.log("Input:", input);

    fetch("./travel_recommendation_api.json")
        .then(response => { console.log(response); return response.json()})
        .then(data =>{
            const destination = data.countries.find(item => item.name.toLowerCase() === input);
            console.log(destination);
        })
}


addSearchButton.addEventListener("click",searchDestinations);