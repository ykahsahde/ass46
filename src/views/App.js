import Naav from "./../components/nav"
import {shope_Name,Image,description,bgc} from "./../config"

export default function App() {
  return (
    <div className={bgc.stone}>
    <Naav/>
     <h1 className="text-center my-2 text-[30px] underline decoration-wavy">{shope_Name}</h1>
     <div className="flex justify-between my-[100px] mx-24 gap-[40px] ">
     <img src={Image} alt="img"className="w-[400px] rounded-lg"/>
      <div className="p-[50px] text-start text-[20px]">{description}</div>
     </div>
    </div>
  )
}