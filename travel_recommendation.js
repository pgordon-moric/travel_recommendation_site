const addSearchButton = document.getElementById("btnSearch");
const addResetButton = document.getElementById("btnReset");

const results = []; //store search results

function searchDestinations(){
    const input = document.getElementById("recs").value.toLowerCase();
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = '';
    console.log(input);

    fetch("./travel_recommendation_api.json")
        .then(response => response.json())
        .then(data =>{
            const destination = data.countries.find(item => item.name.toLowerCase() === input);
            console.log(destination === true );
        })
    }


addSearchButton.addEventListener("click",searchDestinations);