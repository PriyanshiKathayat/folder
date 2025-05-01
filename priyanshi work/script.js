// All car data
const cars = {
    "Maruti Suzuki": [
        { name: "Alto K10", price: 350000, mileage: 24, safety: 2, interior: 2, image: "imgs/altoK10.webp" },
        { name: "Wagon R", price: 500000, mileage: 23, safety: 1, interior: 2, image: "imgs/TEJAS WAGONR.webp" },
        { name: "Celerio", price: 600000, mileage: 25, safety: 0, interior: 2, image: "imgs/celeario.jpg" },
        { name: "Ignis", price: 650000, mileage: 20, safety: 1, interior: 2, image: "imgs/ignis.jpg" },
        { name: "S-Presso", price: 450000, mileage: 24, safety: 1, interior: 1, image: "imgs/SPRESSO.webp" },
        { name: "Dzire", price: 800000, mileage: 25, safety: 5, interior: 5, image: "imgs/dezire.jpg" },
        { name: "Ciaz", price: 1100000, mileage: 20, safety: 4, interior: 5, image: "imgs/CIAZ.webp" },
        { name: "Brezza", price: 900000, mileage: 17, safety: 4, interior: 4, image: "imgs/brezza.jpg" },
        { name: "Grand Vitara", price: 1400000, mileage: 26, safety: 5, interior: 5, image: "imgs/GRAND VITARA.avif" },
        { name: "Fronx", price: 800000, mileage: 20, safety: 5, interior: 4, image: "imgs/fronx-1.webp" },
        { name: "Jimny", price: 1200000, mileage: 16, safety: 3, interior: 3, image: "imgs/jimny.jpg" },
        { name: "XL6", price: 1000000, mileage: 20, safety: 3, interior: 4, image: "imgs/XL6.jpg" },
        { name: "Eeco", price: 500000, mileage: 18, safety: 2, interior: 1, image: "imgs/eeco-white.png" },
        { name: "Ertiga", price: 800000, mileage: 20, safety: 3, interior: 3, image: "imgs/eartiga.jpg" },
        { name: "Invicto", price: 1500000, mileage: 23, safety: 3, interior: 4, image: "imgs/invicto-stellar-bronzel.png" },
        { name: "Super Carry", price: 700000, mileage: 18, safety: 1, interior: 1, image: "imgs/new-super-carry-right.webp" },
        { name: "Dzire Tour", price: 600000, mileage: 23, safety: 4, interior: 2, image: "imgs/TOUR S.webp" },
        { name: "Ertiga Tour", price: 800000, mileage: 18, safety: 3, interior: 2, image: "imgs/EARTIGA TOUR.webp" }
    ],
    "Tata": [
        { name: "Tata Tiago", price: 500000, mileage: 20, safety: 4, interior: 4, image: "imgs/TIAGO.png" },
        { name: "Tata Altroz", price: 650000, mileage: 18, safety: 5, interior: 4, image: "imgs/ALTROZ.webp" },
        { name: "Tata Punch", price: 700000, mileage: 18, safety: 4, interior: 4, image: "imgs/tata punch.jpg" },
        { name: "Tata Tigor", price: 600000, mileage: 19, safety: 4, interior: 4, image: "imgs/tigor .jpg" },
        { name: "Tata Nexon", price: 900000, mileage: 17, safety: 5, interior: 5, image: "imgs/nexon.jpg" },
        { name: "Tata Harrier", price: 1600000, mileage: 16, safety: 5, interior: 5, image: "imgs/harrier.jpg" },
        { name: "Tata Safari", price: 1900000, mileage: 16, safety: 5, interior: 5, image: "imgs/safari.jpg" },
        { name: "Tata Hexa", price: 1400000, mileage: 14, safety: 5, interior: 5, image: "imgs/hexa .jpg" },
        { name: "Tata Curvv", price: 1500000, mileage: 15, safety: 5, interior: 5, image: "imgs/curvv.jpg" },
        { name: "Tata Nexon EV", price: 1300000, mileage: 0, Range: 312, safety: 5, interior: 5, image: "imgs/nexon ev.jpg" },
        { name: "Tata Tiago EV", price: 800000, mileage: 0, safety: 4, interior: 4, image: "imgs/TIAGO EV.webp" },
        { name: "Tata Tigor EV", price: 1000000, mileage: 0, safety: 5, interior: 4, image: "imgs/TIGOR EV.webp" },
        { name: "Tata Punch EV", price: 1200000, mileage: 0, safety: 5, interior: 5, image: "imgs/PUNCH EVV.webp" },
        { name: "Tata Yodha Pickup", price: 950000, mileage: 14, safety: 4, interior: 3, image: "imgs/Tata-Yodha-Pickup.png" }
    ],
    "Mahindra": [
        { name: "Mahindra XUV700", price: 1800000, mileage: 12, safety: 5, interior: 5, image: "imgs/XUV 700.jpg" },
        { name: "Mahindra Thar", price: 1100000, mileage: 9, safety: 4, interior: 4, image: "imgs/THAR BLACK.webp" },
        { name: "Mahindra Scorpio N", price: 1600000, mileage: 16, safety: 5, interior: 5, image: "imgs/SCORPIOn.jpg" },
        { name: "Mahindra Bolero", price: 900000, mileage: 14, safety: 4, interior: 3, image: "imgs/BOLERO T.webp" },
        { name: "Mahindra Bolero Neo", price: 1000000, mileage: 15, safety: 1, interior: 2, image: "imgs/BOLERO NEO.jpg" },
        { name: "Mahindra XUV300", price: 900000, mileage: 17, safety: 5, interior: 5, image: "imgs/XUV 300.jpg" },
        { name: "Mahindra XUV400 EV", price: 1700000, mileage: 0, Range: 456, safety: 5, interior: 5, image: "imgs/XUV 400.jpg" },
        { name: "Mahindra Marazzo", price: 1300000, mileage: 16, safety: 4, interior: 4, image: "imgs/MARAZZO.jpg" },
        { name: "Mahindra Alturas G4", price: 2100000, mileage: 12, safety: 5, interior: 5, image: "imgs/ALTRUS.avif" },
        { name: "Mahindra Bolero PikUp", price: 1000000, mileage: 15, safety: 3, interior: 2, image: "imgs/bolero-extra-long_600x400.webp" },
        { name: "Mahindra Bolero Neo Plus", price: 1200000, mileage: 14, safety: 2, interior: 3, image: "imgs/NEOO.webp" },
        { name: "Mahindra Bolero Camper", price: 950000, mileage: 14, safety: 3, interior: 2, image: "imgs/CAMPER.webp" },
        { name: "Mahindra Bolero Maxitruck Plus", price: 1050000, mileage: 14, safety: 3, interior: 1, image: "imgs/MAXIITRUCKKKK.webp" },
        { name: "Mahindra TUV300", price: 900000, mileage: 15, safety: 2, interior: 2, image: "imgs/TUV 300.jpg" },
        { name: "Mahindra KUV100", price: 700000, mileage: 16, safety: 2, interior: 1, image: "imgs/KUV 100.jpg" },
        { name: "Mahindra BE 6e", price: 1890000, mileage: 0, Range: 542, safety: 5, interior: 5, image: "imgs/BE 6e.avif" },
        { name: "Mahindra XEV 9e", price: 2100000, mileage: 0, Range: 542, safety: 5, interior: 5, image: "imgs/XEV 9e.webp" }
    ],
    "Force": [
        { name: "Force Gurkha", price: 1300000, mileage: 12, safety: 4, interior: 4, image: "imgs/gurkha.jpg" },
        { name: "Force Urbania", price: 1400000, mileage: 11, safety: 3, interior: 3, image: "imgs/urbenia.jpg" },
        { name: "Force Trax Cruiser", price: 1200000, mileage: 14, safety: 4, interior: 3, image: "imgs/cruser.webp" }
    ]
};

