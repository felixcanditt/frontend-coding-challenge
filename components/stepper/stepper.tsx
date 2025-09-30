interface StepperProps {
	currentStep: number
}

export default function Stepper({currentStep }: StepperProps) {
	/*TODO: Replace this with the actual Stepper implementation*/
	return (
		<div
			className={
				"h-[100px] border border-dashed border-gray-200 rounded flex justify-center items-center"
			}
		>
			<code className={"text-2xl"}>{"<Stepper />"}</code>
			<div>{currentStep}</div>
		</div>
	);
}
