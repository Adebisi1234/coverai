import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div className="bg-white/50 flex">
      <Sidebar />
      <main>
        <Header />
        <section className="px-12">
          <div className="hi mb-16 w-fit">
            <h1 className="text-[28px] font-semibold leading-[145%] text-[#060809]">
              Hello, Chris!
            </h1>
            <p className="text-[#414141]">
              It's time to land your next role. Let's get to it
            </p>
          </div>
          <div className="main mx-auto w-[1132px] py-4 pb-[151px] flex h-[471px] flex-col items-center gap-[82px] bg-[#fff] border-[#e6e6e6] rounded-[16px]">
            <div className="head flex w-full justify-between h-[52px]">
              <div className="flex gap-2">
                <h3>Getting Started</h3>
                <button className="bg-black/10 p-1 rounded-lg">
                  Step 1 out of 4
                </button>
              </div>
              <div className="buttons flex gap-2">
                <p className="rounded-full h-6 w-6 bg-[#563bdb] text-white">
                  1
                </p>
                <p className="rounded-full h-6 w-6 ">2</p>
                <p className="rounded-full h-6 w-6 ">3</p>
                <p className="rounded-full h-6 w-6 ">4</p>
              </div>
            </div>
            <div className="text-center mt-[82px] mx-auto w-[375px] h-[170px] flex flex-col items-center gap-10">
              <div>
                <h2 className="font-bold">Get Familiar with Accountable</h2>
                <p>
                  Let's get you started with Accountable through a simple
                  walkthrough guide that explains how it works
                </p>
              </div>
              <div className="button h-[56px] w-[314px] flex gap-2">
                <button className="rounded-xl flex justify-center items-center py-[18px] w-[153px] bg-[#563bdb] text-white">
                  New CV/Resume
                </button>
                <button className="rounded-xl border-2 flex justify-center items-center py-[18px] w-[153px] bg-white text-[#563bdb] ">
                  New Coverletter
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
