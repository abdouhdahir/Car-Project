import ItemImage from './ItemImage'
import Overview from './Overview'
import Description from './Description'
import Features from './Features'
import Specifications from './Specifications'
import Location from './Location'

const DetailleItem = () => {
  return (
    <div className='flex flex-col gap-24'>
      <ItemImage/>
      <Overview/>
      <Description/>
      <Features/>
      <Specifications/>
      <Location/>
    </div>
  )
}

export default DetailleItem
