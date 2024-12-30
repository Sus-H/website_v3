import React from 'react';

interface NavScrollButtonProps {
  targetId: string;
  label: string;
}

export function NavScrollButton({ targetId, label }: NavScrollButtonProps) {
  return (
    <button
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
      className="text no-underline hover:underline"
    >
      {label}
    </button>
  );
}