import { chakra } from "@chakra-ui/react";
import React from "react";

export const CardWrapperStyle = {
  flexWrap: 'wrap',
  margin: '0 auto',
  width: '1200px',

}

export const CardWrapTitle = {
  position: "relative",
  padding: "10px 0",
  width: "100%",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "700",
  color: "#404152",
  backgroundColor: "#ececec",
  "&>button": {
    position: "absolute",
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)'
  },
};

export const CardBoxStyle = {
  padding: '10px 5px',
  border: '1px solid',
  borderColor: '#e0e0e0',
  borderTop: '0',
  width: '50%',
  height: '120px',
  minWidth: '600px',
  backgroundColor: '#ffffff', 
  '&:nth-of-type(odd)': {borderLeft: '0'}
}

export const CardTitleStyle = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#404152'
};

export const CardTextStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#404152'
};

export const CardListStyle = {
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'space-between'
};


export const CardCheckListStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: '100%',
  '& > label': {width: '120px'}
}