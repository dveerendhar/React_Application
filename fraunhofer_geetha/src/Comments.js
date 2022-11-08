
const Comments = () => {
    const name = ['Veerendhar', 'Geetha']
    const num = Math.floor(Math.random() * 2)
    return (
        <comments>
            Hello {name[num]}!
        </comments>
    )
}

export default Comments