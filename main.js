document.addEventListener("DOMContentLoaded", init);


function init() {
loadData();
document.getElementById("addNewPlace").addEventListener("click",addNewPlace)
//document.getElementsByClassName()

}

function loadData() {
    placesRef.get().then(function (querySnapshot) {
        loadTableData(querySnapshot)
    })
}

function loadTableData(querySnapshot){
    var tableRow = '';
    querySnapshot.forEach(function(doc) {
        var document = doc.data();
        tableRow += '<tr>';
        tableRow += '<td class="placename">' + document.placeName + '</td>';
        tableRow += '<td class="country">' + document.country + '</td>';
        tableRow += '<td class="city">' + document.city + '</td>';
        tableRow += '<td class="whatisit">' + document.whatis + '</td>';
        tableRow += '<td class="editPlace"><i class="fa fa-pencil" aria-hidden="true" style="color:green"' + '</td>';
        tableRow += '<td class="deletePlace"><i class="fa fa-trash" aria-hidden="true" style="color:black"' + '</td>';
        tableRow += '</tr>';
    });
    //Add to the body.
    document.getElementById("tableToDisplay").innerHTML = tableRow
   //tableRow.appendChild(table)

}

function addNewPlace(){

    console.log("I was call")
    let place_name = document.getElementById("pname")
    let country_name =  document.getElementById("countryName")
    let city_name = document.getElementById("cityName")
    let whatis = document.getElementById("whatIsIt")

    if (place_name.value.length == 0 ){
        console.log("Please introduce the place name")
    } else{
        var docuName = place_name.chartAt(0)+ ". " + country_name;
        db.collection("favoritePlaces").doc(docuName).set({
            placeName: place_name,
            country: country_name,
            city: city_name,
            whatis: whatis
        }).then(function(docRef){

            console.log("succes")
            //Last call 
            loadData();
        }).catch(function(error){
            console.log("Error")
        })
    }

    
}