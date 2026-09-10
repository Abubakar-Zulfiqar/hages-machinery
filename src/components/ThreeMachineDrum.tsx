"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Play, Pause, RotateCw, Activity, Zap, Flame, Droplets } from "lucide-react";

type CycleMode = "extract" | "wash" | "sanitize";

export default function ThreeMachineDrum() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentMode, setCurrentMode] = useState<CycleMode>("extract");
  const [isRunning, setIsRunning] = useState(true);
  const [rpm, setRpm] = useState(1200);
  const [gForce, setGForce] = useState(420);

  const speedRef = useRef(0.04);
  const targetSpeedRef = useRef(0.04);
  const lightColorRef = useRef(new THREE.Color(0x0284c7)); // Cyan

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Procedural Perforated Stainless Steel Texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#cbd5e1"; // Clean stainless steel base
      ctx.fillRect(0, 0, 512, 512);

      // Brushed metal streaks
      for (let i = 0; i < 240; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.25})`;
        ctx.fillRect(0, Math.random() * 512, 512, Math.random() * 2.5);
      }

      // Perforation holes
      ctx.fillStyle = "#334155";
      const spacing = 16;
      for (let y = 8; y < 512; y += spacing) {
        for (let x = 8; x < 512; x += spacing) {
          ctx.beginPath();
          ctx.arc(x + ((y / spacing) % 2) * 8, y, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    const drumTexture = new THREE.CanvasTexture(canvas);
    drumTexture.wrapS = THREE.RepeatWrapping;
    drumTexture.wrapT = THREE.RepeatWrapping;
    drumTexture.repeat.set(4, 2);

    // Main Drum Group
    const drumGroup = new THREE.Group();
    scene.add(drumGroup);

    // Stainless Perforated Cylinder
    const drumGeo = new THREE.CylinderGeometry(1.45, 1.45, 2.2, 48, 1, true);
    const drumMat = new THREE.MeshStandardMaterial({
      map: drumTexture,
      metalness: 0.88,
      roughness: 0.2,
      side: THREE.DoubleSide,
    });
    const drumMesh = new THREE.Mesh(drumGeo, drumMat);
    drumMesh.rotation.x = Math.PI / 2;
    drumGroup.add(drumMesh);

    // Back Plate of the Drum
    const backGeo = new THREE.CircleGeometry(1.45, 32);
    const backMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.9,
      roughness: 0.25,
    });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.z = -1.1;
    drumGroup.add(backMesh);

    // 3 Lifter Ribs / Baffles inside drum
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const baffleGeo = new THREE.BoxGeometry(0.12, 0.45, 2.15);
      const baffleMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        metalness: 0.95,
        roughness: 0.15,
      });
      const baffle = new THREE.Mesh(baffleGeo, baffleMat);
      baffle.position.set(Math.cos(angle) * 1.15, Math.sin(angle) * 1.15, 0);
      baffle.rotation.z = angle + Math.PI / 2;
      drumGroup.add(baffle);
    }

    // Front Beveled Chrome Bezel Ring (Static / Machine frame)
    const ringGeo = new THREE.TorusGeometry(1.5, 0.12, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.1,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.z = 1.1;
    scene.add(ringMesh);

    // Outer Machine Housing Ring (Haiges crimson)
    const outerBezelGeo = new THREE.TorusGeometry(1.7, 0.08, 16, 64);
    const outerBezelMat = new THREE.MeshStandardMaterial({
      color: 0xeb222a,
      metalness: 0.65,
      roughness: 0.25,
    });
    const outerBezel = new THREE.Mesh(outerBezelGeo, outerBezelMat);
    outerBezel.position.z = 1.12;
    scene.add(outerBezel);

    // Internal Glowing Light
    const innerLight = new THREE.PointLight(0x0284c7, 4, 6);
    innerLight.position.set(0, 0, 0.2);
    scene.add(innerLight);

    // Clean Studio Lighting for Stainless Steel
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf8fafc, 1.8);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const ambLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambLight);

    // Particle Mist / Steam
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.1;
      const theta = Math.random() * Math.PI * 2;
      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = Math.sin(theta) * radius;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1.8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x0284c7,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    drumGroup.add(particleSystem);

    // Mouse tilt
    let targetTiltX = 0;
    let targetTiltY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetTiltX = y * 0.25;
      targetTiltY = x * 0.35;
    };

    container.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;
      drumGroup.rotation.z += speedRef.current;
      drumGroup.rotation.x += (targetTiltX - drumGroup.rotation.x) * 0.06;
      drumGroup.rotation.y += (targetTiltY - drumGroup.rotation.y) * 0.06;

      innerLight.color.lerp(lightColorRef.current, 0.08);

      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        let x = positions[i * 3];
        let y = positions[i * 3 + 1];
        const r = Math.sqrt(x * x + y * y);
        const theta = Math.atan2(y, x) + speedRef.current * 0.6;
        positions[i * 3] = Math.cos(theta) * r;
        positions[i * 3 + 1] = Math.sin(theta) * r;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      drumGeo.dispose();
      drumMat.dispose();
      drumTexture.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleModeChange = (mode: CycleMode) => {
    setCurrentMode(mode);
    setIsRunning(true);

    if (mode === "extract") {
      targetSpeedRef.current = 0.055;
      lightColorRef.current.setHex(0x0284c7); // Cyan
      setRpm(1200);
      setGForce(420);
    } else if (mode === "wash") {
      targetSpeedRef.current = 0.018;
      lightColorRef.current.setHex(0x10b981); // Emerald
      setRpm(480);
      setGForce(85);
    } else if (mode === "sanitize") {
      targetSpeedRef.current = 0.032;
      lightColorRef.current.setHex(0xeb222a); // Industrial Red
      setRpm(850);
      setGForce(210);
    }
  };

  const togglePower = () => {
    if (isRunning) {
      targetSpeedRef.current = 0;
      setIsRunning(false);
      setRpm(0);
      setGForce(0);
    } else {
      handleModeChange(currentMode);
    }
  };

  return (
    <div id="interactive-drum" className="relative w-full max-w-xl mx-auto rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl p-5 sm:p-7">
      {/* HUD Telemetry Top Bar - Light Mode */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3.5 mb-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-red-50 text-red-600 border border-red-100">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 tracking-wider uppercase font-bold">
              Telemetry Diagnostics
            </div>
            <div className="text-sm font-black text-slate-900 flex items-center gap-2">
              <span>Haiges Heavy-Extract V-400</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                isRunning ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {isRunning ? "MOTOR ACTIVE" : "STANDBY"}
              </span>
            </div>
          </div>
        </div>

        {/* Live Gauges */}
        <div className="flex items-center gap-4 font-mono text-right">
          <div>
            <div className="text-[10px] text-slate-400 font-bold">EXTRACT RPM</div>
            <div className="text-base font-black text-cyan-700">{rpm} <span className="text-[10px] text-slate-500 font-normal">RPM</span></div>
          </div>
          <div className="border-l border-slate-200 pl-3">
            <div className="text-[10px] text-slate-400 font-bold">G-FORCE</div>
            <div className="text-base font-black text-red-600">{gForce} <span className="text-[10px] text-slate-500 font-normal">G</span></div>
          </div>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative w-full h-[320px] sm:h-[380px] cursor-grab active:cursor-grabbing flex items-center justify-center bg-gradient-to-b from-slate-50 to-white rounded-2xl">
        <div ref={mountRef} className="w-full h-full" />
        
        <div className="absolute bottom-2 left-3 text-[11px] font-mono text-slate-600 bg-white/90 px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-sm pointer-events-none flex items-center gap-1.5">
          <RotateCw className="w-3 h-3 text-cyan-600 animate-spin" />
          Hover or drag to inspect 3D drum architecture
        </div>
      </div>

      {/* Interactive Control Console */}
      <div className="mt-3.5 pt-3.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => handleModeChange("extract")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentMode === "extract" && isRunning
                ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            1,200 RPM Extract
          </button>

          <button
            onClick={() => handleModeChange("wash")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentMode === "wash" && isRunning
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            Gentle Eco-Wash
          </button>

          <button
            onClick={() => handleModeChange("sanitize")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentMode === "sanitize" && isRunning
                ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            High-Temp Sanitize
          </button>
        </div>

        {/* Start/Stop Button */}
        <button
          onClick={togglePower}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
            isRunning
              ? "bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
              : "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
          }`}
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isRunning ? "Stop" : "Start"}</span>
        </button>
      </div>
    </div>
  );
}
