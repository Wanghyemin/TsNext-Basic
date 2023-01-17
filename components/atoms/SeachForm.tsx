import DaumPostcodeEmbed from "react-daum-postcode";

const SearchForm = (props:any) => {
    //const address = props.address;
    //const setAddress = props.setAddress;
  
    const onCompletePost = (data:any) => {
        console.log(data)
        props.formik.setAddress(data.address)
      //setAddress(data.address);
      //zonecode  roadAddress
    };

  
    return (
        
      <>
          <DaumPostcodeEmbed
            autoClose
            onComplete={onCompletePost}
            defaultQuery="천호대로 1077"
          />
       
      </>
    );
  };
  
  export default SearchForm;