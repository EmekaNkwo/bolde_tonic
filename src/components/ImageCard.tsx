import Image from "next/image";
import React from "react";

const ImageCard = ({
  columnImg,
  title,
  subTitle,
  imageUrl,
}: {
  columnImg?: boolean;
  title: string;
  subTitle: string;
  imageUrl: string;
}) => {
  return (
    <>
      {columnImg ? (
        <div className="flex flex-col items-start gap-3">
          <Image src={imageUrl} width={250} height={250} alt="team_img" />
          <span className="font-manrope font-[300] text-[18px]">{title}</span>
          <span className="text-greyColor text-[14px]">{subTitle}</span>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <Image src={imageUrl} width={90} height={90} alt="team_img" />
          <div className="flex flex-col gap-2">
            <span className="font-manrope font-[300] text-[18px]">{title}</span>
            <span className="text-greyColor text-[14px]">{subTitle}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
