import DaumPostcode, { DaumPostcodeEmbed } from "react-daum-postcode";

export const CommonAddrModal = (props:any) => { 
    <div className="popupDom">
        {(
          <DaumPostcodeEmbed
            autoClose={true}
            onComplete={props.onCompletePost}
            defaultQuery="천호대로 1077"
          />
        )}
      </div>
}