document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchQueryElement = document.getElementById("search-query");
    const searchResultsElement = document.getElementById("search-results");

    const porscheModels = [
        "Porsche 911 (2010-2020)",
        "Porsche Cayenne (2010-2020)",
        "Porsche Panamera (2010-2020)",
        "Porsche Boxster (2010-2020)",
        "Porsche Cayman (2010-2020)",
        "Porsche Macan (2014-2020)",
        "Porsche 918 Spyder (2014-2015)",
        "Porsche 718 Boxster (2016-2020)",
        "Porsche 718 Cayman (2016-2020)",
        "Porsche Taycan (2019-2020)"
    ];

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchQueryElement.innerHTML = `Showing results for your search query: '<span id="search-term">${searchTerm}</span>'`;
        updateSearchResults(searchTerm);
    });

    function updateSearchResults(searchTerm) {
        searchResultsElement.innerHTML = "";

        const matchingResults = porscheModels.filter(model => model.toLowerCase().includes(searchTerm));

        if (matchingResults.length > 0) {
            matchingResults.forEach(model => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("search-result");
                resultItem.textContent = model;
                searchResultsElement.appendChild(resultItem);
            });
        } else {
            displayNoResultsMessage();
        }
    }

    function displayNoResultsMessage() {
        searchResultsElement.innerHTML = "No results found. Try a different search term.";
    }
});
