import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./homeBanner.scss";

import useFetch from "../../../hook/useFetch";
import Img from "../../../conponents/lazyLoadImage/Img";
import ContentWrapper from "../../../conponents/contentWrapper/ContentWrapper";

const HomeBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    // const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            // navigate(`/search/${query}`);
            console.log(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Beta</span>
                    <span className="subTitle">
                        Đặt vé xem phim ngay thôi nào!.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Tìm kiếm phim...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HomeBanner;
