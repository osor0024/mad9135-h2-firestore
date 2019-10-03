var db = firebase.firestore();
var placesRef = db.collection("places");

placesRef.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    console.log(`${doc.id}`);
  });
});
// placesRef.doc("Playa Blanca").set({
//   placeName: "Playa Blanca",
//   country: "Colombia",
//   city: "Cartagena",
//   whatis: "Beach"
// });
// placesRef.doc("Machu Picchu").set({
//   placeName: "Machu Picchu",
//   country: "Peru",
//   city: "Machu Picchu",
//   whatis: "Park"
// });
// placesRef.doc("Plaza de Armas de Arequipa").set({
//   placeName: "Plaza de Armas de Arequipa",
//   country: "Peru",
//   city: "Arequipa",
//   whatis: "Square"
// });
// placesRef.doc("Bosque de Palmero").set({
//   placeName: "Bosque de Palmero",
//   country: "Argentina",
//   city: "Buenos Aires",
//   whatis: "Forest"
// });
// placesRef.doc("Plaza Serrano").set({
//   placeName: "Plaza Serrano",
//   country: "Argentina",
//   city: "Buenos Aires",
//   whatis: "Square"
// });
// placesRef.doc("Castillo San Felipe").set({
//   placeName: "Castillo San Felipe",
//   country: "Colombia",
//   city: "Cartagena",
//   whatis: "Castle"
// });
// placesRef.doc("Plaza Bolivar").set({
//   placeName: "Plaza Bolivar",
//   country: "Colombia",
//   city: "Bogota",
//   whatis: "Square"
// });
