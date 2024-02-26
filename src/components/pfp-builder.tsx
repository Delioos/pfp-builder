'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function PfpBuilder() {
	const [imageUrl, setImageUrl] = useState(''); // État pour stocker l'URL de l'image

	// Fonction pour gérer la sélection d'un fichier
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImageUrl(reader.result);
			};
			reader.readAsDataURL(file);
		}
		console.log('file', file);
	};

	const handlePfpRequest = async () => {
		const formData = new FormData();
		formData.append('file', imageUrl);
		const response = await fetch('/api/pfp', {
			method: 'POST',
			body: formData,
		});
		const data = await response.json();
		console.log('data', data);
	};

	return (
		<div className="flex flex-col h-screen w-full gap-2 items-center justify-center p-4 text-center md:gap-4">
			<div className="grid w-full max-w-sm gap-2">
				<h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
					Upload your current profile picture
				</h1>
			</div>
			<div className="flex flex-col gap-2">
				{imageUrl && (
					<img src={imageUrl} alt="Preview" className="w-96 h-auto" />
				)}
				<Input
					type="file"
					accept=".png, .jpg"
					multiple={false}
					onChange={handleFileChange} // Utiliser le gestionnaire pour l'événement onChange
					className="hover:cursor-pointer"
				/>
				{imageUrl && (
					<Button onClick={handlePfpRequest}>Become a runner</Button>
				)}
			</div>
		</div>
	);
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0  0  24  24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Upload</title>
			<path d="M5  12h14" />
			<path d="M12  5v14" />
		</svg>
	);
}
