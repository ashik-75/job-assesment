function Error({ error }: { error: string }) {
  return (
    <div>
      <div className="max-w-[300px] p-5 mx-auto bg-gray-100 mt-10 rounded">
        <p className="text-rose-500 text-lg font-medium capitalize">{error}</p>
        <p>Please Try again</p>
      </div>
    </div>
  );
}

export default Error;
