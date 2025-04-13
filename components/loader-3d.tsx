"use client"

import { useEffect, useRef } from "react"

export function Loader3d() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Cube properties
    const cube = {
      size: 50,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      color: "#FACC15",
      x: canvas.width / 2,
      y: canvas.height / 2,
      vertices: [] as { x: number; y: number; z: number }[],
    }

    // Define cube vertices
    const initCube = () => {
      const s = cube.size / 2
      cube.vertices = [
        { x: -s, y: -s, z: -s },
        { x: s, y: -s, z: -s },
        { x: s, y: s, z: -s },
        { x: -s, y: s, z: -s },
        { x: -s, y: -s, z: s },
        { x: s, y: -s, z: s },
        { x: s, y: s, z: s },
        { x: -s, y: s, z: s },
      ]
    }

    initCube()

    // Cube edges - pairs of vertex indices
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ]

    // Rotation functions
    const rotateX = (vertex: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const y = vertex.y * cos - vertex.z * sin
      const z = vertex.z * cos + vertex.y * sin
      return { ...vertex, y, z }
    }

    const rotateY = (vertex: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const x = vertex.x * cos - vertex.z * sin
      const z = vertex.z * cos + vertex.x * sin
      return { ...vertex, x, z }
    }

    const rotateZ = (vertex: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const x = vertex.x * cos - vertex.y * sin
      const y = vertex.y * cos + vertex.x * sin
      return { ...vertex, x, y }
    }

    // Project 3D point to 2D
    const project = (vertex: { x: number; y: number; z: number }) => {
      const distance = 300
      const z = 1 / (distance - vertex.z)
      return {
        x: vertex.x * z * distance + cube.x,
        y: vertex.y * z * distance + cube.y,
      }
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Increase rotation angles
      cube.rotationX += 0.02
      cube.rotationY += 0.03
      cube.rotationZ += 0.01

      // Rotate and project vertices
      const rotatedVertices = cube.vertices.map((vertex) => {
        let v = { ...vertex }
        v = rotateX(v, cube.rotationX)
        v = rotateY(v, cube.rotationY)
        v = rotateZ(v, cube.rotationZ)
        return v
      })

      const projectedVertices = rotatedVertices.map(project)

      // Draw edges
      ctx.strokeStyle = cube.color
      ctx.lineWidth = 3
      ctx.beginPath()
      edges.forEach(([i, j]) => {
        ctx.moveTo(projectedVertices[i].x, projectedVertices[i].y)
        ctx.lineTo(projectedVertices[j].x, projectedVertices[j].y)
      })
      ctx.stroke()

      // Draw vertices
      ctx.fillStyle = cube.color
      projectedVertices.forEach(({ x, y }) => {
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw loading text
      ctx.fillStyle = "#fff"
      ctx.font = "bold 16px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText("Loading...", canvas.width / 2, canvas.height / 2 + 80)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
