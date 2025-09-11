"use client";

import React, { forwardRef, Ref } from 'react';
import Spline from '@splinetool/react-spline';

interface Spline3DProps {
  onLoad: (spline: any) => void;
}

const Spline3D = forwardRef<any, Spline3DProps>(({ onLoad }, ref) => {
  return (
    <div className="fixed top-1/4 right-0 w-1/2 h-1/2 z-10 pointer-events-none">
        <Spline
            scene="https://prod.spline.design/4dW-i5Aq-T8rhI-g/scene.splinecode"
            onLoad={onLoad}
            ref={ref as Ref<Spline>}
        />
    </div>
  );
});

Spline3D.displayName = 'Spline3D';

export default Spline3D;
