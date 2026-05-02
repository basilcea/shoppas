# Design System Specification: The Operational Aesthetic

## 1. Overview & Creative North Star
This design system is built for the "Mobile-First Operator." It rejects the cluttered complexity of traditional e-commerce in favor of **Functional Sophistication**. 

**Creative North Star: The Digital Concierge**
Our aesthetic is defined by "The Digital Concierge"—a philosophy that prioritizes hyper-clarity, quiet confidence, and tactile depth. We break the "generic template" look by utilizing intentional white space and **Tonal Layering**. Instead of boxes and lines, we use light and depth to guide the user. The experience should feel as organized as a Notion workspace, as reliable as an Uber map, and as effortless as a WhatsApp thread.

---

## 2. Color & Surface Philosophy
The palette is rooted in a deep, professional Emerald (`primary: #005147`). It is designed to feel authoritative yet organic.

### The "No-Line" Rule
To achieve a premium, high-end feel, **1px solid borders are strictly prohibited for sectioning.** 
*   **The Law:** Boundaries must be defined solely through background color shifts.
*   **Execution:** Use `surface-container-low` for secondary sections sitting on a `surface` background. This creates a "molded" look rather than a "drawn" look.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of heavy, matte cardstock.
*   **Base:** `surface` (#f8f9fa)
*   **Sectioning:** `surface-container-low` (#f3f4f5) for large groupings.
*   **Interactive Elements:** `surface-container-lowest` (#ffffff) for cards and inputs to make them "pop" forward.
*   **Elevated Overlays:** `surface-container-highest` (#e1e3e4) for persistent bottom sheets or navigation bars.

### The "Glass & Gradient" Rule
Flatness is the enemy of premium design. 
*   **CTAs:** Use a subtle linear gradient for primary buttons, transitioning from `primary` (#005147) to `primary_container` (#006b5e). This adds "soul" and a slight 3D curvature.
*   **Floating Elements:** Use Glassmorphism for top navigation bars. Apply `surface` at 80% opacity with a `20px` backdrop-blur. This allows the content colors to bleed through, softening the interface.

---

## 3. Typography
We employ a dual-font strategy to balance character with readability.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech-editorial" vibe. Use `headline-lg` for impactful category headers.
*   **Body & Labels (Inter):** The workhorse. Inter provides maximum legibility at small sizes. Use `body-lg` (1rem) as the standard for high readability in operational tasks.

**Typography as Brand:** 
Hierarchy is achieved through drastic scale shifts. A `display-sm` headline paired with a `label-md` caption creates an editorial "magazine" feel that elevates simple product listings into curated selections.

---

## 4. Elevation & Depth
We convey hierarchy through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The contrast in brightness creates a soft, natural lift without the "dirty" look of grey shadows.
*   **Ambient Shadows:** If a shadow is required (e.g., for a floating Action Button), it must be "Ambient."
    *   **Blur:** 24px - 40px
    *   **Opacity:** 4-6%
    *   **Color:** Use a tinted version of `on-surface` (dark emerald-grey) to mimic natural light.
*   **The Ghost Border Fallback:** Only for high-density data tables where tonal shifts fail. Use `outline-variant` at **15% opacity**. Never 100%.

---

## 5. Components

### Buttons
*   **Primary:** Gradient (`primary` to `primary_container`), `xl` (1.5rem) rounded corners. Large 56px touch target for mobile-first efficiency.
*   **Secondary:** `secondary_container` background with `on_secondary_container` text. No border.
*   **Tertiary:** Ghost style. `on_surface` text with no background.

### Cards & Lists
*   **Forbid Divider Lines:** Separate list items using 12px of vertical white space or alternating subtle background tints (`surface` vs `surface-container-low`).
*   **Nesting:** Place product cards (`surface-container-lowest`) inside a category container (`surface-container-low`).

### Input Fields
*   **Style:** Filled containers using `surface-container-highest` with a bottom-only "active" indicator in `primary`.
*   **Roundedness:** `md` (0.75rem) to maintain an organized, modern look.

### Additional Signature Component: "The Status Sheet"
*   A persistent, low-profile status bar at the top of the PWA that uses `tertiary_container` for non-intrusive updates (e.g., "Order Processing"). It uses a `surface_variant` backdrop blur to feel integrated into the header.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use "Breathing Room." If a layout feels cramped, double the spacing token rather than adding a divider.
*   **DO** use `primary_fixed` for subtle highlight backgrounds in active states (e.g., selected navigation items).
*   **DO** ensure all touch targets are at least 48x48px, even if the visual element is smaller.

### Don't:
*   **DON'T** use pure black (#000000) for text. Use `on_surface` (#191c1d) to maintain the sophisticated emerald-grey tone.
*   **DON'T** use default Material shadows. They are too aggressive for this "soft minimal" system.
*   **DON'T** mix corner radii. Stick to `xl` (1.5rem) for large containers and `md` (0.75rem) for smaller elements like chips and inputs. Consistency is the key to the "Operational" vibe.

---

## 7. Token Values Summary
| Token | Value | Usage |
| :--- | :--- | :--- |
| `primary` | #005147 | Main Actions, Branding |
| `surface` | #f8f9fa | Main Background |
| `surface-container-low` | #f3f4f5 | Section backgrounds |
| `surface-container-lowest` | #ffffff | Card & Input backgrounds |
| `radius-xl` | 1.5rem | Main Cards, Bottom Sheets |
| `radius-md` | 0.75rem | Buttons, Inputs |
| `shadow-ambient` | 0 20px 40px rgba(25, 28, 29, 0.06) | Floating Elements |