import { TbHeartHandshake } from "react-icons/tb";
import Section from "../../../../common/Section";
import Title from "../../../../common/Title";
import InfoBar from "../../../../common/InfoBar";
import Paragraph from "../../../../common/Paragraph";
import IconPet from "../../../../common/IconPet";
import thankYou from "./thankYou.jpg";
import { Wrapper, Image } from "./styled";

const General = () => {
    return (
        <Section id={"general"}>
            <Title text={"About Dog Groomer"} extraContent />
            <Paragraph>
                Dog Groomer is a family-owned grooming salon that has been serving pet owners and their furry friends since 2000.
                Founded by Sarah Wilson, a passionate dog lover and experienced groomer,
                our salon has earned a reputation for providing exceptional grooming services with a focus on the well-being and
                comfort of every dog that walks through our doors.
            </Paragraph>
            <Paragraph>
                Our journey began when Sarah, a trained groomer with several years of experience,
                decided to turn her passion for grooming into a business.
                She envisioned a grooming salon that would not only make dogs look their best but also prioritize their
                health and happiness throughout the grooming process.
            </Paragraph>
            <Paragraph>
                Over the years, Dog Groomer has grown and expanded,
                welcoming a team of dedicated and skilled groomers who share the same commitment to providing top-notch care
                for every dog. We understand that each dog is unique, and we tailor our grooming techniques and services to meet
                their individual needs, taking into account factors such as breed, coat type, and personality.
            </Paragraph>
            <Paragraph>
                <IconPet reverse="true" pink="true" />
            </Paragraph>
            <Wrapper>
                <Image src={thankYou} alt="Thank You Photo" />
            </Wrapper>
            <InfoBar icon={<TbHeartHandshake />} text={"Thank you for choosing Dog Groomer"} />
        </Section>
    )
};

export default General;