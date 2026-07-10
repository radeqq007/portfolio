export type Links = Record<string, string>;

export type Project = {
	title: string;
	description: string;
	imgSrc: string;
	links?: Links;
	badges?: string[];
};
