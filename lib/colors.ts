/**
 * Comprehensive Color System for Tailwind CSS v4
 * 
 * This file provides TypeScript types and utilities for working with
 * the extended color palette defined in globals.css
 */

// Color scale type for consistent shade naming
export type ColorScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

// Neutral color scales available
export type NeutralColorName = 'slate' | 'gray' | 'zinc' | 'stone'

// Brand color scales
export type BrandColorName = 'primary' | 'secondary'

// Semantic color scales
export type SemanticColorName = 'success' | 'warning' | 'error' | 'info'

// All available color scales
export type ColorName = NeutralColorName | BrandColorName | SemanticColorName

// Component semantic tokens
export type ComponentTokenName = 
  | 'background'
  | 'foreground'
  | 'card'
  | 'card-foreground'
  | 'popover'
  | 'popover-foreground'
  | 'primary'
  | 'primary-foreground'
  | 'secondary'
  | 'secondary-foreground'
  | 'muted'
  | 'muted-foreground'
  | 'accent'
  | 'accent-foreground'
  | 'destructive'
  | 'destructive-foreground'
  | 'border'
  | 'input'
  | 'ring'

// Chart color tokens
export type ChartColorName = 'chart-1' | 'chart-2' | 'chart-3' | 'chart-4' | 'chart-5'

// Sidebar color tokens
export type SidebarTokenName =
  | 'sidebar'
  | 'sidebar-foreground'
  | 'sidebar-primary'
  | 'sidebar-primary-foreground'
  | 'sidebar-accent'
  | 'sidebar-accent-foreground'
  | 'sidebar-border'
  | 'sidebar-ring'

/**
 * Color Utility Functions
 */

/**
 * Get a CSS custom property for a color scale
 * @param colorName - The color name (e.g., 'primary', 'gray')
 * @param shade - The shade number (50-950)
 * @returns CSS custom property string
 */
export function getColorToken(colorName: ColorName, shade: keyof ColorScale): string {
  return `var(--color-${colorName}-${shade})`
}

/**
 * Get a CSS custom property for a component token
 * @param tokenName - The component token name
 * @returns CSS custom property string
 */
export function getComponentToken(tokenName: ComponentTokenName): string {
  return `var(--color-${tokenName})`
}

/**
 * Get a CSS custom property for a chart color
 * @param chartName - The chart color name
 * @returns CSS custom property string
 */
export function getChartToken(chartName: ChartColorName): string {
  return `var(--color-${chartName})`
}

/**
 * Get a CSS custom property for a sidebar token
 * @param tokenName - The sidebar token name
 * @returns CSS custom property string
 */
export function getSidebarToken(tokenName: SidebarTokenName): string {
  return `var(--color-${tokenName})`
}

/**
 * Generate Tailwind class name for a color
 * @param property - CSS property (bg, text, border, etc.)
 * @param colorName - The color name
 * @param shade - The shade number
 * @returns Tailwind class name
 */
export function getTailwindClass(
  property: string, 
  colorName: ColorName, 
  shade: keyof ColorScale
): string {
  return `${property}-${colorName}-${shade}`
}

/**
 * Generate Tailwind class name for a component token
 * @param property - CSS property (bg, text, border, etc.)
 * @param tokenName - The component token name
 * @returns Tailwind class name
 */
export function getComponentClass(property: string, tokenName: ComponentTokenName): string {
  return `${property}-${tokenName}`
}

/**
 * Color palette configuration for easy access
 */
export const colorPalette = {
  neutral: {
    slate: 'Slate - Cool neutral with subtle blue undertones',
    gray: 'Gray - True neutral, no color bias',
    zinc: 'Zinc - Warm neutral with subtle warm undertones',
    stone: 'Stone - Natural warm neutral'
  },
  brand: {
    primary: 'Primary brand color - Blue scale',
    secondary: 'Secondary brand color - Yellow/Orange scale'
  },
  semantic: {
    success: 'Success states - Green scale',
    warning: 'Warning states - Orange/Yellow scale',
    error: 'Error/destructive states - Red scale',
    info: 'Informational states - Cyan/Blue scale'
  }
} as const

