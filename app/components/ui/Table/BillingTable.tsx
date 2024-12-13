import Image from 'next/image';
import iphone from '../../../../assets/iphone.png';

function BillingTable() {
  console.log(iphone);

  return (
    <div className="my-10">
      <table className="min-w-full table-auto">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <div className="flex flex-row items-center gap-2">
                <Image src={iphone} alt={'LCD Monitor'} width={50} height={50} />
                <p className="font-semibold">LCD Monitor</p>
              </div>
            </td>
            <td className="px-4 py-2 font-medium">$1,200</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <div className="flex flex-row items-center gap-2">
                <Image src={iphone} alt={'H1 Gamepad'} width={50} height={50} />
                <p className="font-semibold">H1 Gamepad</p>
              </div>
            </td>
            <td className="px-4 py-2 font-medium">$1,100</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold border-b-2">Subtotal:</td>
            <td className="px-4 py-2 font-medium border-b-2">$2,300</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold border-b-2">Shipping:</td>
            <td className="px-4 py-2 font-medium border-b-2">Free</td>
          </tr>
          <tr>
            <td className=' px-4 py-4 font-semibold'>Total:</td>
            <td className=' px-4 py-4'>$1,750</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BillingTable;
