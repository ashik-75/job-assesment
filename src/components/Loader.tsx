function Loader() {
  return (
    <div className="max-w-sm space-y-10">
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className="space-y-3">
          <div className="bg-gray-100 h-[80px] rounded-xl animate-pulse"></div>
          <div className="h-5 bg-gray-100 rounded-xl animate-pulse"></div>
          <div className="h-5 bg-gray-100 rounded-xl animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default Loader;
