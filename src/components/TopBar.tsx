import logo from "/pictures/Vector.svg";
import moon from "/pictures/Moon.png";
import globe from "/pictures/Vector.png";

export default function TopBar() {
  return (
    <div>
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-8">
        <div className="bg-[#F1F1F1] w-[130px] flex justify-center h-[3.1rem] rounded-[62px] items-center">
          <div className="flex w-[120px] justify-center bg-[#ffffff] items-center gap-2 h-[2.5rem] rounded-[62px]">
            <button>
              {" "}
              <img src={logo} className="h-[1.2rem] w-[0.9rem]" />
              <p>BrightFlow</p>
            </button>
          </div>
        </div>
        <div className="flex bg-[#F1F1F1] justify-center h-[3.1rem] rounded-[62px] gap-1.5 items-center w-[9.1rem]">
          <div className="bg-[#ffffff] flex rounded-[50%] h-[2.5rem] w-[2.5rem] items-center justify-center">
            <img src={moon} />
          </div>
          <div className="flex bg-[#ffffff] h-[2.5rem] rounded-[66px] items-center justify-around w-[5rem]">
            <img src={globe} />
            <p>ქარ</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
