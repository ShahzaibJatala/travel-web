import Image from "next/image";

type props = {
    image:string;
    title:string;
}

function WhyChooseCard({image, title} : props) {
    return (
        <div>
            <Image src={image} height={70} width={70} alt="Image" className="mx-auto" />
            {/* content  */}
            <h1 className="mt-6 text-center text-grey-900 font-medium text-lg">{title}</h1>
            <p className="mt-2 text-center text-xs font-medium text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

        </div>
    )
}

export default WhyChooseCard