function TextInput(fnc: Function, word: string, tagName: string, typeInput: string){
    return(
        <>
            <label htmlFor={tagName} className="block text-sm font-medium text-gray-900">{word}</label>
            <div className="mt-2">
                <input 
                    type={typeInput} 
                    id={tagName}
                    {...fnc(tagName)}
                    className=" w-full p-1 rounded-md border-0 shadow-sm ring-1 ring-inset ring-rose-700 focus:ring-2 focus:ring-blue-900"
                    required
                    />
            </div>
            <p></p>
        </>
    )
}
export default TextInput