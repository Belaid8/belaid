// ✅ WhatsApp Form Handler (Arabic)
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const phone = "218920226728"; // رقمك بدون +
  const name = document.getElementById('name').value;
  const msg = document.getElementById('message').value;

  const text = `مرحبًا، اسمي ${name}.%0A%0A${msg}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
});

const partsData = {
  apple: ["بطارية", "شاشة", "لوحة أم", "كاميرا خلفية", "زر الهوم"],
  samsung: ["شاشة AMOLED", "بطارية", "كاميرا أمامية", "سماعة أذن"],
  realme: ["لوحة أم", "بطارية", "USB-C منفذ", "كفر خلفي"]
};

let currentBrand = "";
let currentModel = "";

function openModal(brand, model) {
  currentBrand = brand;
  currentModel = model;

  const modal = document.getElementById("modal");
  const title = document.getElementById("modalTitle");
  const list = document.getElementById("modalList");

  title.textContent = `قطع غيار ${brand.toUpperCase()} - ${model}`;
  list.innerHTML = "";

  (partsData[brand] || []).forEach((part, i) => {
    const id = `${brand}-part-${i}`;
    list.innerHTML += `
      <label for="${id}" class="flex items-center gap-2 mb-2">
        <input type="checkbox" id="${id}" name="${brand}-parts" value="${part}" class="accent-blue-600 w-4 h-4">
        <span class="text-gray-800 text-sm">${part}</span>
      </label>
    `;
  });

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

document.getElementById("whatsappModalForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("modalName").value;
  const phoneNum = document.getElementById("modalPhone").value;
  const phone = "218920226728";

  const selected = [...document.querySelectorAll(`input[name="${currentBrand}-parts"]:checked`)]
    .map(cb => cb.value)
    .join(", ");

  const message = `
مرحبًا، اسمي ${name}
رقمي: ${phoneNum}
العلامة: ${currentBrand}
الطراز: ${currentModel}
الأجزاء المطلوبة: ${selected}
  `;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
