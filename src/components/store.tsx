interface StoreProps {
  name: string
  text: string
  // priceFrom: number
  // priceTo: number
  // openTime: string
  // closeTime: string
}

// @ts-ignore
const store = (props: StoreProps) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.text}</p>
      {/* <p>{props.openTime} ~ {props.closeTime}</p>
      <p>{props.priceFrom}円 ~ {props.priceTo}円</p> */}
      <img src="https://kosei.sec.tsukuba.ac.jp/wp-content/uploads/P1050398.jpg" />
    </div>
  )
};

export default store;
