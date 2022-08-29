// import {
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogContent,
//   AlertDialogOverlay,
//   Box,
//   Text,
//   Icon,
// } from "@chakra-ui/react";
// import { FunctionComponent } from "react";
// import { BsExclamationTriangleFill, BsPlusCircleFill } from "react-icons/bs";
// import { colors } from "../../data/constant";
// import AddButton from "../SubButton/AddButton";
// import RemoveButton from "../SubButton/RemoveButton";

// interface IProps {
//   type: string;
//   isOpen: boolean;
//   onClose: () => void;
//   cancelRef: any;
//   color?: string;
// }

// const Popup: FunctionComponent<IProps> = ({
//   type,
//   isOpen,
//   onClose,
//   cancelRef,
//   color,
// }) => {
//   return (
//     <AlertDialog
//       isOpen={isOpen}
//       leastDestructiveRef={cancelRef}
//       onClose={onClose}
//       size="lg"
//     >
//       <AlertDialogOverlay>
//         <AlertDialogContent
//           py="20px"
//           px="15px"
//           borderRadius="10px"
//           boxShadow="0px 6px 40px 0px rgba(0, 0, 0, 0.15);"
//         >
//           <AlertDialogBody>
//             <Box display="flex" alignItems="flex-start">
//               {type === "remove" ? (
//                 <>
//                   <Icon
//                     mt={2}
//                     as={BsExclamationTriangleFill}
//                     color={colors.secondaryColors.red.red1}
//                     fontSize="40px"
//                   />
//                   <Box ml="8">
//                     <Text
//                       color={colors.secondaryColors.red.red1}
//                       fontSize="20px"
//                       fontWeight="semibold"
//                     >
//                       Are you sure you want to remove ?
//                     </Text>
//                     <Text mt={2} mb={4}>
//                       The distribution of algal species has been fairly well
//                       studied since the founding.
//                     </Text>
//                   </Box>
//                 </>
//               ) : (
//                 <>
//                   <Icon
//                     mt={2}
//                     as={BsPlusCircleFill}
//                     color={color}
//                     fontSize="40px"
//                   />
//                   <Box ml="8">
//                     <Text color={color} fontSize="20px" fontWeight="semibold">
//                       Are you sure you want to add ?
//                     </Text>
//                     <Text mt={2} mb={4}>
//                       The distribution of algal species has been fairly well
//                       studied since the founding.
//                     </Text>
//                   </Box>
//                 </>
//               )}
//             </Box>
//           </AlertDialogBody>

//           <AlertDialogFooter cursor="pointer">
//             {type === "remove" ? <RemoveButton /> : <AddButton color={color} />}
//             <Text ml="6" fontWeight={500} color={colors.grey.grey2}>
//               Cancel
//             </Text>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialogOverlay>
//     </AlertDialog>
//   );
// };

// export default Popup;

const Popup = () => {
  return <div>popup</div>;
};

export default Popup;
