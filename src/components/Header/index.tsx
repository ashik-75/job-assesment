import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-5 bg-slate-50 sticky top-0 left-0 z-50">
      <div className=" max-w-7xl mx-auto flex items-center gap-5">
        <div>
          <Link to={"/"}>
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Link>
        </div>

        <div></div>
      </div>
    </header>
  );
}

export default Header;
