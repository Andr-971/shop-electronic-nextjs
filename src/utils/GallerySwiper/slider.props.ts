export interface IReview {
    id: number;
    img: string;
    text: string;
}
export interface SliderProps {
    reviews: IReview[];
}