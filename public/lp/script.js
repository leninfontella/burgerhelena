(function () {
  const canvas = document.getElementById("burger-canvas");
  const ctx = canvas.getContext("2d");
  const FRAME_COUNT = 120;
  const framePath = (i) => `/frames/f_${String(i).padStart(3, "0")}.jpg`;

  const images = [];
  let loaded = 0;
  const state = { frame: 0 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    render(state.frame);
  }

  function render(index) {
    const img = images[Math.max(0, Math.min(FRAME_COUNT - 1, index | 0))];
    if (!img || !img.complete) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    // cover-fit
    const ir = img.width / img.height;
    const cr = w / h;
    let dw, dh, dx, dy;
    if (ir > cr) { dh = h; dw = h * ir; dx = (w - dw) / 2; dy = 0; }
    else { dw = w; dh = w / ir; dx = 0; dy = (h - dh) / 2; }
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    img.src = framePath(i);
    img.onload = () => {
      loaded++;
      if (loaded === 1) render(0);
    };
    images.push(img);
  }

  function onScroll() {
    const hero = document.querySelector(".hero");
    const rect = hero.getBoundingClientRect();
    const total = hero.offsetHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / total));
    const frame = progress * (FRAME_COUNT - 1);
    state.frame = frame;
    render(frame);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("scroll", onScroll, { passive: true });
  resize();
  onScroll();
})();