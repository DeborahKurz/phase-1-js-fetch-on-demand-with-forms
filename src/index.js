const init = () => {
    //Add an event listener to the 'form element' to target the DOM element we want.
    const inputForm = document.querySelector("form");
    //When the event is triggered, we'll store the event object in a variable, and then use "preventDefault" to keep the page from refreshing:
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault()
        //console.log to make sure we're getting the right thing.
        // console.log(event);
        //Access the input element directly to get the value we need.
        const input = document.querySelector("input#searchByID");
        console.log(input.value);
        //Setting up a fetch request to get data based on user input:
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response)=>response.json())
            //Replacing Title and Summary from our HTML elements with data we receive from our server:
            .then((data)=>{
                // console.log(data);
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");
                //Chaning the contents of Title and Summary elements based on the retrieved data.
                title.innerText = data.title;
                summary.innerText = data.summary;
            });
    });
};

document.addEventListener('DOMContentLoaded', init);