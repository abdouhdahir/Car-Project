import Searchfilter from '../searchpage/Searchfilter'
import Searchproduct from '../searchpage/Searchproduct'
 
const SearchContent = () => {
  return (
    <div className='flex gap-6 items-start container mx-auto px-20 py-0 w-full'>
      <div className='w-[20%]'>
      <Searchfilter/>
      </div>
      <div className='w-[70%]'>
      <Searchproduct/>
      </div>
    </div>
  )
}

export default SearchContent
