import { Button, OutmostContainer } from "@trueprofile.io/react-ui";
import React from "react";

function NormalOverwriteFilePage() {
    const [textValue, setTextValue] = React.useState("Lorem ips sum...");
    const [savedValue, setSavedValue] = React.useState("Lorem ips sum...");
  return (
    <OutmostContainer
      style={{
        paddingTop: 64,
      }}
    >
      <textarea rows={10} style={{width: '100%', marginBottom: 32}} value={textValue} onChange={e => {
          setTextValue(e.target.value);
      }} />
      <div>
        <Button
            style={{
                marginRight: 16,
            }}
            onClick={() => {
                setSavedValue(textValue);
            }}
            disabled={textValue === savedValue}
        >
            Save</Button>
        <Button onClick={() => {
            setTextValue(savedValue);
        }} theme="secondary">Cancel</Button>
      </div>
    </OutmostContainer>
  );
}

export default NormalOverwriteFilePage;
