import { chakra } from "@chakra-ui/system";
import * as React from "react";
import { AspectRatio, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import ImageUploading, { ImageUploadingPropsType } from "react-images-uploading";
import { SystemIcon } from "../../../../public/icons";

export interface ImageUploaderProps
  extends Omit<ImageUploadingPropsType, "multiple" | "maxNumber"> {}

export const ImageUploader = (props: ImageUploaderProps) => {
  return (
    <ImageUploading {...props}>
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <chakra.div
          __css={{
            width: "100%",
            maxWidth: "320px",
            padding: "14px",
            border: "1px solid",
            borderColor: "gray.400",
            borderRadius: "md",
            background: "white",
          }}>
          {imageList.length === 0 && (
            <AspectRatio
              ratio={290 / 210}
              overflow="hidden"
              borderRadius="4px"
              background="gray.100">
              <chakra.button
                type="button"
                onClick={onImageUpload}
                __css={{
                  display: "flex",
                  flexDirection: "column",
                }}
                {...dragProps}>
                <SystemIcon icon="gallery" size="lg" color="gray.900" />
                <Text mt={2} fontSize="md" color="gray.400">
                  이미지를 등록하세요
                </Text>
              </chakra.button>
            </AspectRatio>
          )}
          {imageList.map((image, index) => (
            <AspectRatio
              key={index}
              ratio={290 / 210}
              overflow="hidden"
              borderRadius="4px"
              cursor="pointer">
              <Image src={image.dataURL} alt="" onClick={() => onImageUpdate(index)} />
            </AspectRatio>
          ))}
        </chakra.div>
      )}
    </ImageUploading>
  );
};
