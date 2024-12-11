import Image from 'next/image';
import iphone from '../../../assets/iphone.png';

function BillingTable() {
  console.log(iphone);

  return (
    <div className=' grid grid-rows-1 gap-5 my-10'>
      <div className=' grid grid-rows-1 gap-5'>
        <div className="flex flex-row gap-28">
          <div className=' flex flex-row gap-2'>
            <Image src={iphone} alt={'tite'} width={50} height={50} />
            <p className=' flex items-center justify-center font-semibold'>LCD Monitor</p>
          </div>
          <p className=' flex font-medium  items-center'>$1,200</p>
        </div>
        <div className="flex flex-row gap-28">
          <div className=' flex flex-row gap-2'>
            <Image src={iphone} alt={'tite'} width={50} height={50} />
            <p className=' flex items-center justify-center font-semibold'>H1 Gamepad</p>
          </div>
          <p className=' flex font-medium  items-center'>$1100</p>
        </div>
        <div className="flex flex-row gap-56 my-8">
          <div className=' flex flex-row gap-2'>
            <p className=' flex items-center justify-center font-semibold'>Subtotal:</p>
          </div>
          <p className=' flex font-medium  items-center'>$1100</p>
        </div>
      </div>
    </div>
  );
}

export default BillingTable;
