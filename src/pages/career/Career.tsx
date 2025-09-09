/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 9/9/2025
 * @Time 9:30 PM
 */
import "./career.scss";
import img1 from "../../assets/images/image_1.jpg";
import img2 from "../../assets/images/image_2.jpg";

const Career: React.FC = () => {
    return (
        <>
            <section className={"banner"}>
                <div className={"banner__overlay"}>

                </div>
                <div className={"banner__content"}>
                    <div className={"banner__text"}>
                        <p>
                            TUYỂN DỤNG
                        </p>
                        <p>
                            Chúng tôi đang tìm kiếm
                        </p>
                    </div>
                </div>
            </section>

            <section className={"container container-xl"}>
                <div className="reason">
                    <div className="reason__content"></div>
                    <div className="reason__image">
                        <img src={img1} alt="" loading="lazy"/>
                        <img src={img2} alt="" loading="lazy"/>
                    </div>
                </div>
                <div className="reason reason--reverse">
                <div className="reason__content"></div>
                    <div className="reason__image"></div>
                </div>
                <div className="reason">
                    <div className="reason__content"></div>
                    <div className="reason__image"></div>
                </div>
            </section>
        </>
    );
};

export default Career;

// Trong React (CRA, Vite, NextJS…), bạn không thể dùng path tương đối kiểu
//
// <img src="../../assets/images/image_1.jpg" />
//
//
//     như trong HTML thuần, vì Webpack/Vite sẽ bundle lại và không giữ nguyên đường dẫn. Có 3 cách phổ biến để hiển thị ảnh:
//
//     ✅ Cách 1: Import ảnh trong component (khuyên dùng)
// import img1 from "../../assets/images/image_1.jpg";
// import img2 from "../../assets/images/image_2.jpg";
//
// <img src={img1} alt="" loading="lazy" />
// <img src={img2} alt="" loading="lazy" />
//
//
// Webpack/Vite sẽ xử lý và trả về đúng URL cho ảnh.
//
// ✅ Cách 2: Đặt ảnh trong thư mục public/
//
// Nếu bạn để ảnh trong public/images/image_1.jpg, thì gọi trực tiếp như:
//
//     <img src="/images/image_1.jpg" alt="" loading="lazy" />
//
//
// Không cần import, React sẽ load thẳng từ public/.
//
// ✅ Cách 3: Dynamic import (khi render từ mảng)
//
// Ví dụ:
//
//     const images = [
//         require("../../assets/images/image_1.jpg"),
//         require("../../assets/images/image_2.jpg")
//     ];
//
// {images.map((src, idx) => (
//     <img key={idx} src={src} alt="" loading="lazy" />
// ))}
//
//
// 👉 Với code của bạn, nhanh nhất là sửa:
//
//     import img1 from "../../assets/images/image_1.jpg";
// import img2 from "../../assets/images/image_2.jpg";
//
// <img src={img1} alt="" loading="lazy" />
// <img src={img2} alt="" loading="lazy" />
