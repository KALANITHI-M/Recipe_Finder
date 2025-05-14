import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and tailwind-merge
 * @param {...(string|Object<string, boolean>|Array<string|Object<string, boolean>>)} inputs - Class names to combine
 * @returns {string} - Combined and merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 