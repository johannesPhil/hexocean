import React from "react";

const SuccessModal = ({ setShowModal, loading, errorResponse, success }) => {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div
      className="modal fade"
      id="successModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="successModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="successModalLabel"></h5>
            <span
              aria-hidden="true"
              data-dismiss="modal"
              aria-label="Close"
              className="close-btn"
              id="close"
              onClick={closeModal}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M11.7718 0.227785C11.6994 0.155218 11.6133 0.097648 11.5186 0.0583685C11.4239 0.019089 11.3224 -0.00112915 11.2198 -0.00112915C11.1173 -0.00112915 11.0157 0.019089 10.921 0.0583685C10.8263 0.097648 10.7403 0.155218 10.6678 0.227785L5.99981 4.89578L1.34381 0.227785C1.27137 0.155218 1.18532 0.097648 1.09061 0.0583685C0.995888 0.019089 0.894355 -0.00112915 0.791815 -0.00112915C0.689275 -0.00112915 0.587742 0.019089 0.493024 0.0583685C0.398305 0.097648 0.312262 0.155218 0.239815 0.227785C0.167249 0.300231 0.109679 0.386275 0.070399 0.480993C0.0311195 0.575711 0.0109014 0.677245 0.0109014 0.779784C0.0109014 0.882324 0.0311195 0.983858 0.070399 1.07858C0.109679 1.17329 0.167249 1.25934 0.239815 1.33178L4.89581 5.99978L0.227815 10.6558C0.155249 10.7282 0.0976785 10.8143 0.058399 10.909C0.0191195 11.0037 -0.00109863 11.1052 -0.00109863 11.2078C-0.00109863 11.3103 0.0191195 11.4119 0.058399 11.5066C0.0976785 11.6013 0.155249 11.6873 0.227815 11.7598C0.300262 11.8323 0.386305 11.8899 0.481024 11.9292C0.575742 11.9685 0.677275 11.9887 0.779815 11.9887C0.882355 11.9887 0.983888 11.9685 1.07861 11.9292C1.17332 11.8899 1.25937 11.8323 1.33182 11.7598L5.99981 7.10378L10.6558 11.7718C10.7283 11.8443 10.8143 11.9019 10.909 11.9412C11.0037 11.9805 11.1053 12.0007 11.2078 12.0007C11.3104 12.0007 11.4119 11.9805 11.5066 11.9412C11.6013 11.9019 11.6874 11.8443 11.7598 11.7718C11.8324 11.6993 11.8899 11.6133 11.9292 11.5186C11.9685 11.4239 11.9887 11.3223 11.9887 11.2198C11.9887 11.1172 11.9685 11.0157 11.9292 10.921C11.8899 10.8263 11.8324 10.7402 11.7598 10.6678L7.10381 5.99978L11.7718 1.34378C11.8462 1.27113 11.9053 1.18434 11.9457 1.08852C11.986 0.992689 12.0068 0.889761 12.0068 0.785784C12.0068 0.681807 11.986 0.57888 11.9457 0.483054C11.9053 0.387227 11.8462 0.300437 11.7718 0.227785Z"
                  fill="#959595"
                />
              </svg>
            </span>
          </div>
          <div className="modal-body">
            <div className="illustration">
              {loading && <div className="loading"></div>}
              {success && (
                <svg viewBox="0 0 100 100" className="success animate">
                  <filter id="dropshadow" height="100%">
                    <feGaussianBlur
                      in="SourceAlpha"
                      stdDeviation="3"
                      result="blur"
                    />
                    <feFlood
                      floodColor="rgba(76, 175, 80, 1)"
                      floodOpacity="0.5"
                      result="color"
                    />
                    <feComposite
                      in="color"
                      in2="blur"
                      operator="in"
                      result="blur"
                    />
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <circle
                    cx="50"
                    cy="50"
                    r="46.5"
                    fill="none"
                    stroke="rgba(76, 175, 80, 0.5)"
                    strokeWidth="5"
                  />

                  <path
                    d="M67,93 A46.5,46.5 0,1,0 7,32 L43,67 L88,19"
                    fill="none"
                    stroke="rgba(76, 175, 80, 1)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="80 1000"
                    strokeDashoffset="-220"
                    style={{ filter: "url(#dropshadow)" }}
                  />
                </svg>
              )}
            </div>
            {success && (
              <>
                <p className="text-heading">Successful</p>
                <p className="desc">Your recipe has been submitted</p>
              </>
            )}
            {loading && <p className="text-heading">Submitting...</p>}
            {errorResponse && (
              <p className="text-heading error-response">
                Recipe submission unsuccessful
              </p>
            )}
          </div>
          {success && (
            <div className="modal-footer center-column">
              <button
                type="button"
                className="btn__primary"
                onClick={closeModal}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
