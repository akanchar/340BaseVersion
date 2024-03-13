// This is the client side request being made to the server.
function getQueryResults() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // The results of the query are caught here and are posted as an alert.
            alert(xhr.responseText);
        }
    };
    xhr.send("");
}