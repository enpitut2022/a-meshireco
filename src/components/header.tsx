import Button from '@mui/material/Button'
import {GetStoreMapData, GetStoreDetailData} from './cards'
import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import '../index.css'

// @ts-ignore
const header = () => {
  return(
    <div className = 'header'>
      <img src = './title.png' className = 'title'/>
      <p>上へスワイプして次の店へ</p>
      <IconButton
        size="small"
        color = "warning"
        onClick={() => {
          window.open(GetStoreMapData(), '_blank');
        }}
      >
        <PlaceIcon />ナビ
      </IconButton>
      <IconButton
        size="small"
        color = "warning"
        onClick={() => {
          window.open(GetStoreDetailData(), '_blank');
        }}
      >
        <LocalDiningIcon/>くわしく
      </IconButton>
    </div>
  )
};

export default header;
