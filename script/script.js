
  document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Replace with your full WhatsApp number (with country code, no + or spaces)
    const phone = "218920226728";

    // Get input values
    const name = document.getElementById('name').value;
    const msg = document.getElementById('message').value;

    // Format message
    const text = `Hello, my name is ${name}. %0A%0A${msg}`;

    // Create WhatsApp URL
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp
    window.open(url, '_blank');
  });

