// public/particles/particles-network.js

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const config = {
  count: 50,
  maxDistance: 120,
  speed: 0.7,
  dotColor: 'rgba(255,255,255,0.5)',
  lineColor: 'rgba(255,255,255,0.4)'
};

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

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

    // bounce
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
  for (let i = 0; i < config.count; i++) {
    for (let j = i + 1; j < config.count; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.maxDistance) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = config.lineColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
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

// Initialize
particles = Array.from({ length: config.count }, () => new Particle());
animate();
