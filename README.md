# PixelCraft Studio

> Privacy-first, high-performance in-browser image editing.

PixelCraft Studio is a client-side Single Page Application (SPA) for editing photos directly in the browser. It leverages the HTML5 Canvas API and CSS filters to provide a fast, responsive editing experience without uploading your data to a server.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** Zustand (or React Context)
- **Image Processing:** HTML5 Canvas API

## Features

- ⚡ **Zero Latency:** All processing happens locally on your device.
- 🔒 **Privacy Focused:** No images are ever uploaded to a cloud server.
- 🎨 **Advanced Filters:** Real-time preview of brightness, contrast, saturation, and more.
- ✂️ **Smart Cropping:** Easy-to-use crop tool with aspect ratio presets.
- ↩️ **Undo/Redo:** Full history support to experiment without fear.
- 💾 **High-Res Export:** Save your work in PNG or JPG formats.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pixelcraft-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start editing.

## Documentation

- [TASKLIST.md](./TASKLIST.md) - Tracking of development progress.
- [LEARNINGS.md](./LEARNINGS.md) - Technical insights and architectural decisions.
- [.dev0/RULES.md](./.dev0/RULES.md) - AI coding agent guidelines.