import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = () => {
  console.log("im happening");

  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
