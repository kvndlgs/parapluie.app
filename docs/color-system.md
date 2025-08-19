# Color System Documentation

## Overview

This project uses a comprehensive color system built with Tailwind CSS v4, featuring extended color scales, semantic tokens, and full dark mode support. The system is designed for scalability, accessibility, and maintainability.

## Color Scales Available

### Neutral Colors

#### Gray (Primary Neutral)
- **Use for**: General UI elements, text, borders
- **Character**: True neutral, no color bias
- **Classes**: `gray-50` through `gray-950`

```html
<!-- Examples -->
<div class="bg-gray-100 text-gray-900">Content</div>
<button class="border-gray-300 hover:border-gray-400">Button</button>
```

#### Slate (Cool Neutral)
- **Use for**: Tech/digital products, modern interfaces
- **Character**: Cool neutral with subtle blue undertones
- **Classes**: `slate-50` through `slate-950`

```html
<!-- Examples -->
<div class="bg-slate-100 text-slate-900">Tech interface</div>
<nav class="bg-slate-800 text-slate-100">Navigation</nav>
```

#### Zinc (Warm Neutral)
- **Use for**: Warm, approachable interfaces
- **Character**: Warm neutral with subtle warm undertones
- **Classes**: `zinc-50` through `zinc-950`

```html
<!-- Examples -->
<div class="bg-zinc-100 text-zinc-900">Warm interface</div>
<aside class="bg-zinc-200 text-zinc-800">Sidebar</aside>
```

#### Stone (Natural Neutral)
- **Use for**: Natural, organic, lifestyle products
- **Character**: Natural warm neutral
- **Classes**: `stone-50` through `stone-950`

```html
<!-- Examples -->
<div class="bg-stone-100 text-stone-900">Natural feel</div>
<card class="bg-stone-50 border-stone-200">Card</card>
```

### Brand Colors

#### Primary (Blue Scale)
- **Use for**: Primary actions, links, brand elements
- **Classes**: `primary-50` through `primary-950`

```html
<!-- Examples -->
<button class="bg-primary-500 text-white hover:bg-primary-600">Primary Button</button>
<a href="#" class="text-primary-600 hover:text-primary-700">Link</a>
```

#### Secondary (Yellow/Orange Scale)
- **Use for**: Secondary actions, highlights, accents
- **Classes**: `secondary-50` through `secondary-950`

```html
<!-- Examples -->
<button class="bg-secondary-200 text-secondary-900 hover:bg-secondary-300">Secondary Button</button>
<div class="bg-secondary-50 border-secondary-200">Highlight box</div>
```

### Semantic Colors

#### Success (Green Scale)
- **Use for**: Success states, confirmations, positive actions
- **Classes**: `success-50` through `success-950`

```html
<!-- Examples -->
<div class="bg-success-100 text-success-800 border-success-200 p-4 rounded">
  Success message
</div>
<button class="bg-success-600 text-white hover:bg-success-700">Confirm</button>
```

#### Warning (Orange/Yellow Scale)
- **Use for**: Warnings, cautions, attention-needed states
- **Classes**: `warning-50` through `warning-950`

```html
<!-- Examples -->
<div class="bg-warning-100 text-warning-800 border-warning-200 p-4 rounded">
  Warning message
</div>
<button class="bg-warning-500 text-white hover:bg-warning-600">Proceed with Caution</button>
```

#### Error (Red Scale)
- **Use for**: Errors, destructive actions, danger states
- **Classes**: `error-50` through `error-950`

```html
<!-- Examples -->
<div class="bg-error-100 text-error-800 border-error-200 p-4 rounded">
  Error message
</div>
<button class="bg-error-600 text-white hover:bg-error-700">Delete</button>
```

#### Info (Cyan/Blue Scale)
- **Use for**: Informational messages, help text, neutral information
- **Classes**: `info-50` through `info-950`

```html
<!-- Examples -->
<div class="bg-info-100 text-info-800 border-info-200 p-4 rounded">
  Information message
</div>
<button class="bg-info-500 text-white hover:bg-info-600">Learn More</button>
```

## Component Semantic Tokens

The system includes semantic tokens that automatically adapt to light/dark mode:

```html
<!-- These automatically work in both light and dark mode -->
<div class="bg-background text-foreground">Main content</div>
<div class="bg-card text-card-foreground border-border">Card</div>
<button class="bg-primary text-primary-foreground">Primary button</button>
<div class="bg-muted text-muted-foreground">Muted content</div>
```

### Available Semantic Tokens

- `background` / `foreground` - Main page background and text
- `card` / `card-foreground` - Card backgrounds and text
- `popover` / `popover-foreground` - Popover/dropdown backgrounds and text
- `primary` / `primary-foreground` - Primary brand color and its foreground
- `secondary` / `secondary-foreground` - Secondary color and its foreground
- `muted` / `muted-foreground` - Muted/subdued content
- `accent` / `accent-foreground` - Accent color for highlights
- `destructive` / `destructive-foreground` - Destructive actions
- `border` - Default border color
- `input` - Input field borders
- `ring` - Focus ring color

## Dark Mode

