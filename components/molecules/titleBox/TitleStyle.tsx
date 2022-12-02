export const SectionTitleStyle = {
  justifyContent: 'space-between',
  '& > div > h2': {
    fontSize:'18px',
    color:'#404152',
    fontWeight:'700',
    letterSpacing:'-0.02rem',
    lineHeight:'26px',
    textAlign: 'left'
  },
  '& > div > p': {
    fontSize:'12px',
    color:'#76788d',
    fontWeight:'500',
    letterSpacing:'-0.02rem',
    lineHeight:'26px',
    textAlign: 'right'
  }
};

export const GridTitleStyle = {
  position:'relative', 
  padding:'15px 0', 
  width:'100%', 
  textAlign:'center', 
  backgroundColor:'#ececec',
  '&>h2': {
    fontSize: '18px', 
    fontWeight: '700',
    color: '#404152'
  },
  '&>div:first-of-type': {
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)'
  }
};