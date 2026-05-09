export default function SummerSwimBox() {
    return (
        <div className="flex flex-column p-10 lg:pr-80 text-white mt-30 gap-1 bg-swim-blue border-radius-1 relative overflow-clip">
            <div className="flex align-center gap-1 z-10">
                <h3 className="bg-white/60 p-2 border-radius-2">🏊🏻</h3>
                <h2>Free Shuttle to Swim Lessons!</h2>
            </div>
            <p className="z-1">Make a splash this summer! We're offering complimentary shuttle services to swimming lessons at Diamond Bar High School.</p>
            <p className="z-1 font-semibold">For more info, call: 909-760-9562</p>
            <div className="absolute right-0 bottom-0.5 z-0">
                <img src="/images/SummerProgram/waves.svg"
                    className="w-100"
                />
            </div>
        </div>
    )
}