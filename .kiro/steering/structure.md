# Project Structure

## File Organization

```
/
├── index.html          # Main HTML entry point
├── script.js           # Interactive behavior and game logic
├── style.css           # All styling and visual design
└── README.md           # Project documentation (currently empty)
```

## Code Organization Patterns

### HTML (index.html)
- Single page structure
- Minimal markup - container with heading and two buttons
- External CSS and JS linked at appropriate locations (CSS in head, JS before closing body)

### JavaScript (script.js)
- Global state management with module-level variables (`yesScale`, `missCount`)
- Event-driven architecture
- Message arrays for dynamic text content
- Separate handlers for desktop (mouseover) and mobile (touchstart) interactions

### CSS (style.css)
- Global reset at top
- Component-based organization (body → container → buttons)
- Utility classes (`.floating` for dynamic positioning)
- Gradient-heavy design aesthetic
- Responsive design with percentage-based widths and viewport units

## Conventions

### Naming
- camelCase for JavaScript variables and functions
- kebab-case for CSS classes
- Descriptive IDs for DOM elements (`yesBtn`, `noBtn`)

### Event Handling
- Desktop and mobile events handled separately
- `preventDefault()` used on mobile to avoid double-triggering

### State Management
- Simple counter-based progression (`missCount`)
- Scale factor for visual growth (`yesScale`)
- Array-based message cycling
