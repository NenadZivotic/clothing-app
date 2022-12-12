import React from "react";

import { CustomButtonContainer } from "./CustomButton.styles";

interface IProps {
  children: React.ReactNode;
  type?: any;
  onClick?: () => void;
  inverted?: boolean;
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<IProps> = ({
  children,
  type,
  isGoogleSignIn = false,
  inverted,
  onClick,
}) => {
  return (
    <CustomButtonContainer
      type={type}
      isGoogleSignIn={isGoogleSignIn}
      inverted={inverted}
      onClick={onClick}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
