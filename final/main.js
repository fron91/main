console.log("Goodbye");

var x=5;
console.log(a);

var b=20;
var c=30;
var d= b+c;
console.log(d);

var e=20;
var f=30;
var g= e+f;
console.log(g);

var h=100;
var i=5;
var j= h+i;
console.log(j);

var k=10;
var l=3;
var m= k % l;
console.log(m);

var n=99;
n++;
console.log(n);

var o=99;
0--;
console.log(n);

var p=20;
var q=p**2;
console.log(q)

var x= 15;
x +=5;
console.log(x);

const carsData = [
    {
        id: 'm5',
        name: 'BMW M5',
        imageSrc: 'm5.png',
        altText: 'BMW M5',
        description: 'High-performance luxury sedan, perfect for a stylish ride.',
        hasImageDivWrapper: true
    },
    {
        id: 'sedanAffordable',
        name: 'Affordable Sedan',
        description: 'Description of Car 2. Fuel-efficient and reliable.'
    },
    {
        id: 'suvFamily',
        name: 'Family SUV',
        description: 'Description of Car 3. Spacious and comfortable for the whole family.'
    },
    {
        id: 'car4',
        name: 'Sporty Convertible',
        imageSrc: 'car4_placeholder.png',
        altText: 'Sporty Convertible',
        description: 'Enjoy the open air with this stylish convertible.'
    },
    {
        id: 'car5',
        name: 'Economy Hatchback',
        imageSrc: 'car5_placeholder.png',
        altText: 'Economy Hatchback',
        description: 'Great for city driving and fuel efficiency.'
    },
    {
        id: 'car6',
        name: 'Luxury Van',
        imageSrc: 'car6_placeholder.png',
        altText: 'Luxury Van',
        description: 'Spacious and luxurious for group travel.'
    }
];

function addRentNowButtonListeners() {
    document.querySelectorAll('.rent-now-btn').forEach(button => {
        button.addEventListener('click', function() {
            const carItem = this.closest('.car-item');
            const carName = carItem.querySelector('h3').textContent;
            alert(`We will contact you shortly to discuss renting the ${carName}.`);
        });
    });
}

function displayCars(cars) {
    const carListContainer = document.querySelector('#cars-section .car-list');
    if (!carListContainer) {
        return;
    }

    carListContainer.innerHTML = '';

    cars.forEach(car => {
        const carItemDiv = document.createElement('div');
        carItemDiv.className = 'car-item';
        carItemDiv.setAttribute('data-car-id', car.id);

        let itemContentHTML = '';

        if (car.hasImageDivWrapper && car.imageSrc) {
            itemContentHTML = `
                <h3>${car.name}</h3>
                <div class="image">
                    <img src="${car.imageSrc}" alt="${car.altText || car.name}">
                </div>
                <p>${car.description}</p>
            `;
        } else if (car.imageSrc) {
            itemContentHTML = `
                <img src="${car.imageSrc}" alt="${car.altText || car.name}">
                <h3>${car.name}</h3>
                <p>${car.description}</p>
            `;
        } else {
            itemContentHTML = `
                <h3>${car.name}</h3>
                <p>${car.description}</p>
            `;
        }

        itemContentHTML += `<button class="rent-now-btn">Rent Now</button>`;
        carItemDiv.innerHTML = itemContentHTML;
        carListContainer.appendChild(carItemDiv);
    });

    addRentNowButtonListeners();
}

document.addEventListener('DOMContentLoaded', function() {
    displayCars(carsData);

    document.querySelectorAll('.book.button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Thank you for your booking interest! We will contact you shortly.');
        });
    });

    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== "#" && this.getAttribute('href').startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
const carsData = [
    {
        id: 'm5',
        name: 'BMW M5',
        imageSrc: 'm5.png',
        altText: 'BMW M5',
        description: 'High-performance luxury sedan, perfect for a stylish ride.',
        hasImageDivWrapper: true
    },
    {
        id: 'sedanAffordable',
        name: 'Affordable Sedan',
        description: 'Description of Car 2. Fuel-efficient and reliable.'
    },
    {
        id: 'suvFamily',
        name: 'Family SUV',
        description: 'Description of Car 3. Spacious and comfortable for the whole family.'
    },
    {
        id: 'car4',
        name: 'Sporty Convertible',
        imageSrc: 'car4_placeholder.png',
        altText: 'Sporty Convertible',
        description: 'Enjoy the open air with this stylish convertible.'
    },
    {
        id: 'car5',
        name: 'Economy Hatchback',
        imageSrc: 'car5_placeholder.png',
        altText: 'Economy Hatchback',
        description: 'Great for city driving and fuel efficiency.'
    },
    {
        id: 'car6',
        name: 'Luxury Van',
        imageSrc: 'car6_placeholder.png',
        altText: 'Luxury Van',
        description: 'Spacious and luxurious for group travel.'
    }
];

