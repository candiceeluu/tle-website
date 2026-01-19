import EmployeeCard from "../EmployeeCard"

function EmployeeSection() {
    return (
        <>
        <div className='mt-4 lg-nav-mt-8'>
            <div className='max-width mx-auto px-3'>
                <h1>Meet our team of educators</h1>
                <div className='mt-3'>
                    <h2>Directors</h2>
                    <div className='flex wrap gap-4 mt-2 justify-center'>
                        <EmployeeCard name="Eddie Lu" position="Director" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                        <EmployeeCard name="Ying Chen" position="Manager" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                        <EmployeeCard name="Julian Lu" position="Manager" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                    </div>
                </div>
                <div className='mt-3'>
                    <h2>Teachers</h2>
                    <div className='flex wrap gap-4 mt-2 justify-center'>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                    </div>
                    <div className='flex wrap gap-4 mt-2 justify-center'>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                    </div>
                </div>
                <div className='mt-3'>
                    <h2>Teaching Assistants</h2>
                    <div className='flex wrap gap-4 mt-2 justify-center'>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                        <EmployeeCard name="Teacher Name" position="Teacher" employeeImageUrl="/images/About/about-us-hero-img.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EmployeeSection