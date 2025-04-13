"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Loader3d } from "./loader-3d"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 800) // Add a small delay for smooth transition
    }

    // Add event listeners for route changes
    window.addEventListener("beforeunload", handleStart)
    window.addEventListener("load", handleComplete)

    // Custom event listeners for client-side navigation
    document.addEventListener("page-transition-start", handleStart)
    document.addEventListener("page-transition-complete", handleComplete)

    return () => {
      window.removeEventListener("beforeunload", handleStart)
      window.removeEventListener("load", handleComplete)
      document.removeEventListener("page-transition-start", handleStart)
      document.removeEventListener("page-transition-complete", handleComplete)
    }
  }, [])

  // Function to trigger the loader manually from other components
  useEffect(() => {
    // Make the function available globally
    window.triggerPageTransition = () => {
      setIsLoading(true)
      setTimeout(() => setIsLoading(false), 2000)
    }
  }, [])

  return (
    <>
      {isLoading && <Loader3d />}
      {children}
    </>
  )
}
