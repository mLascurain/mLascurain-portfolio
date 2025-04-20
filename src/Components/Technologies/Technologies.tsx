import styles from "./Technologies.module.css";
import "../../index.css";

type ImageSliderProps = {
  images: string[];
  width: string;
  height: string;
  reverse?: boolean;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images, width, height, reverse = false }) => {
  const quantity = images.length;

  return (
    <main className={styles.container}>
      <div
        className={styles.slider}
        style={
          {
            "--width": width,
            "--height": height,
            "--quantity": quantity.toString(),
          } as React.CSSProperties
        }
        {...(reverse ? { reverse: "true" } : {})}
      >
        <div className={styles.list}>
          {images.map((src, index) => (
            <div key={index} className={styles.item} style={{ "--position": index + 1 } as React.CSSProperties}>
              <img src={src} alt={`slider-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ImageSlider;
