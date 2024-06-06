const Page = () => {
    const handleForm = async () => {
        "use server";
        console.log(formData)
        const username= formData.get("username")
        console.log("Hello" , username);
    };

    return (
        <div>
            <form action ={handleForm}>
                <input type="text" name="username" />
                <button>Gönder</button>
            </form>
        </div>
    )
}
export default Page;