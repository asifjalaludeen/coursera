import { Comment } from './comment';

export class Dish {
    id: number;
    name: String;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    comments : Comment[];
}