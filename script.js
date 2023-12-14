//when form is submitted grab user's input and log it
user_input_form.addEventListener("submit", (e) => {
    //(e) is the event object
    // that object holds more information about the event that we are handling
    e.preventDefault();

    //variables to hold user input
    const destinationName = destination_name.value;
    const locationName = destination_location.value;
    const photoURL = photo_url === "" ? "https://picsum.photos/200/300" : photo_url.value;
    //another way to write a ternary statement:
    // const photoURL = photo_url.value || "https://picsum.photos/200/300";
    const desc = description.value;

    //clear form
    user_input_form.reset();

    //create card
    const card = createCard({destinationName, locationName, photoURL, desc});

    //append card to card container
    card_container.appendChild(card);
});

function createCard({destinationName, locationName, photoURL, desc}) {
    /* Bootstrap card html
 <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Location</p>
    <p class="card-text">Desc</p>
    <button class="btn btn-info">Edit</button>
    <button class="btn btn-danger">Delete</button>
  </div>
</div> */

    //div for card
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem");
    //html for cardbody
    card.innerHTML = `
    <img class="card-img-top" src="${photoURL}" alt="${destinationName} at ${locationName}">
    <div class="card-body">
    <h5 class="card-title">${destinationName}</h5>
    <p class="card-text">${locationName}</p>
    ${desc && `<p class="card-text">${desc}</p>`}
    <button class="btn btn-info">Edit</button>
    <button class="btn btn-danger">Delete</button>
    </div>
    `;

    return card;
}