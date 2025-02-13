document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', (event) => {
      const productCard = event.target.parentElement;
      const stockElement = productCard.querySelector('p:nth-child(4)');
      let stock = parseInt(stockElement.innerText.replace('Stok : ', ''));
  
      if (stock > 0) {
        stock -= 1;
        stockElement.innerText = `Stok : ${stock}`;
        alert(`Pesanan Anda telah ditambahkan!`);
      } else {
        alert(`Maaf, stok habis.`);
      }
    });
  });

  document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Terima kasih atas saran Anda!');
      this.reset(); // Bersihkan form setelah pengiriman
    } else {
      alert('Harap lengkapi semua kolom.');
    }
  });
  
  