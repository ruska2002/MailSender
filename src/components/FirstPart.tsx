import person1 from "/pictures/Frame 423.png";
import person2 from "/pictures/Frame 424 (1).png";
import person3 from "/pictures/Frame 425 (1).png";
export default function FirstPart() {
  return (
    <div>
      <div className="flex bg-[#F1F1F1] w-[11.2rem] justify-around items-center h-[2rem] rounded-2xl">
        <img
          src="/pictures/Logo.svg"
          className="bg-[#F1F1F1] w-[13px] h-[1rem]"
        />
        <p className="text-[12px] font-medium text-[#979797]">
          გახდი დეველოპერი
        </p>
      </div>
      <div className="flex flex-col text-center font-medium">
        <p className="font-[24px] text-[#080808]">გაიგე როგორ</p>
        <p className="font-[24px]">
          ხდება <span className="text-[#41F2E0]">რეაქტ დეველოპმენტი</span>
        </p>
      </div>
      <p className="text-[12px] text-[#A0A2A6] text-center">
        შეგვიძლია, გაჩვენოთ როგორ გადადგათ <br /> ნაბიჯი ციფრული პროფესიების
        სამყაროში
      </p>
      <div className="flex w-[295px] h-[56px] bg-[#E9E9E9] rounded-full items-center px-3 gap-2">
        <input
          type="email"
          placeholder="მეილი"
          className="flex-1 bg-transparent outline-none placeholder:text-[#979797] text-[12px] text-[#333]"
        />
        <button className="bg-[#080808] text-white px-4 py-2 text-[14px] rounded-full h-[2.6rem]">
          შემოუერთდი
        </button>
      </div>
      <div className="flex justify-center">
        <div className="relative w-[100px] h-[32px]">
          <img src={person1} className="absolute left-0 w-8 h-8 object-cover" />
          <img src={person2} className="absolute left-5 w-8 h-8 object-cover" />
          <img
            src={person3}
            className="absolute left-10 w-8 h-8 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
