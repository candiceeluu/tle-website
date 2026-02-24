function AllPrograms() {
    return (
        <div aria-label="programs-links" className="px-3 my-4">
            <div aria-label="programs-links-content" className="max-width mx-auto white-text">
                <Link to="/after-school-programs">
                    <div aria-label="after-school-program-link" className="bg-afterschool bg-img bg-shading border-radius-2 p-2">
                        <div className="right-text">
                            <h2>&gt; LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Our after-school programs provide students with homework support and enrichment across elementary, middle, and high school levels. Through guided instruction and additional practice, we help students stay on track and move ahead with confidence.</p>
                            <h1 className="mt-1">After-School Programs</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/summer-program">
                    <div aria-label="summer-program-link" className="bg-summer-program bg-img bg-shading border-radius-2 p-2 mt-3">
                        <div className="right-text">
                            <h2>&gt; LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Designed to prepare students for the next academic year, our summer program combines instructional preview, weekly assessments, and enrichment activities. Weekly field trips add a fun, hands-on element to learning throughout the summer.</p>
                            <h1 className="mt-1">Summer Programs</h1>
                        </div>
                    </div>
                </Link>
                
                <Link to="/math-prep">
                    <div aria-label="math-prep-link" className="bg-math-prep bg-img bg-shading border-radius-2 p-2 mt-3">
                        <div className="right-text">
                            <h2>&gt; LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Our math prep classes provide structured, small-group learning that helps students deepen understanding and succeed in advanced math pathways. With targeted practice and guidance, students are well prepared for placement exams.</p>
                            <h1 className="mt-1">Math Prep</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/private-tutoring">
                    <div aria-label="private-tutoring-link" className="bg-private-tutoring bg-img bg-shading border-radius-2 p-2 mt-3">
                        <div className="right-text">
                            <h2>&gt; LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>We provide personalized, one-on-one tutoring in multiple subjects to support academic growth and mastery. Each session is customized to help students progress at their own pace.</p>
                            <h1 className="mt-1">Private Tutoring</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}