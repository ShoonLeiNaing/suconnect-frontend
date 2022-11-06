import { Box } from "@mui/material";
import { useState, FunctionComponent, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop/types";
import { MdCancel } from "react-icons/md";
import { colors } from "../../data/constant";
import getCroppedImg from "../../utils/common/getCroppedImage";
import SmallButton from "../Button/SmallButton";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PaginationButton from "../Stepper/PaginationButton";
import TextEditor from "../TextEditor";
import styles from "./announcement.module.css";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const AnnouncementDetailForm: FunctionComponent<IProps> = ({
  handleNext,
  handleBack,
}) => {
  const [value, setValue] = useState<string>("");
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<any>();
  const [croppedPixels, setCroppedPixels] = useState<Area>();
  const [selectedCroppedImages, setSelectedCroppedImages] = useState<any>([]);
  // const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedPixels(croppedAreaPixels);
      // console.log("hehe");
    },
    []
  );

  const imagePickHandler = async (e: any) => {
    if (e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const selectCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(selectedImage, croppedPixels);
      const temp = [...selectedCroppedImages, croppedImage];
      setSelectedCroppedImages(temp);
      setSelectedImage("");
      setCrop({ x: 0, y: 0 });
      setCroppedPixels({ height: 0, width: 0, x: 0, y: 0 });
    } catch (e) {
      // console.error(e);
    }
  }, [selectedImage, croppedPixels]);

  const removeCroppedImage = (image: any) => {
    const temp = selectedCroppedImages?.filter((item: any) => image !== item);
    setSelectedCroppedImages(temp);
  };

  return (
    <>
      <Box
        className="mx-8 border py-6 px-8 rounded-xl"
        height="77vh"
        overflow="scroll"
      >
        <Box className="flex">
          <Box className="flex flex-col gap-8" maxWidth="400px">
            <Box>
              <InputLabel label="Announcement Title" />
              <DynamicInput
                value={value}
                setValue={setValue}
                placeholder="Type title here"
              />
            </Box>
            <Box height="250px">
              <InputLabel label="Announcement Title" />
              <TextEditor />
            </Box>
            <Box>
              <InputLabel label="Upload images" />
              <Box position="relative">
                <img
                  className={styles.image_upload_avatar}
                  src="/images/upload.svg"
                  alt="avatar"
                />
                <input
                  onChange={imagePickHandler}
                  style={{
                    opacity: "0",
                    position: "absolute",
                    top: "0",
                    width: "50px",
                    height: "50px",
                  }}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                />
              </Box>
              {selectedImage && (
                <Box>
                  <Box
                    marginY="20px"
                    position="relative"
                    width="400px"
                    height="225px"
                  >
                    <Cropper
                      image={selectedImage}
                      crop={crop}
                      aspect={16 / 9}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                    />
                  </Box>
                  <Box display="flex" justifyContent="flex-end">
                    <SmallButton
                      customWidth="80px"
                      text="Crop"
                      onClickHandler={selectCroppedImage}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
          <Box
            className="mx-16"
            display="flex"
            flexWrap="wrap"
            gap="20px"
            alignItems="flex-start"
            height="fit-content"
            // columnGap="20px"
            // gridTemplateColumns="auto auto"
            color="black"
          >
            {selectedCroppedImages?.map((image: any) => (
              <Box position="relative">
                <Box
                  position="absolute"
                  right={0}
                  marginTop="-17px"
                  marginRight="-10px"
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => removeCroppedImage(image)}
                >
                  <MdCancel
                    fontSize="24px"
                    color={colors.secondaryColors.red.red1}
                  />
                </Box>
                <img
                  key={image}
                  src={image}
                  alt="cropped"
                  className={styles.cropped_img}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="mx-8 my-3 flex justify-end">
        <PaginationButton {...{ handleNext, showPrevious: false }} />
      </Box>
    </>
  );
};

export default AnnouncementDetailForm;
