// This is the client side request being made to the server.
function getQueryResults() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // The results of the query are caught here and are posted as an alert.
            queryResults = xhr.response
            // Creates a list of all the results from the Query
            queryResults = queryResults.toString().split("\n")
            // Inserting the data the first resutl to HTML
            firstQuery = queryResults[0].toString().split(",")
            document.getElementById("recipeName001").innerHTML = "Recipe Name: " + firstQuery[1].toString()
            document.getElementById("image001").src = firstQuery[2].toString()
            document.getElementById("recipeRating001").innerHTML = "Rating: " + firstQuery[3].toString()
            document.getElementById("recipeIngredients001").innerHTML = "Ingredients: " + firstQuery[4].toString()
        }
    };
    xhr.send("");
}
