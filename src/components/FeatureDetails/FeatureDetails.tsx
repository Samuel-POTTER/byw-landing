import React from "react";
import Icon, { IIconProps } from "../Icon/Icon";

interface IFeatureDetailsProps {
  iconType: IIconProps["icon"];
  featureName: string;
  featureDescription: string;
}

const FeatureDetails = ({
  iconType,
  featureDescription,
  featureName,
}: IFeatureDetailsProps) => {
  return (
    <div>
      <div className=" border-[#444] border-[1.5px] hidden rounded-full w-[11px] h-[11px] absolute inset-x-0 left-1/2 bg-black -translate-x-1/2 translate-y-4" />
      <div className="flex lg:block items-center justify-center">
        <Icon icon={iconType} />
      </div>
      <div className="font-semibold text-[22px] text-center lg:text-start md:text-2xl">
        {featureName}
      </div>
      <p className="text-[#888] text-center lg:text-start lg:w-2/3 font-normal">
        {featureDescription}
      </p>
    </div>
  );
};

export default FeatureDetails;
