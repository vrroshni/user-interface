import { CompanyName, Logo } from './elements/HeaderElements';

const Header = () => {
    return (
        <div className="hidden w-full h-[7rem] md:flex flex-row justify-between relative">
            <Logo />
            <CompanyName />
        </div>
    )
}

export default Header