function displayAllCars() {
    const carGrid = document.getElementById('car-avaiable');
    carGrid.innerHTML = '';
    const allCars = [];
    for (let brand in cars) {
        cars[brand].forEach(car => allCars.push(car));
    }
    allCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p class="price">₹${car.price.toLocaleString()}</p>
            <p>Mileage: ${car.mileage > 0 ? car.mileage + " km/l" : "N/A"}</p>
            <p>${car.Range ? `Range: ${car.Range} km` : ""}</p>
            <p>Safety Rating: ${car.safety}</p>
            <p>Interior Rating: ${car.interior}</p>
        `;
        carGrid.appendChild(carCard);
    });
}

document.getElementById('filter-cars').addEventListener('click', () => {
    const budget = parseInt(document.getElementById('budget').value) || Infinity;
    const type = document.getElementById('type').value;
    const criteria = document.getElementById('criteria').value;

    const filteredCars = [];
    for (let brand in cars) {
        cars[brand].forEach(car => {
            if (car.price <= budget) {
                if (type === "Reliable" && car.safety >= 4) {
                    filteredCars.push(car);
                } else if (type === "Luxury" && car.interior >= 4) {
                    filteredCars.push(car);
                } else if (type === "EV" && car.Range) {
                    filteredCars.push(car);
                }
            }
        });
    }

    displayRecommendedCars(filteredCars, criteria);
});
function displayRecommendedCars(cars, criteria) {
    const carGrid = document.getElementById('car-recommendations');
    carGrid.innerHTML = ''; 
    const sortedCars = cars.sort((a, b) => {
        if (criteria === "Safety") {
            return b.safety - a.safety;
        } else if (criteria === "High Mileage") {
            return b.mileage - a.mileage;
        } else if (criteria === "Range") {
            return (b.Range || 0) - (a.Range || 0);
        }
        return 0;
    });
    sortedCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p class="price">₹${car.price.toLocaleString()}</p>
            <p>Mileage: ${car.mileage > 0 ? car.mileage + " km/l" : "N/A"}</p>
            <p>${car.Range ? `Range: ${car.Range} km` : ""}</p>
            <p>Safety Rating: ${car.safety}</p>
            <p>Interior Rating: ${car.interior}</p>
        `;
        carGrid.appendChild(carCard);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    displayAllCars();
});
// Scroll to Top Function (Navigarion)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Scroll to Footer Function
  function scrollToFooter() {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  }