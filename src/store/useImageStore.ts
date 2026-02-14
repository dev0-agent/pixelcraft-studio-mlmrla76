import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Adjustments {
  brightness: number;
  contrast: number;
  saturation: number;
  blur: number;
  hueRotate: number;
  sepia: number;
  grayscale: number;
  rotation: number;
}

export interface Crop {
  x: number;
  y: number;
  width: number;
  height: number;
  aspect?: number;
  unit: 'px' | '%';
}

interface HistoryState {
  adjustments: Adjustments;
  crop: Crop | null;
}

interface ImageState {
  originalImageSrc: string | null;
  currentImageSrc: string | null;
  
  adjustments: Adjustments;
  crop: Crop | null;
  zoom: number;
  
  history: {
    past: HistoryState[];
    future: HistoryState[];
  };

  // Actions
  setImage: (src: string) => void;
  setAdjustments: (adjustments: Partial<Adjustments>) => void;
  setCrop: (crop: Crop | null) => void;
  setZoom: (zoom: number) => void;
  
  // History Actions
  pushToHistory: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  
  reset: () => void;
}

const DEFAULT_ADJUSTMENTS: Adjustments = {
  brightness: 1,
  contrast: 1,
  saturation: 1,
  blur: 0,
  hueRotate: 0,
  sepia: 0,
  grayscale: 0,
  rotation: 0,
};

const DEFAULT_CROP: Crop | null = null;
const DEFAULT_ZOOM = 1;

export const useImageStore = create<ImageState>()(
  devtools(
    (set, get) => ({
      originalImageSrc: null,
      currentImageSrc: null,
      
      adjustments: DEFAULT_ADJUSTMENTS,
      crop: DEFAULT_CROP,
      zoom: DEFAULT_ZOOM,
      
      history: {
        past: [],
        future: [],
      },

      setImage: (src: string) => {
        set({ 
          originalImageSrc: src, 
          currentImageSrc: src,
          adjustments: DEFAULT_ADJUSTMENTS,
          crop: DEFAULT_CROP,
          zoom: DEFAULT_ZOOM,
          history: { past: [], future: [] }
        });
      },

      setAdjustments: (newAdjustments) => {
        set((state) => ({
          adjustments: { ...state.adjustments, ...newAdjustments }
        }));
      },

      setCrop: (newCrop) => {
        set({ crop: newCrop });
      },

      setZoom: (newZoom) => {
        set({ zoom: newZoom });
      },

      pushToHistory: () => {
        const { adjustments, crop, history } = get();
        const snapshot: HistoryState = {
          adjustments: { ...adjustments },
          crop: crop ? { ...crop } : null,
        };

        set({
          history: {
            past: [...history.past, snapshot],
            future: [],
          },
        });
      },

      undo: () => {
        const { history, adjustments, crop } = get();
        if (history.past.length === 0) return;

        const previous = history.past[history.past.length - 1];
        const newPast = history.past.slice(0, -1);

        const currentSnapshot: HistoryState = {
          adjustments: { ...adjustments },
          crop: crop ? { ...crop } : null,
        };

        set({
          adjustments: previous.adjustments,
          crop: previous.crop,
          history: {
            past: newPast,
            future: [currentSnapshot, ...history.future],
          },
        });
      },

      redo: () => {
        const { history, adjustments, crop } = get();
        if (history.future.length === 0) return;

        const next = history.future[0];
        const newFuture = history.future.slice(1);

        const currentSnapshot: HistoryState = {
          adjustments: { ...adjustments },
          crop: crop ? { ...crop } : null,
        };

        set({
          adjustments: next.adjustments,
          crop: next.crop,
          history: {
            past: [...history.past, currentSnapshot],
            future: newFuture,
          },
        });
      },
      
      canUndo: () => get().history.past.length > 0,
      canRedo: () => get().history.future.length > 0,

      reset: () => {
        const { originalImageSrc } = get();
        if (!originalImageSrc) return;
        
        // Push current state to history before resetting? 
        // Or just reset everything including history?
        // Usually reset clears everything to initial state, but keeping history might be nice.
        // For now, let's treat 'reset' as "revert to original image state" but keep the image loaded.
        
        // If we want to support undoing the reset, we should push to history first.
        // Let's assume reset is a destructive action that clears edits.
        // Prompt says: "Reset All' button to revert image to original state"
        
        set({
          adjustments: DEFAULT_ADJUSTMENTS,
          crop: DEFAULT_CROP,
          zoom: DEFAULT_ZOOM,
          // We might want to keep history? or clear it?
          // If we clear history, we can't undo the reset.
          // Let's push a snapshot before resetting if we want to be fancy,
          // but for now I'll just reset the values.
        });
      },
    }),
    { name: 'ImageStore' }
  )
);
