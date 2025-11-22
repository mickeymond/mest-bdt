import AllCohorts from "@/components/cohorts/AllCohorts";
import CohortsHeader from "@/components/cohorts/CohortsHeader";

export default function Cohorts() {
  return (
    <div className=" bg-gray-200 p-8 rounded-md text-black">
      <CohortsHeader />
      <AllCohorts />
    </div>
  );
}
