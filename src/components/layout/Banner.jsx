import Arrow from "@/components/ui/arrow";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="bg-light-green w-full py-5">
            <div className="container mx-auto flex justify-between items-center">
                <h3 className="">2026 Summer Registration open now!</h3>
                <Link to="/summer-program" className="flex items-center gap-1">
                    <a>
                        Check it out
                    </a>
                    <div className="w-2.5">
                        <Arrow />
                    </div>
                </Link>
            </div>
        </section>
    )
}