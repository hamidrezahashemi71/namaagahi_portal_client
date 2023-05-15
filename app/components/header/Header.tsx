import LogoFull from "../main/LogoFull"
import LogoSmall from "../main/LogoSmall"
import ToggleButton from "../main/ToggleButton"
import Account from "./Account"
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  return (
    <section className="pb-8 flex justify-between items-center">
      <Account/>
      <LogoFull />
      <div className="flex items-center gap-3">
        <ToggleButton />
        <div className="hidden xl:block">
          <LogoSmall/>
        </div>
      </div>
      <div className="block xl:hidden cursor-pointer">
        <GiHamburgerMenu size={30}/>
      </div>
    </section>
  )
}

export default Header