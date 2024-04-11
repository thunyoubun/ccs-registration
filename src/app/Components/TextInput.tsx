function TextInput(fnc: Function, word: string, tagName: string, typeInput: string){
    return(
        <>
            <label htmlFor={tagName} className="block text-sm font-medium leading-6 text-gray-900">{word}</label>
            <div className="mt-2">
                <input 
                    type={typeInput} 
                    id={tagName}
                    {...fnc(tagName)}
                    className="block w-full p-1 rounded-md border-0 shadow-sm ring-1 ring-inset"
                    required
                    />
            </div>
        </>
    )
}
export default TextInput