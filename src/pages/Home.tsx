import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div className="bg-[#fafbfc] flex">
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
          <div className="main mx-auto w-[1132px] py-4 mb-[151px] pb-[146px] flex h-[471px] flex-col items-center gap-[82px] bg-[#fff] border-[#e6e6e6] rounded-[16px]">
            <div className="head flex w-full justify-between h-[52px] border-b-2 px-6 pb-4">
              <div className="flex gap-2 items-start">
                <h3 className="text-lg font-medium leading-[36px]">
                  Getting Started
                </h3>
                <button className="bg-[#f2f3f7] py-1 px-2 rounded-lg text-[#00085A]">
                  Step 1 out of 4
                </button>
              </div>
              <div className="buttons flex items-center">
                <p className="rounded-full h-6 w-6 bg-[#563bdb] text-white flex justify-center items-center">
                  1
                </p>
                <hr className="w-2 h-1 bg-[#f2f3f7]" />
                <p className="rounded-full flex justify-center items-center h-6 w-6 bg-[#f2f3f7] ">
                  2
                </p>
                <hr className="w-2 h-1 bg-[#f2f3f7]" />
                <p className="rounded-full flex justify-center items-center h-6 w-6 bg-[#f2f3f7] ">
                  3
                </p>
                <hr className="w-2 h-1 bg-[#f2f3f7]" />
                <p className="rounded-full flex justify-center items-center h-6 w-6 bg-[#f2f3f7] ">
                  4
                </p>
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
