import {render, screen} from "@testing-library/react";
import Stepper from "../../../components/stepper/stepper";
import {Step} from "../../../components/stepper/steps";

const steps: Step[] = [
    {title: "Service"},
    {title: "Termin"},
    {title: "Fahrzeug"},
    {title: "Kontakt"},
];

describe("Stepper Component", () => {
    it("renders all step titles", () => {
        render(<Stepper currentStep={0} steps={steps}/>);
        steps.forEach((step) => {
            expect(screen.getByText(step.title)).toBeTruthy();
        });
    });

    it("highlights the current step circle", () => {
        render(<Stepper currentStep={1} steps={steps}/>);
        const circle = screen.getByText("2");
        expect(circle.className).toContain("text-white");
    });

    it("renders completed steps as active (blue)", () => {
        render(<Stepper currentStep={2} steps={steps}/>);
        expect(screen.getByText("1").className).toContain("text-white");
        expect(screen.getByText("2").className).toContain("text-white");
    });

    it("renders upcoming steps as inactive (gray)", () => {
        render(<Stepper currentStep={0} steps={steps}/>);
        expect(screen.getByText("2").className).toContain("text-gray-700");
    });
});
