function ScrollToSection( id: string){
    const element = document.getElementById(id)
    if(element){
        element.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }
}

function ScrollToTop(){
    window.scrollTo({ behavior: 'smooth', top: 0 })
}

export {
    ScrollToSection,
    ScrollToTop
}