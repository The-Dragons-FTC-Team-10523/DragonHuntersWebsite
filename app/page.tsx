import Image from "next/image";
import {teams} from "./data"

export default function Home() {
    return (
        <div className="bg-white h-full font-inter flex flex-col items-center">
            {/* The Fold */}
            <div className="relative">
                {/* fold background image */}
                <Image
                    src="/heading_bg_dragon_hunters.jpg"
                    width="2500"
                    height="1400"
                    alt="heading background of the dragon hunters team"
                    className="w-screen h-screen"
                >
                </Image>
                {/* Background Image tint - adds a darkness to the image */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                {/* This div contains the items that are in front of the Image */}
                <div className="absolute inset-0">
                    {/* Fancy text area */}
                    <div
                        className="flex justify-center items-center flex-col h-screen position-relative py-4 text-shadow-4xs font-inter font-bold">
                        <div>
                            <h4 className="text-[48px] w-full">The Dragon Hunters</h4>
                            <div
                                className="font-inter text-bold text-[96px] flex flex-col justify-center items-center w-fit">
                                <h1 className="flex items-center justify-center">
                                    We've
                                    <p className="aria-hidden bg-[#64BB8A] px-6 rotate-[-5deg] ml-4 mr-5 rounded-3xl shadow-4xs text-black">Rebuilt</p>
                                    robotics,
                                </h1>
                                <h1 className="flex items-center justify-center">
                                    one step at a time
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  The about me section  */}
            <div className="flex flex-col w-1/2 justify-center items-center py-24">
                <h1 className="text-[#1F2D3D] font-bold text-[96px] flex justify-center">About</h1>
                <p className="text-[#1F2D3D] font-bold text-[32px] flex justify-center text-center">
                    The Dragon Hunters is a FIRST Robotics Competition team based in Queen Creek, Arizona.
                    The team began competing in the 2025 FRC Season, REEFSCAPE.
                    The Dragon Hunters were founded by Zach Ethington
                    , An alumnus who previously competed in FTC with 10523,
                    The Dragons, and in FRC with team 1829, The Carbonauts.
                </p>
            </div>

            {/* The robot Section */}
            <div className="flex flex-col w-1/2 justify-center items-center py-24">
                <h1 className="text-[#1F2D3D] font-bold text-[96px] flex justify-center">Robots</h1>

                {/* Add Interactive Robot Here */}
                <Image src="/reefscape.png" alt="dragon hunters reefscape robot fishlegs" width="577" height="769" className="w-164 h-164 rounded-4xl"/>

                {/* Description of the Robot + Image */}
                <div className="flex flex-col py-4 space-y-2">
                    <p className="text-[#1F2D3D] font-extrabold text-[32px] flex justify-center">Fishlegs</p>
                    <Image
                        src="/fd_frc_reefscape_wordmark_black_rgb.svg"
                        alt="FRC reefscape wordmark"
                        width="192"
                        height="68"
                    />
                </div>
            </div>

            {/*  The Team Section  */}
            <div className="flex flex-col justify-center items-center py-24 space-y-2 w-full">
                <h1 className="text-[#1F2D3D] font-bold text-[96px] flex justify-center">Meet The Team</h1>
                <div className="flex flex-row justify-center items-center flex-wrap gap-6 space-y-6 space-x-6 w-[75%]">
                    {teams.map((person, index) => (
                        <div key={index}>
                            {/* @ts-expect-error because it is mad at src */}
                            <Image src={person.image} alt={person.name} width="430" height="430" className="bg-[#D9D9D9] w-100 h-100 rounded-4xl"/>
                            <div>
                                <h2 className="text-[#1F2D3D] font-bold text-[32px] flex justify-center">{person.name}</h2>
                                <h2 className="text-[#1F2D3D] font-bold text-[32px] flex justify-center">{person.description}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
