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
import { BLACK, YELLOW_HIGHLIGHT } from "constants/colors";


export const FileContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

function HcdOpenFilePage() {
  const Content = (
    <div>
      <AlertCirleIcon width={32} height={32} color={YELLOW_HIGHLIGHT} />
      <Typography.Paragraph size="medium" color='black' style={{
        color: YELLOW_HIGHLIGHT,
      }} >
        The file might be corrupted and can not be processed.
      </Typography.Paragraph>
    </div>
  );
  return (
    <OutmostContainer>
      <Grid className="d-flex align-items-center justify-content-center flex-column vh-100">
        <Typography.Paragraph>
          Please click to open file. The file is expected to be corrupted and cannot be opened.
        </Typography.Paragraph>
        <FileContainer className="d-flex align-items-center flex-column" >
          <DocumentIcon
            width={128}
            height={128}
            onClick={() => {
              toast(Content);
            }}
          />
          <Typography.Text color='blue'>a-corrupted-file.exe</Typography.Text>
        </FileContainer>
        <Toast />
      </Grid>
    </OutmostContainer>
  );
}

export default HcdOpenFilePage;
