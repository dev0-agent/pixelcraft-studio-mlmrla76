# Task List

This file shows the current progress of all tasks in this project.
It is automatically updated by dev0 as tasks are completed.

---

## Phase 1

- [ ] ⏳ **Project Scaffold & Layout**
  Create the main application layout shell. It should feature a top header (logo, export actions), a left sidebar (tools/filters navigation), a right sidebar (adjustment sliders), and a central main area for the canvas. Use a responsive grid or flexbox layout.

- [ ] ⏳ **Image State Management Store**
  Set up a global store (using Zustand or React Context) to manage the application state. It needs to track: `originalImageSrc`, `currentImageSrc` (for preview), `adjustments` object (brightness, contrast, etc.), `crop` data, `zoom` level, and `history` stack. Define the initial default values.

- [ ] ⏳ **Image Upload Component**
  Implement a drag-and-drop file uploader in the center of the screen. It should accept image files (png, jpg, webp), read them via FileReader, and set the `originalImageSrc` in the global store. Include error handling for non-image files.

## Phase 2

- [ ] ⏳ **Canvas Workspace & Zoom/Pan**
  Create the main workspace component that displays the uploaded image. Implement Zoom (mouse wheel) and Pan (drag) functionality using CSS transforms (scale/translate) on a wrapper div to ensure smooth performance. The image should center itself on load.

- [ ] ⏳ **Adjustment Sliders UI**
  Build the UI for manual image adjustments. Create reusable slider components for: Brightness, Contrast, Saturation, Blur, and Hue Rotate. Connect these sliders to the global store.

- [ ] ⏳ **Real-time CSS Filter Preview**
  Connect the adjustment values from the store to the main image display. Generate a computed CSS `filter` string (e.g., `brightness(1.2) contrast(1.1)`) and apply it to the image element so users see changes instantly.

- [ ] ⏳ **Filter Presets System**
  Implement a 'Presets' tab. Define a collection of preset configurations (e.g., 'Vintage' = low saturation + sepia). Create thumbnail buttons that apply these specific values to the global store when clicked.

- [ ] ⏳ **Cropping Interaction Logic**
  Implement the cropping UI overlay. Users should be able to define a crop rectangle over the image. You may use a library like `react-easy-crop` or build a custom overlay. Store the crop coordinates (x, y, width, height) in the state.

## Phase 3

- [ ] ⏳ **Undo/Redo History Engine**
  Implement the logic to push state snapshots to a history array whenever an adjustment ends (on slider release). Add Undo/Redo buttons to the header that traverse this history stack.

- [ ] ⏳ **Final Canvas Rendering & Export**
  Implement the 'Download' functionality. This requires creating an off-screen HTML5 Canvas. Draw the original image, apply the crop coordinates, and apply the filters using `ctx.filter`. Convert the canvas to a Blob and trigger a file download.

## Phase 4

- [ ] ⏳ **Reset & Clear Functionality**
  Add a 'Reset All' button to revert image to original state, and a 'Close Image' button to return to the upload screen. Ensure memory is cleared properly.

- [ ] ⏳ **UI Polish & Animations**
  Add smooth transitions for sidebar toggling and slider movements. Ensure the layout handles window resizing gracefully. Add tooltips to icon-only buttons.

---

_Last updated by dev0 automation_
