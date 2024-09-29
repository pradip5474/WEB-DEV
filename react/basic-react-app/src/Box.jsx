
function Box({userName,textColor}) {
    let style={backgroundColor: `${textColor}`}
    return <>
        <h1 style={style}> Hello ,{userName}</h1>
    </>
}

export default Box;