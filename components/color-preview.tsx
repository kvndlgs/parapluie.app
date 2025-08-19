'use client'

import React from 'react'
import { colorPalette, type ColorName } from '@/lib/colors'

interface ColorSwatchProps {
  colorName: ColorName
  description?: string
}

function ColorSwatch({ colorName, description }: ColorSwatchProps) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

  return (
    <div className="mb-8">
      <div className="mb-3">
        <h3 className="text-lg font-semibold capitalize text-foreground">
          {colorName}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-11 gap-1 rounded-lg overflow-hidden border border-border">
        {shades.map((shade) => (
          <div key={shade} className="relative group">
            <div
              className={`h-16 w-full bg-${colorName}-${shade} relative`}
              title={`${colorName}-${shade}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-xs font-mono text-white bg-black/50 px-1 rounded">
                  {shade}
                </span>
              </div>
            </div>
            <div className="text-center py-1">
              <span className="text-xs font-mono text-muted-foreground">
                {shade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ColorPreviewProps {
  className?: string
}

export function ColorPreview({ className = '' }: ColorPreviewProps) {
  const neutralColors: ColorName[] = ['slate', 'gray', 'zinc', 'stone']
  const brandColors: ColorName[] = ['primary', 'secondary']
  const semanticColors: ColorName[] = ['success', 'warning', 'error', 'info']

  return (
    <div className={`p-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Color System Preview
          </h1>
          <p className="text-muted-foreground">
            Interactive preview of the complete color palette with all available scales.
            Hover over color swatches to see shade numbers.
          </p>
        </div>

        {/* Neutral Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Neutral Colors
          </h2>
          {neutralColors.map((color) => (
            <ColorSwatch
              key={color}
              colorName={color}
              description={colorPalette.neutral[color as keyof typeof colorPalette.neutral]}
            />
          ))}
        </section>

        {/* Brand Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Brand Colors
          </h2>
          {brandColors.map((color) => (
            <ColorSwatch
              key={color}
              colorName={color}
              description={colorPalette.brand[color as keyof typeof colorPalette.brand]}
            />
          ))}
        </section>

        {/* Semantic Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Semantic Colors
          </h2>
          {semanticColors.map((color) => (
            <ColorSwatch
              key={color}
              colorName={color}
              description={colorPalette.semantic[color as keyof typeof colorPalette.semantic]}
            />
          ))}
        </section>

        {/* Component Tokens Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Component Tokens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Background Examples */}
            <div className="bg-background border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">Background</h3>
              <p className="text-muted-foreground text-sm">
                Main background with automatic dark mode support
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-card-foreground mb-2">Card</h3>
              <p className="text-muted-foreground text-sm">
                Card background with proper contrast
              </p>
            </div>

            <div className="bg-muted border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">Muted</h3>
              <p className="text-muted-foreground text-sm">
                Subdued background for secondary content
              </p>
            </div>

            {/* Button Examples */}
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-card-foreground mb-2">Buttons</h3>
              <div className="space-y-2">
                <button className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-md hover:bg-primary-600 transition-colors">
                  Primary Button
                </button>
                <button className="w-full bg-secondary text-secondary-foreground px-3 py-2 rounded-md hover:bg-secondary-300 transition-colors">
                  Secondary Button
                </button>
                <button className="w-full bg-destructive text-destructive-foreground px-3 py-2 rounded-md hover:bg-error-600 transition-colors">
                  Destructive Button
                </button>
              </div>
            </div>

            {/* Status Examples */}
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-card-foreground mb-2">Status</h3>
              <div className="space-y-2">
                <div className="bg-success-100 text-success-800 border border-success-200 px-3 py-2 rounded-md text-sm">
                  Success message
                </div>
                <div className="bg-warning-100 text-warning-800 border border-warning-200 px-3 py-2 rounded-md text-sm">
                  Warning message
                </div>
                <div className="bg-error-100 text-error-800 border border-error-200 px-3 py-2 rounded-md text-sm">
                  Error message
                </div>
                <div className="bg-info-100 text-info-800 border border-info-200 px-3 py-2 rounded-md text-sm">
                  Info message
                </div>
              </div>
            </div>

            {/* Typography Examples */}
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-card-foreground mb-2">Typography</h3>
              <div className="space-y-1 text-sm">
                <p className="text-foreground">Primary text</p>
                <p className="text-muted-foreground">Muted text</p>
                <p className="text-primary">Primary colored text</p>
                <p className="text-destructive">Destructive text</p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Usage Examples
          </h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-card-foreground mb-4">
              Tailwind Classes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <h4 className="font-semibold text-foreground mb-2 font-sans">
                  Neutral Colors
                </h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>bg-gray-100</li>
                  <li>text-slate-900</li>
                  <li>border-zinc-200</li>
                  <li>hover:bg-stone-50</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 font-sans">
                  Brand & Semantic
                </h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>bg-primary-500</li>
                  <li>text-success-600</li>
                  <li>border-warning-200</li>
                  <li>hover:bg-error-700</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ColorPreview