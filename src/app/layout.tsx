import { fonts } from '@/fonts/google';
import '@/styles/globals.css';
import { cn } from '@/utils/classnames';
import type { Metadata } from 'next';

const title = 'Template';
const description = 'Hello World';
const url = 'http://localhost:3000';

export const metadata: Metadata = {
	description,
	metadataBase: new URL(url),
	openGraph: {
		description,
		locale: 'en-US',
		siteName: title,
		title,
		type: 'website',
		url,
	},
	robots: {
		follow: true,
		googleBot: {
			follow: true,
			index: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
		index: true,
	},
	title: {
		default: title,
		template: `%s | ${title}`,
	},
};

const RootLayout = ({ children }: { readonly children: React.ReactNode }) => (
	<html lang="en-US" className={cn('min-w-[360px] scroll-smooth', fonts)}>
		<body className="flex !h-[unset] min-h-screen flex-1 flex-col bg-white font-sans antialiased">
			<main className="flex w-full max-w-[100vw] flex-col">{children}</main>
		</body>
	</html>
);

export default RootLayout;
