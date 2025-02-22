const beeyanBox = document.getElementById('beeyanBox');
const srushtiBox = document.getElementById('srushtiBox');
const initialBoxes = document.getElementById('initialBoxes');
const stickyHeader = document.getElementById('stickyHeader');
const beeyanContent = document.getElementById('beeyanContent');
const srushtiContent = document.getElementById('srushtiContent');
const beeyanHeader = document.getElementById('beeyanHeader');
const srushtiHeader = document.getElementById('srushtiHeader');
const beeyanFrame = document.getElementById('beeyanFrame');
const srushtiFrame = document.getElementById('srushtiFrame');

let currentSite = null;

function morphToHeader() {
    initialBoxes.style.display = 'none';
    stickyHeader.classList.add('header-visible');
}

function showContent(site) {
    if (currentSite === site) return;
    
    // Hide current content if any
    if (currentSite) {
        document.getElementById(`${currentSite}Content`).classList.remove('content-visible');
    }
    
    // Show new content
    document.getElementById(`${site}Content`).classList.add('content-visible');
    currentSite = site;
}

beeyanBox.addEventListener('click', () => {
    morphToHeader();
    showContent('beeyan');
    beeyanFrame.srcdoc = document.querySelector('document[index="2"] document_content').textContent;
});

srushtiBox.addEventListener('click', () => {
    morphToHeader();
    showContent('srushti');
    srushtiFrame.srcdoc = document.querySelector('document[index="1"] document_content').textContent;
});

beeyanHeader.addEventListener('click', () => {
    showContent('beeyan');
    if (!beeyanFrame.srcdoc) {
        beeyanFrame.srcdoc = document.querySelector('document[index="2"] document_content').textContent;
    }
});

srushtiHeader.addEventListener('click', () => {
    showContent('srushti');
    if (!srushtiFrame.srcdoc) {
        srushtiFrame.srcdoc = document.querySelector('document[index="1"] document_content').textContent;
    }
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