import { Tabs } from 'antd';
import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import dayjs from "dayjs";
import ContentWrapper from "../../../conponents/contentWrapper/ContentWrapper";
import './MovieTheaterComponent.scss';

//class PercentageStat extends React.PureComponent
//ko gọi tới sẽ k render lại giao diện

// function
//https://reactjs.org/docs/react-api.html#reactmemo
//https://stackoverflow.com/questions/43470659/declare-a-functional-component-as-pure

function MovieTheaterComponent(props) {
    const {movieTheaters} = props;
    const handleChildren = (movieTheater) => {
        return <Tabs tabPosition="left" items={movieTheater.lstCumRap?.map((cumRap, index) => {
            return {
                key: index,
                label: (<div style={{width: '300px', display: 'flex'}}>
                    <img style={{objectFit: "scale-down"}} className="mr-2"
                         src={cumRap.hinhAnh}
                         alt={cumRap.hinhAnh}
                         width="50" height="50" />
                    <div><span style={{fontWeight: "bold"}}>{cumRap.tenCumRap}</span>
                        <span className="text-left text-red-400" style={{display:"block", fontSize: "13px"}}>[Chi tiết]</span>
                    </div>
                </div>),
                children: (<div>
                    {
                        // load lịch chiếu phim
                        cumRap.danhSachPhim.map((phim, index) => {
                            return (
                                <Fragment key={phim.maPhim}>
                                    <div className="my-5" style={{display: 'flex'}}>
                                        <div style={{display: 'flex'}}>

                                            <img style={{width: 100, height: 75}} src={phim.hinhAnh} alt={phim.tenPhim}/>
                                            <div className="ml-5">
                                                <span style={{display: 'block'}} className="text-xl text-green-700">{phim.tenPhim}</span>
                                                <span>{cumRap.diaChi}</span>

                                                <div className="mt-3 grid grid-cols-6 gap-6">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-sm text-gray-700 border p-2 radio rounded" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                            {dayjs(lichChieu.ngayChieuGioChieu).format('hh:mm:A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            )
                        })
                    }
                </div>)
            };
        })}
        />
    }

    return (
        <Fragment>
            { movieTheaters &&
                <ContentWrapper className="wrapper-cinema">
                    <div id="title-cinema" className="text-center">
                        <h1>Danh sách cụm rạp</h1>
                    </div>
                    <Tabs id="tab-cinema" tabPosition="left" items={movieTheaters?.map((movieTheater) => {
                        return {
                            label: <img src={movieTheater.logo} alt={movieTheater.logo} width="50" height="50"
                                        style={{borderRadius: '50%'}}/>,
                            key: movieTheater.maHeThongRap,
                            children: handleChildren(movieTheater),
                        };
                    })}/>
                </ContentWrapper>
            }
        </Fragment>
    );
}

export default React.memo(MovieTheaterComponent);