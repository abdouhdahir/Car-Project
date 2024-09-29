import { TiStar } from "react-icons/ti";
import { FaCircleCheck } from "react-icons/fa6";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Reviews = () => {
  return (
    <div className='flex flex-col gap-10 mb-60 bg-bgmarque py-20'>
      <div className='flex justify-between items-center px-20'>
      <h2 className='font-bold text-4xl'>Ce que disent nos clients</h2>
      <p>Noté 4,7 / 5 basé sur 28 370 avis. Affichage de nos avis 4 et 5 étoiles.</p>
      </div>
      <Carousel 
            showThumbs={false}
            autoPlay
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            interval={3000}
            stopOnHover={false}
            centerMode
            centerSlidePercentage={44.44}
        >        
        <div className='flex flex-col gap-5 bg-white w-8/12 p-3 shadow-sm rounded-lg'>
            <div className='flex gap-4 items-center'>
               <div className='flex '>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
                </div> 
                <div className='flex gap-1 text-gray-500 items-center'>
                <FaCircleCheck />
                <p>Verifier</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black '>Le processus de vente était simple et facile</h3>
                <p>Maximillion était sympathique  et je ne me suis pas senti...</p>
                <h4 className='font-semibold'>Ali Mohamed</h4>
            </div>
        </div>
        <div className='flex flex-col gap-5 bg-white w-8/12 p-3 shadow-sm rounded-lg'>
            <div className='flex gap-4 items-center'>
               <div className='flex '>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
                </div> 
                <div className='flex gap-1 text-gray-500 items-center'>
                <FaCircleCheck />
                <p>Verifier</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black '>Le processus de vente était simple et facile</h3>
                <p>Maximillion était sympathique  et je ne me suis pas senti...</p>
                <h4 className='font-semibold'>Ali Mohamed</h4>
            </div>
        </div>
        <div className='flex flex-col gap-5 bg-white w-8/12 p-3 shadow-sm rounded-lg'>
            <div className='flex gap-4 items-center'>
               <div className='flex '>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
                </div> 
                <div className='flex gap-1 text-gray-500 items-center'>
                <FaCircleCheck />
                <p>Verifier</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black '>Le processus de vente était simple et facile</h3>
                <p>Maximillion était sympathique  et je ne me suis pas senti...</p>
                <h4 className='font-semibold'>Ali Mohamed</h4>
            </div>
        </div>
        <div className='flex flex-col gap-5 bg-white w-8/12 p-3 shadow-sm rounded-lg'>
            <div className='flex gap-4 items-center'>
               <div className='flex '>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
                </div> 
                <div className='flex gap-1 text-gray-500 items-center'>
                <FaCircleCheck />
                <p>Verifier</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black '>Le processus de vente était simple et facile</h3>
                <p>Maximillion était sympathique  et je ne me suis pas senti...</p>
                <h4 className='font-semibold'>Ali Mohamed</h4>
            </div>
        </div>
        <div className='flex flex-col gap-5 bg-white w-8/12 p-3 shadow-sm rounded-lg'>
            <div className='flex gap-4 items-center'>
               <div className='flex '>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-green-600 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
               <TiStar className='bg-gray-400 text-white'/>
                </div> 
                <div className='flex gap-1 text-gray-500 items-center'>
                <FaCircleCheck />
                <p>Verifier</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black '>Le processus de vente était simple et facile</h3>
                <p>Maximillion était sympathique  et je ne me suis pas senti...</p>
                <h4 className='font-semibold'>Ali Mohamed</h4>
            </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Reviews
