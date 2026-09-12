// Ambient hero backdrop — glowing orange motes drifting on slow, independent paths
(function () {
  const canvas = document.getElementById("hero-canvas")
  if (!canvas) return
  const ctx = canvas.getContext("2d")
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  let w, h, dpr
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = canvas.clientWidth
    h = canvas.clientHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  const COUNT = 8
  const palette = ["255,154,64", "249,115,22", "234,88,12", "251,191,36"]
  const motes = Array.from({ length: COUNT }, (_, i) => ({
    x: Math.random(),
    y: Math.random(),
    r: 110 + Math.random() * 190,
    color: palette[i % palette.length],
    speedX: (Math.random() - 0.5) * 0.0001,
    speedY: (Math.random() - 0.5) * 0.00008,
    phase: Math.random() * Math.PI * 2,
  }))

  function draw(t) {
    ctx.clearRect(0, 0, w, h)
    for (const m of motes) {
      const drift = reduceMotion ? 0 : t
      const x = ((m.x + m.speedX * drift + 1) % 1) * w
      const y = (m.y + Math.sin(m.phase + drift * 0.00004) * 0.05) * h
      const grad = ctx.createRadialGradient(x, y, 0, x, y, m.r)
      grad.addColorStop(0, `rgba(${m.color},0.18)`)
      grad.addColorStop(0.5, `rgba(${m.color},0.06)`)
      grad.addColorStop(1, `rgba(${m.color},0)`)
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(x, y, m.r, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  resize()
  window.addEventListener("resize", resize)

  if (reduceMotion) {
    draw(0)
    return
  }

  let raf
  function loop(t) {
    draw(t)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf)
    else raf = requestAnimationFrame(loop)
  })
})()
