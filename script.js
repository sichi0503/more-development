document.addEventListener('DOMContentLoaded', () => {
    // ✅ 初始化 AOS
    AOS.init({
      duration: 1000,
      once: false
    });

    // ✅ Hero 動畫
    gsap.to(".text-container span", {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      ease: "back.out(1.7)",
      stagger: 0.12,
      duration: 1.2
    });

    // ✅ Hero 滑鼠浮動效果
    const textContainer = document.getElementById('text');
    if (textContainer) {
      document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        textContainer.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });
    }

    // ✅ Hero 垂直線隨捲動延伸
    const line = document.getElementById('line');
    if (line) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        line.style.height = 200 + scrollY * 0.5 + 'px';
      });
    }

    // ✅ 商品產生器
    const products = [
      { name: 'A+A', price: 100, image: './image/a-a.jpg' },
      { name: 'B+A', price: 110, image: './image/b-a.png' },
      { name: 'C+A', price: 120, image: './image/c-a.jpg' },
      { name: 'B+B', price: 130, image: './image/b-b.jpg' },
      { name: 'C+B', price: 140, image: './image/c-b.jpg' },
      { name: 'C+C', price: 150, image: './image/c-c.jpg' }
    ];

    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
      products.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}" style="width: 100%; max-width: 200px; border-radius: 8px; margin-bottom: 10px;">
          <div class="combo-name">${product.name}</div>
          <button class="add-button" onclick="addToCart('${product.name}', ${product.price})">Add to list</button>
        `;
        productGrid.appendChild(itemDiv);
      });
    }
  });