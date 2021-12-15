import Navbar from "../../components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { id, title, price, image, description, rating } = data;

  return (
    <>
      <Navbar />
      <div key={id} className="ssr-styles">
            <h3>{id}</h3>
            <img src={image} height="90px" width="90px"/>
            <h2>${price}</h2>
              <h2>{title}</h2>
              <h2>Customer rating - {rating.rate}/5</h2>
              <h5>{description}</h5>
          </div>
    </>
  );
};

export default myData;

// What will happend if the file is already exist in our folder and we tried to call the pages dynamic route ?

// Which page will be serve by the next.js app?

// getStaticPaths defines which pages next.js has to render when exporting.
// It is used to generate all available dynamic routes.
