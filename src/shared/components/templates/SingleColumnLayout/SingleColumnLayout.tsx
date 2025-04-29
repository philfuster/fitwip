import styled from "@emotion/styled";
import { ReactNode } from "react";

interface SingleColumnLayoutProps {
  children: ReactNode;
  padding?: string;
  maxWidth?: string;
}

const StyledSingleColumnLayout = styled.div<SingleColumnLayoutProps>(({ padding, maxWidth }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  justifyContent: "center",
  padding: padding || "1rem",
  maxWidth: maxWidth || "800px",
  margin: "0 auto",
  width: "100%", // Ensures it spans the full width of the viewport
  boxSizing: "border-box", // Includes padding in width calculations
  "@media (max-width: 600px)": {
    padding: "0.5rem", // Adjust padding for smaller screens
    maxWidth: "100%", // Allow full width on smaller screens
  },
}));

const SingleColumnLayout = ({
  children,
  padding,
  maxWidth,
}: SingleColumnLayoutProps) => {
  return (
    <StyledSingleColumnLayout padding={padding} maxWidth={maxWidth}>
      {children}
    </StyledSingleColumnLayout>
  );
};

export default SingleColumnLayout;