import { StyledVisitButton, Icon } from "./styled";
import Modal from "../../Modal";
import VisitForm from "../VisitForm";
import { motion } from 'framer-motion';

const VisitButton = () => {
    return (
        <Modal>
            <Modal.Open opens="visit">
                <StyledVisitButton title="Make an Appointment">
                    <motion.div
                        animate={{ y: [-2, 2, -2, 2, -2, 0], rotate: [10, -10, 10, -10, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Icon />
                    </motion.div>
                </StyledVisitButton>
            </Modal.Open>
            <Modal.Window name="visit">
                <VisitForm />
            </Modal.Window>
        </Modal>
    );
};

export default VisitButton;