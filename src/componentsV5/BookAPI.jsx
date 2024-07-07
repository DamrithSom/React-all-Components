import React from "react";

const BookAPI = (props) => {
  const urlAPI = "https://www.googleapis.com/books/v1/volumes?q=flowers";
  const [book, setBook] = React.useState([]);
  const [isLogding, setIslogding] = React.useState(true);
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    const foreachBook = async () => {
      const respone = await fetch(urlAPI);
      const data = await respone.json();
      setBook(data.items);
      console.log(data);
    };
    try {
    } catch (error) {
      console.log(error);
    }
    setIslogding(false);
    foreachBook();
  }, []);

  const handler = (e) => {
    setSearch(e.target.value);
  };
  const handlerClick = async () => {
    const respone = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    const data = await respone.json();
    setBook(data.items);
  };
  return (
    <div>
      {book.length === 0 ? (
        <h1 className="flex justify-center items-center mt-60 ml-14">
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/a72e24d0a7bad2b3cf2713bf0745f569-1663611474/Loading-Indicator6/remove-background-from-a-gif.gif"
            alt=""
          />
        </h1>
      ) : (
        <div className="bg-gray-900">
          {" "}
          (
          <div className="w-5/6 m-auto p-4 flex justify-center items-center space-x-2">
            <input
              onChange={handler}
              className="p-2 w-64 outline-none rounded-lg bg-gray-950 text-white placeholder-gray-500 shadow-lg"
              type="text"
              placeholder="Search ..."
            />
            <button
              onClick={handlerClick}
              className="p-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition duration-200"
            >
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 w-5/6 m-auto">
            {book.map((n) => {
              const { id, volumeInfo } = n;
              const {
                title,
                publishedDate,
                description,
                imageLinks,
                previewLink,
              } = volumeInfo;
              return (
                <div
                  key={id}
                  className="bg-zinc-500 g-white p-6 rounded-lg shadow-lg max-w-xs hover:shadow-xl transition duration-300 "
                >
                  <img
                    src={imageLinks?.thumbnail}
                    alt={title}
                    className="w-full h-auto rounded-md mb-4"
                  />
                  <h1 className="text-xl font-bold mb-2">{title}</h1>
                  <p className="text-gray-600 mb-2">{publishedDate}</p>
                  <p className="text-gray-800 mb-4 overflow-y-auto max-h-32">
                    {description}
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    <a href={previewLink}>View Book</a>
                  </button>
                </div>
              );
            })}
          </div>
          )
        </div>
      )}
    </div>
  );
};

export default BookAPI;
