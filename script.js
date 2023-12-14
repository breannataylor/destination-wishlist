//when form is submitted grab user's input and log it
user_input_form.addEventListener("submit", (e) => {
    //(e) is the event object
    // that object holds more information about the event that we are handling
    e.preventDefault();

    //variables to hold user input
    const destinationName = destination_name.value;
    const locationName = destination_location.value;
    const photoURL = photo_url === "" ? "https://picsum.photos/200/300" : photo_url.value
    //another way to write a ternary statement:
    // const photoURL = photo_url.value || "https://picsum.photos/200/300";
    const desc = destination_name.value;

    console.log(destinationName, locationName, photoURL, desc);
})