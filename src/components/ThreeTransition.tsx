import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeTransitionProps {
  type: 'cubes' | 'sphere' | 'particles';
}

const ThreeTransition: React.FC<ThreeTransitionProps> = ({ type }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create different 3D elements based on type
    let objects: THREE.Object3D[] = [];

    if (type === 'cubes') {
      // Create floating wireframe cubes
      for (let i = 0; i < 15; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ 
         
          wireframe: true,
          transparent: true,
          opacity: 0.3
        });
        const cube = new THREE.Mesh(geometry, material);
        
        cube.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
        
        cube.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        scene.add(cube);
        objects.push(cube);
      }
    } else if (type === 'sphere') {
      // Create wireframe sphere with orbiting rings
      const sphereGeometry = new THREE.SphereGeometry(2, 12, 12);
      const sphereMaterial = new THREE.MeshBasicMaterial({ 
       
        wireframe: true,
        transparent: true,
        opacity: 0.25
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);
      objects.push(sphere);

      // Add orbiting rings
      for (let i = 0; i < 2; i++) {
        const ringGeometry = new THREE.RingGeometry(3 + i * 0.5, 3.1 + i * 0.5, 24);
        const ringMaterial = new THREE.MeshBasicMaterial({ 
          
          transparent: true,
          opacity: 0.15,
          side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        scene.add(ring);
        objects.push(ring);
      }
    } else if (type === 'particles') {
      // Create particle field
      const particleCount = 1000;
      const positions = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 50;
        positions[i + 1] = (Math.random() - 0.5) * 50;
        positions[i + 2] = (Math.random() - 0.5) * 50;
      }
      
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        transparent: true,
        opacity: 0.6
      });
      
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
      objects.push(particles);
    }

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Animate objects based on type
      objects.forEach((obj, index) => {
        if (type === 'cubes') {
          obj.rotation.x += 0.01;
          obj.rotation.y += 0.01;
          obj.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        } else if (type === 'sphere') {
          if (index === 0) {
            // Main sphere
            obj.rotation.y += 0.005;
          } else {
            // Rings
            obj.rotation.z += 0.01 * (index + 1);
          }
        } else if (type === 'particles') {
          obj.rotation.y += 0.002;
          obj.rotation.x += 0.001;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [type]);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default ThreeTransition;