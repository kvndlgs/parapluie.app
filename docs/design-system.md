# Parapluie Design System

A comprehensive design system based on the Anchor Browser website, formatted for Shadcn/UI and Tailwind v4 implementation.

## Color System

### Brand Colors
```css
:root {
  /* Primary Brand */
  --primary: 220 14% 11%;           /* Black/Dark Gray #1c1c1e */
  --primary-foreground: 210 40% 98%; /* White text */
  
  /* Secondary/Accent */
  --accent-coral: 10 90% 75%;       /* Coral/Pink accent #ff9999 */
  --accent-green: 142 76% 36%;      /* Success Green #22c55e */
  --accent-blue: 217 91% 60%;       /* Blue accent #3b82f6 */
  
  /* Neutral Palette */
  --background: 0 0% 96%;           /* Light beige/cream #f5f5f5 */
  --foreground: 220 14% 11%;        /* Dark text */
  --muted: 210 40% 95%;             /* Light gray backgrounds */
  --muted-foreground: 215 16% 47%;   /* Muted text */
  --border: 214 32% 91%;            /* Light borders */
  --card: 0 0% 100%;                /* White cards */
  --card-foreground: 220 14% 11%;   /* Dark text on cards */
}
```

### Usage Examples
```jsx
// Primary brand color
className="bg-primary text-primary-foreground"

// Accent colors
className="bg-[#ff9999]" // Coral accent
className="bg-green-500"  // Success green
className="bg-blue-500"   // Blue accent

// Backgrounds
className="bg-background"  // Main background
className="bg-muted"      // Section backgrounds
className="bg-card"       // Card backgrounds
```

## Typography System

### Font Stack
```css
:root {
  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
```

### Typography Scale
```jsx
// Display/Hero Text
className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight"

// Section Headers
className="text-3xl md:text-4xl font-normal leading-tight"

// Subsection Headers  
className="text-xl md:text-2xl font-normal leading-snug"

// Body Text
className="text-base md:text-lg leading-relaxed"

// Small Text
className="text-sm leading-relaxed"

// Button Text
className="text-sm font-medium"
```

### Font Weights
- `font-normal` (400) - Default for all text
- `font-medium` (500) - Buttons and emphasis
- `font-semibold` (600) - Rare emphasis

## Spacing System

### Container System
```jsx
// Page containers
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Content sections
className="max-w-4xl mx-auto px-4 sm:px-6"

// Narrow content
className="max-w-2xl mx-auto px-4"
```

### Spacing Scale
```jsx
// Vertical spacing between sections
className="py-12 md:py-16 lg:py-20"

// Vertical spacing within sections
className="py-8 md:py-12"

// Small vertical spacing
className="py-4 md:py-6"

// Element spacing
className="space-y-4 md:space-y-6"   // Between elements
className="space-y-2 md:space-y-3"   // Between related items
className="gap-4 md:gap-6"           // Grid/flex gaps
className="gap-8 md:gap-12"          // Larger gaps
```

## Component Patterns

### Hero Section
```jsx
<section className="bg-background py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground">
          Reliable Browser Agents
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg">
          Anchor is the developer platform that turns browser automation infrastructure into a reliable, enterprise-ready solution.
        </p>
        <div className="pt-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Live Playground
          </Button>
        </div>
      </div>
      <div className="relative">
        {/* Decorative element with coral accent */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#ff9999]/20 to-[#ff9999]/5 flex items-center justify-center">
          {/* Content */}
        </div>
      </div>
    </div>
  </div>
</section>
```

