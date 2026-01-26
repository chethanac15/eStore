# eStore Design System

## Color Palette

This project uses a custom color palette configured in Tailwind CSS.

| Role | Color Name | Hex Code | Purpose |
|------|------------|----------|---------|
| **Primary** | `primary` | `#6366f1` | Main brand color (Indigo), used for primary buttons, active states, and headings. |
| **Secondary** | `secondary` | `#1e293b` | Secondary brand color (Slate), used for dark backgrounds, footer, and secondary text. |
| **Accent** | `accent` | `#f97316` | Accent color (Orange), used for call-to-action buttons, highlights, and promotional elements. |
| **Success** | `success` | `#22c55e` | Used for success messages, completion states, and positive indicators. |
| **Error** | `error` | `#ef4444` | Used for error messages, destructive actions, and alerts. |
| **Warning** | `warning` | `#eab308` | Used for warnings and attention-grabbing notices. |
| **Background** | `background` | `#f9fafb` | Default page background (Light Gray) for contrast against white content areas. |

## Typography

- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Base Size**: 16px
- **Line Height**: 1.6

## Usage

Use these colors in your Tailwind classes:

- Backgrounds: `bg-primary`, `bg-accent`, `bg-background`
- Text: `text-primary`, `text-secondary`, `text-error`
- Borders: `border-success`, `border-warning`

Example:
```jsx
<button className="bg-primary text-white hover:bg-opacity-90">
  Click Me
</button>
```
