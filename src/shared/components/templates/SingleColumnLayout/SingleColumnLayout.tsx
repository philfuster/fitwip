import styled from "@emotion/styled/macro";
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