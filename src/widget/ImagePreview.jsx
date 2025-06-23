const ImagePreview = ({ srcImg, title, showPreview }) => {
  return (
    <>
      {showPreview && (
        <div className="lightbox">
          <div className="content">
            <img src={srcImg} alt={title} title={title} />
            <a href="javascript:void()" className="close" onClick={() => showPreview(false)}></a>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePreview;
