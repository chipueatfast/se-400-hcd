import React from "react";
import { AlertCirleIcon, CheckIcon, DocumentIcon } from "@trueprofile.io/icons";
import styled from "styled-components";
import {
  FlexContent,
  Grid,
  OutmostContainer,
  toast,
  Toast,
  Typography,
} from "@trueprofile.io/react-ui";
import { BLACK, YELLOW_HIGHLIGHT } from "constants/colors";

export const FileContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

function HcdOpenFilePage() {
  const Content = (
    <FlexContent icon={<AlertCirleIcon width={32} height={32} color={YELLOW_HIGHLIGHT} />}>
      <Typography.Paragraph size="medium" color='black' style={{
        color: YELLOW_HIGHLIGHT,
      }} >
        The file can not be processed.
      </Typography.Paragraph>
    </FlexContent>
  );
  return (
    <OutmostContainer>
      <Grid className="d-flex align-items-center justify-content-center flex-column vh-100">
        <FileContainer className="d-flex align-items-center flex-column" >
          <DocumentIcon
            width={256}
            height={256}
            onClick={() => {
              toast(Content);
            }}
          />
          <span>a-corrupted-file.exe</span>
        </FileContainer>
        <Toast />
      </Grid>
    </OutmostContainer>
  );
}

export default HcdOpenFilePage;
