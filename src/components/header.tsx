import Button from '@mui/material/Button'
import {GetStoreMapData, GetStoreDetailData} from './cards'

// @ts-ignore
const header = () => {
  return(
    <div className = 'header'>
      <h1>メシレコ</h1>
      <p>上へスワイプして次の店へ</p>
      <Button
        onClick={() => {
          window.open(GetStoreMapData(), '_blank');
        }}
      >
        GoogleMap
      </Button>
      <Button
        onClick={() => {
          window.open(GetStoreDetailData(), '_blank');
        }}
      >
        食べログ
      </Button>
    </div>
  )
};

export default header;
