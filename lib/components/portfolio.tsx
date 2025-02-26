export function Portfolio() {
    return <div>
        <div className="grid gap-10">
            <div className="grid xl:grid-cols-2 gap-10">
                <img src="/images/project_images/kandidat-arbete-1.png" alt="CoPoint" className="" />
                <div>
                    <p className="text-2xl mb-5">CoPoint</p>
                    <p>
                        CoPoint is a digital platform designed to improve collaboration between small businesses and accounting firms. 
                        It addresses the need for seamless communication, easy file management, personalized interactions, and task tracking—putting 
                        business owners at the center. Unlike existing tools focused primarily on firms, CoPoint bridges the gap by catering to the needs of both parties.
                    </p>
                    <p className="grid place-content-end">
                        <a href="http://hdl.handle.net/20.500.12380/307302" target="_blank" rel="noreferrer" className="hover:underline text-blue-800 font-bold"> Link to paper (Swedish)</a>
                    </p>
                </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-10">
                <img src="/images/project_images/infoviz-1.png" alt="Chrooms" />
                <div className="">
                    <p className="text-2xl mb-5">Chrooms</p>
                    <p className="mb-2">
                        Chalmers Rooms (Chrooms) is a booking system designed for students and teachers at Chalmers University. The system emphasizes quick and easy room booking with features like 
                        live-updating filters, a visual summary of recent bookings, and options for saving filter presets.
                    </p>
                    <p>
                        For teachers, 
                        Chrooms supports batch booking for multiple rooms and courses, while students can make simple bookings efficiently. 
                        The system ensures a seamless experience with clear navigation, instant feedback, and design consistency aligned with Chalmers 
                        website. With tools like a hoverable map and editable bookings, Chrooms streamlines the booking process for its users.
                    </p>
                </div>
            </div>
        </div>
    </div>
}
