import React from "react";
import FeatureDetails from "../FeatureDetails/FeatureDetails";

const Features = () => {
  return (
    <div className="lg:px-16 md:mt-6 lg:mt-0 px-6 py-4 space-y-10">
      <div>
        <div className=" border-[#444] border-[0.5px] hidden lg:block border-dashed h-1/2 z-0 w-px absolute inset-x-0 left-1/2 -translate-x-1/2 translate-y-2" />
        <FeatureDetails
          featureName="Detailed statistics"
          featureDescription="to quickly understand the performance and form of the teams"
          iconType="chart"
        />
      </div>
      <div>
        <div className=" border-[#444] border-[1.5px] hidden lg:block rounded-full w-[11px] h-[11px] absolute inset-x-0 left-1/2 bg-black -translate-x-1/2 translate-y-4" />
        <FeatureDetails
          featureName="A sorting & filtering system"
          featureDescription="to analyze a hundred fixtures in a few seconds"
          iconType="filter"
        />
      </div>
      <div>
        <div className=" border-[#444] border-[1.5px] hidden lg:block rounded-full w-[11px] h-[11px] absolute inset-x-0 left-1/2 bg-black -translate-x-1/2 translate-y-4" />
        <FeatureDetails
          featureName="A forecast"
          featureDescription="produce by an artificial intelligence"
          iconType="ai"
        />
      </div>
      <div>
        <div className=" border-[#444] border-[1.5px] hidden lg:block rounded-full w-[11px] h-[11px] absolute inset-x-0 left-1/2 bg-black -translate-x-1/2 translate-y-4" />
        <FeatureDetails
          featureName="A confidence score"
          featureDescription="resulting from an advanced algorithm, allow you to bet safer"
          iconType="safety"
        />
      </div>
    </div>
  );
};

export default Features;
