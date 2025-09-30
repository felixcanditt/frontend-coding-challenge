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
                <span key={index}>{step.title}</span>
            ))}
        </div>
    );
}
