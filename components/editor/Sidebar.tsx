'use client';
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  GripVertical,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  GitBranch,
  Sparkles,
  Code2,
  BarChart2,
  BookMarked,
  Share2,
  Flame,
  Trophy,
  FileEdit,
  ChevronDown,
  ChevronUp,
  Waves,
  Activity,
} from 'lucide-react';
import { useReadmeStore } from '@/store/useReadmeStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { BlockConfigurator } from '@/components/editor/BlockConfigurator';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { LangToggle } from '@/components/ui/LangToggle';
import { BLOCK_LIBRARY, BlockMeta, BlockType, ReadmeBlock } from '@/types/blocks';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';

// ─── Icon Map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Waves,
  Sparkles,
  Code2,
  BarChart2,
  Activity,
  BookMarked,
  Share2,
  Flame,
  Trophy,
  FileEdit,
};

// ─── Sortable Block Item ──────────────────────────────────────────────────────
function SortableBlockItem({
  block,
  meta,
  isSelected,
}: {
  block: ReadmeBlock;
  meta: BlockMeta | undefined;
  isSelected: boolean;
}) {
  const { removeBlock, toggleBlock, selectBlock } = useReadmeStore();
  const { lang } = useLanguageStore();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  const Icon = meta ? ICON_MAP[meta.icon] : FileEdit;
  const label = t(lang, block.type as Parameters<typeof t>[1]) || meta?.label || block.type;

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => selectBlock(isSelected ? null : block.id)}
      className={cn(
        'group flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer transition-all duration-150',
        isSelected
          ? 'border-indigo-500/60 bg-indigo-500/10 text-white'
          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]',
        !block.enabled && 'opacity-40'
      )}
    >
      {/* Drag handle */}
      <button
        {...attributes}
        {...listeners}
        onClick={(e) => e.stopPropagation()}
        className="text-neutral-600 hover:text-neutral-400 cursor-grab active:cursor-grabbing touch-none"
        aria-label="Drag to reorder"
      >
        <GripVertical size={14} />
      </button>

      {Icon && (
        <div className={cn('flex-shrink-0', isSelected ? 'text-indigo-400' : 'text-neutral-500')}>
          <Icon size={14} />
        </div>
      )}

      <span className={cn('text-sm flex-1 min-w-0 truncate', isSelected ? 'text-neutral-100' : 'text-neutral-300')}>
        {label}
      </span>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => { e.stopPropagation(); toggleBlock(block.id); }}
          className="p-1 text-neutral-500 hover:text-neutral-300 transition-colors"
          aria-label={block.enabled ? t(lang, 'hideBlock') : t(lang, 'showBlock')}
        >
          {block.enabled ? <Eye size={13} /> : <EyeOff size={13} />}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); removeBlock(block.id); }}
          className="p-1 text-neutral-500 hover:text-red-400 transition-colors"
          aria-label={t(lang, 'removeBlock')}
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
}

// ─── Block Library Panel ──────────────────────────────────────────────────────
function BlockLibrary({ onClose }: { onClose: () => void }) {
  const { addBlock, selectBlock } = useReadmeStore();
  const { lang } = useLanguageStore();

  const handleAdd = (type: BlockType) => {
    addBlock(type);
    onClose();
    setTimeout(() => {
      const store = useReadmeStore.getState();
      const last = store.blocks[store.blocks.length - 1];
      if (last) selectBlock(last.id);
    }, 50);
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-xl shadow-2xl p-3">
      <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 px-1">
        {t(lang, 'addBlockTitle')}
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        {BLOCK_LIBRARY.map((meta) => {
          const Icon = ICON_MAP[meta.icon] ?? FileEdit;
          const label = t(lang, meta.type as Parameters<typeof t>[1]) || meta.label;
          const descKey = `${meta.type}Desc` as Parameters<typeof t>[1];
          const desc = t(lang, descKey) || meta.description;
          return (
            <button
              key={meta.type}
              onClick={() => handleAdd(meta.type)}
              className="flex items-start gap-2 p-2.5 rounded-lg border border-white/5 bg-white/[0.03] hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-150 text-left group"
            >
              <Icon size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-neutral-200 group-hover:text-white">{label}</p>
                <p className="text-[10px] text-neutral-600 leading-snug">{desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
export function Sidebar() {
  const { username, setUsername, blocks, selectedBlockId, reorderBlocks, resetWorkspace } = useReadmeStore();
  const { lang } = useLanguageStore();
  const [showLibrary, setShowLibrary] = useState(false);
  const [configOpen, setConfigOpen] = useState(true);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      reorderBlocks(String(active.id), String(over.id));
    }
  };

  const selectedBlock = blocks.find((b) => b.id === selectedBlockId);
  const selectedBlockLabel = selectedBlock
    ? t(lang, selectedBlock.type as Parameters<typeof t>[1])
    : '';

  return (
    <aside className="flex flex-col h-full overflow-hidden bg-[#0a0a0a] border-r border-white/[0.06]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30">
            <GitBranch size={14} className="text-indigo-400" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-white">{t(lang, 'appName')}</h1>
            <p className="text-[10px] text-neutral-600">{t(lang, 'appSubtitle')}</p>
          </div>
        </div>
        {/* Language Toggle */}
        <LangToggle />
      </div>

      {/* Username input */}
      <div className="px-4 py-3 border-b border-white/[0.06]">
        <Input
          label={t(lang, 'githubUsername')}
          id="github-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t(lang, 'usernamePlaceholder')}
          icon={<GitBranch size={13} />}
          hint={t(lang, 'usernameHint')}
        />
      </div>

      {/* Active blocks */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              {t(lang, 'blocks')}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowLibrary((s) => !s)}
              className="gap-1 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 px-2 py-1"
            >
              <Plus size={13} />
              {t(lang, 'addBlock')}
            </Button>
          </div>

          {showLibrary && (
            <div className="mb-3">
              <BlockLibrary onClose={() => setShowLibrary(false)} />
            </div>
          )}

          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
              <div className="flex flex-col gap-1.5">
                {blocks.map((block) => {
                  const meta = BLOCK_LIBRARY.find((m) => m.type === block.type);
                  return (
                    <SortableBlockItem
                      key={block.id}
                      block={block}
                      meta={meta}
                      isSelected={block.id === selectedBlockId}
                    />
                  );
                })}
              </div>
            </SortableContext>
          </DndContext>

          {blocks.length === 0 && (
            <div className="flex flex-col items-center justify-center h-20 text-neutral-700 text-xs gap-1">
              <Sparkles size={16} />
              <span>{t(lang, 'noBlocks')}</span>
            </div>
          )}

          {blocks.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/[0.04] flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (window.confirm(t(lang, 'resetConfirm'))) {
                    resetWorkspace();
                  }
                }}
                className="text-red-400/75 hover:text-red-400 hover:bg-red-500/10 text-xs px-3 py-1.5 gap-1.5"
              >
                <Trash2 size={12} />
                {t(lang, 'resetWorkspace')}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Block Configurator */}
      {selectedBlock && (
        <div className="border-t border-white/[0.06] bg-[#080808]">
          <button
            onClick={() => setConfigOpen((v) => !v)}
            className="flex items-center justify-between w-full px-4 py-2.5 hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              {selectedBlockLabel} {t(lang, 'blockSettings')}
            </span>
            {configOpen ? (
              <ChevronDown size={13} className="text-neutral-600" />
            ) : (
              <ChevronUp size={13} className="text-neutral-600" />
            )}
          </button>
          {configOpen && (
            <div className="overflow-y-auto max-h-72 custom-scrollbar">
              <BlockConfigurator />
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
