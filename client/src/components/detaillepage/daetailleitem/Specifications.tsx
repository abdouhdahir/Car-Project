import { Collapse } from 'antd';
const { Panel } = Collapse;

 
const Specifications = () => {
  return (
   <div className='flex flex-col gap-10 pb-20' style={{borderBottom:"1px solid #e1e1e1"}}>
    <h2 className='text-2xl font-semibold'>Specifications</h2>
    <Collapse defaultActiveKey={['1']}
            expandIconPosition="right"
   >
      <Panel header="Engine and Transmission" key="1">
        <Contenu/>
      </Panel>
      <Panel header="Dimensions & Capacity" key="2">
        <Contenu/>
      </Panel>
      <Panel header="Miscellaneous" key="3">
        <Contenu/>
      </Panel>
    </Collapse>
   </div>
  )
}

export default Specifications


const Contenu = () => (
    <div className='flex flex-col gap-3 items-start'>
        <h3 className='text-lg font-semibold'>Engine and Transmission</h3>
        <div className='flex justify-between gap-20 w-full '>
        <div className='flex flex-col gap-5 w-full'>
            <div className='flex justify-between items-center'>
                <p>Length</p>
                <p className='font-medium'>4950mm</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>Height</p>
                <p className='font-medium'>1776mm</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>Front Tread</p>
                <p className='font-medium'>1668mm</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>Kerb Weight</p>
                <p className='font-medium'>2350</p>
            </div>
        </div>
        <div className='flex flex-col gap-5 w-full'>
            <div className='flex justify-between items-center'>
                <p>Width</p>
                <p className='font-medium'>2140mm</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>Wheel Base</p>
                <p className='font-medium'>2984mm</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>Rear Tread</p>
                <p className='font-medium'>1668mm</p>
            </div>
        </div>
        </div>
    </div>
)