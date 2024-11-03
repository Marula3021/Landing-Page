// main.js
document.addEventListener('DOMContentLoaded', function() {
    const mediaContainers = document.querySelectorAll('.media-container');

    const checkMediaContainer = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        mediaContainers.forEach((container, index) => {
            const containerTop = container.getBoundingClientRect().top + scrollY;
            const triggerPoint = scrollY + windowHeight - 100;

            if (triggerPoint > containerTop && containerTop > scrollY - 100) {
                setTimeout(() => {
                    container.classList.add('show');
                }, index * 130); // Stagger the animation based on index
            } else {
                container.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', checkMediaContainer);
    window.addEventListener('load', checkMediaContainer);
});
/*Hero transition from left*/
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    setTimeout(() => {
        heroSection.classList.add('show');
    }, 100);
});
/*crypto listing button action*/
document.addEventListener('DOMContentLoaded', function() {
    const popularTab = document.getElementById('trend');
    const newListingTab = document.getElementById('newl');
    const popularList = document.getElementById('popular');
    const newList = document.getElementById('Listing');

    popularTab.addEventListener('click', function() {
        popularList.classList.add('active');
        newList.classList.remove('active');
        popularTab.classList.add('active');
        newListingTab.classList.remove('active');
    });

    newListingTab.addEventListener('click', function() {
        newList.classList.add('active');
        popularList.classList.remove('active');
        newListingTab.classList.add('active');
        popularTab.classList.remove('active');
    });
});
/*Dynamic price crypto*/
document.addEventListener('DOMContentLoaded', function() {
    const updatePrices = () => {
        const prices = document.querySelectorAll('.price');
        const percentages = document.querySelectorAll('.pourcentage');

        prices.forEach(price => {
            const coin = price.getAttribute('data-coin');
            let newPrice;

            if (coin === 'BTC') {
                newPrice = (Math.random() * (100000 - 10000) + 10000).toFixed(2);
            } else if (['ADA', 'DOGE', 'FTM', 'SCR' , 'EIGEN', 'LUMIA'].includes(coin)) {
                newPrice = (Math.random() * (5 - 0.1) + 0.1).toFixed(3); 
            } else if (['XRP', 'BNB', 'ETH' , 'BNSOL'].includes(coin)) {
                newPrice = (Math.random() * (9999 - 1000) + 1000).toFixed(3);
            } else if (coin === 'TURBO') {
                newPrice = (Math.random() * (0.001 - 0.00001) + 0.00001).toFixed(7);
            }else {
                newPrice = (Math.random() * 100).toFixed(4);
            }
            

            if (newPrice < 1) {
                price.textContent = `$${newPrice}`;
            } else {
                price.textContent = `$${Number(newPrice).toLocaleString('en')}`;
            }
        });

        percentages.forEach(pourcentage => {
            const newPercentage = ((Math.random() - 0.5) * 20).toFixed(2);
            pourcentage.textContent = `${newPercentage}%`;
            pourcentage.classList.remove('positive', 'negative');
            if (newPercentage >= 0) {
                pourcentage.classList.add('positive');
            } else {
                pourcentage.classList.add('negative');
            }
        });
    };
    setInterval(updatePrices, 8000);

    updatePrices();
});


