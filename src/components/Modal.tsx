import { useCallback, useImperativeHandle, useState, forwardRef } from "react";
import { HeroButton, HeroDescription, ModalBody, ModalBox, ModalButton, ModalContent, ModalCss, ModalEffect, ModalFooter, ModalHeader, ModalTitle } from "../styles";

export interface ModalHandles {
    openModal: (movie: any) => void;
}
const Modal: React.RefForwardingComponent<ModalHandles> = ({movie}: any, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState<any>({});
  useImperativeHandle(ref, () => {
    return {openModal};
  });

  // const handleCloseModal = useCallback(() => {
  //     setShowModal(false);
  // },[]);

  const openModal = useCallback((movie) => {
      if(movie){ 
          console.log(movie)
          setShowModal(true);
          setModalTitle(movie);
        }
},[]);

  if (!showModal){
      return null;
  }
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {showModal ? (
        <>
          <ModalCss>
            <ModalBox>
              {/*content*/}
              <ModalContent background={modalTitle.backdrop_path ? modalTitle.backdrop_path: 'null'}>
                <ModalEffect>
                {/*header*/}
                <ModalHeader>
                  <ModalTitle>
                  {modalTitle?.name ? modalTitle?.name : modalTitle?.title }
                  </ModalTitle>
                  <ModalButton
                    onClick={() => setShowModal(false)}
                  >
                    <p>
                      X
                    </p>
                  </ModalButton>
                </ModalHeader>
                {/*body*/}
                <ModalBody>
                  <HeroDescription>{modalTitle.overview}</HeroDescription>
                </ModalBody>
                {/*footer*/}
                <ModalFooter>
                  <HeroButton
                    primary
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </HeroButton>
                  <HeroButton
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </HeroButton>
                </ModalFooter>
                </ModalEffect>
              </ModalContent>
            </ModalBox>
          </ModalCss>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default forwardRef(Modal);

