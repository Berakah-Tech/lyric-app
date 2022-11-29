import React from "react";
import RightSection from "../admin/RightSection";

interface IFormLayoutProps {
  children: React.ReactNode;
  formID: string;
}

const FormLayout = ({ children, formID }: IFormLayoutProps) => {
  return (
    <div className="form-layout-wrap">
      <div className="form-layout-container flex">
        <div className="w-full">
          <div className="form-layout-header">
            <h1>Add a Song</h1>
          </div>
          <div className="form-input-section mr-8 mt-8">{children}</div>
        </div>
        <RightSection formID={formID} />
      </div>
    </div>
  );
};

export default FormLayout;
