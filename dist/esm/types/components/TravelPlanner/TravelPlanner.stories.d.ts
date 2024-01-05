/// <reference types="react" />
import "../../index.css";
declare const meta: {
    title: string;
    component: import("react").FC<import("./TravelPlannerProps").TravelPlannerProps>;
    argTypes: {
        title: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        subTitle: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        buttonText: {
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        buttonBgColor: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        buttonTextColor: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        inputDestinationText: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        inputCheckoutDateText: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        inputGuestInfoText: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        wrapperBgColor: {
            table: {};
        };
        wrapperWidth: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        wrapperHeight: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        disabled: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
    };
    tags: string[];
    decorators: ((Story: any) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
declare const DefaultTravelPlanner: {
    args: {
        disabled: true;
    };
};
export { DefaultTravelPlanner };
