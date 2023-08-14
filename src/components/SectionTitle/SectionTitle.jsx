
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl border-y-2 border-yellow-500 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;