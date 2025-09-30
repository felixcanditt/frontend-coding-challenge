import {Step} from "./steps";

interface StepperProps {
	currentStep: number,
	steps: Step[]
}

export default function Stepper({currentStep, steps }: StepperProps) {
	/*TODO: Replace this with the actual Stepper implementation*/
	return (
		<div
			className={
				"h-[100px] border border-dashed border-gray-200 rounded flex justify-center items-center"
			}
		>
			<code className={"text-2xl"}>{"<Stepper />"}</code>
			<div>{steps[currentStep].title}</div>
		</div>
	);
}