/**
 * Recommended color combinations for accessibility
 */
export const accessibleCombinations = {
  // High contrast combinations
  highContrast: [
    { background: 'gray-50', text: 'gray-950' },
    { background: 'gray-100', text: 'gray-900' },
    { background: 'gray-900', text: 'gray-50' },
    { background: 'primary-500', text: 'gray-50' },
    { background: 'error-500', text: 'gray-50' },
  ],
  // Medium contrast combinations
  mediumContrast: [
    { background: 'gray-100', text: 'gray-800' },
    { background: 'gray-200', text: 'gray-700' },
    { background: 'primary-100', text: 'primary-900' },
    { background: 'success-100', text: 'success-800' },
  ],
  // Interactive element combinations
  interactive: [
    { default: 'primary-500', hover: 'primary-600', active: 'primary-700' },
    { default: 'secondary-500', hover: 'secondary-600', active: 'secondary-700' },
    { default: 'success-500', hover: 'success-600', active: 'success-700' },
    { default: 'error-500', hover: 'error-600', active: 'error-700' },
  ]
} as const

/**
 * Color system best practices and guidelines
 */
export const colorGuidelines = {
  neutrals: {
    primary: 'gray',
    description: 'Use gray as the primary neutral for most UI elements',
    alternatives: {
      slate: 'Use for tech/digital products that need a cooler feel',
      zinc: 'Use for warm, approachable interfaces',
      stone: 'Use for natural, organic, or lifestyle products'
    }
  },
  semantics: {
    success: 'Use green (success-*) for positive actions, confirmations, and success states',
    warning: 'Use orange/yellow (warning-*) for cautions, warnings, and attention',
    error: 'Use red (error-*) for errors, destructive actions, and danger',
    info: 'Use cyan/blue (info-*) for informational messages and help text'
  },
  contrast: {
    minimum: 'Ensure at least 4.5:1 contrast ratio for normal text',
    enhanced: 'Aim for 7:1 contrast ratio for better accessibility',
    largeText: 'Large text (18px+ or 14px+ bold) needs at least 3:1 contrast'
  }
} as const

/**
 * Helper to validate color combinations for accessibility
 * Note: This is a simplified check. Use tools like WebAIM for accurate testing.
 */
export function validateContrastCombination(
  background: string,
  foreground: string
): 'high' | 'medium' | 'low' {
  // This is a simplified heuristic based on color naming
  const bgNumber = parseInt(background.split('-')[1] || '500')
  const fgNumber = parseInt(foreground.split('-')[1] || '500')
  const contrast = Math.abs(bgNumber - fgNumber)
  
  if (contrast >= 400) return 'high'
  if (contrast >= 200) return 'medium'
  return 'low'
}

/**
 * Export commonly used color combinations as utilities
 */
export const commonCombinations = {
  // Text on backgrounds
  textOnLight: 'text-gray-900',
  textOnDark: 'text-gray-50',
  textMuted: 'text-gray-500',
  textSubtle: 'text-gray-600',
  
  // Backgrounds
  backgroundPrimary: 'bg-background',
  backgroundSecondary: 'bg-muted',
  backgroundCard: 'bg-card',
  
  // Borders
  borderDefault: 'border-border',
  borderMuted: 'border-gray-200',
  borderStrong: 'border-gray-300',
  
  // Interactive elements
  buttonPrimary: 'bg-primary text-primary-foreground hover:bg-primary-600',
  buttonSecondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-300',
  buttonDestructive: 'bg-destructive text-destructive-foreground hover:bg-error-600',
  
  // Status indicators
  statusSuccess: 'bg-success-100 text-success-800 border-success-200',
  statusWarning: 'bg-warning-100 text-warning-800 border-warning-200',
  statusError: 'bg-error-100 text-error-800 border-error-200',
  statusInfo: 'bg-info-100 text-info-800 border-info-200',
} as const