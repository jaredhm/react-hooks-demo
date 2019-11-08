import React from "react";
import ModalManagerContext from "../../contexts/ModalManagerContext";

const Modal = ({ show, children }) => {
	return (
		<ModalManagerContext.Consumer>
			{modalManager => {
				if (show) {
					modalManager.popModal(children)
				}
				else {
					modalManager.closeModal();
				}
			}}
		</ModalManagerContext.Consumer>
	);
}

export default Modal;
