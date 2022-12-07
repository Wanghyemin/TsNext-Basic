import { Button } from "@chakra-ui/react";
import DaumPostcode, { DaumPostcodeEmbed } from "react-daum-postcode";


export const CommonAddrModal = (props: any) => {

  const isPopupOpen = props.isPopupOpen

  return (
  <div className="popupDom">
    <div className="popupDomInsert">
    <Button type="button" aria-label="Close" variant="ghost" onClick={() => (props.setIsPopupOpen(!isPopupOpen))} style={{float:"right"}}>✕</Button>
    <DaumPostcodeEmbed 
      autoClose={true}
      onComplete={props.onComplete}
      defaultQuery="송파대로 201길"
    />
    </div>
  </div>
  )
};
