import * as React from 'react';
import {
  Button,
  HFlex,
  Stepper,
  type StepperProps,
  VFlex,
} from '@devoinc/genesys-ui';
import { GIAngleLeft, GIAngleRight } from '@devoinc/genesys-icons';
import { DefaultHeading } from '../../../components';

const initialSteps: StepperProps['steps'] = [
  { name: 'OPT_1', label: 'Option 1', status: 'pending' },
  { name: 'OPT_2', label: 'Option 2', status: 'pending' },
  { name: 'OPT_3', label: 'Option 3', status: 'pending' },
  { name: 'OPT_4', label: 'Option 4', status: 'disabled' },
];

const updateSteps = (steps: StepperProps['steps'], current: number) => {
  const newSteps = [...steps];
  newSteps.forEach((step, idx) => {
    if (step.status !== 'disabled') step.status = 'pending';
    if (idx + 1 < current) step.status = 'completed';
    if (idx + 1 === current) step.status = 'current';
  });
  return newSteps;
};

export const StepperExample = () => {
  const [steps, setSteps] = React.useState([...initialSteps]);
  const [current, setCurrent] = React.useState(1);

  const goNext = () =>
    setCurrent(() => (current <= steps.length ? current + 1 : current));
  const goPrevious = () =>
    setCurrent(() => (current > 1 ? current - 1 : current));

  const buttonLabel = current >= steps.length ? 'Finish' : 'Next';

  React.useEffect(
    () => setSteps((preSteps) => updateSteps(preSteps, current)),
    [current],
  );

  return (
    <VFlex>
      <DefaultHeading>Stepper</DefaultHeading>
      <Stepper steps={steps} id="Stepper" aria-label="Stepper" />
      <HFlex>
        <Button icon={<GIAngleLeft />} onClick={goPrevious}>
          Previous
        </Button>
        <Button icon={<GIAngleRight />} onClick={goNext} colorScheme="accent">
          {buttonLabel}
        </Button>
      </HFlex>
    </VFlex>
  );
};
