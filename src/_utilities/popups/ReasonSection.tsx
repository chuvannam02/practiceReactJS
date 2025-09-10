/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 9/10/2025
 * @Time 11:03 PM
 */

interface ReasonSectionProps {
    title: string;
    subtitle: string;
    texts: string[];
    images: string[];
    reverse?: boolean; // để đảo vị trí ảnh/text
}

const ReasonSection: React.FC<ReasonSectionProps> = ({
                                                         title,
                                                         subtitle,
                                                         texts,
                                                         images,
                                                         reverse = false,
                                                     }) => {
    return (
        <div className={`reason ${reverse ? "reason--reverse" : ""}`}>
            <div className="reason__content">
                <p className="reason__sub-title">{subtitle}</p>
                <p className="reason__title">{title}</p>
                <div className="reason__text">
                    {texts.map((t, i) => (
                        <p key={i}>{t}</p>
                    ))}
                </div>
            </div>
            <div className="reason__image">
                {images.map((src, i) => (
                    <img key={i} src={src} alt="" loading="lazy"/>
                ))}
            </div>
        </div>
    );
};

export default ReasonSection;
