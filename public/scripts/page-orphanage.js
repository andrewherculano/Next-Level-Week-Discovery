const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-23.1888482, -46.9146867], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([-23.1888482, -46.9146867], { icon })
    .addTo(map)


//image galery

function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active')
    }

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-datails > img')

    imageContainer.src = image.src
}
