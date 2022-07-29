export interface store {
    name: string;
    openTime: number;
    closeTime: number;
    price: number; // 3->3000 ~ 4000
    map: string;
    tabeLog: string;
    image: string;
    category: number; // 0->居酒屋, 1->カフェ, 2->ファミレス, 3->麺類, 4->学食, 5->中華, 6->イタリアン, 7->フレンチ, 8->和食
  }
  
export const storeList: Array<store> = [
	{
		name: '粉とクリーム',
		openTime: 9,
		closeTime: 17,
		price: 0,
		map: 'https://goo.gl/maps/L7HWWw4tPyM3aq2A8',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009097/',
		image: 'https://kosei.sec.tsukuba.ac.jp/wp-content/uploads/P1050398.jpg',
		category: 4
	},
	{
		name: '筑波大学 第3エリア名店街 カレー店',
		openTime: 11,
		closeTime: 14,
		price: 0,
		map: 'https://goo.gl/maps/g38hLFRzJpJiRwzD8',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8020681/',
		image: 'https://lh5.googleusercontent.com/p/AF1QipN-wZbkq8saBI1DFJvtY9joSmcujErBhZBSFc0F=w408-h306-k-no',
		category: 4
	},
	{
		name: '筑波大学第２エリア大食堂',
		openTime: 10,
		closeTime: 15.25,
		price: 0,
		map: 'https://goo.gl/maps/3x1kDyuCGGpPbAxH8',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009104/',
		image: 'https://cdn.4travel.jp/img/thumbnails/imk/tips_pict/14/39/47/320x180_14394704.jpg?updated_at=1484225764',
		category: 4
	},
	{
		name: '大学会館レストランプラザ 筑波デミ',
		openTime: 11,
		closeTime: 13.5,
		price: 0,
		map: 'https://goo.gl/maps/5xw8xtSdoanTVPia6',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009102/',
		image: 'https://pbs.twimg.com/media/C0A2pFSUUAEOSK2.jpg',
		category: 4
	},
	{
		name: '筑波大学第1エリア食堂',
		openTime: 11,
		closeTime: 14,
		price: 0,
		map: 'https://goo.gl/maps/zPponkNynvKUdLDG8',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009098/',
		image: 'https://kosei.sec.tsukuba.ac.jp/wp-content/uploads/2377cede9cc59fc6e2cbe0f99e69ec6f.jpg',
		category: 4
	},
	{
		name: 'カフェ マルハバン',
		openTime: 11,
		closeTime: 14,
		price: 0,
		map: 'https://goo.gl/maps/j4i295J33j3Azkvw5',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8023329/',
		image: 'https://tblg.k-img.com/restaurant/images/Rvw/132428/640x640_rect_132428446.jpg',
		category: 1
	},
	{
		name: '筑波大学 附属病院桐仁会食堂',
		openTime: 10,
		closeTime: 16,
		price: 0,
		map: 'https://goo.gl/maps/dbLzXN2qzWA3nZi5A',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009100/',
		image: 'https://tblg.k-img.com/restaurant/images/Rvw/2395/2395488.jpg',
		category: 4
	},
	{
		name: '筑波大学 春日エリア食堂',
		openTime: 10.5,
		closeTime: 13.5,
		price: 0,
		map: 'https://goo.gl/maps/vDfx2dgJzhJUh8eE7',
		tabeLog: '',
		image: 'https://fastly.4sqi.net/img/general/600x600/584065923_ESytNuh1x7m6GFGjnYhe_75ckHt9b_RomktcUlY3thM.jpg',
		category: 4
	},
	{
		name: 'タリーズコーヒー 筑波大学附属病院店',
		openTime: 7.5,
		closeTime: 20,
		price: 0,
		map: 'https://goo.gl/maps/sH3a77cpKijdL37r9',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8014507/',
		image: 'https://tblg.k-img.com/restaurant/images/Rvw/164330/640x640_rect_c8a2bc9eb343c882bd132c111b66b0cd.jpg',
		category: 1
	},
	{
		name: 'サザコーヒー筑波大学アリアンサ店',
		openTime: 10,
		closeTime: 18,
		price: 1,
		map: 'https://goo.gl/maps/Fys65bcV3pDecTTV7',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8014507/',
		image: 'https://tblg.k-img.com/restaurant/images/Rvw/173481/640x640_rect_485c07d92e16831c6d53134b62cb6c08.jpg',
		category: 1
	},
	{
		name: 'スターバックス コーヒー 筑波大学中央図書館店',
		openTime: 9,
		closeTime: 19,
		price: 0,
		map: 'https://goo.gl/maps/nkoqk7zS3E11R2wDA',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8001715/',
		image: 'https://tblg.k-img.com/restaurant/images/Rvw/47828/47828893.jpg',
		category: 1
	},
	{
		name: 'スターバックス コーヒー 筑波大学附属病院店',
		openTime: 7.5,
		closeTime: 19.5,
		price: 0,
		map: 'https://goo.gl/maps/vd4VPskFcJEhmd7PA',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8024633/',
		image: 'https://tblg.k-img.com/restaurant/images/Rvw/175752/640x640_rect_13a9f5eed45e7d01111239308551ed43.jpg',
		category: 1
	},
	{
		name: '筑波大学医学専門学群棟食堂',
		openTime: 10,
		closeTime: 15,
		price: 0,
		map: 'https://goo.gl/maps/zrvxLGPPArSaQXrH8',
		tabeLog: 'https://tabelog.com/ibaraki/A0802/A080201/8009103/',
		image: 'https://tblg.k-img.com/restaurant/images/Rvw/92944/640x640_rect_92944299.jpg',
		category: 4
	}
]
