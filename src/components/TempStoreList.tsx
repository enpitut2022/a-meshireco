import Store from './store'

interface store {
  name: string;
  openTime: string;
  closeTime: string;
  price: number; // 3->3000 ~ 4000
  map: string;
  tabeLog: string;
  image: string;
  category: number; // 0->居酒屋, 1->カフェ, 2->ファミレス, 3->麺類, 4->学食, 5->中華, 6->イタリアン, 7->フレンチ, 8->和食
}

const TempStoreList: Array<store> = [
    { name: '粉とクリーム',
      openTime: '09:00',
      closeTime: '17:00',
      price: 0, 
      map: 'https://goo.gl/maps/L7HWWw4tPyM3aq2A8', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009097/', 
      image: 'https://kosei.sec.tsukuba.ac.jp/wp-content/uploads/P1050398.jpg',
      category: 1
    },
    { name: 'つけめん・まぜそば むじゃき',
      openTime: '18:00',
      closeTime: '22:00',
      price: 0, 
      map: 'https://goo.gl/maps/aDqnH7xeirV4yumBA', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8020987/', 
      image: 'https://tsukuba-muchimuchiblog.com/wp-content/uploads/2022/03/ECF71D0F-0E3F-4985-9184-574A53200177.jpeg',
      category: 3
    },
    { name: '筑波大学第２エリア大食堂',
      openTime: '10:00',
      closeTime: '15:15',
      price: 0, 
      map: 'https://goo.gl/maps/3x1kDyuCGGpPbAxH8', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009104/', 
      image: 'https://cdn.4travel.jp/img/thumbnails/imk/tips_pict/14/39/47/320x180_14394704.jpg?updated_at=1484225764',
      category: 4
    },
    { name: '福軒餃子',
      openTime: '11:00',
      closeTime: '22:30',
      price: 0, 
      map: 'https://goo.gl/maps/pkfUEicKzwiTzKZQA', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8026319/', 
      image: 'https://s1.spkimg.com/image/2017/04/01/09/JLSOCSpC9r6rUl8MAtHIfNHbmKkcYxWg.jpg',
      category: 0
    },
    { name: 'ラーメン清六家　筑波大学店',
      openTime: '11:00',
      closeTime: '04:00',
      price: 0, 
      map: 'https://goo.gl/maps/cyVMU7kWpPE8TKdk8', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8019177/', 
      image: 'https://s1.spkimg.com/image/2015/08/10/09/WLX8EwtKzNspqM4Olj15HdLNKafj1YG0.jpg',
      category: 3
    },
    { name: '百香亭　筑波大学店',
      openTime: '17:00',
      closeTime: '22:00',
      price: 1, 
      map: 'https://goo.gl/maps/HjhLa5XFw54Ympm17', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8002343/', 
      image: 'https://ibanavi.net/img/id/shop/11273/img_l.jpg',
      category: 4
    },
    { name: 'ジョイフル つくば桜店',
      openTime: '9:00',
      closeTime: '2:00',
      price: 0, 
      map: 'https://www.google.com/maps/place/%E3%82%B8%E3%83%A7%E3%82%A4%E3%83%95%E3%83%AB+%E3%81%A4%E3%81%8F%E3%81%B0%E6%A1%9C%E5%BA%97/@36.1120515,140.1126679,17z/data=!3m1!4b1!4m5!3m4!1s0x60220c1b166b2433:0x4d32bcf4c10bfcab!8m2!3d36.1120515!4d140.1126679', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8016744/', 
      image: 'https://www.joyfull.co.jp/sales/img/20200501/mv_sp.jpg',
      category: 2
    },
    { name: 'ココス つくば小野崎店',
      openTime: '10:00',
      closeTime: '2:00',
      price: 1, 
      map: 'https://goo.gl/maps/uzSwEfnKDjEWpFDT9', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009783/', 
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/39815/640x640_rect_39815640.jpg',
      category: 2
    },
    { name: 'つくば 蛇の目寿司',
      openTime: '11:30',
      closeTime: '14:00',
      price: 7, 
      map: 'https://goo.gl/maps/knjPP8g4k53TSVdi9', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8002974/', 
      image: 'https://rimage.hitosara.com/gg/image/0006039220/0006039220H1_740x555y.jpg',
      category: 8
    },
    { name: '鹿児島県霧島市 塚田農場 つくば店',
      openTime: '17:00',
      closeTime: '0:00',
      price: 3, 
      map: 'https://goo.gl/maps/PvRP7x8XAFMrBhCW6', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8017950/', 
      image: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/170985/507db4fe17fa566ac73560b53a4abfba.jpg?token=ba2d854&api=v2',
      category: 0
    },
    { name: '灯禾軒',
      openTime: '18:00',
      closeTime: '00:00',
      price: 1, 
      map: 'https://goo.gl/maps/2tv2WTSrm9fGXxb8A', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8002971/', 
      image: 'https://pbs.twimg.com/media/FEizhvfaQAA1UPg?format=jpg&name=4096x4096',
      category: 0
    },
    { name: 'スシロー つくば学園の森店',
      openTime: '11:00',
      closeTime: '23:00',
      price: 1, 
      map: 'https://goo.gl/maps/JGNsfvgyUZH22DEF8', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8018289/', 
      image: 'https://lh5.googleusercontent.com/p/AF1QipMHzI6e1F5JP7agY9Sf7T46tGOu2aESb2ONN5D-=w426-h240-k-no',
      category: 0
    },
    { name: '手羽だるま',
      openTime: '17:30',
      closeTime: '1:00',
      price: 2, 
      map: 'https://g.page/teba_daruma?share', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8022120/', 
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/111382/111382552.jpg',
      category: 0
    },
    { name: 'めしや 益さん',
      openTime: '11:30',
      closeTime: '15:00',
      price: 1, 
      map: 'https://goo.gl/maps/fM5gkxqzvzW4TFdp9', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8016822/', 
      image: 'data:image/jpeg;base64,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',
      category: 8
    },
    { name: '松乃家',
      openTime: '11:00',
      closeTime: '20:00',
      price: 3, 
      map: 'https://goo.gl/maps/vVracgSn4p3C72KC9', 
      tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8000071/', 
      image: 'https://unatan.net/wp-content/uploads/2020/11/u12603photos.jpg',
      category: 8
    }
  ]

/*
    { name: '',
      openTime: '',
      closeTime: '',
      price: 0, 
      map: '', 
      tabeLog: '', 
      image: '',
      category: 0
    },
*/

export default TempStoreList;