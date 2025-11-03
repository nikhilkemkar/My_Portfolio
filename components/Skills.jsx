import { skills } from "@/public/assets/data/data"
import Image from "next/image"


const Skills = () => {
    return (
        <section className="max-w-7xl mx-auto my-8">
            <h1 className="text-center text-4xl font-bold ">
                What do i know
            </h1>
            <div className="flex flex-wrap gap-5 justify-center py-14">
                {
                    skills.map((s) => {
                        return <div key={s.id} className=" z-30 cursor-pointer rounded-full h-[90px] w-[90px] border-4 overflow-hidden border-gray-300 bg-white flex items-center justify-center">
                            {s.icon && <Image src={s.icon} height={70} width={70} alt="skill icon" className=" rounded-full border-4 border-white" />}
                        </div>
                    })
                }

            </div>

        </section>
    )
}

export default Skills
