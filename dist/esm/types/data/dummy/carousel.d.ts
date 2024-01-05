export declare const CarouselData: {
    categories: {
        name: string;
        id: string;
    }[];
    sliders: ({
        uuid: string;
        categoryId: string;
        imagePath: string;
        type?: undefined;
    } | {
        uuid: string;
        categoryId: string;
        type: number;
        imagePath: string;
    })[];
};
