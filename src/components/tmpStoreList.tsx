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

const tmpStoreList: Array<store> = [
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
      image: 'https://tabelog.com/restaurant/images/Rvw/131999/640x640_rect_131999484.jpg',
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

export default tmpStoreList;
