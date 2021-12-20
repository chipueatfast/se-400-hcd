import React from "react";
import { AlertCirleIcon, CheckIcon, DocumentIcon } from "icons-build";
import styled from "styled-components";
import {
  FlexContent,
  Grid,
  OutmostContainer,
  toast,
  Toast,
  Typography,
} from "ui-build";
import { GREEN_HIGHLIGHT, RED_ALERT } from "constants/colors";

export const FileContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

function NormalOpenFilePage() {
  const Content = (
    <div>
      <AlertCirleIcon width={32} height={32} color={RED_ALERT} />
      <Typography.Paragraph size="medium" color="red_alert">
        Can not open file
      </Typography.Paragraph>
    </div>
  );
  return (
    <OutmostContainer>
      <Grid className="d-flex align-items-center justify-content-center flex-column vh-100">
        <Typography.Paragraph>
          Please click to open file. The file is expected to be corrupted and
          cannot be opened.
        </Typography.Paragraph>
        <FileContainer className="d-flex align-items-center flex-column">
          <DocumentIcon
            width={128}
            height={128}
            onClick={() => {
              toast(Content);
            }}
          />
          <Typography.Text color="blue">a-corrupted-file.exe</Typography.Text>
        </FileContainer>
        <Toast />
      </Grid>
    </OutmostContainer>
  );
}

export default NormalOpenFilePage;
