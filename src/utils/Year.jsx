function Year() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - 2008;

    return (
        age
    )
}

export default Year