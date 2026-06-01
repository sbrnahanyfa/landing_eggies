document.addEventListener('DOMContentLoaded', () => {
            
    // --- KODE ASLI DARI ANDA ---
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

    // --- LOGIKA KERANJANG (DIKEMBANGKAN DARI KODE ANDA) ---
    
    // Array untuk menampung data riil keranjang
    let cart = []; 
    const cartCountBadge = document.getElementById('cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');

    // Fungsi Format Rupiah
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    };

    // Fungsi Munculkan Toast
    const showToast = () => {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    };

    // Update Angka Keranjang
    const updateCartUI = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCountBadge.textContent = totalItems;
    };

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Ambil data produk
            const card = e.target.closest('.product-card');
            const id = card.getAttribute('data-id');
            const name = card.getAttribute('data-name');
            const price = parseInt(card.getAttribute('data-price'));
            const valSpan = card.querySelector('.qty-val');
            const qty = parseInt(valSpan.textContent);

            // Cek apakah item sudah ada di keranjang
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.qty += qty;
            } else {
                cart.push({ id, name, price, qty });
            }

            updateCartUI();
            showToast();
            
            // Kembalikan angka jumlah barang di kartu produk jadi 1
            valSpan.textContent = '1';

            // Animasi tombol asli dari kode Anda
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="ph-fill ph-check-circle"></i> Ditambahkan';
            btn.classList.add('bg-secondary');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-secondary');
            }, 1500);
        });
    });

    // --- LOGIKA MODAL DAN CHECKOUT FORM ---

    const cartModal = document.getElementById('cart-modal');
    const cartModalContent = document.getElementById('cart-modal-content');
    const cartBtn = document.getElementById('cart-btn'); // Ikon keranjang di navbar
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartView = document.getElementById('cart-view');
    const checkoutView = document.getElementById('checkout-view');
    const modalTitle = document.getElementById('modal-title');
    
    let cartTotal = 0;

    const openCartModal = () => {
        renderCartItems();
        cartModal.classList.remove('hidden');
        cartModalContent.classList.remove('modal-exit-active');
        cartModalContent.classList.add('modal-enter-active');
        
        cartView.classList.remove('hidden');
        checkoutView.classList.add('hidden');
        modalTitle.innerHTML = '<i class="ph ph-shopping-cart text-2xl"></i> Keranjang Anda';
    };

    const closeCartModal = () => {
        cartModalContent.classList.remove('modal-enter-active');
        cartModalContent.classList.add('modal-exit-active');
        setTimeout(() => {
            cartModal.classList.add('hidden');
        }, 200); 
    };

    cartBtn.addEventListener('click', openCartModal);
    closeCartBtn.addEventListener('click', closeCartModal);
    cartModal.addEventListener('click', (e) => {
        if(e.target === cartModal) closeCartModal();
    });

    // Tampilkan List Barang di Modal
    const renderCartItems = () => {
        const container = document.getElementById('cart-items-container');
        container.innerHTML = '';
        cartTotal = 0;

        if (cart.length === 0) {
            container.innerHTML = '<p class="text-center text-on-surface-variant italic py-6">Keranjang masih kosong.</p>';
            document.getElementById('btn-to-checkout').disabled = true;
            document.getElementById('btn-to-checkout').classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            document.getElementById('btn-to-checkout').disabled = false;
            document.getElementById('btn-to-checkout').classList.remove('opacity-50', 'cursor-not-allowed');
            
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.qty;
                cartTotal += itemTotal;
                
                container.innerHTML += `
                    <div class="flex justify-between items-center border-b border-surface-variant pb-3">
                        <div>
                            <h4 class="font-bold text-sm text-on-surface">${item.name}</h4>
                            <p class="text-xs text-on-surface-variant">${item.qty} Pack x ${formatRupiah(item.price)}</p>
                        </div>
                        <div class="text-right">
                            <p class="font-bold text-primary">${formatRupiah(itemTotal)}</p>
                            <button class="text-xs text-red-500 hover:underline mt-1 remove-btn" data-index="${index}">Hapus</button>
                        </div>
                    </div>
                `;
            });

            // Hapus item dari keranjang
            document.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.getAttribute('data-index');
                    cart.splice(index, 1);
                    updateCartUI();
                    renderCartItems();
                });
            });
        }
        
        document.getElementById('cart-total-price').innerText = formatRupiah(cartTotal);
        document.getElementById('checkout-final-total').innerText = formatRupiah(cartTotal);
    };

    // Navigasi Pindah View: Cart -> Form Checkout
    document.getElementById('btn-to-checkout').addEventListener('click', () => {
        cartView.classList.add('hidden');
        checkoutView.classList.remove('hidden');
        modalTitle.innerHTML = '<i class="ph ph-clipboard-text text-2xl"></i> Pengisian Data';
    });

    // Navigasi Kembali: Form Checkout -> Cart
    document.getElementById('btn-back-to-cart').addEventListener('click', () => {
        checkoutView.classList.add('hidden');
        cartView.classList.remove('hidden');
        modalTitle.innerHTML = '<i class="ph ph-shopping-cart text-2xl"></i> Keranjang Anda';
    });

    // --- SUBMIT PESANAN KE WHATSAPP ---
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('cust-name').value;
        const wa = document.getElementById('cust-wa').value;
        const address = document.getElementById('cust-address').value;
        const payment = document.getElementById('cust-payment').value;

        let orderText = `Halo Admin Egg-ies! 👋\nSaya ingin memesan telur organik dengan detail berikut:\n\n`;
        orderText += `*DATA PEMESAN:*\n`;
        orderText += `- Nama: ${name}\n`;
        orderText += `- No. WA: ${wa}\n`;
        orderText += `- Alamat: ${address}\n\n`;
        
        orderText += `*DETAIL PESANAN:*\n`;
        cart.forEach(item => {
            orderText += `- ${item.name} (${item.qty} Pack) - ${formatRupiah(item.price * item.qty)}\n`;
        });
        
        orderText += `\n*TOTAL TAGIHAN: ${formatRupiah(cartTotal)}*\n`;
        orderText += `*Metode Pembayaran:* ${payment}\n\n`;
        orderText += `Mohon info pembayarannya ya admin. Terima kasih!`;

        const encodedText = encodeURIComponent(orderText);
        // Ganti dengan nomor WhatsApp Toko Asli Anda (Gunakan format awalan 62)
        const adminWhatsApp = "6287780377062"; 
        const waURL = `https://wa.me/${adminWhatsApp}?text=${encodedText}`;

        // Kosongkan keranjang setelah order diklik
        cart = [];
        updateCartUI();
        closeCartModal();
        
        window.open(waURL, '_blank');
    });

});