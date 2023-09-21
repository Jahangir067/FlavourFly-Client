import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const History = () => {
   

    return (
        <div className="w-full h-full my-8">
            <Helmet>
                <title>FlavourFly | Payment History</title>
            </Helmet>

            <SectionTitle
                subHeading={"Payment History"}
                heading={'View All Transaction'}
            ></SectionTitle>
            <div>
                {/* TODO */}
            </div>
           
        </div>
    );
};

export default History;