import { FiLogOut, FiUser } from "react-icons/fi";
import Dropdown from "../ui/dropdown";
import { Link } from "react-router-dom";
import { route } from "../../utils/helper";
import Button from "../ui/button";

function RightBlock() {

    const token = localStorage.getItem('token');

    const dropdownMenus = [
        { route: 'profile', name: 'Profilim', icon: <FiUser /> },
        { key: 'logout', name: 'Logout', icon: <FiLogOut /> },
    ]

    const handeClick = (key) => {
        if (key === 'logout') {
            localStorage.removeItem('token')
            window.location.reload()
        }
    }

    const handleLogin = () => {
        localStorage.setItem('token', 'test');
        window.location.reload()
    }

    return (
        <div>
            <aside className="fixed w-[285px] py-[15px]">
                <div className="h-[46px] items-center w-[190px] flex justify-end">
                    {token && (
                        <Dropdown
                            btnRender={
                                <div className="flex items-center gap-x-2">
                                    <figure className="size-[30px] rounded-full overflow-hidden">
                                        <img className="size-full object-cover" src="https://s3-alpha-sig.figma.com/img/ac1e/f74c/931ce67584033f45f9412bcba54ac5f3?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qPdymf7qCzCHPsdvzVXGi-tSFjkTYCI9rJFn3to-Zqs3T~4cEDSGl41YVwQJxh2fYApbvHktrb-aqu4EcZC2T-~EuFVjvAxgnq8ZvC6HX~gLgCK1hv4gpnu5YqQ0Kee33okpfVOlkMTwMdsXkLWlc-ZQdi9VwafimxLRtyu8jCBKlup5NK1hXSVM6lrhxOlmJBHciH2CfwhlUO9JRevu5uPSKsy94V6NLNWemsuvIM3zVj9VHqdbUkxKxsPmDigEShWqI3zC58vIu9A1Lpt2Tuwv~yJRlLwGm~M4YnIDm5eDOeCuc3CwIjjir17sxKtNTSR6ooKbO7xa4dDrbFHlLw__" alt="" />
                                    </figure>
                                    <span>Joe Doe</span>
                                </div>
                            }
                        >
                            {dropdownMenus.map((menu, index) => (
                                <Link
                                    key={index}
                                    to={menu.route ? route(menu.route) : false}
                                    onClick={menu.key ? () => handeClick(menu.key) : false}
                                    className="flex items-center h-[40px] gap-x-2"
                                >
                                    <span className="inline-flex size-[24px] text-[18px] items-center">{menu.icon}</span>
                                    <span>{menu.name}</span>
                                </Link>
                            ))}
                        </Dropdown>
                    )}

                    {!token && (
                        <Button rounded={true} onClick={() => handleLogin()}>
                            Daxil ol
                        </Button>
                    )}
                </div>

                <div>
                    asdsa
                </div>
            </aside>
        </div>
    );
}

export default RightBlock;