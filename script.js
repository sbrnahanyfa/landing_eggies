document.addEventListener('DOMContentLoaded', () => {
            
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('translate-x-full');
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
    });

    const qtyBtns = document.querySelectorAll('.qty-btn');
    qtyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const isPlus = btn.classList.contains('plus');
            const valSpan = btn.parentElement.querySelector('.qty-val');
            let currentVal = parseInt(valSpan.textContent);
            
            if (isPlus) {
                currentVal++;
            } else {
                if (currentVal > 1) currentVal--;
            }
            valSpan.textContent = currentVal;
        });
    });

    let cartCount = 0;
    const cartCountBadge = document.getElementById('cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            cartCountBadge.textContent = cartCount;
            
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="ph-fill ph-check-circle"></i> Ditambahkan';
            btn.classList.add('bg-secondary');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-secondary');
            }, 1500);
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        
        btn.addEventListener('click', () => {
            const isOpen = content.classList.contains('grid-rows-[1fr]');

            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-content').classList.replace('grid-rows-[1fr]', 'grid-rows-[0fr]');
                otherItem.querySelector('.faq-icon').classList.remove('rotate-180');
                otherItem.classList.remove('border-primary-container', 'shadow-md');
            });

            if (!isOpen) {
                content.classList.replace('grid-rows-[0fr]', 'grid-rows-[1fr]');
                icon.classList.add('rotate-180');
                item.classList.add('border-primary-container', 'shadow-md');
            }
        });
    });

});