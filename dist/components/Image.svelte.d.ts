type $$ComponentProps = {
	alt: string;
	height: number;
	src: string;
	sources: {
		srcset: string;
		type: string;
	}[];
	placeholder: string;
	width: number;
	maxWidth: string;
	sizes: string;
	fetchpriority: 'auto' | 'high' | 'low' | undefined;
	loading: 'lazy' | 'eager';
	style: string;
};
declare const Image: import('svelte').Component<$$ComponentProps, {}, ''>;
type Image = ReturnType<typeof Image>;
export default Image;
