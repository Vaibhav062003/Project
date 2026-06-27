#comment 

document.addEventListener('DOMContentLoaded', function () {
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    var statusMessage = document.getElementById('statusMessage');
    var buyNowButton = document.getElementById('buy-now');
    var learnMoreButton = document.getElementById('learn-more');
    var ctaButton = document.getElementById('ctaButton');

    function updateStatus(message) {
        if (statusMessage) {
            statusMessage.textContent = message;
        }
    }

    if (buyNowButton) {
        buyNowButton.addEventListener('click', function () {
            updateStatus('Purchase flow is not live in this demo, but your local page is ready.');
        });
    }

    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function () {
            document.getElementById('sound')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
