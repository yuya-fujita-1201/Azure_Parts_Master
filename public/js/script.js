document.getElementById('searchBtn').addEventListener('click', function() {
    var itemCode = document.getElementById('itemCode').value;
    var summaryCode = document.getElementById('summaryCode').value;
    var keyword = document.getElementById('keyword').value;
    var equipmentCategory = document.getElementById('equipmentCategory').value;
    var equipmentCategoryCode = document.getElementById('equipmentCategoryCode').value;
    var destination = document.getElementById('destination').value;
    var salesStartDate = document.getElementById('salesStartDate').value;
    var lastShipmentDate = document.getElementById('lastShipmentDate').value;
    var EOSLForecastDate = document.getElementById('EOSLForecastDate').value;
    var EOSLDate = document.getElementById('EOSLDate').value;
    var serviceStatus = document.getElementById('serviceStatus').value;
    var repairEndDate = document.getElementById('repairEndDate').value;

    // Do search based on the above inputs. This will depend on your database and server-side code.
    // After getting the results, populate the results section. For example:

    var results = []; // Replace this with actual results from your database

    var resultsSection = document.getElementById('results-section');
    resultsSection.innerHTML = '';

    for (var i = 0; i < results.length; i++) {
        var resultDiv = document.createElement('div');
        resultDiv.innerText = results[i].itemCode + ', ' + results[i].summaryCode + ', ' + results[i].destination;
        resultsSection.appendChild(resultDiv);
    }
});
