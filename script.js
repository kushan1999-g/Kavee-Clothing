document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-white/90', 'bg-white/95');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white/95', 'bg-white/90');
        }
    });

    // Add to Cart Interaction
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(btn => {
        if (btn.innerHTML.includes('svg') && !btn.id) { // Targeting the icon buttons
            btn.addEventListener('click', function(e) {
                // Simple ripple or scale effect
                this.classList.add('scale-125');
                setTimeout(() => {
                    this.classList.remove('scale-125');
                }, 200);

                // Update cart count (dummy)
                const cartBadge = document.querySelector('.relative span');
                if (cartBadge) {
                    let count = parseInt(cartBadge.innerText);
                    cartBadge.innerText = count + 1;
                    
                    // Bounce animation for badge
                    cartBadge.classList.add('animate-bounce');
                    setTimeout(() => {
                        cartBadge.classList.remove('animate-bounce');
                    }, 1000);
                }
            });
        }
    });
});
