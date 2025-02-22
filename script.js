const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('transition-all');
            mobileMenu.classList.toggle('duration-300');
            mobileMenu.classList.toggle('ease-in-out');
        });

function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabId).classList.add('active');
    
    // Add active class to clicked button
    event.currentTarget.classList.add('active');
}

document.getElementById('faq-container').addEventListener('click', (e) => {
    const clickedQuestion = e.target.closest('.flex');
    if (!clickedQuestion) return;

    const faqItem = clickedQuestion.parentElement;
    const answer = faqItem.querySelector('.overflow-hidden');
    const plusMinus = clickedQuestion.querySelector('span');

    // Close all other FAQs
    document.querySelectorAll('.overflow-hidden').forEach(item => {
        if (item !== answer) {
            item.classList.remove('max-h-48', 'opacity-100');
            item.classList.add('max-h-0', 'opacity-0');
            const otherPlusMinus = item.parentElement.querySelector('span');
            if (otherPlusMinus) otherPlusMinus.textContent = '+';
        }
    });

    // Toggle current FAQ
    if (answer.classList.contains('max-h-0')) {
        answer.classList.remove('max-h-0', 'opacity-0');
        answer.classList.add('max-h-48', 'opacity-100');
        plusMinus.textContent = '−';
    } else {
        answer.classList.remove('max-h-48', 'opacity-100');
        answer.classList.add('max-h-0', 'opacity-0');
        plusMinus.textContent = '+';
    }
});
