// Main JS logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site initialized');

    // Countdown Timer logic
    const setupTimer = () => {
        const hoursEl = document.querySelector('[data-testid="text-hours"]');
        const minutesEl = document.querySelector('[data-testid="text-minutes"]');
        const secondsEl = document.querySelector('[data-testid="text-seconds"]');

        if (!hoursEl) return;

        let timeLeft = (1 * 3600) + (34 * 60) + 16; // 01:34:16 from the source

        setInterval(() => {
            if (timeLeft <= 0) return;
            timeLeft--;

            const h = Math.floor(timeLeft / 3600);
            const m = Math.floor((timeLeft % 3600) / 60);
            const s = timeLeft % 60;

            hoursEl.textContent = String(h).padStart(2, '0');
            minutesEl.textContent = String(m).padStart(2, '0');
            secondsEl.textContent = String(s).padStart(2, '0');
        }, 1000);
    };

    setupTimer();

    // FAQ Toggle
    window.toggleFaq = (id) => {
        const answer = document.getElementById(`faq-answer-${id}`);
        const icon = document.getElementById(`faq-icon-${id}`);
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            answer.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    };

    // Purchase Notifications
    const names = ['Ana Paula', 'Carlos Silva', 'Beatriz Oliveira', 'Ricardo Santos', 'Mariana Costa', 'Fernando Lima', 'Patrícia Souza', 'Juliana Costa'];
    const plans = ['Plano Básico', 'Plano Premium', 'Plano Premium'];
    const cities = ['São Paulo - SP', 'Rio de Janeiro - RJ', 'Belo Horizonte - MG', 'Curitiba - PR', 'Porto Alegre - RS', 'Salvador - BA', 'Fortaleza - CE', 'Brasília - DF'];

    const showNotification = () => {
        const notif = document.getElementById('purchase-notification');
        const nameEl = document.getElementById('notif-name');

        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomPlan = plans[Math.floor(Math.random() * plans.length)];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];

        nameEl.innerHTML = `${randomName} <span class="text-[10px] font-normal text-gray-400 ml-1">(${randomCity})</span>`;
        // Update plan text if needed using innerHTML or more IDs

        notif.classList.remove('translate-y-20', 'opacity-0');

        setTimeout(() => {
            notif.classList.add('translate-y-20', 'opacity-0');
        }, 5000);
    };

    window.closeNotification = () => {
        const notif = document.getElementById('purchase-notification');
        notif.classList.add('translate-y-20', 'opacity-0');
    };

    // Show notification every 15-30 seconds
    setInterval(() => {
        showNotification();
    }, 20000);

    // Initial delay
    setTimeout(showNotification, 3000);
});
