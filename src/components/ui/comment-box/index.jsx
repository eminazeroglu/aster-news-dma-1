import React, {useState} from 'react';
import {FiChevronDown, FiChevronUp, FiTrash} from "react-icons/fi";
import moment from "moment";
import {useStoreAuth} from "stores/module/auth.store.jsx";
import Button from "components/ui/button/index.jsx";
import Alert from "components/ui/alert/index.jsx";

function CommentBox({items = [], onSubmit, onDelete, btnLoading = false}) {

    const {token, user} = useStoreAuth();

    const [open, setOpen] = useState(false)
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSubmit?.(text)
            setText('')
        }
    }

    return (
        <>
            {token && (
                <div className="my-[35px]">
                    <div className="mb-[10px]">
                        <h5 className="text-[17px] font-bold">Add your comment</h5>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <textarea value={text} onChange={e => setText(e.target.value)}
                                      className="form-element dark:!bg-gray-800 dark:border-gray-700 !bg-[#ECF5F8] !py-3" cols="30" rows="4"></textarea>
                        </div>
                        <div className="mt-[11px]">
                            <Button loading={btnLoading} disabled={!text.trim()} type="submit" rounded={true}>
                                Post Comment
                            </Button>
                        </div>
                    </form>
                </div>
            )}
            {!token && (
                <div className="my-[35px]">
                    <Alert type="warning">
                        Rəy bildirmək üçün sayta daxil olun
                    </Alert>
                </div>
            )}
            <div>
                <div>
                    <button onClick={() => setOpen(!open)} className="text-[#2F9FF8] text-[17px] inline-flex items-center gap-x-2">
                        <span>View All Comments ({items.length})</span>
                        <span
                            className="inline-flex size-[23px] items-center justify-center bg-[#2F9FF8] text-white rounded-full">
                                    {open ? <FiChevronUp/> : <FiChevronDown/>}
                                </span>
                    </button>
                </div>
                {open && (
                    <div className="pt-[35px]">
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div key={index}>
                                    <div className="flex gap-x-3">
                                        <figure className="size-[50px] overflow-hidden shrink-0 rounded-full">
                                            <img className="size-full object-cover" src={item.user.photo} alt=""/>
                                        </figure>
                                        <div>
                                            <h5 className="text-[#2F9FF8] text-[17px]">{item.user.name} {item.user.surname}</h5>
                                            <p className="text-[#667F90] text-[17px]">{item.body}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#ADBCC4] mt-[5px] flex items-center justify-between">
                                        <div>
                                        <span
                                            className="text-[12px]">{moment(item.created_at).format('DD-MM-YYYY HH:mm')}</span>
                                        </div>
                                        <div>
                                            {user.id === item.user.id && (
                                                <button onClick={() => onDelete?.(item.id)}
                                                        className="flex items-center text-red-500 text-[14px] gap-x-1">
                                                    <span><FiTrash/></span>
                                                    <span>Sil</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CommentBox;