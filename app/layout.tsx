@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
  --background: #f8fafc;
  --foreground: #020817;
}

html.dark {
  color-scheme: dark;
  --background: #050816;
  --foreground: #f8fafc;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Space Grotesk", sans-serif;
}

* {
  box-sizing: border-box;
}

::selection {
  background: rgba(139, 92, 246, 0.28);
}

html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.06);
}

html::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.7);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
