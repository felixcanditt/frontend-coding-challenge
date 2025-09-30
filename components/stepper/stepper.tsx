import {Step} from "./steps";

interface StepperProps {
    currentStep: number,
    steps: Step[]
}

export default function Stepper({currentStep, steps}: StepperProps) {
    /*TODO: Replace this with the actual Stepper implementation*/
    return (
        <div
            className={
                ""
            }
        >
            {steps.map((step, index) => (
                <div key={index}
                     className={currentStep >= index ? "text-green-500" : ""}>{currentStep}, {index}, {step.title}</div>
            ))}
        </div>
    );
}
