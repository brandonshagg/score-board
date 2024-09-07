class Confetti {
    constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.particleCount = 100; // Reduced particle count
      this.gravity = 0.8; // Increased gravity
      this.terminate = false;
      this.colors = ['#f54242', '#42f554', '#4242f5', '#f5f542', '#f542f5', '#42f5f5'];
      this.duration = 1500; // Animation duration in milliseconds
      this.startTime = null;
    }
  
    init() {
      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '1000';
      document.body.appendChild(this.canvas);
  
      this.resizeCanvas();
      window.addEventListener('resize', () => this.resizeCanvas());
  
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push(this.createParticle());
      }
  
      this.startTime = performance.now();
      this.animate();
    }
  
    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  
    createParticle() {
      return {
        x: Math.random() * this.canvas.width,
        y: -20, // Start above the viewport
        size: Math.random() * 5 + 5,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        speed: Math.random() * 5 + 2, // Increased speed
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * 2 * Math.PI,
        rotationSpeed: Math.random() * 0.2 - 0.1,
      };
    }
  
    animate(currentTime) {
      if (!this.startTime) this.startTime = currentTime;
      const elapsedTime = currentTime - this.startTime;
  
      if (elapsedTime > this.duration || this.terminate) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        document.body.removeChild(this.canvas);
        return;
      }
  
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      for (let particle of this.particles) {
        particle.y += particle.speed;
        particle.x += Math.sin(particle.angle) * 2;
        particle.rotation += particle.rotationSpeed;
  
        // Apply gravity
        particle.speed += this.gravity * 0.1;
  
        // Fade out particles
        const opacity = 1 - (elapsedTime / this.duration);
  
        this.ctx.save();
        this.ctx.translate(particle.x, particle.y);
        this.ctx.rotate(particle.rotation);
        this.ctx.fillStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
        this.ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        this.ctx.restore();
      }
  
      requestAnimationFrame((time) => this.animate(time));
    }
  }
  
  function triggerConfetti() {
    const confetti = new Confetti();
    confetti.init();
  }
  
  // Add event listener to the New Game button
  document.addEventListener('DOMContentLoaded', () => {
    const newGameButton = document.getElementById('new-game');
    if (newGameButton) {
      newGameButton.addEventListener('click', triggerConfetti);
    }
  });