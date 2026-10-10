# Paris — Travel Experience & Smooth Scroll Animation

An immersive travel website featuring an edge-to-edge, GPU-accelerated smooth scroll animation through Paris sunset clouds into the Eiffel Tower.

## Features
- **Cinematic Scroll Animation**: Seamless 600-frame sequence scrubbing with fluid momentum interpolation (`requestAnimationFrame` at 60/120 FPS) from airplane cabin window into Paris sunset clouds and the Eiffel Tower.
- **High-DPI / Retina Optimization**: Automatically scales internal canvas buffers to `window.devicePixelRatio` for razor-sharp pixel clarity.
- **Responsive Edge-to-Edge Cover**: Image rendering dynamically covers the entire viewport on any laptop screen without distortion or letterboxing.
- **Interactive UI & Components**:
  - Hero banner with navigation capsule
  - Trusted brands showcase with architectural iconography
  - Kinetic Studio section with staggered frosted glass capability cards
  - Case study & metrics card with sunset gradient styling
  - Core capabilities section framing the golden Eiffel Tower vista
  - Slide-out mobile menu drawer
  - Interactive "Explore Tours" booking modal with inquiry submission
- **Transparent Layout**: Frosted glassmorphic cards over an unobstructed background sequence.

## Live Preview
Simply open `index.html` in any modern web browser or serve it with any local static server:
```bash
python -m http.server 8080
```
Then visit [http://localhost:8080/](http://localhost:8080/).
