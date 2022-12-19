const PageNotFound = () => {
  return (
    <>
      <div
        id="clouds"
        className=".body1"
        style={{
          background: "#33cc99",
          color: "#fff",
          fontFamily: "Open Sans, sans-serif",
          maxHeight: "700px",
          overFlow: "hidden",
        }}
      >
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>
      <div class="c">
        <div class="_404">404</div>
        <hr />
        <div class="_1">این صفحه</div>
        <div class="_2">پیدا نشد</div>
        <a class="btn" href="/">
          برگشت به صفحه اصلی
        </a>
      </div>
    </>
  );
};

export default PageNotFound;
