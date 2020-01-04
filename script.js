var searchButton = document.getElementById('search');
var clearResults = document.getElementById('clear-results');
var searchTerm = document.querySelector('examplesearchterm');
var recordsToRetrieve = document.querySelector('recordinput');
var startYear = document.querySelector('start-the-year');
var endYear = document.querySelector('end-the-year');

searchButton.addEventListener('click', function () {
    localStorage.setitem('search');
})

