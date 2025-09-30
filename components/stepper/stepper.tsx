import {Step} from "./steps";

interface StepperProps {
    currentStep: number,
    steps: Step[]
}

export default function Stepper({currentStep, steps}: StepperProps) {
    return (
        <div
            className={
                ""
            }
        >
            {steps.map((step, index) => (
                <div key={index}>
                    <span
                        className={`leading-[16px] lg:leading-[24px] text-[12px] lg:text-[16px] font-semibold ${currentStep >= index ? "text-gray-700" : "text-gray-500"}`}
                    >
                        {step.title}
                    </span>
                </div>
            ))}
        </div>
    );
}
