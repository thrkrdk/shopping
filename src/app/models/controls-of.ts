import { FormControl, FormGroup } from "@angular/forms";

// https://netbasal.com/typed-reactive-forms-in-angular-no-longer-a-type-dream-bf6982b0af28 Bonus section
export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};