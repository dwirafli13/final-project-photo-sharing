import React from "react";
import useCreatePost from "../../hooks/useCreatePost";

const CreatePostModal = () => {
  const {
    setCaption,
    handleCreatePost,
    imagePreview,
    successMessage,
    handleImageChange,
  } = useCreatePost();
  return (
    <>
      {/* Modal Content Create Post */}
      <div
        className="modal fade"
        id="createPostModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title fs-5 ms-2">Create Post</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center">
              <input
                type="file"
                name="image"
                formEncType="multipart/form-data"
                onChange={handleImageChange}
                // accepts="image/*"
              />
              {/* <input
                type="text"
                className="form-control mb-2"
                id="exampleFormControlInput6"
                value={imgUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                disabled
              />
              <button onClick={handleUpload} encType="multipart/form-data">
                Upload
              </button> */}
              {!!successMessage.length && (
                <p className="alert alert-success">{successMessage}</p>
              )}
              {/* <input
            type="text"
            className="form-control mb-2"
            placeholder="https//yourimage.com/yourimage.jpg"
            onChange={(e) => setImageUrl(e.target.value)}
          /> */}
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Your Caption"
                onChange={(e) => setCaption(e.target.value)}
              />
              <img
                src={imagePreview}
                className="img-fluid mb-2"
                width={200}
                height={200}
              />
              <button
                onClick={handleCreatePost}
                className="btn btn-success w-100"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Content Create Post*/}
    </>
  );
};

export default CreatePostModal;
