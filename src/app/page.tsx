import Apresentacao from "@/components/Home/Apresentacao";
import Faq from "@/components/Home/Faq";
import MotivosUso from "@/components/Home/MotivosUso";
import Recepcao from "@/components/Home/Recepcao";

export default function Home() {
    return (
        <>
            <Apresentacao />
            <Recepcao />
            <MotivosUso />
            <Faq />       
        </>
    );
}