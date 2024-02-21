import typographyPlugin from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme.js';

const config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: ['class'],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},
			transitionTimingFunction: {
				easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
			},
		},
	},
	plugins: [typographyPlugin],
} satisfies Config;

export default config;
