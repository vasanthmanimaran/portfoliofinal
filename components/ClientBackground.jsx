"use client";

import dynamic from 'next/dynamic';

// Dynamically import ThreeJSBackground with SSR disabled
const ThreeJSBackground = dynamic(() => import('@/components/ThreeJSBackground'), {
  ssr: false,
});

export default function ClientBackground() {
  return <ThreeJSBackground />;
}