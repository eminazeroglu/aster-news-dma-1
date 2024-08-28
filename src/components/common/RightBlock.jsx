import { FiCrosshair, FiFeather, FiFileText, FiLogOut, FiUser } from "react-icons/fi";
import Dropdown from "../ui/dropdown";
import { Link } from "react-router-dom";
import { route } from "../../utils/helper";
import Button from "../ui/button";
import Card from "../ui/card";
import { GoSun } from "react-icons/go";
import CardSlider from "../ui/card-slider";
import Scrollbar from "../ui/scrollbar";
import FormGroup from "../ui/form/FormGroup";
import FormInput from "../ui/form/FormInput";
import { useModalContext } from "contexts/ModalContext.jsx";
import { useStoreAuth } from "stores/module/auth.store.jsx";
import { useGeolocation } from "@uidotdev/usehooks";
import {useFetchOpenWeatherMap} from "hooks/useFetch.jsx";
import {useEffect} from "react";

function RightBlock() {

    const {handleModal } = useModalContext();
    const {token, user} = useStoreAuth();
    const state = useGeolocation();
    const [weather, fetchWeather] = useFetchOpenWeatherMap();

    console.log(state);

    const texts = [
        '1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
        '2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
        '3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
        '4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
        '5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
    ]

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
        handleModal('login', true, { fullname: 'Test' })
    }

    useEffect(() => {
        if (state?.latitude && state?.longitude) {
            fetchWeather(state?.latitude, state?.longitude)
        }
    }, [state?.latitude, state?.longitude]);

    return (
        <div>
            <aside className="fixed w-[285px] py-[15px]">
                <div className="flex justify-end">
                    <div className="h-[46px] mb-[15px] items-center w-[190px] flex justify-end">
                        {token && (
                            <Dropdown
                                btnRender={
                                    <div className="flex items-center gap-x-2">
                                        <figure className="size-[30px] rounded-full overflow-hidden">
                                            <img className="size-full object-cover" src={user.photo} alt="" />
                                        </figure>
                                        <span>{user.name} {user.surname}</span>
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
                </div>

                <Scrollbar className="h-[calc(100vh_-_85px)]">
                    <div className="space-y-[15px]">
                        <Card
                            title="Coimbatore, Tamil Nadu"
                            rightRender={<FiCrosshair className="text-[18px]" />}
                        >
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[15px]">Sunny</p>
                                    <p className="text-[26px] font-bold">31<sup>o</sup> c</p>
                                </div>
                                <div className="text-[52px] size-[52px] inline-flex items-center justify-center text-[#FFCF26]">
                                    <GoSun />
                                </div>
                            </div>
                            <div className="text-[12px] mt-[15px] space-x-[23px]">
                                <span>Celsius</span>
                                <span className="opacity-30">Fahrenheit</span>
                            </div>
                        </Card>

                        <Card
                            title="Become a Story Writer"
                            titleIcon={<FiFeather />}
                        >
                            <div className="flex gap-x-[25px] items-center">
                                <div className="text-[12px] leading-[18px] text-[#6A8193]">
                                    Contribute stories and start earning.
                                </div>
                                <div>
                                    <Button size="lg" rounded={true} property="primary-outline">
                                        Know More
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        <CardSlider
                            title="Quick Bytes"
                            titleIcon={<FiFileText />}
                            items={texts}
                        >
                            {(text) => <p className="text-[#6A8193] text-[12px]">{text}</p>}
                        </CardSlider>

                        <Card
                            title="Subscribe to our newsletter"
                        >
                            <div>
                                <FormGroup>
                                    <FormInput
                                        placeholder="Enter Email"
                                    />
                                </FormGroup>
                            </div>
                            <div className="mt-[16px]">
                                <Button block={true} rounded={true}>
                                    Subscribe
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Scrollbar>

            </aside>
        </div>
    );
}

export default RightBlock;