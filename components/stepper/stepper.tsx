import {Step} from "./steps";

interface StepperProps {
    currentStep: number,
    steps: Step[]
}

export default function Stepper({currentStep, steps}: StepperProps) {
    return (
        <ul className="flex justify-center">
            {steps.map((step, index) => (
                <li key={index} className="flex">
                    {index != 0 &&
                        <div
                            className={`-mx-[1px] mt-[13px] lg:mt-[17px] w-[52px] lg:w-[69px] h-[4px] lg:h-[6px] ${currentStep >= index ? "bg-blue-500" : "bg-gray-200"}`}
                        >
                        </div>
                    }
                    <div className="flex flex-col items-center">
                        <div
                            className={`w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] rounded-full flex justify-center items-center ${currentStep >= index ? "bg-blue-500" : "bg-gray-200"}`}
                        >
                                <span
                                    className={`text-[12px] lg:text-[14px] font-semibold ${currentStep >= index ? "text-white" : "text-gray-700"}`}
                                >
                                    {index + 1}
                                </span>
                        </div>
                        <span
                            className={`mt-[2px] lg:mt-[4px] leading-[16px] lg:leading-[24px] text-[12px] lg:text-[16px] font-semibold ${currentStep >= index ? "text-gray-700" : "text-gray-500"}`}
                        >
                            {step.title}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
