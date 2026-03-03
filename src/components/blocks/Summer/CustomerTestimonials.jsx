import TestimonialBox from "../../ui/TestimonialBox"

export default function CustomerTestimonials() {
    return (
        <section className="flex flex-col relative">
            <img 
                src="/images/SummerProgram/green_curve.svg"
                className="absolute top-1 lg:-top-15 w-full z-2"
            />
            <div className="pt-20 lg:pt-30"></div>
            <div className="z-3 bg-[#90BD7D] pb-30">
                <div className="container mx-auto">
                    <h2 className="text-background">Customer Testimonials</h2>
                    <div className="grid lg:grid-cols-3 gap-20 lg:gap-8 pt-20">
                        <TestimonialBox 
                            text="I seriously appreciate the time [employee] took to teach all the kids this summer. [Student] looked forward to all the classes everyday."
                            caption="- Parent Testimonial"
                        />
                        <TestimonialBox 
                            text="[Student] likes your program because your system ensures kids are on top of their work. I have taken [student] to many different after-school programs and your program is one of the best." 
                            caption="- Parent Testimonial"/>
                        <TestimonialBox 
                            text="Thank you for your constant communication with us. You're great at what you do." 
                            caption="- Parent Testimonial"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
