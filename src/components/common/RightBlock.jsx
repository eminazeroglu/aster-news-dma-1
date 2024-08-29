import {FiFeather, FiFileText, FiLogOut, FiUser} from "react-icons/fi";
import Dropdown from "../ui/dropdown";
import {Link} from "react-router-dom";
import {route} from "utils/helper.jsx";
import Button from "../ui/button";
import Card from "../ui/card";
import CardSlider from "../ui/card-slider";
import Scrollbar from "../ui/scrollbar";
import FormGroup from "../ui/form/FormGroup";
import FormInput from "../ui/form/FormInput";
import {useModalContext} from "contexts/ModalContext.jsx";
import {useStoreAuth} from "stores/module/auth.store.jsx";
import Weather from "components/ui/weather/index.jsx";
import ThemeMode from "components/ui/theme-mode/index.jsx";
import classNames from "classnames";
import {profileMenus} from "router/menus.jsx";
import button from "../ui/button";
import {useStoreApp} from "stores/module/app.store.jsx";
import {serviceStoreSetLanguage} from "services/store.service.jsx";

function RightBlock() {

    const {handleModal } = useModalContext();
    const {token, user} = useStoreAuth();
    const {language, languages} = useStoreApp();

    const texts = [
        '1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
        '2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
        '3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
        '4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
        '5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia soluta neque iure voluptate distinctio aliquid quae labore optio pariatur harum sapiente officiis, sit ad minima laudantium velit perspiciatis debitis.',
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

    return (
        <div>
            <aside className="fixed w-[285px] py-[15px] hidden lg:block">
                <div className="flex justify-end gap-x-2">
                    <div className="mr-2 pr-2 border-r dark:border-r-gray-700 h-[40px]">
                        <Dropdown
                            position="right"
                            className="!min-w-[auto] !py-0"
                            btnRender={
                                <button className="">
                                    {language.toUpperCase()}
                                </button>
                            }
                        >
                            <div className="flex flex-col divide-y dark:divide-gray-700">
                                {languages.filter(i => i !== language).map((lang, index) => (
                                    <button onClick={() => serviceStoreSetLanguage(lang)}  key={index} className="h-[38px] px-2">
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </Dropdown>
                    </div>
                    <div>
                        <ThemeMode/>
                    </div>
                    <div className={classNames({
                        'h-[46px] mb-[15px] items-center flex justify-end': true,
                        'w-[190px]': token
                    })}>
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
                                {profileMenus.map((menu, index) => (
                                    <Link
                                        key={index}
                                        to={menu.route ? route(menu.route) : false}
                                        onClick={menu.key ? () => handeClick(menu.key) : false}
                                        className="flex text-sm items-center h-[40px] gap-x-2"
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

                        <Weather/>

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