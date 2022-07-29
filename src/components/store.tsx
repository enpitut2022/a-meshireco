import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions,Button } from '@mui/material';

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

// 古いやつ
// interface StoreProps {
//   name: string;
//   openTime: number;
//   closeTime: number;
//   price: string;
//   map: string;
//   tabeLog: string;
//   image: string;
//   category: number;
// }

// 価格帯一覧
// インデックスがID
const priceRangeList: { [name: string]: string } = {
  B001: '~1000',
  B002: '2001 ~ 3000',
  B003: '3001 ~ 4000',
  B004: '5001 ~ 7000',
  B005: '7001 ~ 10000'
}


// 開店時間はnumberで保持しているので文字列に整形
const timeToString = (time: number) => {
	var hour = Math.trunc(time)
  var minute: any = Math.trunc(60 * (time - hour))
  if (minute == 0) {
    minute = '00'
  }
  var stringTime = hour + ':' + minute
	return stringTime;
}

// @ts-ignore
const store = (props: StoreProps) => {
  return(
    /*<div>
      <h2>{props.name}</h2>
      <p>営業時間: {props.open}</p>
      <p>定休日: {props.close}</p>
      <p>価格帯：{priceRangeList[props.price]} 円</p>
      <p>
        <a href = {props.map}>GoogleMap</a>
      </p>
      <p>
        <a href = {props.hotpepper}>ホットペッパーグルメ</a>
      </p>
      <p>ジャンル：{props.category}</p>
      <img src = {props.image}/>
    </div>*/
    <Card sx={{
      width:600, /* maxWidth: 600,maxHeight: 600*/
      "@media screen and (max-width:600px)":{
      width:200
      },
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          /*height="140"*/
          image={props.image}
          alt=" "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>開店時間：{timeToString(props.openTime)} ~ {timeToString(props.closeTime)}</p>
            <p>価格帯：{priceRangeList[props.price]}円</p>
            <p>ジャンル：{categoryList[props.category]}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default store;
