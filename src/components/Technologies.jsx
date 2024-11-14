import { RiReactjsLine } from 'react-icons/ri';
import { FaAws } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BsUnity } from "react-icons/bs";



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-blue-900"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoDjango className="text-7xl text-emerald-900"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsUnity className="text-7xl text-gray-600"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
