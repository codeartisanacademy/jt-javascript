if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
}  

const formContainer = document.getElementById('form-container');
const spotName = document.getElementById('spotName');
const locationsContainer = document.getElementById('locations')
const locationType = document.getElementById('location-type');
let locationTypeClass;

// create global var for map
let mymap;
// create global var for map event
let mapEvent;

function onSuccess(position){
    mymap = L.map('map').setView([position.coords.latitude, position.coords.longitude], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(mymap);
    
        const marker = L.marker([position.coords.latitude, position.coords.longitude], {title:"You are here"}).addTo(mymap);
        marker.bindPopup("You are here").openPopup();

        mymap.on('click', function(mapE){
            mapEvent = mapE;    
            formContainer.classList.remove('d-none');
            formContainer.classList.add('bg-light');
            spotName.focus();
        });
        
        
}

function onFailure(){
    alert("Your browser doesn't support geo location");
}

formContainer.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    // clear inputs
    
    // add marker etc
    L.marker([mapEvent.latlng.lat,mapEvent.latlng.lng])
    .addTo(mymap)
    .bindPopup(
        L.popup(
            {
                autoClose:false,
                closeOnClick: false,
                
            }
        )
    )
    .setPopupContent(spotName.value)
    .openPopup();

    spotName.value = "";

    if(locationType.value=="1"){
        locationTypeClass = "bg-danger";
    }else if(locationType.value=="2"){
        locationTypeClass = "bg-warning";
    }else{
        locationTypeClass = "bg-success";
    }
    console.log(locationType)
    let locationHtml = `
        <div class="card ${locationTypeClass} mb-2">
            <div class="card-body">
                <h5>RS. Setia Mitra</h5>

            </div>
        </div> 
`
    locationsContainer.insertAdjacentHTML('beforeend', locationHtml)
})

