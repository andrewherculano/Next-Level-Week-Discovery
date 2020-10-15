const map = L.map('mapid').setView([-23.1888482, -46.9146867], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [38, 48],
    iconAnchor: [29, 68]
})

let marker;

//create marker
map.on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name="lat"]').value = lat
    document.querySelector('[name="lng"]').value = lng

    //remove previous
    marker && map.removeLayer(marker)

    //add icon layar
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

//up photos
function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const input = newFieldContainer.children[0]
    if (input.value == '') {
        return alert('Você precisa preencher um campo para adicionar outro!')
    }

    //clear
    newFieldContainer.children[0].value = ''

    container.appendChild(newFieldContainer)
}

//delete Field
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ''
        return
    }

    //delete
    span.parentNode.remove()
}

//select Yes Or No
function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
        .forEach(function (button) {
            button.classList.remove('active')
        })

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    console.log(input)

    input.value = button.dataset.value
}


