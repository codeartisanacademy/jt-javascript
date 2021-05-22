if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
}  

let form ;

// create global var for map

// create global var for map event

function onSuccess(position){
    const mymap = L.map('map').setView([position.coords.latitude, position.coords.longitude], 15);

    const formContainer = document.getElementById('form-container');
    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(mymap);
    
        const marker = L.marker([position.coords.latitude, position.coords.longitude], {title:"You are here"}).addTo(mymap);
        marker.bindPopup("You are here").openPopup();

        mymap.on('click', function(e){
            L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap).bindPopup("hello").openPopup();
            formContainer.classList.remove('d-none');
            formContainer.classList.add('bg-light');
            form = document.getElementById("mapform");
        });
        
        
}

function onFailure(){
    alert("Your browser doesn't support geo location");
}

form.addEventListener('submit', function(e){
    // add marker etc
    e.preventDefault();
    console.log('submitted');
})
