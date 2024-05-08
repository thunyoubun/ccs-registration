import CardSponsor from "./CardSponsor";

function FooterSponsor() {
  return (
    <div className=" p-8 md:pt-20 md:px-20 ">
      <div className="flex justify-center ">
        <h1 className="font-semibold text-teal-400 text-3xl text-center">
          Main Supporters
        </h1>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardSponsor
            path={
              "/images/sponsors/1200px-Seal_of_the_Minister_of_Foreign_Affair_of_Thailand.svg.png"
            }
            nameCompany1={"กระทรวงการต่างประเทศ"}
            nameCompany2={"Ministry of Foreign Affairs Kingdom of Thailand"}
          />
          <CardSponsor
            path={
              "/images/sponsors/Seal_of_the_Ministry_of_Energy_of_Thailand.svg.png"
            }
            nameCompany1={"กรมเชื้อเพลิงธรรมชาติ"}
            nameCompany2={"Department of Mineral Fuels MINISTRY OF ENERGY"}
          />
          <CardSponsor
            path={"/images/sponsors/สอทnew.png"}
            nameCompany1={"สถานเอกอัครราชทูต ณ โคเปนเฮเกน"}
            nameCompany2={"Royal Thai Embassy, Copenhagen, Denmark"}
          />
          <CardSponsor
            path={"/images/sponsors/สอทnew.png"}
            nameCompany1={"สถานเอกอัครราชทูต ณ กรุงออสโล"}
            nameCompany2={"Royal Thai Embassy, Oslo"}
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
            nameCompany2={
              "Program Management Unit for Human Resources & Institutional Development,Research and Innovation (PMU-B)"
            }
          />
          <CardSponsor
            path={"/images/sponsors/pmcu-logo.png"}
            nameCompany1={
              "หน่วยบริหารและจัดการทุนด้านการเพิ่มความสามารถในการแข่งขันของประเทศ"
            }
            nameCompany2={"Program Management Unit for Competitiveness"}
          />
        </div>
      </div>
    </div>
  );
}

export default FooterSponsor;
