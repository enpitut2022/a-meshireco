import '@/index.css'

const header = () => {
  return (
    <div className='header'>
      <img src='./titleLogo.png' className='title' />
      <p>Powered by <a href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a></p>
    </div>
  )
};

export default header;
