import "../../css/components/common/ModalOverlay.css";
import React, { useState } from "react";
import useModalManager from "../../hooks/useModalManager";
import ModalManagerContext from "../../contexts/ModalManagerContext";

// TODO Figure out hiding modal on overlay click
const ModalOverlay = ({ children }) => {
	const [showingModal, updateShowingModal] = useState(false);
	// Probably more sensible to use a reducer here but *shrug*
	const modalManager = useModalManager(updateShowingModal);

	return (
		<ModalManagerContext.Provider value={modalManager}>
			<div className="view">
					{showingModal &&
						<div className="modal">
							{modalManager.getModalContent()}
						</div>
					}
					{children}
			</div>
		</ModalManagerContext.Provider>
	);
	
};

export default ModalOverlay;
