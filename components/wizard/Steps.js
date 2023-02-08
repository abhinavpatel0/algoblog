
  import RecapBar from "./RecapBar";
  const constantData = {
    name: "abhinav",
    blogTitle: "lololol",
    footerText: "baskarab"
  };

  export function Step1({
    posts,
    data = constantData,
    setData,
    page,
    handleInput,
    onClickNext,
  }) {
    return (
      <div>
        {page}
        <RecapBar
          data={data}
          setData={setData}
          handleInput={handleInput}
          onClickNext={onClickNext}
        />
      </div>
    );
  }

