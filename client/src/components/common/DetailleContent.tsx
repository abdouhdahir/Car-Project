import DetailleItem from '../detaillepage/daetailleitem/DetailleItem'
import DetaillePay from '../detaillepage/DetaillePay'

const DetailleContent = () => {
  return (
    <div className='group-carousel-ant  flex justify-between container mx-auto px-20 pt-10 pb-32 w-full'>
      <div className='w-[70%]'>
        <DetailleItem />
      </div>
      <div className='w-[30%] flex justify-center'>
        <DetaillePay/>
      </div>
    </div>
  )
}

export default DetailleContent
