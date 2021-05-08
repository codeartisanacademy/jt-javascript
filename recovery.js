if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
}  

function onSuccess(position){
    const mymap = L.map('map').setView([position.coords.latitude, position.coords.longitude], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(mymap);
    
        const marker = L.marker([position.coords.latitude, position.coords.longitude], {title:"You are here"}).addTo(mymap);
        marker.bindPopup("You are here").openPopup();
}

function onFailure(){
    alert("Your browser doesn't support geo location");
}