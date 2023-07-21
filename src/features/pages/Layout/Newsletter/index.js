import { MdOutlineAddTask, MdOutlineDataSaverOn } from "react-icons/md";
import Button from "../../../../common/Button";
import InfoBar from "../../../../common/InfoBar";
import Modal from "../../../../common/Modal";
import FormNewsletter from "./FormNewsletter";
import { StyledNewsletter, Box } from "./styled";

const Newsletter = () => {
    return (
        <StyledNewsletter id="newsletter">
            <InfoBar text="Join Our Newsletter" icon={<MdOutlineDataSaverOn />} />
            <Modal>
                <Modal.Open opens="newsletter">
                    <Box>
                        <Button
                            type="button"
                            text="join in"
                            icon={<MdOutlineAddTask />}
                        />
                    </Box>
                </Modal.Open>
                <Modal.Window name="newsletter">
                    <FormNewsletter />
                </Modal.Window>
            </Modal>
        </StyledNewsletter >
    )
};

export default Newsletter;