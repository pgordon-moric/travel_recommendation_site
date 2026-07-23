const addSearchButton = document.getElementById("btnSearch");
const addResetButton = document.getElementById("btnReset");



function searchDestinations(){
    const results = []; //store search results
    const input = document.getElementById("recs").value.toLowerCase();
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = '';
    console.log("Input:", input);

    fetch("./travel_recommendation_api.json")
        .then(response => { console.log("First then: ", response); return response.json()})
        .then(data =>{
            console.log(data.countries.length);
            //Keyword searches
            //Countries
            if(input === "country"){
                for (let i=0; i < data.countries.length; i++){
                        results.push(data.countries[i]);
                        console.log("Country: ", data.countries[i]);
                }
            } else
            //temples
            //if a temple is found, add it to results
            if(input === "temple"){
                for (let i=0; i < data.temples.length; i++){
                    results.push(data.temples[i]);
                    console.log(data.temples[i].name);
                }
            } else
            //beaches
            //if a beach is found, add it to results
            if(input === "beach"){
                for (let i=0; i < data.beaches.length; i++){
                    results.push(data.beaches[i]);
                    console.log(data.beaches[i].name);
                }
            }
            console.log("before foreach");
            results.forEach(destination => {
                console.log("forEach loop: ", destination.name);
               /* resultDiv.innerHTML += `
                    <div class="card>
                        <img src=${destination.imageURL}">
                        <h3>${destination.name}</h3>
                        <p>${destination.description}</p>
                    </div>
                `;*/
            });
        })

}


addSearchButton.addEventListener("click",searchDestinations);