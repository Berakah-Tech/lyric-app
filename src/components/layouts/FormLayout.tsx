import { useRouter } from "next/router";
import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import RightSection from "../admin/RightSection";

interface IFormLayoutProps {
  children: React.ReactNode;
  formID: string;
  title: string;
}

const FormLayout = ({ children, formID, title }: IFormLayoutProps) => {
  const router = useRouter();

  return (
    <div className="form-layout-wrap">
      <div className="form-layout-container flex">
        <div className="w-full">
          <div className="form-layout-header flex gap-6">
            <button className="btn-back" onClick={() => router.back()}>
              <SlArrowLeft />
            </button>
            <h1>{title}</h1>
          </div>
          <div className="form-input-section mr-8 mt-8">{children}</div>
        </div>
        <RightSection formID={formID} />
      </div>
    </div>
  );
};

export default FormLayout;
