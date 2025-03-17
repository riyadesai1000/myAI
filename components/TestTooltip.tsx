// /components/TestTooltip.tsx
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export function TestTooltip() {
  return (
    <Tippy content="Test Citation" open={true}>
      <span>[1]</span>
    </Tippy>
  );
}
