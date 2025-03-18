import React from 'react';
import StepOne from 'src/components/StepOne/StepOne';
import StepTwo from 'src/components/StepTwo/StepTwo';

interface SignUpFormProps {
  submitData: boolean;
  handleNext: () => void;
  handleData: React.Dispatch<React.SetStateAction<boolean>>;
  step: number;
  className: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ submitData, handleNext, handleData, step, className }) => {
	return (
    <div className={className}>
      {step === 1 && <StepOne submitData={submitData} handleNext={handleNext} />}
      {step === 2 && <StepTwo handleData={handleData}/>}
    </div>
  );
};

export default SignUpForm;
