# Technology Stack

## Core Technologies
- **HTML5**: Semantic markup with viewport configuration for responsive design
- **CSS3**: Modern styling with gradients, flexbox, transitions, and responsive units
- **Vanilla JavaScript**: No frameworks or build tools - pure ES6+ JavaScript

## Architecture
- Single-page application (SPA) with no backend
- Static file serving - can be hosted on any web server or CDN
- Client-side only - no server-side processing required

## Browser APIs Used
- DOM manipulation
- Event listeners (mouseover, touchstart, click)
- Window dimensions for dynamic positioning

## Development Workflow

### Running Locally
```bash
# Option 1: Python simple server
python -m http.server 8000

# Option 2: Node.js http-server (if installed)
npx http-server

# Option 3: VS Code Live Server extension
# Right-click index.html and select "Open with Live Server"
```

Then open `http://localhost:8000` in your browser.

### No Build Process
This project requires no compilation, transpilation, or bundling. Files are served directly to the browser.

### Testing
Manual testing in browser - no automated test suite currently exists.
Test on both desktop (mouseover) and mobile (touchstart) devices.
