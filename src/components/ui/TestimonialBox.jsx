export default function TestimonialBox({
    text,
    caption
}) {
    return (
        <section>
            <div className="bg-background border-radius-1 p-5 flex flex-column items-center h-full relative">
                <img src="/images/SummerProgram/bean-smile-face.svg" className="w-20 absolute top-0 -translate-y-10"/>
                <div className="flex flex-col gap-10 justify-between p-5 h-full">
                    <div className="flex flex-col gap-1">
                        <img className="w-10" src="/icons/quote.svg" />
                        <h4 className="font-light">{text}</h4>
                    </div>
                    <p className="">{caption}</p>
                </div>
            </div>
        </section>
    )
}