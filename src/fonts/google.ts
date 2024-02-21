import { Inter } from 'next/font/google';

const fontInter = Inter({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const fonts = `${fontInter.variable}`;
