import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiPython, SiArduino } from "react-icons/si";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IntroductionText } from "lib/components/intro-text";
import { Card } from "lib/components/card-with-title";
import { SubCard } from "lib/components/sub-card";
import { GiFallingStar } from "react-icons/gi";

export default function Index() {
  return (
    <div className="">
      <div className="border rounded-md border-pink my-3 text-sm space-y-3 p-3">
        <div className="gap-3 grid">
          <div className="grid grid-cols-2">
            <a href="https://albinkarlsson.se/" className="no-underline hover:underline" target="_blank" referrerPolicy="no-referrer">
              <img src="\images\profile-pic-1.jpg" alt="Me!" className="min-w-32"/>
            </a>
            <div className="grid gap-4 content-evenly justify-center">
              <p className="sm:scale-150 no-underline hover:underline">
                <a href="https://www.linkedin.com/in/susanne-on-huang-30057118a"  target="_blank" referrerPolicy="no-referrer">
                  <FaLinkedin className="inline size-5 fill-gray-100 mr-3"/>
                  LinkedIn
                </a>
              </p>
              <p className="sm:scale-150 no-underline hover:underline">
                <a href="https://www.instagram.com/p1nk_m8/" target="_blank" referrerPolicy="no-referrer">
                  <GrInstagram className="inline size-5 fill-gray-100 mr-3"/>
                  Instagram
                </a>
                
              </p>
              <p className="sm:scale-150 hover:underline">
                <a href="https://kirby.fandom.com/wiki/Special:Random" target="_blank" referrerPolicy="no-referrer">
                  <GiPerspectiveDiceSixFacesRandom className="inline size-5 fill-gray-100 mr-3"/>
                {"Random ;)"}
                </a>
              </p>
          </div>
          </div>
          <p><IntroductionText/></p>
        </div>
        <div className="grid justify-items-end">
          <img className="h-12 -m-7" src="\images\kirbyspin.gif" alt=""/>
        </div>
      </div>

      <div className="mb-4 grid justify-center">
        <p className="sm:scale-150 underline font-semibold">
          <a href="https://www.chalmers.se/en/education/find-masters-programme/interaction-design-and-technologies-msc/"  target="_blank" referrerPolicy="no-referrer">
            "Sus, what are you studying?" <span className="text-xs"> click me</span>
          </a>
        </p>
        <p className="sm:scale-150 underline font-semibold">
          <a href="https://www.chalmers.se/utbildning/hitta-program/teknisk-design-civilingenjor/"  target="_blank" referrerPolicy="no-referrer">
            "Sus, what is your education about?"
          </a>
        </p>
      </div>

      <div>
        <Card cardTitle="Education">
          <SubCard title="MSc INTERACTION DESIGN AND TECHNOLOGIES, CHALMERS UNIVERSITY OF TECHNOLOGY" timePeriod="2023.08  - ongoing">

          <p><span className="font-semibold">Committee:</span> Treasurer for the committee taking care of IT-master premises at Lindholmen</p>
          <p><span className="font-semibold"> Volunteering:</span> Company host in the DatE-IT job fair</p>
          </SubCard>
          <SubCard title="BSc INDUSTRIAL DESIGN ENGINEERING, CHALMERS UNIVERSITY OF TECHNOLOGY" timePeriod="2020.08  - 2023.06">
            
            <p><span className="font-semibold">Additional courses:</span> Basics of Music Theory</p>
            <p><span className="font-semibold">Association:</span> Administrator and Treasurer for Industrial Designs Board of Studies (2021-2022)</p>
            <p><span className="font-semibold">Bachelor Thesis:</span> A study on requirements and needs for communication between small business owners and their financial agencies</p>
          </SubCard>
          <SubCard
            title="MATHEMATICS PROGRAMME, UNIVERSITY OF GOTHENBURG"
            timePeriod="2019.08 - 2020.06"
            description="Amanuens: tasked to share lecture notes for dyslexic students"
          />
          <SubCard
            title="ENGINEERING PREPARATORY YEAR, CHALMERS UNIVERSITY OF TECHNOLOGY"
            timePeriod="2018.08 - 2019.06"
            description="GPA: 4.9 of 5"
          />
          <SubCard
            title="GAME GRAPHICS, LBS LUND"
            timePeriod="2015.08 - 2018.06"
            description="Diploma: Excellent results in Mathematics 2b"
          />
        </Card>
        <Card cardTitle="Skills">
          <ul className="mt-5">
            <li>Adobe Software</li>
            <li>Figma</li>
            <li>MATLAB</li>
            <li> <SiPython className="inline"/> Python </li>
            <li> <SiArduino className="inline"/> Arduino IDE </li>
            <li>CAD</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Ergonomic Assessments</li>
            <li>UX Research</li>
            <li>Interaction Design</li>
            <li>Group Dynamics</li>
          </ul>
          <div className="grid justify-items-end">
            <img className="h-12 -mt-10 mb-3" src="\images\kirbyidle.gif" alt=""/>
          </div>
        </Card>
        <Card cardTitle="Student Activities">
            <ul className="mt-5">
              <li>FikIT'24</li>
              <li>DatE-IT Host'23</li>
              <li>Cloudlords'23</li>
              <li>Reception Video Industrial Design'22</li>
              <li>SMART'21</li>
              <li>SNTD'21</li>
            </ul>
            <div className="grid justify-end">
              <img src="\images\kirbysleep.gif" className="max-w-60 -mt-20 sm:-mt-44"/>
            </div>
        </Card>
        <Card cardTitle="Hobbies and other fun stuff :)">
          <p className="mt-5 font-bold">Embroidery for Chalmers Cloudlords</p>
          <div className="grid grid-flow-col gap-4">
            <img src="\images\project_images\cloudlords_embroidery_1.jpg" className=""/>
            <img src="\images\project_images\cloudlords_embroidery_2.jpg" className=""/>
          </div>
          <p className="mt-5 font-bold">Art</p>
          <div className="grid grid-flow-col place-items-center gap-4">
            <img src="\images\project_images\art_3.png" className=""/>
            <img src="\images\project_images\art_1.png" className=""/>
            <img src="\images\project_images\art_2.png" className=""/>
          </div>
          <SubCard title="Bananagram playing board"/>
          <div className="pb-3 grid grid-flow-col justify-center gap-4">
            <img src="\images\project_images\bananagram_1.jpg" className=""/>
            <img src="\images\project_images\bananagram_2.jpg" className=""/>
          </div>
          <SubCard title="Some cool prints from Thingiverse/Printables "/>
          <div className="pb-3 grid grid-flow-col justify-center place-items-center gap-4">
            <img src="\images\project_images\3D_swatches_1.jpg" className=""/>
            <img src="\images\project_images\bobbin_box_2.jpg" className=""/>
          </div>
          <p className="mt-5 font-bold">My Chalmers Cortege coat design found in the wild</p>
          <div className="grid grid-flow-col gap-4 place-items-center">
            <img src="\images\project_images\coat_kirby_1.jpg" className=""/>
            <img src="\images\project_images\coat_kirby_2.jpg" className=""/>
            <img src="\images\project_images\coat_kirby_3.jpg" className=""/>
          </div>

        </Card>
        <Card cardTitle="KIRBY OF THE DAY">
          <div className="grid justify-items-center ">
            <img src="\images\kirbyknife.jpg" alt="" className="p-3"/>
          </div>
        </Card>
      </div>
    </div>
  );
}
