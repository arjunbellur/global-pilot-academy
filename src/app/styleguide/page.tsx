import Link from 'next/link'

export const metadata = {
  title: 'Style Guide - Global Pilot Academy',
  description: 'Design system and component library for Global Pilot Academy website',
}

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-lg bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800 text-white">
        <div className="container text-center">
          <h1 className="text-display mb-4">Style Guide</h1>
          <p className="text-body max-w-3xl mx-auto">
            Global Pilot Academy's design system and component library. This guide showcases our typography, colors, spacing, and components.
          </p>
        </div>
      </section>

      {/* Typography Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-heading mb-8">Typography</h2>

          <div className="space-y-stack">
            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-4">Display Text</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-display">Become a Pilot in Tampa</p>
                    <code className="text-small text-gray-600">.text-display</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-4">Heading Text</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-heading">Programs Overview</p>
                    <code className="text-small text-gray-600">.text-heading</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-4">Body Text</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-body">Structured, hands-on training from Private Pilot to Airline Track with proven graduate success.</p>
                    <code className="text-small text-gray-600">.text-body</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-4">Caption Text</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-caption">Global Pilot Academy • Tampa, FL</p>
                    <code className="text-small text-gray-600">.text-caption</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-heading mb-8">Brand Colors</h2>

          <div className="grid-3">
            <div className="card">
              <div className="card-body">
                <div className="w-full h-20 bg-primary-500 rounded-lg mb-4"></div>
                <h3 className="text-subheading text-white">Primary Blue</h3>
                <p className="text-caption text-white">#1c3faa</p>
                <code className="text-small text-white">primary-500</code>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="w-full h-20 bg-accent-500 rounded-lg mb-4"></div>
                <h3 className="text-subheading">Accent Teal</h3>
                <p className="text-caption text-gray-600">#00b3a4</p>
                <code className="text-small">accent-500</code>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="w-full h-20 bg-gray-900 rounded-lg mb-4"></div>
                <h3 className="text-subheading">Dark Gray</h3>
                <p className="text-caption text-gray-600">#111827</p>
                <code className="text-small">gray-900</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-heading mb-8">Buttons</h2>

          <div className="space-y-stack">
            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-4">Button Sizes</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <button className="btn btn-sm btn-primary">Small Button</button>
                  <button className="btn btn-md btn-primary">Medium Button</button>
                  <button className="btn btn-lg btn-primary">Large Button</button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-4">Button Variants</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <button className="btn btn-md btn-primary">Primary</button>
                  <button className="btn btn-md btn-outline">Outline</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-heading mb-8">Cards</h2>

          <div className="grid-2">
            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-2">Card Title</h3>
                <p className="text-body">This is a standard card component with header, body, and proper spacing.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="text-subheading">Card with Header</h3>
              </div>
              <div className="card-body">
                <p className="text-body">This card has a separate header section and body content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-heading mb-8">Spacing System</h2>

          <div className="space-y-stack">
            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-4">Vertical Spacing</h3>
                <div className="space-y-stack">
                  <div className="bg-primary-100 p-4 rounded">Item 1</div>
                  <div className="bg-primary-100 p-4 rounded">Item 2</div>
                  <div className="bg-primary-100 p-4 rounded">Item 3</div>
                </div>
                <code className="text-small text-gray-600 mt-4 block">.space-y-stack</code>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-subheading mb-4">Horizontal Spacing</h3>
                <div className="flex space-x-inline">
                  <div className="bg-accent-100 p-4 rounded">Item 1</div>
                  <div className="bg-accent-100 p-4 rounded">Item 2</div>
                  <div className="bg-accent-100 p-4 rounded">Item 3</div>
                </div>
                <code className="text-small text-gray-600 mt-4 block">.space-x-inline</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-heading mb-4">Ready to Explore the Site?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Return to the main site to see these components in action.
          </p>
          <Link href="/" className="btn btn-lg btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
