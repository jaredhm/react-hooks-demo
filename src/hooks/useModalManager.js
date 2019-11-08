import { useState } from "react";

const useModalManager = (updateShowingModal) => {
	const [modalContent, updateModalContent] = useState(null);
	return {
		popModal: (content) => {
			updateShowingModal(true);
			updateModalContent(content);
		},
		closeModal: () => {
			updateShowingModal(false);	
			updateModalContent(null);
		},
		getModalContent: () => {
			return modalContent;
		}
	}
};

export default useModalManager;
