import React from 'react';
import Cert from "./Cert";
import cisco from '../images/cisco.png';
import comptia from '../images/comptia.png';
import uni from '../images/uni.png';
import Separation from "./Separation";

function CertSection() {

    let certList = [
        {title: "CCNP Specialist", image: cisco, description: "CCNP ENCOR 350-401", link: "https://cp.certmetrics.com/cisco/en/public/verify/credential/3dd7b48033414f4f81afd4bf8c85c726"},
        {title: "CCNA", image: cisco, description: "CCNA 200-301", link: "https://cp.certmetrics.com/cisco/en/public/verify/credential/302b9cdb8137421eae1bcd98c655bd4a"},
        {title: "Security+", image: comptia, description: "CompTIA Security+ SY0-701", link: "https://www.certmetrics.com/comptia/public/verification.aspx/SWB14S6TE111QD5C"}
    ]

    return (
        <div className="xl:mx-24">
            <Separation title="Education"/>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">


                <div className="min-w-72 xl:min-w-80 mx-3 xl:mx-0 xl:h-56 py-2 px-4 bg-gray-50 border rounded-lg shadow ">
                    <svg className="w-28 h-20 text-gray-800" aria-hidden="true"
                         fill="currentColor" viewBox="0 0 20 20">
                        <image href={uni} width="100%" height="100%"/>
                    </svg>
                    <h5 className="mb-2 text-3xl font-semibold text-blue-700">
                        Computer Science Software Engineering
                    </h5>
                </div>


                <div className="flex flex-col sm:flex-row justify-center sm:justify-between w-full">
                    {certList.map((cert, index) => (
                        <div key={index} className="m-3 min-w-72 xl:w-80">
                            <Cert title={cert.title} img={cert.image} description={cert.description} link={cert.link}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CertSection;