function addRentNowButtonListeners() {
    document.querySelectorAll('.rent-now-btn').forEach(button => {
        button.addEventListener('click', function() {
            const carItem = this.closest('.car-item');
            const carName = carItem.querySelector('h3').textContent;
            alert(`We will contact you shortly to discuss renting the ${carName}.`);
        });
    });
}

function displayCars(cars) {
    const carListContainer = document.querySelector('#cars-section .car-list');
    if (!carListContainer) {
        console.error("Car list container not found!");
        return;
    }

    carListContainer.innerHTML = '';

    cars.forEach(car => {
        const carItemDiv = document.createElement('div');
        carItemDiv.className = 'car-item';
        carItemDiv.setAttribute('data-car-id', car.id); 
        let itemContentHTML = '';

        if (car.hasImageDivWrapper && car.imageSrc) {
            itemContentHTML = `
                <h3>${car.name}</h3>
                <div class="image">
                    <img src="${car.imageSrc}" alt="${car.altText || car.name}">
                </div>
                <p class="car-description">${car.description}</p> 
            `;
        } else if (car.imageSrc) {
            itemContentHTML = `
                <img src="${car.imageSrc}" alt="${car.altText || car.name}">
                <h3>${car.name}</h3>
                <p class="car-description">${car.description}</p>
            `;
        } else {
            itemContentHTML = `
                <h3>${car.name}</h3>
                <p class="car-description">${car.description}</p>
            `;
        }

        itemContentHTML += `<button class="rent-now-btn">Rent Now</button>`;
        carItemDiv.innerHTML = itemContentHTML;
        carListContainer.appendChild(carItemDiv);

        
        carItemDiv.addEventListener('mouseenter', function() {
            this.style.border = '2px solid dodgerblue';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            this.style.transform = 'scale(1.02)'; 
            this.style.transition = 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out';
        });

        carItemDiv.addEventListener('mouseleave', function() {
            this.style.border = '1px solid #ccc'; 
            this.style.boxShadow = 'none';
            this.style.transform = 'scale(1)';
        });

        
        const descriptionP = carItemDiv.querySelector('p.car-description');
        if (descriptionP) {
            descriptionP.style.cursor = 'pointer'; 
            descriptionP.addEventListener('click', function() {
                const carId = carItemDiv.dataset.carId;
                const carName = carItemDiv.querySelector('h3').textContent;
                console.log(`Clicked description for Car ID: ${carId}, Name: ${carName}`);
                alert(`You clicked on the description for: ${carName}. This car is: ${this.textContent}`);
            });
        }
    });

    addRentNowButtonListeners(); 
}

let shapeElement; 
let isSquare = true; 

function createInteractiveShape() {
    const shapeContainer = document.getElementById('shape-container');
    if (!shapeContainer) {
        console.error("Shape container not found!");
        return;
    }

    shapeElement = document.createElement('div');
    shapeElement.setAttribute('id', 'interactive-shape');
    
    // Initial style (square)
    shapeElement.style.width = '100px';
    shapeElement.style.height = '100px';
    shapeElement.style.backgroundColor = 'red';
    shapeElement.style.cursor = 'pointer';
    shapeElement.style.transition = 'all 0.5s ease'; 
    shapeContainer.appendChild(shapeElement);

    shapeElement.addEventListener('click', toggleShape);
}

function toggleShape() {
    if (isSquare) {
        
        shapeElement.style.backgroundColor = 'blue';
        shapeElement.style.borderRadius = '50%';
        shapeElement.style.width = '120px'; 
        shapeElement.style.height = '120px';
    } else {
        
        shapeElement.style.backgroundColor = 'red';
        shapeElement.style.borderRadius = '0%';
        shapeElement.style.width = '100px';
        shapeElement.style.height = '100px';
    }
    isSquare = !isSquare; 
}



document.addEventListener('DOMContentLoaded', function() {
   
    displayCars(carsData);

    
    createInteractiveShape();

    
    document.querySelectorAll('.book.button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert('Thank you for your booking interest! We will contact you shortly.');
        });
    });

    
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== "#" && this.getAttribute('href').startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});