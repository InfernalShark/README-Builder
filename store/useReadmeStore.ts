import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import {
  BlockType,
  ReadmeBlock,
  BlockConfig,
  getDefaultConfig,
} from '@/types/blocks';

interface ReadmeStore {
  username: string;
  blocks: ReadmeBlock[];
  selectedBlockId: string | null;

  // User actions
  setUsername: (name: string) => void;

  // Block management
  addBlock: (type: BlockType) => void;
  removeBlock: (id: string) => void;
  reorderBlocks: (activeId: string, overId: string) => void;
  updateBlockConfig: (id: string, config: Partial<BlockConfig>) => void;
  toggleBlock: (id: string) => void;

  // Selection
  selectBlock: (id: string | null) => void;

  // Reset
  resetWorkspace: () => void;
}

export const useReadmeStore = create<ReadmeStore>((set) => ({
  username: '',
  selectedBlockId: null,
  blocks: [
    {
      id: uuidv4(),
      type: 'wave',
      config: getDefaultConfig('wave'),
      enabled: true,
    },
    {
      id: uuidv4(),
      type: 'hero',
      config: getDefaultConfig('hero'),
      enabled: true,
    },
    {
      id: uuidv4(),
      type: 'techstack',
      config: getDefaultConfig('techstack'),
      enabled: true,
    },
    {
      id: uuidv4(),
      type: 'stats',
      config: getDefaultConfig('stats'),
      enabled: true,
    },
  ],

  setUsername: (name) => set({ username: name }),

  addBlock: (type) =>
    set((state) => ({
      blocks: [
        ...state.blocks,
        {
          id: uuidv4(),
          type,
          config: getDefaultConfig(type),
          enabled: true,
        },
      ],
    })),

  removeBlock: (id) =>
    set((state) => ({
      blocks: state.blocks.filter((b) => b.id !== id),
      selectedBlockId:
        state.selectedBlockId === id ? null : state.selectedBlockId,
    })),

  reorderBlocks: (activeId, overId) =>
    set((state) => {
      const blocks = [...state.blocks];
      const activeIndex = blocks.findIndex((b) => b.id === activeId);
      const overIndex = blocks.findIndex((b) => b.id === overId);
      if (activeIndex === -1 || overIndex === -1) return state;
      const [moved] = blocks.splice(activeIndex, 1);
      blocks.splice(overIndex, 0, moved);
      return { blocks };
    }),

  updateBlockConfig: (id, config) =>
    set((state) => ({
      blocks: state.blocks.map((b) =>
        b.id === id ? { ...b, config: { ...b.config, ...config } } : b
      ),
    })),

  toggleBlock: (id) =>
    set((state) => ({
      blocks: state.blocks.map((b) =>
        b.id === id ? { ...b, enabled: !b.enabled } : b
      ),
    })),

  selectBlock: (id) => set({ selectedBlockId: id }),

  resetWorkspace: () =>
    set({
      selectedBlockId: null,
      blocks: [
        {
          id: uuidv4(),
          type: 'wave',
          config: getDefaultConfig('wave'),
          enabled: true,
        },
        {
          id: uuidv4(),
          type: 'hero',
          config: getDefaultConfig('hero'),
          enabled: true,
        },
        {
          id: uuidv4(),
          type: 'techstack',
          config: getDefaultConfig('techstack'),
          enabled: true,
        },
        {
          id: uuidv4(),
          type: 'stats',
          config: getDefaultConfig('stats'),
          enabled: true,
        },
      ],
    }),
}));
