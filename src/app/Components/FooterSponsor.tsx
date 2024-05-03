import CardSponsor from "./CardSponsor"

function FooterSponsor(){
    return(
        <div className="p-2">
          <div>
            <label htmlFor="" className="font-semibold">
              Our sponsor:
            </label>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-4 items-center sm:grid-cols-2 lg:grid-cols-4">
              <CardSponsor
                path={
                  "/images/sponsors/1200px-Seal_of_the_Minister_of_Foreign_Affair_of_Thailand.svg.png"
                }
                nameCompany1={"Ministry of Foreign Affairs Kingdom of Thailand"}
                nameCompany2={""}
              />
              <CardSponsor
                path={
                  "/images/sponsors/Seal_of_the_Ministry_of_Energy_of_Thailand.svg.png"
                }
                nameCompany1={"Department of Mineral Fuels MINISTRY OF ENERGY"}
                nameCompany2={""}
              />
              <CardSponsor
                path={"/images/sponsors/สอทnew.png"}
                nameCompany1={"Royal Thai Embassy, Copenhagen, Denmark"}
                nameCompany2={"สถานเอกอัครราชทูต ณ โคเปนเฮเกน"}
              />
              <CardSponsor
                path={"/images/sponsors/images.png"}
                nameCompany1={"Royal Thai Embassy, Oslo"}
                nameCompany2={"สถานเอกอัครราชทูต ณ กรุงออสโล"}
              />
              <CardSponsor
                path={"/images/sponsors/images (1).png"}
                nameCompany1={"กระทรวงอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม"}
                nameCompany2={
                  "Ministry of Higher Education, Science, Research and Innovation"
                }
              />
              <CardSponsor
                path={"/images/sponsors/TSRI_Logo_300x363.png"}
                nameCompany1={
                  "สำนักงานคณะกรรมการส่งเสริมวิทยาศาสตร์ วิจัยและนวัตกรรม"
                }
                nameCompany2={"Thailand Science Research and Innovation"}
              />
              <CardSponsor
                path={"/images/sponsors/PMU-b-logo.png"}
                nameCompany1={
                  "หน่วยบริหารและจัดการทุนด้านการพัฒนากำลังคนและทุนด้านการพัฒนาสถาบันอุดมศึกษาการวิจัยและการสร้างนวัตกรรม"
                }
                nameCompany2={""}
              />
              <CardSponsor
                path={"/images/sponsors/pmcu-logo.png"}
                nameCompany1={
                  "หน่วยบริหารและจัดการทุนด้านการเพิ่มความสามารถในการแข่งขันของประเทศ"
                }
                nameCompany2={""}
              />
            </div>
          </div>
        </div>
    )
}

export default FooterSponsor