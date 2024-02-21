import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge multiple class strings together
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
