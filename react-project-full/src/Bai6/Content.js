import { useEffect, useLayoutEffect, useState } from 'react';

function Content() {
    const [content, setContent] = useState(
        'SMS Baden là một thiết giáp hạm thuộc lớp Bayern được Hải quân Đế quốc Đức chế tạo trong Chiến tranh Thế giới thứ nhất. Được hạ thủy vào tháng 10 năm 1915 và hoàn tất vào tháng 3 năm 1917, nó là chiếc thiết giáp hạm Đức cuối cùng được hoàn tất trong chiến tranh, khi hai con tàu chị em cùng lớp Sachsen và Württemberg chưa hoàn tất khi chiến tranh kết thúc. Con tàu trang bị tám khẩu pháo 38 cm (15 in) trên bốn tháp pháo nòng đôi, có trọng lượng choán nước 32.200 tấn (31.700 tấn Anh; 35.500 tấn Mỹ) khi chất đầy tải trọng chiến đấu, và đạt đến tốc độ tối đa 21 hải lý trên giờ (39 km/h; 24 mph). Cùng với con tàu chị em Bayern, Baden là chiếc tàu chiến lớn nhất và trang bị mạnh nhất từng được Hải quân Đế quốc Đức chế tạo. [ Đọc tiếp ]',
    );

    useEffect(() => {
        const data = 'Nội dung khóa học là: .....';
        setContent(data);
    }, []);
    useLayoutEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div style={{ height: 3000 }}>
            <h1>{content}</h1>
        </div>
    );
}
// useEf: return reacte element >> giao diện >> gọi callback >> setContent >> render lại >> return lại element >> giao diện
// useLayoutEf: return react element >> gọi callback >> setcontent > render lại > return > giao diện
export default Content;
