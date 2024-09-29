function submit(event) {
    event.preventDefault(); 
    console.log("submited")
}
export default function Form() {
    return <>
        <form action="" onSubmit={submit}>
            <input type="text" name="" id="" placeholder="wrote something" />
            <button type="submit">submit</button>
        </form>

    </>
}