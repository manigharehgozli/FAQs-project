# FAQ Accordion Component

A responsive, accessible, and interactive FAQ accordion built as a solution to the [Frontend Mentor FAQ Accordion challenge](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

This is my very **first project using Tailwind CSS**, and it was an exciting journey to dive into utility-first CSS while practicing vanilla JavaScript DOM manipulation.

### Live Demo
- [View Live on Netlify](https://faqs-project-pro.netlify.app)

### Features
- Smooth expand/collapse animation using JavaScript and CSS transitions
- Only one FAQ item open at a time (accordion behavior)
- Fully responsive design (mobile-first approach)
- Hover and focus states for better interactivity
- Semantic HTML with proper ARIA attributes for accessibility
- Clean, modern UI powered by Tailwind CSS

### What I Learned
This project was a huge learning experience for me, especially because it was my **first time working with Tailwind CSS**.

- **Mastered Tailwind utility classes**: I got really comfortable with classes like `flex`, `grid`, `p-`, `m-`, `bg-`, `text-`, `border-`, `rounded-`, `shadow-`, `transition-`, `hover:`, `focus:`, `group`, `peer`, and many more. Understanding how to combine them quickly without writing custom CSS was a game-changer.
- **Deep dive into JavaScript DOM selection and manipulation**: I learned a ton about selecting elements efficiently:
  - `querySelector` vs `querySelectorAll`
  - `getElementsByClassName` and why it's sometimes faster
  - Using `forEach` on NodeList
  - `classList.toggle()`, `classList.add/remove`
  - `nextElementSibling` and `parentElement` for traversing the DOM
  - Event delegation vs attaching listeners to each item
  - Dynamically changing `max-height` or using `grid-rows` / `hidden` for smooth animations without JS libraries
- **First real Tailwind project**: Before this, I had only played with Tailwind in small snippets. Here I set up `tailwind.config.js`, used `@tailwind` directives in input.css, configured content paths properly, and learned how purge/minify works to keep the final CSS file small.
- **Accessibility basics**: Added `aria-expanded`, `aria-controls`, `role="button"`, and keyboard navigation support.
- **Deployment lessons**: Struggled with paths on GitHub Pages (absolute vs relative), caching issues, and finally moved to Netlify for smoother auto-deploys and better preview branches.

This project helped me go from "I know some JS and CSS" to "I can build interactive, responsive components from scratch with modern tools".

### Tech Stack
- HTML5 (semantic markup)
- Tailwind CSS v3 (utility-first CSS framework)
- Vanilla JavaScript (no frameworks/libraries)
- Deployed on Netlify (with auto-build on push)
