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
      <img src = './titleLogo.png' className = 'title'/>
      <p>Powered by <a href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a></p>
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
