const url =   "https://randomuser.me/api/?results=15";
const api = document.getElementById("api");

fetch(url)
.then(function(respons) {return respons.json() })
.then(function(data){

    let users = data.results;

    users.map(function(user){
        console.log(user);

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let name = document.createElement("p");
        name.innerHTML= user.name.first;

        let lastName = document.createElement("p");
        lastName.innerHTML= user.name.last;

        let picture = document.createElement("img");
        picture.src = user.picture.medium;


        card.appendChild(name);
        card.appendChild(lastName);
        card.appendChild(picture);
        api.appendChild(card);


    })

})
.catch(function(error){
    console.log("Något gick fel: ", error)
})
