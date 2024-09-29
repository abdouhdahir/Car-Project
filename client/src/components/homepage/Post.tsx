import post1 from '../../asset/img/postt/post1.png'
import post2 from '../../asset/img/postt/post2.png'
import post3 from '../../asset/img/postt/post3.png'
import { BsArrowUpRight } from "react-icons/bs";

const Post = () => {
  return (
    <div className='flex flex-col gap-10 px-60 mb-60'>
      <div className='flex justify-between'>
            <h2 className='font-bold text-4xl'>Dernier post</h2>
            <div className='flex gap-2 items-center mb-8'>
        <button>Voir Tout</button>
        <BsArrowUpRight />
      </div>
      </div>
      <div className='flex gap-10 items-center justify-center'>
        <div className='flex flex-col gap-5'>
            <div className='relative'>
                <img src={post1} alt="" className='rounded-2xl'/>
                <p className='absolute top-2 left-4 bg-white px-3 py-1 rounded-xl'>Son</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <p>admin</p>
                    <div className='w-[3px] h-[3px] bg-gray-400 rounded-full'></div>
                    <p>22 novembre 2023</p>
                </div>
                <h3 className='font-medium text-xl'>BMW ALPINA XB7 2024 avec des détails exclusifs, 
                 accessoires extraordinaires.</h3>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='relative'>
                <img src={post2} alt="" className='rounded-2xl'/>
                <p className='absolute top-2 left-4 bg-white px-3 py-1 rounded-xl'>Accessoires</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <p>admin</p>
                    <div className='w-[3px] h-[3px] bg-gray-400 rounded-full'></div>
                    <p>22 novembre 2023</p>
                </div>
                <h3 className='font-medium text-xl'>La BMW X6 M50i est conçue pour dépasser vos attentes 
                 sportives les plus élevées.</h3>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='relative'>
                <img src={post3} alt="" className='rounded-2xl'/>
                <p className='absolute top-2 left-4 bg-white px-3 py-1 rounded-xl'>Extérieur</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <p>admin</p>
                    <div className='w-[3px] h-[3px] bg-gray-400 rounded-full'></div>
                    <p>22 novembre 2023</p>
                </div>
                <h3 className='font-medium text-xl'>BMW ALPINA XB7 2024 avec des détails exclusifs, 
                 accessoires extraordinaires.</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
