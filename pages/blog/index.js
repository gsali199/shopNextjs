import Navbar from "../../components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      <h1 style={{color:"gray", textAlign:"center"}}>Welocme To Deqode Shop</h1>
      {data.map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>
            <img src={curElem.image} height="90px" width="90px"/>
            <h2>${curElem.price}</h2>
              <h2>{curElem.title}</h2>
              <Link href={`/blog/${curElem.id}`}>
              <button>View More</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
