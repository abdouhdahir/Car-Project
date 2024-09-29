import { MdOutlineMenuBook } from 'react-icons/md'
import { GrDocumentText } from "react-icons/gr";

const Description = () => {
  return (
    <div className='flex flex-col gap-10 pb-20' style={{borderBottom:"1px solid #e1e1e1"}}>
      <h2 className='text-2xl font-medium'>Description</h2>
      <div className='flex flex-col gap-7 text-base'>
      <p>Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus
      vel, dapibus lectus. Etiam ac suscipit eros, eget maximus</p>
      <p>Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat
        pellentesque. Sed venenatis risus nec felis mollis, in pharetra urna euismod. Morbi aliquam ut turpis sit amet ultrices. Vestibulum
        mattis blandit nisl, et tristique elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut rutrum risus et nunc pretium
        scelerisque. </p>
      </div>
      <div className='flex items-center gap-10'>
        <div className='flex gap-3 items-center bg-violet-50 py-3 px-5 rounded-xl'>
        <GrDocumentText />
        <p>View Vin Report</p>
        </div>
        <div className='flex gap-3 items-center bg-blue-50 py-3 px-5 rounded-xl'>
        <MdOutlineMenuBook/>
        <p>Car Brochure</p>
        </div>
      </div>
    </div>
  )
}

export default Description
