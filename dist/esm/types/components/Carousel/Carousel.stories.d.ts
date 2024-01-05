import "../../index.css";
declare const meta: {
    title: string;
    component: (props: any) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    argTypes: {
        sliderData: {
            description: string;
        };
        categoryData: {
            description: string;
        };
        activeCategoryId: {
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
            };
        };
        activeSliderIndex: {
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
            };
        };
    };
    tags: string[];
    decorators: ((Story: any) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
declare const DefaultCarousel: {
    args: {
        sliderData: ({
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
        categoryData: {
            name: string;
            id: string;
        }[];
        activeCategoryId: number;
        activeSliderIndex: number;
    };
};
export { DefaultCarousel };
