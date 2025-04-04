const carousel = document.getElementById('carousel');
        let scrollAmount = 0;
        const cardWidth = 320; // Approximate width of each card including gap

        function scrollCarousel(direction) {
            let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
            scrollAmount += direction * cardWidth;

            if (scrollAmount < 0) {
                scrollAmount = 0; // Prevent scrolling beyond leftmost point
            } else if (scrollAmount > maxScrollLeft) {
                scrollAmount = maxScrollLeft; // Prevent scrolling beyond rightmost point
            }

            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }