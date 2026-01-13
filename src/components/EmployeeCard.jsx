function EmployeeCard({
    employeeImageUrl,
    name,
    position
}) {

    const height = (position === "Manager" || position === "Director") ? "400px" : "300px"
    return (
        <>
        <div>
            <div style={{width: "300px", height: height}} className="border-radius-2 overflow-hidden">
                <img 
                    className="w-full h-full cover"
                    src={employeeImageUrl} 
                />
            </div>
            <h3 className="mt-1">{name}</h3>
            <p>{position}</p>
        </div>
        </>
    )
}

export default EmployeeCard