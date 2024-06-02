export default function Tokenomics() {
  return (
    <div className="font-zcool">
      <div className="w-full h-screen bg-tokenomics bg-no-repeat bg-cover bg-center text-white pl-20">
        <p
          className="text-center text-[#ED0137] text-3xl font-extrabold p-4"
          style={{ fontFamily: "Shojumaru" }}
        >
          TOKENOMICS
        </p>
        <div className="mt-20 flex top-24 relative">
          <div className="relative border border-red-600 h-56 rounded-lg">
            <div className="absolute -top-7 left-[15%]">
              <button
                className="h-14 px-6 py-4 rounded-lg bg-[#ED0137] text-sm"
                style={{ fontFamily: "Shojumaru" }}
              >
                TOKEN DETAILS
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-around p-4 w-full">
                <div className="p-2">
                  <p className="mb-4">Name</p>
                  <p className="mb-4">Symbol</p>
                  <p className="mb-4">Total Supply</p>
                  <p className="mb-4">Decimals</p>
                </div>
                <div className="text-[#DF180A] gap-4">
                  <p className="mb-4">Saviour</p>
                  <p className="mb-4">SVR</p>
                  <p className="mb-4">1000 Trillions</p>
                  <p className="mb-4">18</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="absolute end-60">
              <div class="w-[270px] h-[270px] border-red-500 border border-[20px] rounded-full flex justify-center items-center z-10">
                <div className="relative flex">
                  <div class="bg-logo bg-cover w-72 h-72 mb-[30px]"></div>
                </div>
              </div>
              <div>
              <div className="border w-12 absolute top-10 -left-2 z-0"></div>
              <div className="absolute top-8 -left-[150px]">IDO Round (20%)</div>
              </div>
              <div>
              <div className="border w-12 absolute top-10 left-[230px]"></div>
              <p className="absolute w-52 top-4 left-[300px]">Community Airdrop (7.5%)</p>
              </div>
              <div>
              <div className="border w-12 absolute top-[120px] -left-[50px] z-0"></div>
              <div className="absolute top-[110px] -left-[220px]">Ecological Fund (5%)</div>
              </div>
              <div>
              <div className="border w-12 absolute top-[110px] -right-[45px] z-0"></div>
              <div className="absolute w-44 top-[90px] left-[320px]">Initial Liquidity Provider (15%)</div>
              </div>
              <div>
              <div className="border w-12 absolute bottom-20 -left-[35px] z-0"></div>
              <div className="absolute bottom-[70px] -left-[320px]">Black Hole Contract Address (50%)</div>
              </div>
              <div>
              <div className="border w-12 absolute bottom-20 -right-10 z-0"></div>
              <div className="absolute bottom-[70px] -right-[220px]">Team Founders (2.5%)</div></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
