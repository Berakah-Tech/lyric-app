interface IRightSection {
  formID: string;
}
const RightSection = ({ formID }: IRightSection) => {
  return (
    <div className="right-section min-w-[300px] bg-gray-100 p-6">
      <button className="btn-black" type="submit" form={formID}>
        Add Song
      </button>
    </div>
  );
};

export default RightSection;
