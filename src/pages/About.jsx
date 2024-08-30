import Page from "components/ui/page/index.jsx";
import {Helmet} from "react-helmet";

function About() {
    return (
        <Page>
            <Helmet>
                <title>Aster News / Haqqımızda</title>
            </Helmet>
            <div className="prose max-w-full dark:text-gray-200">
                <p>Aster News 2024-cü ildə yaradılmış müasir və dinamik bir xəbər portalıdır. Bizim məqsədimiz Azərbaycan və dünya miqyasında baş verən ən son hadisələri, dəqiq və operativ şəkildə oxucularımıza çatdırmaqdır.</p>
                <p>Peşəkar jurnalistlərdən ibarət komandamız gündəlik olaraq siyasət, iqtisadiyyat, mədəniyyət, idman və texnologiya sahələrində baş verən yenilikləri diqqətlə izləyir və analiz edir. Biz xəbərləri təqdim edərkən obyektivliyi və qərəzsizliyi əsas prinsip kimi qəbul edirik.</p>
                <p>Aster News olaraq, oxucularımızın məlumatlanma və dünyagörüşünü genişləndirmə ehtiyaclarını qarşılamağı hədəfləyirik. Müasir texnologiyalardan istifadə edərək, xəbərləri desktop və mobil platformalarda rahat və sürətli şəkildə əldə etmək imkanı yaradırıq.</p>
                <p>Sizin etimadınız və marağınız bizim ən böyük motivasiyamızdır. Aster News ilə dünyadan xəbərdar olun!</p>
            </div>
        </Page>
    );
}

export default About;