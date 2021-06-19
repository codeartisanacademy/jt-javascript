if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
}  



const formContainer = document.getElementById('form-container');
const spotName = document.getElementById('spotName');
const locationsContainer = document.getElementById('locations')
const locationType = document.getElementById('location-type');
let locationTypeClass;
// create global array
let locations = [];
// create global var for map
let mymap;
// create global var for map event
let mapEvent;

const resetForm = function() {
    spotName.value = "";
    locationType.value = "";

}
const renderLocations = function(){
    if(locationType.value=="1"){
        locationTypeClass = "bg-danger";
    }else if(locationType.value=="2"){
        locationTypeClass = "bg-warning";
    }else{
        locationTypeClass = "bg-success";
    }
    
    let locationHtml = `
        <div class="card ${locationTypeClass} mb-2">
            <div class="card-body">
                <h5>${spotName.value}</h5>

            </div>
        </div> 
    `
    locationsContainer.insertAdjacentHTML('beforeend', locationHtml);
}

const getLocations = function(){
    const data = JSON.parse(localStorage.getItem('locations'));
    if(data){
        try {
                locations = data;
                locations.forEach(item => {
                if(item.locationType=="1"){
                    locationTypeClass = "bg-danger";
                }else if(item.locationType=="2"){
                    locationTypeClass = "bg-warning";
                }else{
                    locationTypeClass = "bg-success";
                }
                
                let locationHtml = `
                    <div class="card ${locationTypeClass} mb-2">
                        <div class="card-body">
                            <h5>${item.name}</h5>
            
                        </div>
                    </div> 
                `
                locationsContainer.insertAdjacentHTML('beforeend', locationHtml);
            });
        } catch (error) {
            console.log("we have an error");
             console.log(error);
        }
        
    }
    
}

getLocations();

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
    
    // create an object
    let location = {
        'name': spotName.value,
        'locationType': locationType.value,
        'location': {
            'lat': mapEvent.latlng.lat,
            'lng': mapEvent.latlng.lng
        }
    }
    // add object to the array
    locations.push(location);

    //store array into the local storage
    localStorage.setItem('locations', JSON.stringify(locations) )

    renderLocations();
    
    resetForm();
})


