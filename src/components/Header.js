import Image from "next/image";

function Header() {
    return (
        <header>
            <div>
                <div>
                    <Image 
                    src='https:/links.papareact.com/f90'
                    width={150}
                    height={40}
                    />
                </div>
            </div>
            <h1>I'm a header</h1>
        </header>
    )
}

export default Header