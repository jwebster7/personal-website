import React, { memo, useEffect, useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import Text from "../text/text.component";

import { ConnectContent } from "./connect.styles";

import data from "../../data/static.json";

const ConnectBanner = () => {
  const [connect, setConnect] = useState({
    body: "",
    mailto: ""
  });

  useEffect(() => {
    setConnect({
      body: data.contact.body,
      mailto: data.contact.mailto
    });
  }, [setConnect]);
  return (
    <ConnectContent>
      <Text>{connect.body ?? ""}</Text>
      <CustomButton href={connect.mailto ?? ""} useAlt>
        Get in touch
      </CustomButton>
    </ConnectContent>
  );
};

export default memo(ConnectBanner);