The color system fully supports dark mode with automatic color inversion and appropriate contrast adjustments:

```html
<!-- Add dark mode toggle -->
<html class="dark">
  <!-- All colors automatically adapt -->
  <div class="bg-background text-foreground">
    This works in both light and dark mode
  </div>
</html>
```

### Dark Mode Behavior

- Neutral colors automatically invert (light becomes dark, dark becomes light)
- Brand and semantic colors are optimized for dark backgrounds
- Component tokens automatically switch to appropriate dark mode values
- Contrast ratios are maintained for accessibility

## TypeScript Integration

Use the provided TypeScript utilities for type-safe color handling:

```typescript
import { 
  getColorToken, 
  getComponentToken, 
  getTailwindClass,
  commonCombinations 
} from '@/lib/colors'

// Get CSS custom properties
const primaryColor = getColorToken('primary', '500') // var(--color-primary-500)
const background = getComponentToken('background') // var(--color-background)

// Generate Tailwind classes
const buttonClass = getTailwindClass('bg', 'primary', '500') // bg-primary-500

// Use predefined combinations
const textClass = commonCombinations.textOnLight // text-gray-900
```

## Accessibility Guidelines

### Contrast Requirements

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text** (18px+ or 14px+ bold): Minimum 3:1 contrast ratio
- **Enhanced accessibility**: Aim for 7:1 contrast ratio

### Recommended Combinations

#### High Contrast (WCAG AAA)
```html
<div class="bg-gray-50 text-gray-950">Highest contrast</div>
<div class="bg-primary-500 text-white">Primary with white text</div>
<div class="bg-gray-900 text-gray-50">Dark background</div>
```

#### Medium Contrast (WCAG AA)
```html
<div class="bg-gray-100 text-gray-800">Good contrast</div>
<div class="bg-primary-100 text-primary-900">Branded background</div>
```

### Status Colors Accessibility

Use consistent patterns for status indicators:

```html
<!-- Success -->
<div class="bg-success-100 text-success-800 border-success-200">
  Success state with proper contrast
</div>

<!-- Warning -->
<div class="bg-warning-100 text-warning-800 border-warning-200">
  Warning state with proper contrast
</div>

<!-- Error -->
<div class="bg-error-100 text-error-800 border-error-200">
  Error state with proper contrast
</div>

<!-- Info -->
<div class="bg-info-100 text-info-800 border-info-200">
  Info state with proper contrast
</div>
```

## Best Practices

### 1. Choose the Right Neutral

- **Gray**: Default choice for most applications
- **Slate**: Use for tech/digital products
- **Zinc**: Use for warm, friendly interfaces
- **Stone**: Use for natural/organic brands

### 2. Consistent Scale Usage

```html
<!-- Good: Consistent scale progression -->
<div class="bg-gray-50">           <!-- Lightest background -->
  <div class="bg-gray-100">        <!-- Light background -->
    <div class="bg-gray-200">      <!-- Subtle background -->
      <span class="text-gray-600"> <!-- Medium text -->
        Content
      </span>
    </div>
  </div>
</div>

<!-- Avoid: Skipping too many steps -->
<div class="bg-gray-50">
  <span class="text-gray-900">    <!-- Too high contrast jump -->
</div>
```

### 3. Semantic Color Usage

```html
<!-- Good: Use semantic colors for their intended purpose -->
<button class="bg-error-600 text-white">Delete Account</button>
<div class="bg-success-100 text-success-800">Account created successfully</div>

<!-- Avoid: Using semantic colors for non-semantic purposes -->
<button class="bg-error-600 text-white">Save Draft</button> <!-- Wrong context -->
```

### 4. Interactive States

```html
<!-- Provide clear hover/active states -->
<button class="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white">
  Interactive Button
</button>

<!-- Use focus states for accessibility -->
<button class="focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
  Accessible Button
</button>
```

## Migration from Existing Colors

If you're migrating from an existing color system:

1. **Replace direct color values** with semantic tokens where possible
2. **Use the neutral scale** that best matches your brand
3. **Map existing brand colors** to the primary/secondary scales
4. **Update semantic colors** to use the new success/warning/error/info scales

```html
<!-- Before -->
<div class="bg-blue-500 text-white">
<div class="bg-red-100 text-red-800">

<!-- After -->
<div class="bg-primary text-primary-foreground">
<div class="bg-error-100 text-error-800">
```

## Custom Extensions

To add custom colors to the system, extend the CSS custom properties in `globals.css`:

```css
:root {
  /* Add custom brand colors */
  --brand-purple-500: oklch(0.6 0.15 300);
  --brand-teal-500: oklch(0.7 0.12 180);
}

@theme inline {
  /* Make them available in Tailwind */
  --color-brand-purple-500: var(--brand-purple-500);
  --color-brand-teal-500: var(--brand-teal-500);
}
```

## Tools and Resources

- **Color Contrast Checker**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **OKLCH Color Picker**: [OKLCH Color Picker](https://oklch.com/)
- **Accessibility Guidelines**: [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Examples and Patterns

See the `lib/colors.ts` file for TypeScript utilities and helper functions to work with the color system programmatically.