import {Link, useParams} from "react-router-dom";
import {useFetchNewsBySlug, useFetchNewsCommentById} from "hooks/useFetch.jsx";
import {useEffect, useState} from "react";
import Loading from "components/ui/loading/index.jsx";
import {notification, route} from "utils/helper.jsx";
import moment from "moment";
import Button from "components/ui/button/index.jsx";
import {FiChevronDown, FiShare} from "react-icons/fi";
import CommentBox from "components/ui/comment-box/index.jsx";
import {API} from "utils/api.jsx";
import NewsApi from "api/news.api.jsx";
import Breadcrumb from "components/ui/breadcrumb/index.jsx";
import Seo from "components/ui/seo/index.jsx";
import {useModalContext} from "contexts/ModalContext.jsx";

function View() {

    const {slug} = useParams();
    const [data, fetchData, loading] = useFetchNewsBySlug()
    const [comments, fetchComments, commentLoading] = useFetchNewsCommentById()
    const [btnLoading, setBtnLoading] = useState(false);
    const {handleModal} = useModalContext();

    const handleSubmit = async (body) => {
        setBtnLoading(true)
        const res = await API.post(NewsApi.commentPost.replace(':id', data.id), {
            body
        })
        setBtnLoading(false)
        if (res) {
            notification('Şərhiniz əlavə olundu')
            fetchComments(data.id)
        }
    }

    const handleDelete = async (commentId) => {
        const res = await API.delete(NewsApi.commentDestroy.replace(':newsId', data.id).replace(':commentId', commentId));
        if (res) {
            notification('Şərhiniz silindi')
            fetchComments(data.id)
        }
    }

    useEffect(() => {
        fetchData(slug)
    }, [slug]);

    useEffect(() => {
        if (data?.id) {
            fetchComments(data.id);
        }
    }, [data])

    return (
        <Loading loading={loading}>
            {data && (
                <>
                    <Seo
                        title={data.title}
                        description={data.description}
                        image={data.photo}
                    />
                    <div className="pt-[20px]">
                        <div className="mb-3">
                            <Breadcrumb
                                items={[
                                    {name: 'Xəbərlər'},
                                    {name: data.title}
                                ]}
                            />
                        </div>
                        <div className="flex md:flex-row flex-col gap-y-4 justify-between">
                            <div>
                                <h1 className="text-[18px] md:text-[25px] leading-[24px] md:leading-[34px] font-bold mb-[12px]">{data?.title}</h1>
                                <div>
                                    <Link to={route('search', {category: data.category.slug})} className="bg-[#CDE7F8] text-[#2F9FF8] h-[22px] px-[10px] rounded-[4px] inline-flex text-[12px] items-center">
                                        {data.category.name}
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button onClick={() => handleModal('share', true, {title: data.title, url: data.seo_link})} className="h-10 px-3 space-x-2 border dark:border-gray-700 dark:text-gray-200 items-center justify-center flex rounded">
                                    <FiShare/>
                                    <span>Paylaş</span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-[35px]">
                            <figure className="aspect-video rounded-lg overflow-hidden">
                                <img src={data.photo} className="size-full object-cover" alt=""/>
                            </figure>
                        </div>

                        <div className="my-[35px]" dangerouslySetInnerHTML={{__html: data.content}} />

                        <div className="text-center">
                            <p className="text-[#ADBCC4] text-[12px]">{moment(data.published_date).format('DD-MM-YYYY HH:mm')}</p>
                            <p className="text-[12px] mt-2">{data.author.fullname}</p>
                        </div>

                        <CommentBox
                            items={comments}
                            onSubmit={(data) => handleSubmit(data)}
                            btnLoading={btnLoading}
                            onDelete={id => handleDelete(id)}
                        />
                    </div>
                </>
            )}
        </Loading>
    );
}

export default View;