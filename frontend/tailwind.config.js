/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Requested Palette
                primary: '#6366f1',   // Indigo
                secondary: '#1e293b', // Slate
                accent: '#f97316',    // Orange
                success: '#22c55e',   // Green
                error: '#ef4444',     // Red
                warning: '#eab308',   // Yellow
                background: '#f9fafb',// Light Gray

                // Compatibility Aliases (mapping old usage to new system where appropriate)
                'primary-indigo': '#6366f1', // Mapped to Primary
                'electric-blue': '#2563EB',  // Kept as specific blue for gradients
                'accent-orange': '#f97316',  // Mapped to Accent
            },
        },
    },
    plugins: [],
}
