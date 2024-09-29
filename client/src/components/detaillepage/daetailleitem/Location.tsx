import { Typography } from 'antd';
import { CgArrowTopRight } from "react-icons/cg";




const Location = () => {
  return (
    <div className='hero'>
        <div className='flex flex-col gap-5 items-start justify-start'>
            <h2>Location</h2>
            <div className='flex flex-col gap-1 items-start'>
            <p>Ford Shirley, 361 369 Stratford Road, Shirley, Solihull, B90 3BS</p>
            <p>Open today 9am 6pm</p>
            </div>
            <div className='flex items-center text-blue-500'>
            <p>Get Directions</p>
            <CgArrowTopRight/>
            </div>
            </div>
        <Typography>
            
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3490142822265625%2C48.8255550495646%2C2.375640869140625%2C48.85523812297443&layer=mapnik"
              allowFullScreen
            ></iframe>
        </Typography>
    </div>
  )
}

export default Location
