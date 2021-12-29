import DevDotTo from "react-devdotto";

function DevBlog(userName) {
    return (
      <div class="flex flex-wrap space-x-4 justify-center">
        <div className="m-5 p-2.5 justify-center">
        <DevDotTo username={userName.userName} />
        </div>
      </div>
    );
  }
  
  export default DevBlog;