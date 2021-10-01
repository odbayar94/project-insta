export interface IPost {
	id: number;
	username: string;
	caption?: string;
	imgUrl?: string;
	likesQuantity?: number;
	commentUsername?: string;
	comment?: string;
	timeStamp?: string;
}
