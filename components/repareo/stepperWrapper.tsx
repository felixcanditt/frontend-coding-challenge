import type {ReactNode} from "react";

export default function StepperWrapper({children}: { children: ReactNode }) {
    return (
        <div>
            <div className={"py-4 lg:py-8"}>{children}</div>
            <div
                className={
                    "rounded border border-dashed border-gray-200 h-[169px] lg:h-[638px] mt-6 lg:mt-0"
                }
            ></div>
        </div>
    );
}
