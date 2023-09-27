import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import ShowDonation from "../../ShowDonation/ShowDonation";

const Donation = () => {
    const donations = useLoaderData();
    const [donationData, setDonationData] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const saveDonation = [];
            for (const id of storedDonationIds) {
                const donation = donations.find(donation => donation.id == id);
                if (donation) {
                    saveDonation.push(donation)
                }
            }
            setDonationData(saveDonation);
        }
    }, [donations])

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl">This is Donation Compononent: {donationData.length}</h2>
            <div className="grid grid-cols-2 gap-5">
                {
                    donationData.slice(0, dataLength).map(data => <ShowDonation
                        key={data.id}
                        data={data}
                    ></ShowDonation>)
                }
            </div>
            <div className="flex justify-center mt-12">
                <div className={dataLength === donationData.length && 'hidden'}>
                    <button
                        onClick={() => setDataLength(donationData.length)}
                        className="btn bg-[#009444] text-white hover:bg-orange-600 normal-case">Show All</button>
                </div>
            </div>
        </div>

    );
};

export default Donation;