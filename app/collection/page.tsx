import { Suspense } from 'react';
import CollectionContent from './CollectionContent';

export default function CollectionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="text-stone-400 text-sm font-medium tracking-widest animate-pulse">
            Loading collection...
          </div>
        </div>
      }
    >
      <CollectionContent />
    </Suspense>
  );
}