### Feature Cards
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {features.map((feature, index) => (
    <Card key={index} className="p-6 md:p-8 border-0 bg-card shadow-sm hover:shadow-md transition-shadow">
      {/* Decorative accent */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9999]/20 to-[#ff9999]/5 mb-6 flex items-center justify-center">
        {feature.icon}
      </div>
      
      <h3 className="text-xl md:text-2xl font-normal mb-4 text-foreground">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        {feature.description}
      </p>
      
      <ul className="space-y-2">
        {feature.points.map((point, i) => (
          <li key={i} className="flex items-center text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
      
      {feature.cta && (
        <div className="mt-6 pt-4 border-t border-border">
          <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto">
            {feature.cta} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </Card>
  ))}
</div>
```

### Pricing Cards
```jsx
<div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
  {plans.map((plan, index) => (
    <Card key={index} className={cn(
      "p-6 md:p-8 text-center border-2 transition-all hover:shadow-lg",
      plan.featured 
        ? "border-primary bg-card shadow-md" 
        : "border-border bg-card"
    )}>
      <div className="space-y-4 md:space-y-6">
        <div>
          <h3 className="text-lg font-medium text-muted-foreground mb-2">
            {plan.name}
          </h3>
          <div className="text-3xl md:text-4xl font-normal text-foreground">
            {plan.price}
          </div>
          {plan.subtitle && (
            <p className="text-sm text-muted-foreground mt-1">
              {plan.subtitle}
            </p>
          )}
        </div>
        
        <ul className="space-y-3 text-sm text-left">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={cn(
            "w-full",
            plan.featured 
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-muted text-foreground hover:bg-muted/80"
          )}
        >
          {plan.cta}
        </Button>
      </div>
    </Card>
  ))}
</div>
```

### Navigation Header
```jsx
<header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
          <span className="text-primary-foreground font-bold">A</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {item}
          </a>
        ))}
      </nav>
      
      {/* CTA */}
      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
        Start for free
      </Button>
    </div>
  </div>
</header>
```

### Section Layout Pattern
```jsx
<section className="py-12 md:py-16 lg:py-20 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-normal leading-tight text-foreground mb-4 md:mb-6">
        Section Title
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Section description goes here
      </p>
    </div>
    
    {/* Section Content */}
    <div className="space-y-8 md:space-y-12">
      {/* Content blocks */}
    </div>
  </div>
</section>
```

## Button Variants

### Primary Buttons
```jsx
// Main CTA buttons
<Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full">
  Get Started
</Button>

// Secondary buttons  
<Button variant="outline" className="border-border text-foreground hover:bg-muted px-6 py-3 rounded-full">
  Learn More
</Button>

// Ghost buttons for CTAs
<Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto">
  Learn more <ArrowRight className="w-4 h-4 ml-2" />
</Button>
```

### Interactive Elements
```jsx
// Form inputs
<Input className="border-border bg-background text-foreground placeholder:text-muted-foreground" />

// Select dropdowns
<Select>
  <SelectTrigger className="border-border bg-background">
    <SelectValue />
  </SelectTrigger>
</Select>

// Sliders
<Slider className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary" />
```

## Layout Utilities

### Grid Systems
```jsx
// Feature grids
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"

// Two column layouts
className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"

// Logo/brand grids
className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60"
```

### Responsive Patterns
```jsx
// Hide on mobile, show on desktop
className="hidden md:flex"

// Mobile-first responsive text
className="text-sm md:text-base lg:text-lg"

// Responsive spacing
className="px-4 sm:px-6 lg:px-8"
className="py-8 md:py-12 lg:py-16"

// Responsive containers
className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
```

## Usage Guidelines

### Brand Elements
- Use coral (#ff9999) sparingly for accents and decorative elements
- Maintain lots of white space for a clean, professional feel
- Use subtle gradients with low opacity for visual interest
- Implement hover states with gentle transitions

### Content Structure  
- Lead with clear, benefit-focused headlines
- Use concise, scannable bullet points
- Include "Learn more" CTAs with arrow icons
- Balance text content with visual elements

### Visual Hierarchy
- Large, readable typography with generous line spacing  
- Clear sectional divisions with ample padding
- Consistent use of cards for grouped content
- Minimal use of borders - rely on spacing and backgrounds

This design system prioritizes clarity, professionalism, and subtle visual interest while maintaining excellent readability and user experience across all devices.