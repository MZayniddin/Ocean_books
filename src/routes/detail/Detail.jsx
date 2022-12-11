import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

import c from "./Detail.module.css";

const Detail = () => {
  const [singleBookData, setSingleBookData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/main/v1/products/detail/${id}/`)
      .then((response) => response.json())
      .then((data) => setSingleBookData(data))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(singleBookData);
  return (
    <div className={c["detail"]}>
      <div className="container">
        <div className={c["detail-inner"]}>
          <div className={c["book-img__wrap"]}>
            <img src={singleBookData?.image} alt="Abdurahmon kemayapti" />
          </div>
          <div className={c["book-description"]}>
            <h2 className={c["book-name"]}>{singleBookData?.name}</h2>
            <p className={c["book-desc__text"]}>
              {singleBookData?.description}
            </p>
          </div>
        </div>
        <div className={c["features"]}>
          <div className={c["characteristics"]}>
            <p>
              <strong>Muallif:</strong> {singleBookData?.author?.name}
            </p>
            <p>
              <strong>Til:</strong> {singleBookData?.language}
            </p>
            <p>
              <strong>Kategoriya:</strong> {singleBookData?.category?.[0]?.name}
            </p>
            <p>
              <strong>Chop etilgan yil:</strong> {singleBookData?.year}
            </p>
            <p>
              <strong>Fayl turi:</strong> {singleBookData?.file_type}
            </p>
            <p>
              <strong>Hajmi:</strong> {singleBookData?.size}
              {singleBookData?.size_type}
            </p>
          </div>
          <a
            className={c["download-link"]}
            target="_blank"
            rel="noreferrer"
            href={singleBookData?.file}
            download
          >
            Yuklab olish <FiDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
