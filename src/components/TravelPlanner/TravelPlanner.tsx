import { FC } from "react";
import { Button } from "../ui/button";
import LIcon from "../lucid-icon/lucid-icon";
import "../../index.css";

export interface TravelPlannerProps {
  title: string;
  subTitle?: string;
}

const TravelPlanner:FC<TravelPlannerProps> = (props) => {
  return (
    <div>
      <h1 className={"text-slate-800 text-4xl font-bold"}>Title</h1>
      <h5 className={"text-gray-500 text-xl font-medium mt-2"} >Sub-title</h5>
      <div className="search-bar rounded-lg border border-gray-200 bg-white flex gap-4 p-4 mt-6">
        <div className="w-8/12 flex items-center gap-4">
          <div className="input w-full flex items-center gap-2 border border-gray-200 px-3.5 py-2.5 rounded-lg text-gray-500 text-base">
            <LIcon size={20} name="Search" />
            <span>Nereye gidiyorsun?</span>
          </div>
          <div className="input w-full flex items-center gap-2 border border-gray-200 px-3.5 py-2.5 rounded-lg text-gray-500 text-base">
            <LIcon size={20} name="Calendar" />
            <span>Giriş - Çıkış tarihi seçin</span>
          </div>
        </div>
        <div className="w-4/12 flex items-center gap-4">
          <div className="input w-full flex items-center gap-2 border border-gray-200 px-3.5 py-2.5 rounded-lg text-gray-500 text-base">
            <LIcon size={20} name="User" />
            <span>2 misafir, 1 oda</span>
          </div>
          <Button variant="primary">Otel ara</Button>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanner;
