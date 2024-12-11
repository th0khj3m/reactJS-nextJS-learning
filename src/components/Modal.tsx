import { PropsWithChildren } from "react";

function Modal({children}: PropsWithChildren) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60 z-10">
        <dialog className="border-none rounded-md shadow-sm overflow-hidden z-10 p-0">
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
