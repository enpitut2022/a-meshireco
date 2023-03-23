import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface StoreProps {
  name: string;
  open: string;
  close: string;
  price: string;
  map: string;
  hotpepper: string;
  image: string;
  category: string;
  latitude?: number;
  longitude?: number;
}

// 価格帯一覧
// インデックスがID
const priceRangeList: { [name: string]: string } = {
  B001: '~1000',
  B002: '2001 ~ 3000',
  B003: '3001 ~ 4000',
  B004: '5001 ~ 7000',
  B005: '7001 ~ 10000'
}

const store = (props: StoreProps) => {
  return (
    <Card sx={{
      width: 600,
      "@media screen and (max-width:600px)": {
        width: 200
      },
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt=" "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>営業時間: {props.open}</p>
            <p>定休日: {props.close}</p>
            <p>価格帯：{priceRangeList[props.price]}円</p>
            <p>ジャンル：{props.category}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default store;
