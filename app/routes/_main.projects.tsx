import { SubCard } from "lib/components/sub-card";
import { Card } from "lib/components/card-with-title";
import Carousel from "lib/components/carousel";
export default function Projects() {
    return (
        <div className="">
            <p className="mb-4">
                Below is a collection of some projects done during my time in university. 
                Having a background in Industrial Design entailed frequent use of design process methodologies such as product evaluations and user testing.
                Most importantly is the focus on user experience, human centered design and having a holistic view of the context in which the system resides.
            </p>

            <Card cardTitle="Chrooms - A refreshed booking system">
                <div className="m-4 justify-center place-items-center gap-3">
                    <img src="/images/project_images/infoviz-1.png" alt=""/>
                    <img src="/images/project_images/infoviz-2.png" alt=""/>
                    <img src="/images/project_images/infoviz-3.png" alt=""/>
                </div>
                <SubCard title="Information Visualization - Schedule and Booking"/>
                <div className="grid grid-rows-auto gap-3">
                    <p>
                        This interface was inspired by TimeEdit and made to match the Chalmers website design. 
                        The general design recieved good feedback, but had some areas of improvement such as the available and 
                        selected filters not being clear enough and the multi booking view feeling a bit overwhelming and reminded of excel.
                        The font sizes could also make use of an overhaul for more consistency, in the images above they are a bit all over the place.
                    </p>
                </div>
            </Card>

            <Card cardTitle="Hexasong - A Modular Synthesizer">
                <div className="m-4 grid grid-cols-2 justify-center place-items-center gap-3">
                    <img src="/images/project_images/hexasong_1.png" alt="" className="col-span-full"/>
                    <img src="/images/project_images/hexasong_2.jpg" alt="" className="col-span-full"/>
                    <img src="/images/project_images/hexasong_3.jpg" alt="" />
                    <img src="/images/project_images/hexasong_5.jpg" alt="" />
                </div>
                <SubCard title="Tangible Interaction: Modular Synthesizer"/>
                <div className="grid grid-rows-auto gap-3">
                    <p>
                    This modular synthesizer is designed with longevity and customization in mind.
                    It is possible to replace parts and build your own preferred set up. The prototype above showcases three modules, a drum pad, knobs and slider for effect changes and volume, and a sensor to simulate a thermin.
                    </p>
                    <p>Group members: Anna Nilsson, Paulina Palmberg, Simon Truvé</p>
                </div>
            </Card>

            <Card cardTitle="Skylight - An Immersive Weather Forecast">
                <div className="m-4 flex justify-center place-items-center gap-3">
                    <Carousel></Carousel>
                </div>
                <SubCard title="Interaction Design Project: Smart Home Product"/>
                <div className="grid grid-rows-auto gap-3">
                    <p>
                        Skylight was delivered as a vertical prototype and the feedback
                        from users showed a successful implementation. Skylight provided
                        an immersive, mindful, and relaxing experience. The user manual
                        helped exhibition visitors understand the concept further
                    </p>
                    <p>Group members: Anna Nilsson, Paulina Palmberg, Timothy Nilsson, Axel Söderberg</p>
                </div>
            </Card>

            <Card cardTitle="GloLeaf - Connecting humans and plants">
                <div className="m-4 grid sm:grid-cols-2 gap-4 place-items-center">
                    <div className="grid gap-4">
                        <img src="/images/project_images/gloleaf_1.jpg" className=""/>
                        <img src="/images/project_images/gloleaf_2.jpg" className=""/>
                    </div>
                    <img src="/images/project_images/gloleaf_3.gif" className=""/>
                </div>
                <SubCard title="Prototyping in interaction design"/>
                <div className="grid grid-rows-auto gap-3">
                    <p>
                        This project explored the idea of how plants could be a more integral part of human lives,
                        and how a design could promote human-plant connection. The final idea was a leaf that could indicate its
                        health status, such as watering and temperature needs, as well as react to sensing and thus would incentivize the human to take care of it and act as a bonding moment. 
                    </p>
                    <p>
                        The prototype was a resin printed leaf with different sensor and actuator attachments under it; a LED strip, capacitative touch sensor and vibration motor.
                        Inside the stem, a plastic tube, electric wires connected to an arduino which was placed inside the pot along with a microphone for sound pickup and
                        ultrasonic sensor for distance measuring. The leaf and stem was painted green to make it feel like a part of the plant, giving it a fair product representation and helping with immersion.
                    </p>
                    <p>The leaf reacts to sound, touch and closeness. It blinks when sensing sound, plays a short jingle when touched and vibrates when sensing someone getting close.</p>
                    <p>Group members: Annie Claesson, David Hagberg, Eva Le</p>
                </div>
            </Card>

            <Card cardTitle="Phonetic Fumbles - The international phonetic word game">
                <div className="m-4 grid grid-rows-auto grid-cols-2 gap-3">
                    <img src="/images/project_images/phonetic_fumbles_1.jpg" alt="" className="col-span-full"/>
                    <img src="/images/project_images/phonetic_fumbles_4.jpg" alt="" />
                    <img src="/images/project_images/phonetic_fumbles_5.jpg" alt="" />
                    <img src="/images/project_images/phonetic_fumbles_3.jpg" alt="" />
                    <img src="/images/project_images/phonetic_fumbles_2.jpg" alt="" />
                </div>
                <SubCard title="Project Social Gothenburg"/>
                <div className="grid grid-rows-auto gap-3">
                    <p>
                        A word game based on guessing phonetics made to promote interaction between swedish and international students. 
                        The theme was Social Gothenburg. The box is designed to feel welcoming thanks to the different flags, as well as mysterious and spark curiosity. 
                        To open it, several buttons need to be pressed and held down in a specific order - a task that was made to incentivize cooperation between atleast two people.
                    </p>
                    <p>Group members: Oliver Andersson, Eva Le, Kasper Ljunggren, Henrietta Sundberg</p>
                </div>
            </Card>



            <Card cardTitle="Whispering Woods - The Journey Home">
                <p className="mt-4">
                    Video with accessibility descriptions and game demo, made by Oliver Andersson:
                </p>
                <div className="flex justify-center">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-WM2aMhn-Us?si=X_M5zwe3gwVA7kvT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="m-4 grid justify-center place-items-center gap-3">
                    <p className="mt-10 -mb-10">
                        Art, rigs and animations made by me:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-6 place-items-center">
                        <img src="/images/project_images/CIU235_1_1.png" alt="" className="scale-150"/>
                        <img src="/images/project_images/CIU235_1.png" alt="" className="mb-10 scale-150"/>
                        <img src="/images/project_images/CIU235_2_1.png" alt="" className=""/>
                        <img src="/images/project_images/CIU235_2.png" alt="" className=""/>
                        <img src="/images/project_images/CIU235_3.png" alt="" className=""/>
                        <img src="/images/project_images/CIU235_4.png" alt="" className=""/>
                    </div>
                    <div className="grid sm:grid-cols-3 place-items-center pl-10">
                        <img src="/images/project_images/CIU235_5.png" alt="" className=""/>
                        <img src="/images/project_images/CIU235_6.gif" alt="" className="scale-90"/>
                        <img src="/images/project_images/CIU235_7.gif" alt="" className="scale-90"/>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 scale-95">
                        <img src="/images/project_images/CIU235_7.png" alt="" className=""/>
                        <img src="/images/project_images/CIU235_8.png" alt="" className=""/>
                        <img src="/images/project_images/CIU235_9.png" alt="" className=""/>
                        <div className="grid grid-cols-2 size-40">
                            <img src="/images/project_images/CIU235_15.gif" alt="" className=""/>
                            <img src="/images/project_images/CIU235_16.gif" alt="" className=""/>
                        </div>
                    </div>
                    <p>
                        Animations made by me, art and rigs made by Hanna Adenholm:
                    </p>
                    <div className="grid grid-cols-5 place-items-center">
                        <img src="/images/project_images/CIU235_10.gif" alt="" className="scale-90"/>
                        <img src="/images/project_images/CIU235_11.gif" alt="" className="scale-90"/>
                        <img src="/images/project_images/CIU235_12.gif" alt="" className=""/>
                        <img src="/images/project_images/CIU235_13.gif" alt="" className=""/>
                        <img src="/images/project_images/CIU235_14.gif" alt="" className=""/>
                    </div>
                    <div className="grid grid-cols-3 place-items-center">
                        <img src="/images/project_images/CIU235_17.gif" alt="" className=""/>
                        <img src="/images/project_images/CIU235_18.gif" alt="" className="scale-75"/>
                        <img src="/images/project_images/CIU235_19.gif" alt="" className="scale-90"/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <SubCard title="Open Project: Making A Game, Taking Accessibility in Mind"/>
                    <p>
                    Accessibility in games is often overlooked but is starting to get more attention in recent years, as
                    many players have various impairments of different kinds and severity. A game, Whispering woods,
                    was developed with a focus on implementing accessibility for some of these impairments.
                    </p>
                    <p>
                        The game was tested by people with different levels of gaming experience, two participants had a
                        colour vision deficiency and two participants were less experienced playing games compared to the
                        other participants. All participants agreed that accessible and adjustable settings in games are
                        important, even if not all of them required it themselves.
                    </p>
                    <p>
                        The game was successful in some aspects and lacking in others. It was perceived as visually
                        appealing, participants appreciated the option to use either WASD or the arrow keys for movement
                        and the adjustments of the movement of the character. The game's intuitiveness and satisfaction was
                        perceived higher and scored an average 5 out of 6 on the final test. However, many features were not
                        implemented at all or fully due to the project's time constraints. Functional filters for color blindness
                        or higher contrast as well as the option to change font size or disable text animations were not fully
                        functional or implemented.
                    </p>
                    <p>
                        This meant that we could not test all accessibility features leading to our research question not being
                        answered to a full extent. From what we have gathered from the test results however, the players,
                        testers, experience has only been affected positively by implementing accessibility options.
                    </p>
                    <div className="grid gap-4 justify-center sm:grid-cols-2 sm:gap-4">
                        <div className="flex justify-center">
                        <img src="/images/project_images/CIU235_20.png" alt="" className="w-96"/>
                        </div>
                        <p className=""> <span></span>Group members: Oliver Andersson, Hanna Adenholm, Stina Hansson, Anna Nilsson, Paulina Palmberg</p>
                    </div>
                </div>
            </Card>

            <Card cardTitle="Usability: Espresso House App Remake">
                <div className="flexbox gap-4 sm:grid-rows-2">
                    <p>Espresso House's app design was percieved by regular users to be elegant and aesthetically pleasing, but after theoretical evalution and a first round of user testing, it was noted that some issues regarding usability within the app could be improved. 
                        Some factors from Nielsens usability heuristics that could be improved were consistency, consideration of user resources and visual clarity.</p>
                    <p>The last two videos present two smaller walk throughs of ordering; one is investigating payment options and the other one is customizing an order in the reworked app.</p>
                </div>
                <div className="grid sm:grid-cols-3 justify-center place-items-center gap-4 m-4">
                        <video controls width="200">
                            <source src="/images/project_images/espresso_house_1.mp4" type="video/mp4"></source>
                        </video>
                        <video controls width="250">
                            <source src="/images/project_images/espresso_house_2.mov" type="video/mp4"></source>
                        </video>
                        <video controls width="250">
                            <source src="/images/project_images/espresso_house_3.mov" type="video/mp4"></source>
                        </video>
                </div>
                <SubCard title="Towards a hassle free coffee break"/>
                <div className="grid grid-rows-auto gap-3">
                    <p>
                        The rework is a synthesis of a wide variety of user testing including both new users, expert users as well as both within- and in-between subjects tests.
                        Additionally, tests were done in different order to see if it made any difference to start with the old or new version when comparing the two.
                        The measured results, such as amount of clicks and time for each task, showed improvement in reaching the task goal and navigation time.
                        Prototype made in Figma.
                    </p>
                    <p>Group members: Malkolm Ahlberg, Ellinor Axelsson, Edith Pålsson, Aron Uggla </p>
                </div>
            </Card>

            <Card cardTitle="Product Development: Smålandsdrömmen">
                <div className="m-4 flex justify-center">
                    <img src="/images/project_images/smalandsdrommen.png" alt="" />
                </div>
                <SubCard title="Smålandsdrömmen - The foldable backpack made urban food transport easy"/>
                <div className="grid grid-rows-auto gap-3">
                    <p>
                        With aesthetics inspired by IKEA, this backpack was made for young busy adults. It is foldable, minimizing storage space, as well as convertible which means it can be used both as a tote
                        and a backpack for carrying heavier loads. What makes this backback unique is the bottom cooler compartment which can be used to maintain temperature on refrigerator products.
                    </p>
                    <p>Group members: Victor Andersson, Victoria Birkeman, Selma Fredriksson, Simon Truvé</p>
                </div>
            </Card>
        
            {/* <Card cardTitle="Pocky Belt - Equipment beyond leashes">
                <div className="m-4 flex justify-center">
                    <img src="/images/project_images/pocky_belt.png" alt="" />
                </div>
                <SubCard title="UX Product Development: Pocky Belt"/>
                <div className="grid grid-rows-auto gap-3">
                    <p>
                        This was a continuation of an earlier project in researching requirements for walking dogs in doggie daycare context. The process in designing the dog walking equipment
                        included tight communication with the users in order to understand feasability and the user's specific needs. The result is a customizable and size adjustable belt with pockets for dog treats, poopy bag dispenser and a loop for defense spray
                        in case of hostile dogs approaching.
                    </p>
                    <p>Group members: Ida Osterman</p>
                </div>
            </Card> */}
        </div>
    );
}