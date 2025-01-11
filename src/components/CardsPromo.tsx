import { FaArrowRight } from "react-icons/fa";
import promoimg from "../assets/promoimg.png";

function CradsPromo() {
  return (
    <div className="mt-4 bg-[#0052FE] text-white lg:h-[515px] rounded-2xl px-10 py-8 lg:ml-3 text-center">
      <div className="">
        <div className="text-2xl font-bold">Get Started with KoinX</div>
        <div className="text-2xl font-bold">for FREE</div>
        <div className=" mt-4 font-semibold ">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <img src={promoimg} className="w-[178px] h-[166.22px]"></img>
      </div>
      <div className="flex justify-center">

      <div className="flex justify-center mt-4 bg-white text-[#0F1629] rounded-xl py-3  w-[273px] text-center cursor-pointer flex-shrink">
        <button className="font-medium" 
         onClick={() => window.location.href = 'https://app.koinx.com/get-started'}
        > 
          Get Started for FREE
        </button>
        <div className="ml-4 mt-1">
          <FaArrowRight className="font-thin"/>

        </div>
      </div>
      </div>
    </div>
  );
}

export default CradsPromo;