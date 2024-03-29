import { IModalContainer, ModalBackDrop, ModalContainer, ModalController, ModalWrapper } from "./Modal.style";

export interface IModal {
    width: string;
    height: string;
    children?: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({ width, height, children }) => {
    return (
        <>
            <ModalBackDrop />
            <ModalWrapper width={width}>
                <ModalController width={width}>
                    <img src="/close.svg" alt="" />
                </ModalController>
                <ModalContainer height={height}>{children}</ModalContainer>
            </ModalWrapper>
        </>
    );
};

// import { IModal, ModalWrapper, ModalContainer, ModalItems } from "../feedback/Modal.style";
// import { Button } from "../form/Button";
// import { Text } from "../typography/Text";
// import closeBtn from "/close.svg";

// export const Modal: React.FC<IModal> = ({ padding, gap }) => {
//     return (
//         <>
//             <ModalWrapper>
//                 <img src={closeBtn} alt="close" />
//                 <ModalContainer padding={padding} gap={gap}>
//                     <Text size="m" color="primary" weight="bold">
//                         이메일을 받지 못하셨나요?
//                     </Text>
//                     <ModalItems>
//                         <Text size="s" color="primary" weight="normal">
//                             1. 이메일을 올바르게 입력했는지 다시 확인해 보세요.
//                         </Text>
//                         <Text size="s" color="primary" weight="normal">
//                             2. 스팸함 또는 휴지통을 확인해 보세요.
//                         </Text>
//                         <Text size="s" color="primary" weight="normal">
//                             3. 경우에 따라 메일이 발송되지 않았을 수 있습니다.
//                             <br />
//                             아래 버튼을 눌러 메일을 재발송해 보세요.
//                         </Text>
//                     </ModalItems>
//                     <Button variant="primary" width="20rem" height="4rem">
//                         인증메일 재발송
//                     </Button>
//                 </ModalContainer>
//             </ModalWrapper>
//         </>
//     );
// };
