import { useState } from "react";
import PeopleCard from "./PeopleCard"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

export interface IRenderPeopleCardData {
    id: number,
    fullname: string;
    srcImg: string;
    affiliation: string;
    topics: string[]
}

function RenderPeopleCard({ data, active }: { data: IRenderPeopleCardData[], active: boolean }) {

    const [animation, setAnimation] = useState<string>("animate-fade-left");
    const [activeImage, setActiveImage] = useState<number>(0);

    const NextKeynote = () => {
        activeImage === data.length - 1
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1);
        setTimeout(() => {
            setAnimation("animate-fade-right");
        }, 100);
        setAnimation("");
    };

    const PrevKeynote = () => {
        activeImage === 0
            ? setActiveImage(data.length - 1)
            : setActiveImage(activeImage - 1);

        setTimeout(() => {
            setAnimation("animate-fade-left");
        }, 100);
        setAnimation("");
    };

    return (
        <>
            {active ?
                <div className="flex gap-1">
                    <button onClick={() => PrevKeynote()}>
                        <IoIosArrowDropleftCircle size={50} />
                    </button>
                    <div className="flex gap-4">
                        {data
                            .slice(activeImage, activeImage + 1)
                            .map((auth) => (
                                <div key={auth.fullname} className={` ${animation}`}>
                                    <PeopleCard
                                        key={auth.fullname}
                                        name={auth.fullname}
                                        srcImage={auth.srcImg}
                                        affiliation={auth.affiliation}
                                        topics={auth.topics}
                                    />
                                </div>
                            ))}
                    </div>
                    <button onClick={() => NextKeynote()}>
                        <IoIosArrowDroprightCircle size={50} />
                    </button>
                </div>
                :
                <>
                    {data.map((data) => (
                        <PeopleCard
                            key={data.fullname}
                            name={data.fullname}
                            srcImage={data.srcImg}
                            affiliation={data.affiliation}
                            topics={data.topics}
                        />
                    ))}
                </>
            }
        </>
    )
}

export default RenderPeopleCard