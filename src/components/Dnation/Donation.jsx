import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation} from "../../utility/localstorage";
import ShowDonation from "../../ShowDonation/ShowDonation";

const Donation = () => {
    const donations = useLoaderData();
    const [donationData, setDonationData] = useState([]);
    useEffect(()=>{
        const storedDonationIds = getStoredDonation();
        if(donations.length > 0){
            const saveDonation = [];
            for(const id of storedDonationIds){
                const donation = donations.find(donation => donation.id == id);
                if(donation){
                    saveDonation.push(donation)
                }
            }
            setDonationData(saveDonation);
        }
    },[donations])

    return (
        <div>
           <h2 className="text-3xl">This is Donation Compononent: {donationData.length}</h2> 
           <div>
            {
                donationData.map(data=><ShowDonation
                key={data.id}
                data={data}
                ></ShowDonation>)
            }
           </div>
        </div>
    );
};

export default Donation;