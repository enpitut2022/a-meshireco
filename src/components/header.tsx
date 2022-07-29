import Button from '@mui/material/Button'
import {GetStoreMapData, GetStoreDetailData} from './cards'
import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

// @ts-ignore
const header = () => {
  return(
    <div className = 'header'>
      <h1>メシレコ</h1>
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
