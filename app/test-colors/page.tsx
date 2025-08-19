import { getColorToken, getComponentToken, commonCombinations } from '@/lib/colors'

export default function TestColorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-8">Color System Test</h1>
      
      {/* Test basic color scales */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Color Scales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-primary-100 text-primary-900 p-4 rounded-lg">
            <h3 className="font-semibold">Primary Scale</h3>
            <p className="text-sm">primary-100 background with primary-900 text</p>
          </div>
          <div className="bg-success-100 text-success-800 p-4 rounded-lg">
            <h3 className="font-semibold">Success Scale</h3>
            <p className="text-sm">success-100 background with success-800 text</p>
          </div>
          <div className="bg-warning-100 text-warning-800 p-4 rounded-lg">
            <h3 className="font-semibold">Warning Scale</h3>
            <p className="text-sm">warning-100 background with warning-800 text</p>
          </div>
          <div className="bg-error-100 text-error-800 p-4 rounded-lg">
            <h3 className="font-semibold">Error Scale</h3>
            <p className="text-sm">error-100 background with error-800 text</p>
          </div>
        </div>
      </section>

      {/* Test neutral scales */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Neutral Scales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-100 text-gray-900 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold">Gray</h3>
            <p className="text-sm">True neutral scale</p>
          </div>
          <div className="bg-slate-100 text-slate-900 p-4 rounded-lg border border-slate-200">
            <h3 className="font-semibold">Slate</h3>
            <p className="text-sm">Cool neutral scale</p>
          </div>
          <div className="bg-zinc-100 text-zinc-900 p-4 rounded-lg border border-zinc-200">
            <h3 className="font-semibold">Zinc</h3>
            <p className="text-sm">Warm neutral scale</p>
          </div>
          <div className="bg-stone-100 text-stone-900 p-4 rounded-lg border border-stone-200">
            <h3 className="font-semibold">Stone</h3>
            <p className="text-sm">Natural warm neutral</p>
          </div>
        </div>
      </section>

      {/* Test component tokens */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Component Tokens</h2>
        <div className="space-y-4">
          <div className="bg-card text-card-foreground p-4 rounded-lg border border-border">
            <h3 className="font-semibold">Card Component</h3>
            <p className="text-muted-foreground">This uses semantic card tokens that adapt to light/dark mode automatically.</p>
          </div>
          
          <div className="bg-muted text-muted-foreground p-4 rounded-lg">
            <h3 className="font-semibold text-foreground">Muted Background</h3>
            <p>This uses the muted background token for subdued content.</p>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-600 transition-colors">
              Primary Button
            </button>
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary-300 transition-colors">
              Secondary Button
            </button>
            <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-error-600 transition-colors">
              Destructive Button
            </button>
          </div>
        </div>
      </section>

      {/* Test TypeScript utilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">TypeScript Utilities Test</h2>
        <div className="bg-card text-card-foreground p-4 rounded-lg border border-border">
          <h3 className="font-semibold mb-2">Color Token Functions</h3>
          <ul className="text-sm space-y-1 font-mono">
            <li>getColorToken('primary', '500'): {getColorToken('primary', '500')}</li>
            <li>getComponentToken('background'): {getComponentToken('background')}</li>
          </ul>
          
          <h3 className="font-semibold mb-2 mt-4">Common Combinations</h3>
          <ul className="text-sm space-y-1 font-mono">
            <li>textOnLight: {commonCombinations.textOnLight}</li>
            <li>buttonPrimary: {commonCombinations.buttonPrimary}</li>
          </ul>
        </div>
      </section>

      {/* Test all shade variations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shade Variations</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Primary Scale</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-primary-50 text-primary-950 px-3 py-1 rounded text-sm">50</div>
              <div className="bg-primary-100 text-primary-900 px-3 py-1 rounded text-sm">100</div>
              <div className="bg-primary-200 text-primary-800 px-3 py-1 rounded text-sm">200</div>
              <div className="bg-primary-300 text-primary-700 px-3 py-1 rounded text-sm">300</div>
              <div className="bg-primary-400 text-primary-600 px-3 py-1 rounded text-sm">400</div>
              <div className="bg-primary-500 text-white px-3 py-1 rounded text-sm">500</div>
              <div className="bg-primary-600 text-white px-3 py-1 rounded text-sm">600</div>
              <div className="bg-primary-700 text-white px-3 py-1 rounded text-sm">700</div>
              <div className="bg-primary-800 text-white px-3 py-1 rounded text-sm">800</div>
              <div className="bg-primary-900 text-white px-3 py-1 rounded text-sm">900</div>
              <div className="bg-primary-950 text-white px-3 py-1 rounded text-sm">950</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}