document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  // Responsive configuration
  const config = {
    count: 100, // Default count, will be adjusted based on screen size
    maxDistance: 120,
    speed: 0.5,
    dotColor: '',
    lineColor: '',
    
    // Responsive breakpoints and particle counts
    responsive: [
      { breakpoint: 480, count: 30 },    // Mobile phones
      { breakpoint: 768, count: 50 },    // Tablets
      { breakpoint: 1024, count: 70 },   // Small laptops
      { breakpoint: 1440, count: 100 },  // Standard monitors
      { breakpoint: 1920, count: 120 },  // Large monitors
      { breakpoint: 2560, count: 150 }   // 4K and larger
    ]
  };
  
  // Set particles count based on screen width
  function updateParticleCount() {
    const width = window.innerWidth;
    
    // Find the appropriate breakpoint
    for (let i = 0; i < config.responsive.length; i++) {
      if (width <= config.responsive[i].breakpoint) {
        config.count = config.responsive[i].count;
        return;
      }
    }
    
    // If larger than any breakpoint, use the largest count
    config.count = config.responsive[config.responsive.length - 1].count;
  }
  
  function updateColors() {
    const isDark = document.documentElement.classList.contains('dark');
    config.dotColor = isDark ? 'rgba(70,70,70,0.9)' : 'rgba(0,0,0,0.3)';
    config.lineColor = isDark ? 'rgba(70,70,70,0.9)' : 'rgba(0,0,0,0.3)';
  }
  
  updateColors(); // Set initial color based on theme
  
  const observer = new MutationObserver(() => {
    updateColors();
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Update particle count based on new size
    const oldCount = config.count;
    updateParticleCount();
    
    // Reinitialize particles if count has changed
    if (oldCount !== config.count) {
      initializeParticles();
    }
  }
  
  window.addEventListener('resize', resize);
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * config.speed;
      this.vy = (Math.random() - 0.5) * config.speed;
    }
    
    move() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
      if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = config.dotColor;
      ctx.fill();
    }
  }
  
  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < config.maxDistance) {
          // Calculate opacity based on distance (closer = more opaque)
          const opacity = 1 - (distance / config.maxDistance);
          const color = config.lineColor.replace('0.3', opacity * 0.3);
          
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }
  
  function initializeParticles() {
    particles = Array.from({ length: config.count }, () => new Particle());
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let p of particles) {
      p.move();
      p.draw();
    }
    
    connectParticles();
    requestAnimationFrame(animate);
  }
  
  // Initialize everything
  resize(); // This calls updateParticleCount() internally
  initializeParticles();
  animate();
});