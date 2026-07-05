'use client';
import { Sidebar } from '@/components/editor/Sidebar';
import { MarkdownPreview } from '@/components/preview/MarkdownPreview';

export default function Home() {
  return (
    <main className="flex h-screen w-screen overflow-hidden bg-[#080808] text-white">
      {/* Editor Sidebar — fixed width */}
      <div className="w-[360px] flex-shrink-0 flex flex-col h-full overflow-hidden">
        <Sidebar />
      </div>

      {/* Resizer */}
      <div className="w-px bg-white/[0.06] flex-shrink-0" />

      {/* Preview Panel — takes remaining space */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <MarkdownPreview />
      </div>
    </main>
  );
}
